import Link from 'next/link';
import { FilmIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-6 bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <FilmIcon className="w-8 h-8 text-primary" />
          <span>Vizzie 360</span>
        </Link>
        <nav className="flex items-center gap-4">
          {/* Future navigation links can go here */}
          {/* <Link href="/browse" className="text-foreground hover:text-primary transition-colors">Browse</Link> */}
        </nav>
      </div>
    </header>
  );
}
