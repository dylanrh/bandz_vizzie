import type { Video } from '@/types/video';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ClockIcon, EyeIcon, CalendarDaysIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/videos/${video.id}`} passHref>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <CardHeader className="p-0 relative">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={600}
            height={400}
            className="object-cover w-full aspect-video"
            data-ai-hint={video.keywordsHint || 'abstract video'}
          />
           <Badge variant="secondary" className="absolute top-2 right-2 bg-black/50 text-white">360°</Badge>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold mb-1 line-clamp-2">{video.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3">{video.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="w-3 h-3" />
            <span>{video.views} views</span>
          </div>
           <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-3 h-3" />
            <span>{video.uploadDate}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
