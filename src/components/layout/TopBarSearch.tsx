
'use client';

import Link from 'next/link';
import { SearchIcon, UserCircleIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function TopBarSearch() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm md:hidden">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search videos, creators..."
            className="h-10 w-full rounded-full bg-muted pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:bg-card focus:ring-primary"
          />
        </div>
        <Link href="/profile" passHref>
          <Button variant="ghost" size="icon" className="rounded-full">
            {/* Placeholder for actual user avatar */}
            <Image 
              src="https://picsum.photos/seed/useravatar/40/40" 
              alt="User Profile" 
              width={32} 
              height={32} 
              className="rounded-full"
              data-ai-hint="user avatar"
            />
            <span className="sr-only">Profile</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
