import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from '../../src/components/ui/Card/Card';
import { Input } from '../../src/components/ui/Input/Input';
import { Button } from '../../src/components/ui/Button/Button';
import { Link } from '../../src/components/ui/Link/Link';

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-6">
        <div>
          <h2 className="text-3xl font-bold text-center">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Link href="/auth/forgot-password" variant="default">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>

          <div className="text-center">
            <span className="text-text-secondary">Don&apos;t have an account? </span>
            <Link href="/auth/signup" variant="default">
              Sign up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
