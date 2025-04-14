
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from '../../src/components/ui/Card/Card';
import { Input } from '../../src/components/ui/Input/Input';
import { Button } from '../../src/components/ui/Button/Button';
import { Link } from '../../src/components/ui/Link/Link';

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-6">
        <div>
          <h2 className="text-3xl font-bold text-center">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign up
          </Button>

          <div className="text-center">
            <span className="text-text-secondary">Already have an account? </span>
            <Link href="/auth/signin" variant="default">
              Sign in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;
