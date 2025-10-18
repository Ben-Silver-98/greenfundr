"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const STATUS_STYLES: Record<string, string> = {
  success: "bg-emerald-500/10 text-emerald-200 border-emerald-500/40",
  cancelled: "bg-slate-900/60 text-slate-200 border-slate-700",
  error: "bg-rose-500/10 text-rose-200 border-rose-500/40",
};

export function CheckoutStatusBanner() {
  const searchParams = useSearchParams();

  const status = useMemo(() => {
    const value = searchParams.get("checkout");
    return value ?? undefined;
  }, [searchParams]);

  if (!status) {
    return null;
  }

  let title = "";
  let description = "";
  let style = STATUS_STYLES.success;

  switch (status) {
    case "success":
      title = "Checkout successful";
      description = "We emailed a confirmation and will activate your workspace shortly.";
      style = STATUS_STYLES.success;
      break;
    case "cancelled":
      title = "Checkout cancelled";
      description = "You exited checkout. Update your details and try again when you’re ready.";
      style = STATUS_STYLES.cancelled;
      break;
    case "error":
      title = "Something went wrong";
      description = "We couldn’t confirm your checkout. Please try again or contact support.";
      style = STATUS_STYLES.error;
      break;
    default:
      return null;
  }

  return (
    <div className={`w-full rounded-2xl border px-6 py-4 text-sm ${style}`}>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-xs opacity-80">{description}</p>
    </div>
  );
}
