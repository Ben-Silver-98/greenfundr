import { renderEmailLayout } from './base';
import { escapeHtml } from './helpers';
import type { RenderedEmail } from '../types';

export interface TrialReminderEmailParams {
  firstName?: string;
  daysRemaining: number;
  upgradeUrl?: string;
  preferencesUrl?: string;
  planName?: string;
  conversionContactEmail?: string;
}

export function renderTrialReminderEmail({
  firstName,
  daysRemaining,
  upgradeUrl = 'https://app.greenfundr.com/upgrade',
  preferencesUrl,
  planName = 'Greenfundr Pro',
  conversionContactEmail = 'sales@greenfundr.com',
}: TrialReminderEmailParams): RenderedEmail {
  if (!Number.isFinite(daysRemaining) || daysRemaining < 0) {
    throw new Error('daysRemaining must be a non-negative number.');
  }

  const greetingName = firstName?.trim() ? escapeHtml(firstName.trim()) : 'there';
  const escapedUpgradeUrl = escapeHtml(upgradeUrl);
  const escapedPlanName = escapeHtml(planName);
  const escapedContactEmail = escapeHtml(conversionContactEmail);

  const subject = daysRemaining === 0
    ? `Your Greenfundr trial ends today`
    : `Your Greenfundr trial ends in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}`;
  const previewText = daysRemaining <= 1
    ? 'Keep your insights flowing. Upgrade now to avoid losing access.'
    : 'Stay ahead and secure your sustainable investing tools before the trial ends.';

  const headline = daysRemaining <= 1
    ? 'Your trial is almost over'
    : `Only ${daysRemaining} day${daysRemaining === 1 ? '' : 's'} left in your trial`;

  const body = `
    <p style="margin:0 0 16px;">Hi ${greetingName},</p>
    <p style="margin:16px 0;">
      A quick reminder that your access to ${escapedPlanName} will end${daysRemaining === 0 ? ' today' : ` in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}`}.
      Don’t lose the momentum you’ve built tracking climate-positive capital allocation.
    </p>
    <p style="margin:16px 0;"><strong>${headline}</strong></p>
    <ul style="margin:16px 0; padding-left:20px;">
      <li style="margin-bottom:10px;">Unlimited access to the latest impact metrics and ESG benchmarks.</li>
      <li style="margin-bottom:10px;">Collaboration tools for investment committees and stakeholder reporting.</li>
      <li style="margin-bottom:10px;">Priority support to help convert insights into action.</li>
    </ul>
    <p style="margin:16px 0;">
      <a href="${escapedUpgradeUrl}" style="background-color:#0B6E4F; color:#ffffff; padding:12px 20px; border-radius:6px; text-decoration:none; display:inline-block;">Upgrade to ${escapedPlanName}</a>
    </p>
    <p style="margin:16px 0;">
      Questions or want to talk through a plan that fits your team? Reply to this email or contact us at <a href="mailto:${escapedContactEmail}">${escapedContactEmail}</a>.
    </p>
    <p style="margin:16px 0;">Thank you for building a greener future with us,<br/>The Greenfundr team</p>
  `;

  const html = renderEmailLayout({
    title: headline,
    previewText,
    body,
    preferencesUrl,
  });

  const text = `Hi ${firstName?.trim() || 'there'},

A quick reminder that your access to ${planName} will end${daysRemaining === 0 ? ' today' : ` in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}`}.

What you keep when you upgrade:
- Unlimited access to the latest impact metrics and ESG benchmarks.
- Collaboration tools for investment committees and stakeholder reporting.
- Priority support to help convert insights into action.

Upgrade now: ${upgradeUrl}

Questions? Contact us at ${conversionContactEmail}.

Thank you for building a greener future with us,
The Greenfundr team${preferencesUrl ? `

Update your email preferences: ${preferencesUrl}` : ''}`;

  return { subject, html, text };
}
