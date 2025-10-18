(function () {
  const STORAGE_KEY = "greenfundr.cookie-preferences.v1";
  const COOKIE_NAME = "greenfundr_cookie_preferences";
  const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
  const POSTHOG_KEY = (window.__POSTHOG_KEY__ || "").trim();
  const POSTHOG_HOST = (window.__POSTHOG_HOST__ || "https://eu.posthog.com").trim();
  const POSTHOG_CONFIGURED = Boolean(POSTHOG_KEY) && POSTHOG_KEY !== "CHANGE_ME";

  let banner;
  let analyticsToggle;
  let acceptAllButton;
  let saveButton;
  let rejectButton;
  let manageButton;
  let posthogInitPromise = null;
  let lastFocusedElement = null;

  const storageAvailable = (() => {
    try {
      const testKey = "__consent_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      console.warn("Local storage is not available; consent will be stored in cookies only.");
      return false;
    }
  })();

  function setFooterYear() {
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
      footerYear.textContent = new Date().getFullYear().toString();
    }
  }

  function safeParseJson(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      console.warn("Unable to parse stored cookie consent", error);
      return null;
    }
  }

  function readStoredConsent() {
    let stored = null;

    if (storageAvailable) {
      stored = safeParseJson(window.localStorage.getItem(STORAGE_KEY));
    }

    if (!stored) {
      const match = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`));
      if (match) {
        const [, value] = match.split("=");
        stored = safeParseJson(decodeURIComponent(value));
      }
    }

    if (stored && typeof stored === "object") {
      return {
        version: stored.version || 1,
        necessary: true,
        analytics: Boolean(stored.analytics),
        updatedAt: stored.updatedAt || new Date().toISOString(),
      };
    }

    return null;
  }

  function persistConsent(consent) {
    const toStore = JSON.stringify(consent);

    if (storageAvailable) {
      try {
        window.localStorage.setItem(STORAGE_KEY, toStore);
      } catch (error) {
        console.warn("Unable to persist consent to local storage", error);
      }
    }

    try {
      document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
        toStore
      )};path=/;max-age=${ONE_YEAR_IN_SECONDS};SameSite=Lax`;
    } catch (error) {
      console.warn("Unable to persist consent cookie", error);
    }
  }

  function buildConsent(preferences) {
    return {
      version: 1,
      necessary: true,
      analytics: Boolean(preferences.analytics),
      updatedAt: new Date().toISOString(),
    };
  }

  function showBanner(options = {}) {
    if (!banner) return;
    const { triggeredByManage = false } = options;
    lastFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    banner.hidden = false;
    banner.setAttribute("aria-hidden", "false");
    banner.classList.add("cookie-banner--visible");
    banner.focus({ preventScroll: true });
    if (manageButton && triggeredByManage) {
      manageButton.setAttribute("aria-expanded", "true");
    }
  }

  function hideBanner(options = {}) {
    if (!banner) return;
    const { restoreFocus = true } = options;
    banner.setAttribute("aria-hidden", "true");
    banner.classList.remove("cookie-banner--visible");
    window.setTimeout(() => {
      banner.hidden = true;
    }, 250);
    if (manageButton) {
      manageButton.setAttribute("aria-expanded", "false");
    }
    if (restoreFocus) {
      const focusTarget =
        lastFocusedElement && document.contains(lastFocusedElement)
          ? lastFocusedElement
          : manageButton;
      focusTarget?.focus({ preventScroll: true });
    }
  }

  function ensureAnalyticsToggleState(consent) {
    if (!analyticsToggle) return;
    analyticsToggle.checked = Boolean(consent?.analytics);
  }

  function initialisePosthog(resolve, reject) {
    if (!window.posthog) {
      reject(new Error("PostHog is unavailable after loading the library."));
      return;
    }

    if (!window.posthog.__isInitialized) {
      window.posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        autocapture: true,
        capture_pageview: false,
        persistence: "localStorage",
      });
      window.posthog.__isInitialized = true;
    }

    resolve(window.posthog);
  }

  function loadPosthog() {
    if (!POSTHOG_CONFIGURED) {
      return Promise.reject(new Error("PostHog key is not configured."));
    }

    if (posthogInitPromise) {
      return posthogInitPromise;
    }

    posthogInitPromise = new Promise((resolve, reject) => {
      if (window.posthog && window.posthog.__isInitialized) {
        resolve(window.posthog);
        return;
      }

      const existingLoader = document.querySelector("script[data-posthog-loader]");
      if (existingLoader) {
        existingLoader.addEventListener(
          "load",
          () => initialisePosthog(resolve, reject),
          { once: true }
        );
        existingLoader.addEventListener(
          "error",
          () => reject(new Error("PostHog failed to load.")),
          { once: true }
        );
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.posthog.com/posthog.js";
      script.async = true;
      script.setAttribute("data-posthog-loader", "true");
      script.onload = () => initialisePosthog(resolve, reject);
      script.onerror = () => reject(new Error("PostHog failed to load."));
      document.head.appendChild(script);
    });

    return posthogInitPromise;
  }

  function enableAnalytics() {
    if (!POSTHOG_CONFIGURED) {
      console.warn(
        "PostHog analytics consent granted but no API key is configured."
      );
      return;
    }

    loadPosthog()
      .then((posthogInstance) => {
        if (typeof posthogInstance.opt_in_capturing === "function") {
          posthogInstance.opt_in_capturing();
        }

        if (!posthogInstance.__initialPageviewSent) {
          posthogInstance.capture("$pageview", {
            path: window.location.pathname,
            title: document.title,
          });
          posthogInstance.__initialPageviewSent = true;
        }

        if (!posthogInstance.__consentTrackingSent) {
          posthogInstance.capture("analytics_consent_granted", {
            url: window.location.href,
            capturedAt: new Date().toISOString(),
          });
          posthogInstance.__consentTrackingSent = true;
        }
      })
      .catch((error) => {
        console.warn("PostHog initialisation failed", error);
      });
  }

  function disableAnalytics() {
    if (window.posthog && typeof window.posthog.opt_out_capturing === "function") {
      window.posthog.opt_out_capturing();
    }
  }

  function applyConsent(consent) {
    if (!consent) return;

    if (consent.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
  }

  function persistAndApplyConsent(consent) {
    persistConsent(consent);
    applyConsent(consent);
  }

  function handleAcceptAll() {
    const consent = buildConsent({ analytics: true });
    persistAndApplyConsent(consent);
    hideBanner();
  }

  function handleSavePreferences() {
    const consent = buildConsent({
      analytics: analyticsToggle ? analyticsToggle.checked : false,
    });
    persistAndApplyConsent(consent);
    hideBanner();
  }

  function handleRejectAnalytics() {
    const consent = buildConsent({ analytics: false });
    persistAndApplyConsent(consent);
    hideBanner();
  }

  function initConsent() {
    const consent = readStoredConsent();

    if (consent) {
      ensureAnalyticsToggleState(consent);
      applyConsent(consent);
    } else {
      ensureAnalyticsToggleState({ analytics: false });
      showBanner();
    }
  }

  function setupEventListeners() {
    acceptAllButton?.addEventListener("click", handleAcceptAll);
    saveButton?.addEventListener("click", handleSavePreferences);
    rejectButton?.addEventListener("click", handleRejectAnalytics);

    manageButton?.addEventListener("click", () => {
      const consent = readStoredConsent();
      ensureAnalyticsToggleState(consent || { analytics: false });
      showBanner({ triggeredByManage: true });
    });

    banner?.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        hideBanner();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    banner = document.getElementById("cookie-banner");
    analyticsToggle = document.getElementById("analytics-toggle");
    acceptAllButton = document.getElementById("accept-all");
    saveButton = document.getElementById("save-preferences");
    rejectButton = document.getElementById("reject-analytics");
    manageButton = document.getElementById("manage-cookies");

    if (!banner) {
      console.warn("Cookie banner element not found. Consent controls unavailable.");
      return;
    }

    setFooterYear();
    setupEventListeners();
    initConsent();
  });
})();
