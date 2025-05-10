
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

interface VideoPageHeaderProps {
  title?: string;
}

export function VideoPageHeader({ title }: VideoPageHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Go back">
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        {title && <h1 className="ml-4 text-lg font-medium truncate">{title}</h1>}
      </div>
    </header>
  );
}
