import { loadEnvironmentConfig } from '../config/environment';
import { LifecycleEmailService } from '../email/lifecycleEmailService';

type EmailSendResult = Awaited<ReturnType<LifecycleEmailService['sendWelcomeEmail']>>;

async function main() {
  const [emailType, recipient, ...rest] = process.argv.slice(2);

  if (!emailType || !recipient) {
    printUsage();
    process.exit(1);
  }

  const env = loadEnvironmentConfig();
  const service = LifecycleEmailService.fromEnvironment(env);

  switch (emailType) {
    case 'welcome': {
      const [firstName, dashboardUrl] = rest;
      const result = await service.sendWelcomeEmail({
        to: recipient,
        firstName,
        dashboardUrl,
      });
      const messageId = ensureSendSuccess(result);
      console.info(`✔️  Welcome email sent to ${recipient} (message id: ${messageId})`);
      break;
    }
    case 'onboarding': {
      const [firstName, dashboardUrl] = rest;
      const result = await service.sendOnboardingTipsEmail({
        to: recipient,
        firstName,
        dashboardUrl,
      });
      const messageId = ensureSendSuccess(result);
      console.info(`✔️  Onboarding tips email sent to ${recipient} (message id: ${messageId})`);
      break;
    }
    case 'trial': {
      const [daysRemainingArg, firstName, upgradeUrl] = rest;
      const daysRemaining = parseInt(daysRemainingArg ?? '1', 10);
      if (Number.isNaN(daysRemaining) || daysRemaining < 0) {
        throw new Error('Please provide a non-negative number of days remaining for the trial reminder.');
      }
      const result = await service.sendTrialReminderEmail({
        to: recipient,
        daysRemaining,
        firstName,
        upgradeUrl,
      });
      const messageId = ensureSendSuccess(result);
      console.info(`✔️  Trial reminder email sent to ${recipient} (message id: ${messageId})`);
      break;
    }
    default: {
      printUsage();
      process.exitCode = 1;
      return;
    }
  }
}

function ensureSendSuccess(result: EmailSendResult): string {
  const resendError = (result as { error?: { message?: string } | null }).error;
  if (resendError?.message) {
    throw new Error(`Resend error: ${resendError.message}`);
  }

  const messageId = (result as { data?: { id?: string } | null }).data?.id;
  if (!messageId) {
    return 'unknown';
  }

  return messageId;
}

function printUsage() {
  console.info(`Usage:
  npm run send:test -- <welcome|onboarding|trial> <recipient> [args]

Examples:
  npm run send:test -- welcome person@example.com Alex
  npm run send:test -- onboarding person@example.com Alex
  npm run send:test -- trial person@example.com 1 Alex`);
}

main().catch((error) => {
  console.error('Failed to send email:', error);
  process.exitCode = 1;
});
