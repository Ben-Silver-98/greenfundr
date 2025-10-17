# Greenfundr Lifecycle Emails

Transactional lifecycle emails delivered through [Resend](https://resend.com) for Greenfundr.

## Prerequisites

- Node.js 18+
- A Resend API key with the `greenfundr.com` domain verified

## Environment setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and fill in the values:
   ```bash
   cp .env.example .env
   ```
3. Provide the required variables in `.env`.

### Environment variables

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key with access to the `greenfundr.com` domain. |
| `LIFECYCLE_EMAIL_SENDER` | The verified sender email (must end with `@greenfundr.com`). |
| `LIFECYCLE_EMAIL_PREFERENCES_URL` | Public URL where recipients can update email preferences/unsubscribe from non-critical emails. Required for onboarding tips and trial reminders. |

## Email templates

Templates live under `src/email/templates` and render both HTML and plain-text variants:

- `welcome` — Sent post-signup. Provides the primary dashboard call-to-action.
- `onboardingTips` — Sent one hour after first login. Includes three actionable steps and an email preferences link.
- `trialReminder` — Sent on day 7 and day 13 if the account has not converted. Highlights remaining benefits and includes an email preferences link.

All templates share a common layout and support preview text for better inbox rendering.

## Sending test emails

A helper script is available to send templates through Resend once the environment variables are configured:

```bash
npm run send:test -- welcome recipient@example.com Alex
npm run send:test -- onboarding recipient@example.com Alex
npm run send:test -- trial recipient@example.com 1 Alex
```

Arguments follow the pattern `npm run send:test -- <template> <recipient> [extra args]`. The trial reminder expects the number of days remaining as the first extra argument.

## Build

Compile the TypeScript source with:

```bash
npm run build
```

The compiled files output to `dist/` (ignored by git).
