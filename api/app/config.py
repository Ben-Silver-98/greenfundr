from __future__ import annotations

import os
from dataclasses import dataclass
from functools import lru_cache
from typing import Optional

from dotenv import load_dotenv

load_dotenv()


@dataclass
class Settings:
    """Application configuration loaded from environment variables."""

    app_name: str = os.getenv("APP_NAME", "Greenfundr API")
    environment: str = os.getenv("APP_ENV", os.getenv("ENVIRONMENT", "development"))
    sentry_dsn: Optional[str] = os.getenv("SENTRY_DSN")


@lru_cache
def get_settings() -> Settings:
    """Return cached application settings."""

    return Settings()
