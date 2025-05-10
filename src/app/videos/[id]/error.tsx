
'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { VideoPageHeader } from '@/components/layout/VideoPageHeader'; // Optional: can be used for back navigation

export default function VideoErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <VideoPageHeader title="Error" />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-destructive">Oops! Something went wrong.</h1>
        <p className="text-muted-foreground mb-6">
          We encountered an error while trying to load this video. Please try again.
        </p>
        {process.env.NODE_ENV === 'development' && error?.message && (
          <pre className="text-xs bg-card p-3 rounded-md my-4 max-w-md overflow-auto text-left text-muted-foreground border border-border">
            {error.message}
            {error.digest && `\nDigest: ${error.digest}`}
          </pre>
        )}
        <Button onClick={() => reset()} variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Try Again
        </Button>
      </main>
    </div>
  );
}
