export { LifecycleEmailService } from './email/lifecycleEmailService';
export type {
  LifecycleEmailServiceOptions,
  WelcomeEmailPayload,
  OnboardingTipsEmailPayload,
  TrialReminderEmailPayload,
} from './email/lifecycleEmailService';

export { loadEnvironmentConfig } from './config/environment';
export type { EnvironmentConfig } from './config/environment';

export { renderWelcomeEmail } from './email/templates/welcome';
export type { WelcomeEmailParams } from './email/templates/welcome';
export { renderOnboardingTipsEmail } from './email/templates/onboardingTips';
export type { OnboardingTipsEmailParams } from './email/templates/onboardingTips';
export { renderTrialReminderEmail } from './email/templates/trialReminder';
export type { TrialReminderEmailParams } from './email/templates/trialReminder';
export type { RenderedEmail } from './email/types';
