
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Using Card for styling consistency

interface CollapsibleDescriptionProps {
  description: string;
  uploadDate?: string;
  views?: string;
  className?: string;
}

export function CollapsibleDescription({ description, uploadDate, views, className }: CollapsibleDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

  return (
    <Card className={`bg-card shadow-none border-none ${className}`}>
      <CardContent className="p-3 text-sm rounded-lg cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-start mb-1">
            <div>
                {views && <span className="font-semibold text-foreground">{views} views</span>}
                {uploadDate && <span className="ml-2 text-muted-foreground">{uploadDate}</span>}
            </div>
        </div>
        <p className="text-foreground whitespace-pre-wrap">
          {isExpanded ? description : shortDescription}
        </p>
        {description.length > 100 && (
          <Button variant="link" size="sm" className="p-0 h-auto text-primary hover:text-primary/80 mt-1">
            {isExpanded ? 'Show less' : 'Show more'}
            {isExpanded ? <ChevronUpIcon className="ml-1 h-4 w-4" /> : <ChevronDownIcon className="ml-1 h-4 w-4" />}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
