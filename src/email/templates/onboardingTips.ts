import { renderEmailLayout } from './base';
import { escapeHtml } from './helpers';
import type { RenderedEmail } from '../types';

export interface OnboardingTipsEmailParams {
  firstName?: string;
  dashboardUrl?: string;
  preferencesUrl?: string;
  tips?: string[];
}

const DEFAULT_TIPS: readonly string[] = [
  'Complete your sustainability profile to personalise your impact benchmarks.',
  'Bookmark the funds that align with your climate goals so you can compare them side-by-side.',
  'Invite teammates to collaborate on allocations and stay accountable to ESG commitments.',
];

export function renderOnboardingTipsEmail({
  firstName,
  dashboardUrl = 'https://app.greenfundr.com/dashboard',
  preferencesUrl,
  tips,
}: OnboardingTipsEmailParams): RenderedEmail {
  const greetingName = firstName?.trim() ? escapeHtml(firstName.trim()) : 'there';
  const escapedDashboardUrl = escapeHtml(dashboardUrl);
  const selectedTips = (tips?.length ? tips : DEFAULT_TIPS).map((tip) => `      <li style="margin-bottom:12px;">${escapeHtml(tip)}</li>`).join('\n');

  const subject = 'Getting started with Greenfundr';
  const previewText = 'Three quick tips to make the most out of your first week.';

  const body = `
    <p style="margin:0 0 16px;">Hi ${greetingName},</p>
    <p style="margin:16px 0;">
      You made it through your first login. Great! Here are a few tips to help you get tangible value out of Greenfundr in the next couple of days.
    </p>
    <ol style="margin:16px 0 24px; padding-left:20px;">
${selectedTips}
    </ol>
    <p style="margin:16px 0;">
      Ready for the next step? Jump back into your dashboard and keep the momentum going.
    </p>
    <p style="margin:16px 0;">
      <a href="${escapedDashboardUrl}" style="background-color:#0B6E4F; color:#ffffff; padding:12px 20px; border-radius:6px; text-decoration:none; display:inline-block;">Return to your dashboard</a>
    </p>
    <p style="margin:16px 0;">Onwards,<br/>The Greenfundr team</p>
  `;

  const html = renderEmailLayout({
    title: 'Make the most of your first week',
    previewText,
    body,
    preferencesUrl,
  });

  const textTips = (tips?.length ? tips : DEFAULT_TIPS).map((tip, index) => `${index + 1}. ${tip}`).join('\n');

  const text = `Hi ${firstName?.trim() || 'there'},

You made it through your first login. Great! Here are a few tips to help you get tangible value out of Greenfundr:

${textTips}

Return to your dashboard: ${dashboardUrl}

Onwards,
The Greenfundr team${preferencesUrl ? `

Update your email preferences: ${preferencesUrl}` : ''}`;

  return { subject, html, text };
}
