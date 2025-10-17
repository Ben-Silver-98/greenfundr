import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

export default function HomePage() {
  const { userId } = auth();

  return (
    <main className="main-container">
      <h1 className="hero-title">Welcome to Greenfundr</h1>
      <p className="hero-text">
        Manage your green initiatives with ease. Sign in using a secure magic link powered by Clerk and
        access your workspace in seconds.
      </p>
      {userId ? (
        <Link className="button button-primary" href="/dashboard">
          Go to your dashboard
        </Link>
      ) : (
        <div className="hero-actions">
          <Link className="button button-primary" href="/sign-in">
            Sign in with magic link
          </Link>
          <Link className="button button-secondary" href="/sign-up">
            Create an account
          </Link>
        </div>
      )}
    </main>
  );
}
