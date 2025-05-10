
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, CompassIcon, PlusCircleIcon, BookmarkIcon, UserCircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/explore', label: 'Explore', icon: CompassIcon },
  { href: '/create', label: 'Create', icon: PlusCircleIcon },
  { href: '/library', label: 'Library', icon: BookmarkIcon },
  { href: '/profile', label: 'Profile', icon: UserCircleIcon },
];

export function BottomNavigationBar() {
  const pathname = usePathname();

  // Hide on video player pages or other full-screen experiences
  if (pathname.startsWith('/videos/')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
      <div className="container mx-auto flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 p-2 rounded-md text-muted-foreground transition-colors duration-200 ease-in-out',
                isActive ? 'text-primary' : 'hover:text-foreground'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className={cn('h-6 w-6', isActive ? 'fill-primary/20' : '')} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
