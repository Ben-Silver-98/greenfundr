# Greenfundr

A Next.js 14 application that demonstrates passwordless authentication with Clerk, a multi-tenant data model,
and subscription-aware route protection. Users sign in via magic link and are placed into a tenant workspace
that is created on their first successful authentication.

## Features

- 🔐 **Clerk passwordless auth** – Magic-link (email) sign-in/sign-up with prebuilt Clerk components.
- 👥 **Tenant + membership model** – Prisma-backed `Tenant` and `UserTenant` tables map Clerk user IDs to
  workspaces.
- ✅ **Automatic tenant provisioning** – A tenant row (and owner membership) is created the first time a user logs in.
- 🚫 **Protected routes** – Middleware enforces authentication; server components double-check the Clerk session.
- 💳 **Subscription gating placeholder** – Protected pages redirect to `/subscription-required` unless the tenant
  `subscriptionIsActive` flag is `true` (stand-in until Stripe webhooks arrive).

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your Clerk keys:

```bash
cp .env.example .env
```

Required variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL` (defaults to the bundled SQLite database)

> ⚠️ Enable the **Email magic link** strategy for your application in the Clerk Dashboard so that users are
> presented with passwordless auth.

### 3. Generate the Prisma client & run migrations

```bash
npx prisma generate
npx prisma migrate deploy
```

An empty SQLite database will be created at `prisma/dev.db` the first time you run migrations.

### 4. Start the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to access the landing page.

## Authentication & tenancy flow

1. Visitors sign in/sign up at `/sign-in` or `/sign-up` (Clerk hosted UI components).
2. Successfully authenticated users are redirected to `/dashboard`.
3. The first time Clerk sends a user ID to the app, we create:
   - A `Tenant` row named “Personal Workspace” with `subscriptionIsActive = true`.
   - A `UserTenant` row linking the Clerk user to that tenant as `OWNER`.
4. `middleware.ts` ensures `/dashboard` and `/settings` are accessible only to authenticated users.
5. `app/(protected)/layout.tsx` re-validates the Clerk session server-side and checks the tenant’s
   `subscriptionIsActive` flag. When the flag is `false`, the user is redirected to `/subscription-required`.

You can simulate a lapsed subscription by running the following in the Prisma Client shell:

```bash
npx prisma db execute --script "UPDATE Tenant SET subscriptionIsActive = 0;"
```

Returning to the app will now send authenticated users to the gated page until the flag is toggled back.

## Project structure

```
app/
  layout.tsx                # Root layout, wraps pages in <ClerkProvider>
  page.tsx                  # Public landing page
  (auth)/                   # Sign-in and sign-up routes powered by Clerk
  (protected)/              # Authenticated routes (dashboard, settings)
  subscription-required/    # Subscription gating notice
components/
  protected-shell.tsx       # Authenticated shell layout with navigation + sign out
lib/
  db.ts                     # Prisma client singleton
  tenant.ts                 # Helpers for ensuring + fetching tenant membership
prisma/
  schema.prisma             # Prisma data model (Tenant, UserTenant, enums)
  migrations/               # SQL migrations for SQLite
```

## Next steps

- Wire the `subscriptionIsActive` flag to Stripe billing webhooks.
- Expand the tenant model to support multiple memberships and invitations.
- Add end-to-end tests covering the auth + provisioning flow.

Happy building! 🌿
