import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { getDefaultMembership } from '@/lib/tenant';

export default async function SubscriptionRequiredPage() {
  const { userId } = auth();
  const membership = userId ? await getDefaultMembership(userId) : null;

  return (
    <main className="subscription-page">
      <div className="subscription-card">
        <h1>Subscription required</h1>
        <p>
          {membership?.tenant
            ? `The subscription for ${membership.tenant.name} is inactive. Activate the plan to regain access to the workspace.`
            : 'Your subscription is inactive. Activate your plan to regain access to the workspace.'}
        </p>
        <div className="subscription-actions">
          {userId ? (
            <>
              <Link className="button button-primary" href="/settings">
                Manage subscription
              </Link>
              <Link className="button button-secondary" href="/dashboard">
                Return to dashboard
              </Link>
            </>
          ) : (
            <Link className="button button-primary" href="/sign-in">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
