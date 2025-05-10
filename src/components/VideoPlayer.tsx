import type { Video } from '@/types/video';
import Image from 'next/image';
import { ShareButtons } from '@/components/ShareButtons';
import { MaximizeIcon, PlayCircleIcon } from 'lucide-react';

interface VideoPlayerProps {
  video: Video;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  // In a real app, this would integrate a 360 video player library (e.g., React Three Fiber, Pannellum, A-Frame)
  return (
    <div className="w-full aspect-video bg-card border border-border rounded-lg shadow-2xl overflow-hidden relative group">
      <Image
        src={video.thumbnailUrl}
        alt={`Playback placeholder for ${video.title}`}
        layout="fill"
        objectFit="cover"
        priority
        data-ai-hint={video.keywordsHint || "video placeholder"}
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayCircleIcon className="w-24 h-24 text-white/80" />
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <button 
            aria-label="Toggle fullscreen" 
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
          <MaximizeIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{video.title}</h1>
        <p className="text-base text-neutral-200 mb-4 drop-shadow-md">{video.description}</p>
        <ShareButtons videoUrl={`/videos/${video.id}`} videoTitle={video.title} />
      </div>
    </div>
  );
}
