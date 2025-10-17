import { ReactNode } from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ensureTenantForUser } from '@/lib/tenant';
import { ProtectedShell } from '@/components/protected-shell';

export default async function ProtectedLayout({
  children
}: {
  children: ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in?redirect_url=/dashboard');
  }

  const tenant = await ensureTenantForUser(userId);

  if (!tenant.subscriptionIsActive) {
    redirect('/subscription-required');
  }

  return <ProtectedShell tenantName={tenant.name}>{children}</ProtectedShell>;
}
