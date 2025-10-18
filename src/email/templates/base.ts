import { escapeHtml } from './helpers';

export interface BaseEmailLayoutOptions {
  title: string;
  previewText?: string;
  body: string;
  preferencesUrl?: string;
}

export function renderEmailLayout({
  title,
  previewText,
  body,
  preferencesUrl,
}: BaseEmailLayoutOptions): string {
  const currentYear = new Date().getFullYear();

  const preview = previewText
    ? `<div style="display:none !important; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(previewText)}</div>`
    : '';

  const preferencesBlock = preferencesUrl
    ? `<p style="margin:24px 0 0; font-size:14px; color:#637381;">
        You can <a style="color:#0B6E4F;" href="${escapeHtml(preferencesUrl)}" target="_blank" rel="noopener noreferrer">update your email preferences</a> at any time.
      </p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f5f7fb; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1c2434;">
    ${preview}
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:600px; margin:0 auto; padding:32px 16px;">
      <tbody>
        <tr>
          <td>
            <table role="presentation" width="100%" style="background:#ffffff; border-radius:8px; padding:32px; box-shadow:0 12px 24px rgba(28, 36, 52, 0.06);">
              <tbody>
                <tr>
                  <td style="font-size:24px; font-weight:600; letter-spacing:-0.02em; color:#0b2447; padding-bottom:16px;">
                    ${escapeHtml(title)}
                  </td>
                </tr>
                <tr>
                  <td style="font-size:16px; line-height:1.6; color:#1c2434;">
                    ${body}
                    ${preferencesBlock}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top:24px; text-align:center; font-size:13px; color:#637381;">
            © ${currentYear} Greenfundr · Building sustainable portfolios together.
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}
