'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { UserButton } from '@clerk/nextjs';

const NAVIGATION_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/settings', label: 'Settings' }
];

type ProtectedShellProps = {
  tenantName: string;
  children: ReactNode;
};

export function ProtectedShell({ tenantName, children }: ProtectedShellProps) {
  const pathname = usePathname();

  return (
    <div className="protected-shell__container">
      <header className="protected-shell__header">
        <div className="protected-shell__brand">
          <span className="protected-shell__logo" aria-hidden>🌿</span>
          <div>
            <p className="protected-shell__title">{tenantName}</p>
            <p className="protected-shell__subtitle">Greenfundr workspace</p>
          </div>
        </div>
        <nav className="protected-shell__nav">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'protected-shell__link is-active' : 'protected-shell__link'}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: { width: 36, height: 36 } } }} />
      </header>
      <main className="protected-shell__main">{children}</main>
    </div>
  );
}
