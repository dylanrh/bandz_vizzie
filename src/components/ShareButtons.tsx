'use client';

import { Button } from '@/components/ui/button';
import { TwitterIcon, FacebookIcon, LinkedinIcon, LinkIcon } from 'lucide-react'; // Using available icons, replace if custom needed
import { useToast } from '@/hooks/use-toast';

// Placeholder for specific social media icons if lucide-react doesn't have them
const FacebookShareIcon = () => <FacebookIcon className="w-5 h-5" />; // Replace with actual Facebook icon if needed
const TwitterShareIcon = () => <TwitterIcon className="w-5 h-5" />; // Replace with actual Twitter icon if needed

interface ShareButtonsProps {
  videoUrl: string;
  videoTitle: string;
}

export function ShareButtons({ videoUrl, videoTitle }: ShareButtonsProps) {
  const { toast } = useToast();

  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin' | 'copy') => {
    const urlToShare = typeof window !== 'undefined' ? window.location.href : videoUrl;
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(videoTitle)}`;
        window.open(shareLink, '_blank');
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(shareLink, '_blank');
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlToShare)}&title=${encodeURIComponent(videoTitle)}`;
        window.open(shareLink, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(urlToShare).then(() => {
          toast({ title: "Link Copied!", description: "Video link copied to clipboard." });
        }).catch(err => {
          console.error('Failed to copy: ', err);
          toast({ title: "Error", description: "Failed to copy link.", variant: "destructive" });
        });
        return; 
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-foreground mr-2">Share:</span>
      <Button variant="outline" size="icon" onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
        <TwitterShareIcon />
      </Button>
      <Button variant="outline" size="icon" onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
        <FacebookShareIcon />
      </Button>
      <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
        <LinkedinIcon className="w-5 h-5" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => handleShare('copy')} aria-label="Copy link">
        <LinkIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
