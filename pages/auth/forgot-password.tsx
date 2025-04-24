import React, { useState } from 'react';
import { Card } from '../../src/components/ui/Card/Card';
import { Input } from '../../src/components/ui/Input/Input';
import { Button } from '../../src/components/ui/Button/Button';
import { Link } from '../../src/components/ui/Link/Link';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add password reset logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-6">
        <div>
          <h2 className="text-3xl font-bold text-center">Reset your password</h2>
          <p className="mt-2 text-center text-text-secondary">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>
        
        {!submitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full">
              Send reset link
            </Button>

            <div className="text-center">
              <Link href="/auth/signin" variant="default">
                Back to sign in
              </Link>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-text-primary">
              If an account exists for {email}, you will receive a password reset link shortly.
            </p>
            <Link href="/auth/signin" variant="default">
              Return to sign in
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
