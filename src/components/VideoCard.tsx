import type { Video } from '@/types/video';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayIcon, EyeIcon, ClockIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  video: Video;
  isFeatured?: boolean;
}

export function VideoCard({ video, isFeatured = false }: VideoCardProps) {
  return (
    <Link href={`/videos/${video.id}`} passHref>
      <Card className="overflow-hidden bg-card border-none shadow-lg hover:shadow-primary/20 transition-shadow duration-300 h-full flex flex-col group">
        <div className="relative w-full aspect-video">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={video.keywordsHint || 'abstract video'}
            priority={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayIcon className="w-12 h-12 text-white/80 drop-shadow-lg" />
          </div>
           <Badge variant="secondary" className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1">360°</Badge>
           <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {video.duration}
           </div>
        </div>
        
        <CardContent className="p-3 flex-grow">
          <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          {video.uploaderName && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              {video.uploaderAvatarUrl && (
                 <Image 
                    src={video.uploaderAvatarUrl} 
                    alt={video.uploaderName} 
                    width={16} 
                    height={16} 
                    className="rounded-full"
                    data-ai-hint="creator avatar"
                  />
              )}
              <span>{video.uploaderName}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <EyeIcon className="w-3.5 h-3.5" />
            <span>{video.views}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
