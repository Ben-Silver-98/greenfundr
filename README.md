# Greenfundr Stripe Subscription Service

This service provides Stripe Checkout, Stripe Tax, billing portal access, webhook-driven provisioning, and refund tooling for Greenfundr tenants. It supports a 14-day money-back guarantee by empowering both customers (through the Stripe customer portal) and administrators (through a dedicated refund endpoint).

## Features

- **Checkout sessions** for £500/month and £5,000/year subscriptions.
- **Stripe Tax & VAT collection** via automatic tax, address collection, and tax ID collection during checkout.
- **Customer billing portal** so customers can manage subscriptions, billing details, and initiate refunds within 14 days.
- **Webhook processing** for `checkout.session.completed`, `customer.subscription.updated`, and `customer.subscription.deleted` to synchronise tenant access state in near real time.
- **Admin refund endpoint** for support-initiated refunds (14-day money-back guarantee).

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create your environment file**
   ```bash
   cp .env.example .env
   ```
   Populate the secrets from your Stripe account and application URLs.

3. **Provision products and prices**
   Ensure your Stripe account has the required products and prices:
   ```bash
   npm run stripe:setup
   ```
   Copy the generated price identifiers into your `.env` file (`STRIPE_PRICE_MONTHLY`, `STRIPE_PRICE_YEARLY`).

4. **Expose webhooks**
   When running locally, expose the webhook endpoint and configure Stripe:
   ```bash
   stripe listen --forward-to localhost:3000/webhooks/stripe
   ```

5. **Run the service**
   ```bash
   npm start
   ```

The application listens on `PORT` (default `3000`).

## API Overview

### `POST /api/checkout/session`
Creates a Stripe Checkout session. Request body:

```json
{
  "tenantId": "tenant_123",
  "plan": "monthly",
  "successUrl": "https://app.example.com/stripe/success",
  "cancelUrl": "https://app.example.com/stripe/cancel"
}
```

- `plan` may be `monthly` or `annual`. Alternatively, provide `priceId` directly.
- Returns `{ "sessionId": "cs_...", "url": "https://checkout.stripe.com/..." }`.
- Collects billing address, VAT information, and enables automatic tax calculation.

### `POST /api/customer-portal/session`
Generates a customer billing portal session so the customer can manage their subscription (upgrade, cancel, update payment methods, or request a refund during the 14-day window).

```json
{
  "tenantId": "tenant_123",
  "returnUrl": "https://app.example.com/dashboard"
}
```

Returns `{ "url": "https://billing.stripe.com/..." }`.

### `POST /api/admin/refund`
Processes a refund (full or partial). Requires the `x-admin-secret` header to match `ADMIN_API_KEY`.

Headers:
```
x-admin-secret: super-secret-admin-token
```

Body:
```json
{
  "paymentIntentId": "pi_123",
  "amount": 50000,
  "reason": "requested_by_customer"
}
```

- `amount` is optional and expressed in the smallest currency unit (pence for GBP).
- You may provide `chargeId` instead of `paymentIntentId`.

### `GET /api/admin/tenants/:tenantId/subscription`
Returns the subscription state tracked by the service for a tenant (admin access required).

### `GET /health`
Simple health/status endpoint.

## Webhook Handling & Provisioning

Configure the Stripe webhook endpoint to point to:
```
POST /webhooks/stripe
```

The handler verifies payloads with `STRIPE_WEBHOOK_SECRET` and processes:

- `checkout.session.completed` — Activates the tenant within seconds once payment succeeds, provisioning access through `tenantProvisioning.enableTenantAccess`.
- `customer.subscription.updated` — Keeps subscription metadata fresh (renewals, plan changes, payment status) and toggles access based on the Stripe subscription status.
- `customer.subscription.deleted` — Immediately revokes tenant access when the customer cancels or the subscription is terminated.

All tenant subscription state is stored in `data/subscriptions.json`. Replace this with durable storage (database) for production deployments.

## 14-Day Money-Back Guarantee

- **Customer experience**: The customer billing portal allows subscribers to cancel, update payment methods, and request refunds that comply with your 14-day guarantee without requiring support intervention.
- **Support operations**: The admin refund endpoint provides a manual fallback for support staff to fulfil refund requests quickly. Supply either a `paymentIntentId` or `chargeId` and (optionally) `amount` for partial refunds.

## Testing Tips (Stripe Test Mode)

1. Run the application locally with test credentials.
2. Use `npm run stripe:setup` to provision prices on your test account.
3. Create a checkout session (`POST /api/checkout/session`) and visit the returned URL.
4. Complete payment with test cards (e.g. `4242 4242 4242 4242`).
5. Observe that `/api/admin/tenants/:tenantId/subscription` reflects `isActive: true` within seconds of checkout completion.
6. Cancel the subscription from the billing portal or Stripe dashboard — the webhook will update the tenant state to `isActive: false`.
7. Issue a refund via the admin endpoint or billing portal and confirm the event appears in the Stripe dashboard.

## Extending for Production

- Swap the file-based store with a database or tenant management service.
- Integrate the provisioning hooks (`tenantProvisioning.js`) with your platform’s auth/feature toggles.
- Configure Stripe Tax fully (jurisdictions, registration, etc.) within the Stripe dashboard.
- Restrict the admin API via your existing admin authentication/authorisation stack.
# Greenfundr marketing site

This repository contains the Greenfundr public marketing experience and pricing flow.
The site is implemented as a Next.js application inside [`/web`](./web) and includes:

- A climate-focused home page that outlines the Greenfundr value proposition.
- A pricing page with Stripe Checkout integration running in test mode.
- Legal pages for Terms of Service, Privacy Policy, and Refund Policy referenced in the site footer.

Refer to the [`/web/README.md`](./web/README.md) for setup instructions and environment configuration.
