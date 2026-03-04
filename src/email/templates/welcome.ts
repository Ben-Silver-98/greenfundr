import { renderEmailLayout } from './base';
import { escapeHtml } from './helpers';
import type { RenderedEmail } from '../types';

export interface WelcomeEmailParams {
  firstName?: string;
  dashboardUrl?: string;
  supportEmail?: string;
}

export function renderWelcomeEmail({
  firstName,
  dashboardUrl = 'https://app.greenfundr.com/login',
  supportEmail = 'support@greenfundr.com',
}: WelcomeEmailParams): RenderedEmail {
  const greetingName = firstName?.trim() ? escapeHtml(firstName.trim()) : 'there';
  const escapedDashboardUrl = escapeHtml(dashboardUrl);
  const escapedSupportEmail = escapeHtml(supportEmail);

  const subject = 'Welcome to Greenfundr';
  const previewText = 'Let’s build a greener portfolio together.';

  const body = `
    <p style="margin:0 0 16px;">Hi ${greetingName},</p>
    <p style="margin:16px 0;">
      Welcome to Greenfundr! We are thrilled to help you invest in a more sustainable future.
      Your trial account is live and ready for you to explore impact-focused opportunities.
    </p>
    <p style="margin:16px 0;">
      <a href="${escapedDashboardUrl}" style="background-color:#0B6E4F; color:#ffffff; padding:12px 20px; border-radius:6px; text-decoration:none; display:inline-block;">Start exploring your dashboard</a>
    </p>
    <p style="margin:16px 0;">
      If you ever have questions, reach out at <a href="mailto:${escapedSupportEmail}">${escapedSupportEmail}</a> . We’re here to help.
    </p>
    <p style="margin:16px 0;">Talk soon,<br/>The Greenfundr team</p>
  `;

  const html = renderEmailLayout({
    title: 'Welcome to Greenfundr',
    previewText,
    body,
  });

  const text = `Hi ${firstName?.trim() || 'there'},

Welcome to Greenfundr! We are thrilled to help you invest in a more sustainable future. Your trial account is live and ready for you to explore impact-focused opportunities.

Start exploring your dashboard: ${dashboardUrl}

If you ever have questions, reach out at ${supportEmail} . We’re here to help.

Talk soon,
The Greenfundr team`;

  return { subject, html, text };
}
