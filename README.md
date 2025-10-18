# Greenfundr

This repository currently tracks infrastructure and deployment planning for the upcoming Greenfundr platform.

- [Deployment guide](docs/DEPLOYMENT.md)
Greenfundr is an experimental landing page for a climate-focused funding platform. The project now ships with EU-hosted PostHog analytics that only activates after a visitor provides consent through a GDPR-compliant cookie banner.

## Features

- **PostHog analytics with EU residency** – The PostHog JavaScript SDK is loaded on demand from `https://eu.posthog.com` after consent for analytics cookies is granted.
- **Granular cookie consent** – Visitors can opt in or out of analytics cookies while strictly necessary cookies remain always-on. Preferences are stored in both cookies and `localStorage` for one year.
- **Consent management** – A persistent "Cookie preferences" button lets visitors revisit and update their choices at any time. Analytics capturing automatically respects the saved preferences.

## Getting started

1. Update the PostHog credentials in [`scripts/config.js`](scripts/config.js):
   ```js
   window.__POSTHOG_KEY__ = "YOUR_POSTHOG_PROJECT_API_KEY";
   window.__POSTHOG_HOST__ = "https://eu.posthog.com"; // Use the EU residency cluster by default
   ```
2. Serve the site using any static file server or simply open `index.html` in your browser. Example using `serve`:
   ```bash
   npx serve .
   ```
3. Accept analytics cookies in the on-page banner. Events such as `$pageview` and `analytics_consent_granted` will begin flowing to your PostHog project once consent is provided.

## Cookie consent behaviour

- The banner appears on the first visit (or whenever no saved preferences are found).
- Strictly necessary cookies cannot be disabled. Analytics cookies are disabled by default.
- Preferences persist across visits for one year in both a first-party cookie and `localStorage`.
- Analytics collection is immediately paused if a visitor revokes consent.

## Project structure

```
├── index.html          # Landing page markup and consent banner
├── styles.css          # Global styles for the site and consent UI
├── scripts
│   ├── app.js          # Consent logic and PostHog integration
│   └── config.js       # PostHog configuration (API key + host)
└── .gitignore
```

Feel free to adapt the markup, styles, or analytics events to fit your product needs.
