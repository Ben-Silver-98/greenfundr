# Deployment Guide

This document describes the production deployment architecture for the Greenfundr platform and the steps required to provision, configure, and monitor the live stack.

The production target is `app.greenfundr.com` (web), supported by a FastAPI application with Celery workers and a managed Postgres database hosted in the EU. Observability is provided via Sentry (error tracking) and provider-native logging.

---

## 1. High-level architecture

| Component                | Provider | Notes |
|--------------------------|----------|-------|
| Web frontend             | Vercel   | Deployed from `main` (or production) branch. Custom domain `app.greenfundr.com`. |
| API (FastAPI)            | Fly.io **or** Render | Runs the HTTP application. Exposes `/healthz` for health checks. |
| Celery worker + scheduler| Fly.io **or** Render | Separate process or service for Celery workers and Celery beat (scheduled tasks). |
| Database (Postgres)      | Neon     | Region: `eu-central` (Frankfurt). Use connection pooling for backend workloads. |
| Error tracking           | Sentry   | Separate DSNs for frontend and backend recommended. |
| Logging / metrics        | Provider native + optional third-party (e.g., Better Stack, Datadog). |

> **Note:** Choose Fly.io or Render for API & workers based on team expertise. Instructions below cover both options.

---

## 2. Prerequisites

- Access to:
  - Vercel team or project with permissions to add custom domains and environment variables.
  - Fly.io or Render account with billing enabled.
  - Neon.io organization with ability to create projects in EU regions.
  - Sentry organization/project for capturing errors.
- DNS control for `greenfundr.com` (to configure `app.greenfundr.com`, `api.greenfundr.com`, etc.).
- GitHub repository connected to Vercel / Fly.io / Render for automatic deployments.

### Required environment variables

| Variable                   | Description |
|----------------------------|-------------|
| `FRONTEND_URL`            | `https://app.greenfundr.com` |
| `API_URL`                 | `https://api.greenfundr.com` |
| `DATABASE_URL`            | Neon connection string (pgbouncer endpoint recommended). |
| `DATABASE_POOL_URL`       | Optional direct Postgres connection for migrations. |
| `REDIS_URL` / `CELERY_BROKER_URL` | Broker (e.g., Upstash Redis, RabbitMQ) for Celery. |
| `CELERY_RESULT_BACKEND`   | Result backend (can re-use Postgres or Redis). |
| `SENTRY_DSN` / `SENTRY_ENVIRONMENT` | Sentry configuration for backend. |
| `NEXT_PUBLIC_SENTRY_DSN`  | Read-only DSN for the frontend (if using Next.js). |
| `SECRET_KEY`              | FastAPI app secret. |
| Any third-party API keys  | Payments, email, etc. |

Store secrets in provider-specific secret managers (Vercel Environment Variables, Fly.io secrets, Render environment variables). Avoid committing secrets to the repository.

---

## 3. Provision Neon Postgres (EU)

1. **Create project**
   - Log in to Neon and create a new project in the `eu-central` (Frankfurt) region to keep data residency in the EU.
   - Choose the appropriate compute size and storage tier.

2. **Configure roles and branches**
   - Create a `prod` branch.
   - Create a `greenfundr_app` role/user with password auth.
   - For connection pooling, enable PgBouncer and note the pooled connection string.

3. **Network and performance**
   - Enable connection pooling for the FastAPI API and workers.
   - If using read replicas, create read-only branches as needed.

4. **Secrets**
   - Record the following strings from Neon:
     - Direct connection string (for migrations/admin).
     - Pooled connection string (for applications).
   - Store them as `DATABASE_URL` and `DATABASE_POOL_URL` respectively in Vercel/Fly/Render.

5. **Migrations**
   - Ensure your backend repo contains migrations (e.g., Alembic for FastAPI). Run migrations during deploy (Render build command or Fly release command).

---

## 4. Deploy the API + workers

Choose either Fly.io or Render as the compute platform. The steps are similar; pick one provider and follow the relevant subsection.

### Option A: Fly.io

1. **Install tooling**
   ```bash
   brew install flyctl   # or use official installer
   fly auth login
   ```

2. **Create apps**
   - API service: `fly launch --name greenfundr-api --no-deploy`
   - Worker service: `fly launch --name greenfundr-worker --no-deploy`
   - Answer prompts: select the same region as Neon (`fra`). Do not initialize a database (Neon is external).

3. **Configuration (`fly.toml`)**
   - API `fly.toml` should include:
     ```toml
     [env]
     PORT = "8000"

     [http_service]
       internal_port = 8000
       force_https = true
       auto_start_machines = true
       auto_stop_machines = true
       min_machines_running = 1

     [[http_service.checks]]
       type = "http"
       method = "get"
       path = "/healthz"
       interval = "15s"
       timeout = "2s"
     ```
   - Worker `fly.toml` should disable the HTTP service and run the Celery worker process and beat scheduler (e.g., command `celery -A app.worker worker` and a separate machine for `celery beat`).

4. **Secrets**
   ```bash
   fly secrets set \
     DATABASE_URL="..." \
     CELERY_BROKER_URL="..." \
     SENTRY_DSN="..." \
     SECRET_KEY="..." \
     --app greenfundr-api
   fly secrets set \
     DATABASE_URL="..." \
     CELERY_BROKER_URL="..." \
     CELERY_RESULT_BACKEND="..." \
     SENTRY_DSN="..." \
     --app greenfundr-worker
   ```

5. **Deploy**
   - Configure CI to run: `fly deploy --app greenfundr-api` on pushes to `main`.
   - Workers: `fly deploy --app greenfundr-worker` (ensure Dockerfile runs the worker entrypoint).

6. **Scheduled jobs**
   - Run Celery beat as a separate Fly Machine (`fly scale count 1 --app greenfundr-beat`).
   - Alternatively, use Fly cron schedules with machines to trigger tasks via HTTP endpoints.

7. **Certificates / DNS**
   - Allocate a Fly hostname (`fly ips allocate-v4/v6`).
   - Create `A/AAAA` records for `api.greenfundr.com` pointing to Fly’s IPs.
   - Run `fly certs create api.greenfundr.com` and verify.

### Option B: Render

1. **Create services**
   - Web Service (FastAPI) from GitHub repo.
   - Background Worker for Celery.
   - Scheduled Job for Celery beat (if not running beat inside worker).

2. **Build & start commands**
   - Build: `pip install -r requirements.txt`
   - Start command (web): `uvicorn app.main:app --host 0.0.0.0 --port 10000`
   - Start command (worker): `celery -A app.worker worker --loglevel=info`
   - Scheduled job command: `celery -A app.worker beat --loglevel=info`

3. **Environment**
   - Add required environment variables in Render dashboard (same as Fly).
   - Configure health check path `/healthz` with 200 response.

4. **Scaling**
   - Ensure minimal instances are always running to avoid cold starts.

5. **Certificates / DNS**
   - Render auto-provisions TLS once custom domains are added. Create a service-specific domain `api.greenfundr.com`.

---

## 5. Deploy the frontend (Vercel)

1. **Import GitHub repository** into Vercel, selecting the primary branch (`main`).
2. **Build settings**
   - Framework preset (e.g., Next.js, Astro) according to the frontend implementation.
   - Add necessary build environment variables (API URL, Sentry DSN, feature flags).
3. **Environments**
   - Use Vercel’s Environment Variables UI to set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SENTRY_DSN`, etc.
   - Promote variables from preview → production once validated.
4. **Custom domain**
   - Add `app.greenfundr.com` to Vercel project.
   - Update DNS: `CNAME app.greenfundr.com -> cname.vercel-dns.com`.
5. **Post-deploy checks**
   - Ensure static assets load over HTTPS.
   - Confirm `robots.txt` and `sitemap.xml` (if present) serve correctly.

---

## 6. Observability and monitoring

1. **Sentry integration**
   - Backend: initialize Sentry SDK early in FastAPI (e.g., `sentry_sdk.init(dsn=os.environ["SENTRY_DSN"], environment=os.environ["SENTRY_ENVIRONMENT"], integrations=[...])`).
   - Frontend: Initialize per framework (e.g., `@sentry/nextjs`).
   - Define release names based on Git commit SHA.

2. **Logging**
   - Fly.io: use `fly logs` or ship logs to Axiom/Datadog via sidecar agent.
   - Render: aggregate logs in dashboard; optional streaming to external provider.
   - Standardize structured logs (JSON) for easier parsing.

3. **Health checks**
   - API: expose `/healthz` returning 200. Include validation for DB connectivity and background worker heartbeats if possible.
   - Worker: implement Celery monitoring (e.g., Flower) or periodic heartbeat tasks logged to Sentry/metrics.

4. **Metrics**
   - Optional integration with Prometheus-compatible exporter or vendor (Grafana Cloud, Datadog).

5. **Alerts**
   - Configure Sentry alerts for error spikes, release regressions.
   - Set provider-specific alerts (Fly autoscaling events, Render failures).

---

## 7. Deployment workflow

1. **Branching**
   - `main`: production deployments.
   - Feature branches: deploy previews (Vercel) and staging environments (Fly/Render) using environment-specific secrets.

2. **CI/CD**
   - Ensure CI runs tests and linting before deploy.
   - On successful CI, trigger provider deploy commands (Vercel auto-deploy, Fly `fly deploy`, Render auto-deploy).

3. **Migrations**
   - Run database migrations as part of deploy (Render build command or Fly release step).
   - Ensure migrations run before application starts accepting traffic.

4. **Background tasks**
   - Validate Celery beat schedule after deploy (check logs for task execution).

---

## 8. Verification checklist

- [ ] Neon database running in EU and reachable from API/worker.
- [ ] API deployed, `/healthz` returns 200, Celery worker connected.
- [ ] Scheduled tasks executing (verify via logs or Celery monitoring).
- [ ] Frontend accessible at `https://app.greenfundr.com` with valid TLS certificate.
- [ ] Sentry receiving events from frontend and backend.
- [ ] Logs visible in provider dashboards; optional export to external observability stack.
- [ ] Run smoke tests against production (API, UI critical flows).

---

## 9. Runbooks & maintenance

- **Incidents**: Check Fly/Render service status, Neon status page, Vercel status.
- **Scaling**: Adjust Fly Machines/Render instances and Neon compute/storage tiers as traffic grows.
- **Secrets rotation**: Rotate credentials via provider dashboards; ensure zero-downtime rollover by staging secret updates before deploy.
- **Backups**: Configure Neon automated backups and practice restoration drills.

---

## 10. Limitations

This repository currently contains no application source code. The steps above outline the required infrastructure, but actual provisioning and deployments must be executed once the application codebase and configuration files (Dockerfile, `fly.toml`, frontend framework, etc.) are available.
