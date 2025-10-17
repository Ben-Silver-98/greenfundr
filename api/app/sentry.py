from __future__ import annotations

import logging
from typing import Iterable

import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.logging import LoggingIntegration

from .config import Settings


def configure_sentry(settings: Settings) -> None:
    """Configure Sentry if a DSN is provided."""

    if not settings.sentry_dsn:
        return

    integrations: Iterable[object] = (
        FastApiIntegration(),
        LoggingIntegration(level=logging.INFO, event_level=logging.ERROR),
    )

    sentry_sdk.init(
        dsn=settings.sentry_dsn,
        integrations=list(integrations),
        traces_sample_rate=1.0,
        environment=settings.environment,
    )
