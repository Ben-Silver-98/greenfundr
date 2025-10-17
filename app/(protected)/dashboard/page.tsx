import { auth, currentUser } from '@clerk/nextjs/server';
import { getDefaultMembership } from '@/lib/tenant';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const [user, membership] = await Promise.all([currentUser(), getDefaultMembership(userId)]);

  const primaryEmail = user?.emailAddresses.find((email) => email.id === user.primaryEmailAddressId);
  const roleLabel = membership?.role
    ? `${membership.role.charAt(0)}${membership.role.slice(1).toLowerCase()}`
    : 'Owner';
  const subscriptionLabel = membership?.tenant?.subscriptionIsActive === false ? 'Inactive' : 'Active';

  return (
    <section className="dashboard-card">
      <h1 className="dashboard-card__title">Dashboard</h1>
      <p className="dashboard-card__lead">
        You are signed in using Clerk&apos;s passwordless magic link flow. Your session is protected on the
        server and routes are gated by the active subscription state of your tenant.
      </p>

      <div className="dashboard-card__grid">
        <div>
          <h2 className="dashboard-card__section">Account</h2>
          <dl className="dashboard-card__definition-list">
            <div className="dashboard-card__definition-item">
              <dt>Name</dt>
              <dd>{user?.fullName ?? '—'}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Email</dt>
              <dd>{primaryEmail?.emailAddress ?? '—'}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Clerk user ID</dt>
              <dd>{userId}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="dashboard-card__section">Tenant</h2>
          <dl className="dashboard-card__definition-list">
            <div className="dashboard-card__definition-item">
              <dt>Tenant</dt>
              <dd>{membership?.tenant?.name ?? 'Personal Workspace'}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Membership role</dt>
              <dd>{roleLabel}</dd>
            </div>
            <div className="dashboard-card__definition-item">
              <dt>Subscription status</dt>
              <dd>{subscriptionLabel}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
