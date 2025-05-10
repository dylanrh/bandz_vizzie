import type { Video } from '@/types/video';
import Image from 'next/image';
import { MaximizeIcon, PlayCircleIcon } from 'lucide-react';

interface VideoPlayerProps {
  video: Video;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  // In a real app, this would integrate a 360 video player library
  return (
    <div className="w-full aspect-video bg-card rounded-lg shadow-xl overflow-hidden relative group">
      <Image
        src={video.thumbnailUrl}
        alt={`Playback placeholder for ${video.title}`}
        layout="fill"
        objectFit="cover"
        priority
        data-ai-hint={video.keywordsHint || "video placeholder"}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <PlayCircleIcon className="w-20 h-20 sm:w-24 sm:h-24 text-white/90 drop-shadow-lg" />
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
         <button 
            aria-label="Toggle fullscreen" 
            className="p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
          >
          <MaximizeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
