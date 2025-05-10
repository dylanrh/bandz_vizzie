'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function VideoErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-destructive">Oops! Something went wrong.</h1>
        <p className="text-muted-foreground mb-6">
          We encountered an error while trying to load this video. Please try again.
        </p>
        {process.env.NODE_ENV === 'development' && error?.message && (
          <pre className="text-xs bg-muted p-2 rounded mb-4 max-w-md overflow-auto">
            {error.message}
          </pre>
        )}
        <Button onClick={() => reset()} variant="default">
          Try Again
        </Button>
      </main>
      <Footer />
    </div>
  );
}
