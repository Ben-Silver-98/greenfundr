import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="auth-page">
      <SignUp
        appearance={{
          elements: {
            card: 'auth-card'
          }
        }}
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard"
        afterSignInUrl="/dashboard"
      />
    </div>
  );
}
