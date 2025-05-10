import type { Video } from '@/types/video';
import { VideoCard } from '@/components/VideoCard'; // Use the same video card for consistency

interface RelatedVideosProps {
  videos: Video[];
  className?: string;
}

export function RelatedVideos({ videos, className }: RelatedVideosProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className={`py-4 ${className}`} aria-labelledby="related-videos-title">
      <h2 id="related-videos-title" className="text-xl font-semibold text-foreground mb-3 px-1">
        Up Next
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video) => (
          // Using a simplified card or adapting VideoCard for a more compact list view might be better here
          // For now, re-using VideoCard directly but it might be too large for a typical "Up Next" list on mobile.
          // Consider a new, more compact VideoListCard variant if this looks too bulky.
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
       {/* Alternative for horizontal scroll view (more common for related videos on mobile)
       <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
        {videos.map((video) => (
          <div key={video.id} className="w-48 flex-shrink-0 sm:w-56">
            <VideoCard video={video} />
          </div>
        ))}
      </div> 
      */}
    </section>
  );
}
