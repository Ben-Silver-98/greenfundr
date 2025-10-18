import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const SUPPORTED_MODES = ["subscription", "payment"] as const;

type SupportedMode = (typeof SUPPORTED_MODES)[number];

const stripeVersion: Stripe.LatestApiVersion = "2024-06-20";

function getBaseUrl() {
  const headerList = headers();
  const origin = headerList.get("origin");
  if (origin) {
    return origin;
  }

  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const host = headerList.get("x-forwarded-host");

  if (host) {
    return `${protocol}://${host}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const checkoutMode = (process.env.STRIPE_CHECKOUT_MODE ?? "subscription").toLowerCase();

  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe secret key missing. Set STRIPE_SECRET_KEY in your environment." },
      { status: 500 },
    );
  }

  if (!priceId) {
    return NextResponse.json(
      { error: "Stripe price ID missing. Set STRIPE_PRICE_ID in your environment." },
      { status: 500 },
    );
  }

  if (!SUPPORTED_MODES.includes(checkoutMode as SupportedMode)) {
    return NextResponse.json(
      {
        error: `Unsupported checkout mode "${checkoutMode}". Use one of: ${SUPPORTED_MODES.join(", ")}.`,
      },
      { status: 400 },
    );
  }

  const stripe = new Stripe(secretKey, { apiVersion: stripeVersion });

  try {
    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: checkoutMode as SupportedMode,
      success_url: `${baseUrl}/pricing?checkout=success`,
      cancel_url: `${baseUrl}/pricing?checkout=cancelled`,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json(
        {
          error: "Stripe did not return a checkout URL. Verify your price configuration and try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Stripe.errors.StripeError
        ? error.message
        : error instanceof Error
          ? error.message
          : "Unexpected server error";

    return NextResponse.json(
      {
        error: `Unable to create checkout session: ${message}`,
      },
      { status: 500 },
    );
  }
}
