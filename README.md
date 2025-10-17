# Greenfundr Monorepo

This repository contains the foundations of the Greenfundr platform, organised as a monorepo with a Next.js web application and a FastAPI backend. It includes Docker tooling for local development, pre-commit hooks, and continuous integration pipelines.

## Project structure

```
.
├── api/         # FastAPI backend service
├── web/         # Next.js frontend application
├── .github/     # Continuous integration workflows
├── docker-compose.yml
├── .env.example
└── .pre-commit-config.yaml
```

## Getting started

1. **Install prerequisites**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine & Docker Compose
   - Node.js 20+ and npm (optional for running web without Docker)
   - Python 3.11+ (optional for running api without Docker)

2. **Configure environment variables**
   - Copy the sample environment file and adjust the values as needed:
     ```bash
     cp .env.example .env
     ```
   - Populate `NEXT_PUBLIC_SENTRY_DSN` for the frontend and `SENTRY_DSN` for the backend when you are ready to enable Sentry monitoring. Leave them blank to disable Sentry locally.

3. **Run the stack with Docker Compose**
   ```bash
   docker compose up --build
   ```
   - Web application: <http://localhost:3000>
   - API service: <http://localhost:8000/health>

4. **Install and run pre-commit (optional but recommended)**
   ```bash
   pip install pre-commit
   pre-commit install
   ```

## Running services without Docker

From the `web` directory:
```bash
npm install
npm run dev
```

From the `api` directory:
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload
```

## Testing & linting

- Frontend:
  ```bash
  cd web
  npm run lint
  npm test
  ```
- Backend:
  ```bash
  cd api
  ruff check .
  ruff format --check .
  pytest
  ```

## Continuous integration

GitHub Actions workflows (`.github/workflows/ci.yml`) automatically lint and test both applications on every push and pull request.

## Sentry integration

Sentry is wired into both services. When you provide DSNs via environment variables:

- **Frontend**: Set `NEXT_PUBLIC_SENTRY_DSN` (and optionally `NEXT_PUBLIC_APP_ENV`) to monitor client-side and edge errors.
- **Backend**: Set `SENTRY_DSN` (and optionally `APP_ENV`) to capture FastAPI errors and traces.

Leave the DSN values empty to disable Sentry locally.
