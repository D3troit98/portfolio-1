'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon, RotateCcw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import React from 'react';

interface ErrorComponentProps {
  error: {
    message?: string;
    digest?: string;
  };
  reset: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-10">
      <nav className="w-full max-w-7xl mx-auto flex gap-4">
        <Button
          variant="ghost"
          onClick={reset}
          className="gap-2 text-primary hover:text-primary/80"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>

        <Link href="/">
          <Button
            variant="ghost"
            className="gap-2 text-primary hover:text-primary/80"
          >
            <HomeIcon className="h-4 w-4" />
            Go Home
          </Button>
        </Link>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            5<span className="text-primary">0</span>0 ERR
            <span className="text-primary">O</span>R
          </h1>

          <p className="text-lg text-muted-foreground text-center max-w-md">
            Something went wrong!
          </p>

          {/* Error Message Alert */}
          <Alert variant="destructive" className="max-w-md">
            <AlertDescription className="mt-1">
              {error.message || 'An unexpected error occurred'}
              {error.digest && (
                <div className="mt-2 text-sm opacity-80">
                  Error ID: {error.digest}
                </div>
              )}
            </AlertDescription>
          </Alert>

          <div className="flex gap-4">
            <Button onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
            <Link href="/">
              <Button className="gap-2">
                <HomeIcon className="h-4 w-4" />
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorComponent;
