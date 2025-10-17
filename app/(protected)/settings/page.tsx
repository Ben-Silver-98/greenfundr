import { auth } from '@clerk/nextjs/server';
import { getDefaultMembership } from '@/lib/tenant';

export default async function SettingsPage() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const membership = await getDefaultMembership(userId);
  const roleLabel = membership?.role
    ? `${membership.role.charAt(0)}${membership.role.slice(1).toLowerCase()}`
    : 'Owner';
  const subscriptionLabel = membership?.tenant?.subscriptionIsActive === false ? 'Inactive' : 'Active';

  return (
    <section className="dashboard-card">
      <h1 className="dashboard-card__title">Workspace settings</h1>
      <p className="dashboard-card__lead">
        These settings are managed per-tenant. Billing information and subscription state will eventually be
        synced from Stripe webhooks. For now, the subscription toggle is represented by the{' '}
        <strong>subscriptionIsActive</strong> flag on the tenant model.
      </p>

      <div className="dashboard-card__grid">
        <div>
          <h2 className="dashboard-card__section">Current tenant</h2>
          <dl className="dashboard-card__definition-list">
            <div className="dashboard-card__definition-item">
              <dt>Name</dt>
              <dd>{membership?.tenant?.name ?? 'Personal Workspace'}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Subscription</dt>
              <dd>{subscriptionLabel}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Your role</dt>
              <dd>{roleLabel}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="dashboard-card__section">Coming soon</h2>
          <div className="settings-placeholder">
            <p>
              This is a placeholder for subscription management and tenant-wide configuration once Stripe
              webhooks are connected. Until then, flip the <code>subscriptionIsActive</code> value in the
              database to test gated routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
