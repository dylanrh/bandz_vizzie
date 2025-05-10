import { Button } from '@/components/ui/button';
import { ThumbsUpIcon, ThumbsDownIcon, Share2Icon, DownloadIcon, BookmarkIcon } from 'lucide-react';
import { ShareButtons } from '@/components/ShareButtons'; // Assuming this will be adapted or used within a popover

interface VideoDetailActionsProps {
  videoUrl: string;
  videoTitle: string;
  className?: string;
}

export function VideoDetailActions({ videoUrl, videoTitle, className }: VideoDetailActionsProps) {
  // TODO: Implement actual like/dislike/save functionality
  return (
    <div className={`flex items-center space-x-2 overflow-x-auto py-2 scrollbar-hide ${className}`}>
      <Button variant="outline" size="sm" className="flex-shrink-0 bg-card hover:bg-muted">
        <ThumbsUpIcon className="mr-1.5 h-4 w-4" />
        Like
      </Button>
      <Button variant="outline" size="sm" className="flex-shrink-0 bg-card hover:bg-muted">
        <ThumbsDownIcon className="mr-1.5 h-4 w-4" />
        Dislike
      </Button>
      
      {/* Simplified Share for now, could use ShareButtons in a Popover */}
      <Button variant="outline" size="sm" className="flex-shrink-0 bg-card hover:bg-muted" onClick={() => navigator.clipboard.writeText(window.location.href)}>
        <Share2Icon className="mr-1.5 h-4 w-4" />
        Share
      </Button>
      
      <Button variant="outline" size="sm" className="flex-shrink-0 bg-card hover:bg-muted">
        <DownloadIcon className="mr-1.5 h-4 w-4" />
        Download
      </Button>
      <Button variant="outline" size="sm" className="flex-shrink-0 bg-card hover:bg-muted">
        <BookmarkIcon className="mr-1.5 h-4 w-4" />
        Save
      </Button>
    </div>
  );
}
