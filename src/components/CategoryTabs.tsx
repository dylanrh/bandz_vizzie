
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CategoryTabsProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  className?: string;
}

export function CategoryTabs({ categories, onSelectCategory, className }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSelect = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className={cn("overflow-x-auto whitespace-nowrap py-2 scrollbar-hide md:hidden", className)}>
      <div className="flex space-x-2 px-4">
        {['All', ...categories].map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleSelect(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-all duration-200",
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card text-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
