import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VideoCard } from '@/components/VideoCard';
import { Recommendations } from '@/components/Recommendations';
import { mockVideos } from '@/data/mockVideos';
import { Separator } from '@/components/ui/separator';
import { ListVideoIcon, SparklesIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section aria-labelledby="hero-title" className="text-center py-12 md:py-16">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Explore Immersive <span className="text-primary">360° Worlds</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into breathtaking virtual realities. Vizzie 360 brings you the best in immersive video content.
          </p>
        </section>

        <section aria-labelledby="featured-videos-title" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ListVideoIcon className="w-7 h-7 text-primary" />
            <h2 id="featured-videos-title" className="text-3xl font-semibold text-foreground">Featured Videos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.slice(0, 6).map((video) => ( // Display up to 6 featured videos
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section aria-labelledby="recommendations-title" className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <SparklesIcon className="w-7 h-7 text-primary" />
            <h2 id="recommendations-title" className="text-3xl font-semibold text-foreground">Tailored For You</h2>
          </div>
          <Recommendations />
        </section>
      </main>
      <Footer />
    </div>
  );
}
