import { getVideoById } from '@/data/mockVideos';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface VideoPageProps {
  params: { id: string };
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = getVideoById(params.id);

  if (!video) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <Alert variant="destructive" className="max-w-lg">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Video Not Found</AlertTitle>
            <AlertDescription>
              The video you are looking for does not exist or may have been removed.
            </AlertDescription>
          </Alert>
          <Link href="/" passHref className="mt-6">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <VideoPlayer video={video} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const { mockVideos } = await import('@/data/mockVideos');
  return mockVideos.map((video) => ({
    id: video.id,
  }));
}
