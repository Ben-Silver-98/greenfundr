# Greenfundr web

Marketing and pricing site for Greenfundr built with Next.js and Tailwind CSS.
The experience includes a hero-driven home page, pricing plan with Stripe Checkout, and legal policy pages that populate the global footer.

## Prerequisites

- Node.js 18.18+
- npm 9+
- Stripe account with products/prices configured in test mode

## Setup

```bash
npm install
cp .env.example .env.local
```

Update `.env.local` with your Stripe credentials:

- `STRIPE_SECRET_KEY` – test mode secret key (starts with `sk_test_`)
- `STRIPE_PRICE_ID` – price identifier you want to charge during checkout (e.g. `price_123`)
- `STRIPE_CHECKOUT_MODE` – optional, defaults to `subscription`. Set to `payment` if you are using one-time prices.
- `NEXT_PUBLIC_SITE_URL` – optional base URL used when request headers cannot determine the origin (e.g. background jobs)

## Development

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Stripe test cards

The CTA on the pricing page launches Stripe Checkout in test mode. Use a Stripe test card such as `4242 4242 4242 4242`, any future expiration date, any CVC, and any billing details to complete the flow.
