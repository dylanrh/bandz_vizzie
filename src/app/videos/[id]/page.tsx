import { getVideoById, mockVideos } from '@/data/mockVideos';
import { VideoPlayer } from '@/components/VideoPlayer';
import { VideoPageHeader } from '@/components/layout/VideoPageHeader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VideoUploaderInfo } from '@/components/VideoUploaderInfo';
import { VideoDetailActions } from '@/components/VideoDetailActions';
import { CollapsibleDescription } from '@/components/CollapsibleDescription';
import { CommentsSection } from '@/components/CommentsSection';
import { RelatedVideos } from '@/components/RelatedVideos';
import { Separator } from '@/components/ui/separator';

interface VideoPageProps {
  params: { id: string };
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = getVideoById(params.id);

  if (!video) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <VideoPageHeader title="Video Not Found" />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <Alert variant="destructive" className="max-w-lg bg-card border-destructive/50">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Video Not Found</AlertTitle>
            <AlertDescription>
              The video you are looking for does not exist or may have been removed.
            </AlertDescription>
          </Alert>
          <Link href="/" passHref className="mt-6">
            <Button variant="outline" className="bg-card hover:bg-muted">Back to Home</Button>
          </Link>
        </main>
      </div>
    );
  }

  const relatedVideos = mockVideos.filter(v => v.id !== video.id && v.category === video.category).slice(0, 5);
  if (relatedVideos.length < 5) {
    relatedVideos.push(...mockVideos.filter(v => v.id !== video.id && v.category !== video.category).slice(0, 5 - relatedVideos.length));
  }


  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <VideoPageHeader /> {/* No title, player itself has title implicitly */}
      <main className="flex-grow">
        <div className="w-full">
          <VideoPlayer video={video} />
        </div>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <h1 className="text-2xl font-bold text-foreground">{video.title}</h1>
          <VideoUploaderInfo video={video} />
          <VideoDetailActions videoUrl={`/videos/${video.id}`} videoTitle={video.title} />
          <CollapsibleDescription description={video.description} uploadDate={video.uploadDate} views={video.views} />
          <Separator className="my-4 bg-border" />
          <CommentsSection commentCount={Math.floor(Math.random() * 100)} /> {/* Placeholder count */}
          <Separator className="my-4 bg-border" />
          <RelatedVideos videos={relatedVideos} />
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  // No need to await import if mockVideos is directly exported
  return mockVideos.map((video) => ({
    id: video.id,
  }));
}
