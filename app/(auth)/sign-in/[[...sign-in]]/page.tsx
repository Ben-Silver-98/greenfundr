import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="auth-page">
      <SignIn
        appearance={{
          elements: {
            card: 'auth-card'
          }
        }}
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
      />
    </div>
  );
}
