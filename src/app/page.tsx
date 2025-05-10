
'use client';

import { useState, useMemo } from 'react';
import { TopBarSearch } from '@/components/layout/TopBarSearch';
import { VideoCard } from '@/components/VideoCard';
import { mockVideos } from '@/data/mockVideos';
import type { Video } from '@/types/video';
import { CategoryTabs } from '@/components/CategoryTabs';
import { SparklesIcon } from 'lucide-react';

const uniqueCategories = Array.from(new Set(mockVideos.map(v => v.category).filter(Boolean) as string[]));

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') {
      return mockVideos;
    }
    return mockVideos.filter(video => video.category === selectedCategory);
  }, [selectedCategory]);

  const featuredVideo = useMemo(() => filteredVideos.length > 0 ? filteredVideos[0] : null, [filteredVideos]);
  const regularVideos = useMemo(() => filteredVideos.slice(1), [filteredVideos]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopBarSearch />
      <CategoryTabs categories={uniqueCategories} onSelectCategory={setSelectedCategory} className="md:hidden" />
      
      {/* Padding for BottomNavigationBar */}
      <main className="flex-grow container mx-auto px-2 sm:px-4 py-4 pb-20 md:pb-4">
        {/* Desktop Title - Hidden on mobile where TopBarSearch exists */}
        <div className="hidden md:flex items-center gap-2 my-6 px-2">
            <SparklesIcon className="w-8 h-8 text-primary" />
            <h1 id="featured-videos-title" className="text-3xl font-bold text-foreground">For You</h1>
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-10 text-muted-foreground">
            <p>No videos found for &quot;{selectedCategory}&quot;.</p>
            <p>Try selecting a different category!</p>
          </div>
        )}

        {/* Featured Video Section - Larger on top */}
        {featuredVideo && (
          <section aria-labelledby="featured-video" className="mb-6 md:mb-8">
             <h2 id="featured-video" className="sr-only">Featured Video</h2>
            <VideoCard video={featuredVideo} isFeatured={true} />
          </section>
        )}

        {/* Regular Videos Grid */}
        {regularVideos.length > 0 && (
          <section aria-labelledby="more-videos">
            <h2 id="more-videos" className="sr-only">More Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {regularVideos.map((video: Video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
