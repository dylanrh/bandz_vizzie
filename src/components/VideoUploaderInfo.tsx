import type { Video } from '@/types/video';
import Image from 'next/image';
import { UserCircleIcon } from 'lucide-react'; // Fallback icon

interface VideoUploaderInfoProps {
  video: Pick<Video, 'uploaderName' | 'uploaderAvatarUrl'>;
  className?: string;
}

export function VideoUploaderInfo({ video, className }: VideoUploaderInfoProps) {
  if (!video.uploaderName) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {video.uploaderAvatarUrl ? (
        <Image
          src={video.uploaderAvatarUrl}
          alt={video.uploaderName || 'Uploader'}
          width={40}
          height={40}
          className="rounded-full object-cover"
          data-ai-hint="uploader avatar"
        />
      ) : (
        <UserCircleIcon className="h-10 w-10 text-muted-foreground" />
      )}
      <div>
        <p className="text-sm font-semibold text-foreground">{video.uploaderName}</p>
        {/* Optional: Could add subscriber count or other info here */}
        {/* <p className="text-xs text-muted-foreground">1.2M Subscribers</p> */}
      </div>
    </div>
  );
}
