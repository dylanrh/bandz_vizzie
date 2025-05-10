
import { Skeleton } from '@/components/ui/skeleton';
import { VideoPageHeader } from '@/components/layout/VideoPageHeader';

export default function LoadingVideoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <VideoPageHeader />
      <main className="flex-grow">
        <Skeleton className="w-full aspect-video rounded-none" /> {/* Player skeleton, no rounding if full-width */}
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Skeleton className="h-8 w-3/4 mt-2 rounded" /> {/* Title */}
          
          {/* Uploader Info Skeleton */}
          <div className="flex items-center gap-3 mt-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32 rounded" />
              {/* <Skeleton className="h-3 w-24 rounded" /> */}
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex space-x-2 py-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-md" />
            ))}
          </div>
          
          {/* Description Skeleton */}
          <div className="bg-card p-3 rounded-lg mt-3 space-y-2">
            <Skeleton className="h-4 w-1/2 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-3/4 rounded" />
          </div>

          <Skeleton className="h-px w-full my-4 rounded" /> {/* Separator */}

          {/* Comments Section Skeleton */}
          <div>
            <Skeleton className="h-6 w-1/4 mb-4 rounded" /> {/* Comments title */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-start gap-3 mb-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-grow space-y-1.5">
                  <Skeleton className="h-3 w-1/3 rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                </div>
              </div>
            ))}
          </div>
           <Skeleton className="h-px w-full my-4 rounded" /> {/* Separator */}
            {/* Related Videos Skeleton */}
          <div>
            <Skeleton className="h-6 w-1/3 mb-3 rounded" /> {/* Related title */}
            <div className="grid grid-cols-1 gap-4">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-card p-2 rounded-lg ">
                         <Skeleton className="w-full aspect-video rounded-md mb-2" />
                         <Skeleton className="h-4 w-5/6 rounded mb-1" />
                         <Skeleton className="h-3 w-1/2 rounded" />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
