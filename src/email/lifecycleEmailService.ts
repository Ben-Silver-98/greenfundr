import { Resend } from 'resend';

import type { EnvironmentConfig } from '../config/environment';
import type { OnboardingTipsEmailParams } from './templates/onboardingTips';
import { renderOnboardingTipsEmail } from './templates/onboardingTips';
import type { TrialReminderEmailParams } from './templates/trialReminder';
import { renderTrialReminderEmail } from './templates/trialReminder';
import type { WelcomeEmailParams } from './templates/welcome';
import { renderWelcomeEmail } from './templates/welcome';

export interface LifecycleEmailServiceOptions {
  resendApiKey: string;
  senderEmail: string;
  preferencesUrl?: string;
}

export type WelcomeEmailPayload = WelcomeEmailParams & {
  to: string | string[];
};

export type OnboardingTipsEmailPayload = Omit<OnboardingTipsEmailParams, 'preferencesUrl'> & {
  to: string | string[];
  preferencesUrl?: string;
};

export type TrialReminderEmailPayload = Omit<TrialReminderEmailParams, 'preferencesUrl'> & {
  to: string | string[];
  preferencesUrl?: string;
};

export class LifecycleEmailService {
  private readonly resend: Resend;
  private readonly senderEmail: string;
  private readonly preferencesUrl?: string;

  constructor({ resendApiKey, senderEmail, preferencesUrl }: LifecycleEmailServiceOptions) {
    this.resend = new Resend(resendApiKey);
    this.senderEmail = senderEmail;
    this.preferencesUrl = preferencesUrl;
  }

  static fromEnvironment(config: EnvironmentConfig): LifecycleEmailService {
    return new LifecycleEmailService({
      resendApiKey: config.resendApiKey,
      senderEmail: config.senderEmail,
      preferencesUrl: config.preferencesUrl,
    });
  }

  async sendWelcomeEmail({ to, ...templateData }: WelcomeEmailPayload) {
    const recipients = normaliseRecipient(to);
    const { subject, html, text } = renderWelcomeEmail(templateData);

    return this.resend.emails.send({
      from: this.senderEmail,
      to: recipients,
      subject,
      html,
      text,
    });
  }

  async sendOnboardingTipsEmail({
    to,
    preferencesUrl,
    ...templateData
  }: OnboardingTipsEmailPayload) {
    const recipients = normaliseRecipient(to);
    const mergedPreferencesUrl = preferencesUrl ?? this.preferencesUrl;
    if (!mergedPreferencesUrl) {
      throw new Error('A preferences URL is required to send onboarding tips emails.');
    }
    const { subject, html, text } = renderOnboardingTipsEmail({
      ...templateData,
      preferencesUrl: mergedPreferencesUrl,
    });

    return this.resend.emails.send({
      from: this.senderEmail,
      to: recipients,
      subject,
      html,
      text,
      headers: this.buildOptionalHeaders(mergedPreferencesUrl),
    });
  }

  async sendTrialReminderEmail({
    to,
    preferencesUrl,
    ...templateData
  }: TrialReminderEmailPayload) {
    const recipients = normaliseRecipient(to);
    const mergedPreferencesUrl = preferencesUrl ?? this.preferencesUrl;
    if (!mergedPreferencesUrl) {
      throw new Error('A preferences URL is required to send trial reminder emails.');
    }
    const { subject, html, text } = renderTrialReminderEmail({
      ...templateData,
      preferencesUrl: mergedPreferencesUrl,
    });

    return this.resend.emails.send({
      from: this.senderEmail,
      to: recipients,
      subject,
      html,
      text,
      headers: this.buildOptionalHeaders(mergedPreferencesUrl),
    });
  }

  private buildOptionalHeaders(preferencesUrl?: string) {
    if (!preferencesUrl) {
      return undefined;
    }

    return {
      'List-Unsubscribe': `<${preferencesUrl}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    } as Record<string, string>;
  }
}

function normaliseRecipient(to: string | string[]): string | string[] {
  if (Array.isArray(to)) {
    const recipients = to.map((recipient) => recipient.trim()).filter(Boolean);
    if (!recipients.length) {
      throw new Error('At least one email recipient is required.');
    }
    return recipients;
  }

  const trimmed = to.trim();
  if (!trimmed) {
    throw new Error('A valid recipient email address is required.');
  }

  return trimmed;
}
