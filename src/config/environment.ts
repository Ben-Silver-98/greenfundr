import { config } from 'dotenv';

config();

export interface EnvironmentConfig {
  resendApiKey: string;
  senderEmail: string;
  preferencesUrl?: string;
}

const GREENFUNDR_DOMAIN = '@greenfundr.com';

export function loadEnvironmentConfig(env: NodeJS.ProcessEnv = process.env): EnvironmentConfig {
  const resendApiKey = env.RESEND_API_KEY;
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY is required to send lifecycle emails.');
  }

  const senderEmail = env.LIFECYCLE_EMAIL_SENDER;
  if (!senderEmail) {
    throw new Error('LIFECYCLE_EMAIL_SENDER is required to send lifecycle emails.');
  }

  const trimmedSender = senderEmail.trim();
  if (!trimmedSender.toLowerCase().endsWith(GREENFUNDR_DOMAIN)) {
    throw new Error(`LIFECYCLE_EMAIL_SENDER must use the ${GREENFUNDR_DOMAIN} domain.`);
  }

  const preferencesUrl = env.LIFECYCLE_EMAIL_PREFERENCES_URL?.trim() || undefined;

  return {
    resendApiKey,
    senderEmail: trimmedSender,
    preferencesUrl,
  };
}
