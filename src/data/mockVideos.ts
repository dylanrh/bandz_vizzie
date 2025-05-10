import type { Video } from '@/types/video';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Majestic Mountain Vista 360°',
    description: 'Experience the breathtaking beauty of the Alps in full 360 degrees. A journey through stunning peaks and serene valleys.',
    thumbnailUrl: 'https://picsum.photos/seed/alps-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '4:15',
    views: '2.1M',
    uploadDate: '3 days ago',
    keywordsHint: 'mountain landscape'
  },
  {
    id: '2',
    title: 'Underwater Coral Reef Adventure 360°',
    description: 'Dive into a vibrant coral reef and swim with exotic marine life. Explore the colorful world beneath the waves.',
    thumbnailUrl: 'https://picsum.photos/seed/coral-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '7:30',
    views: '1.5M',
    uploadDate: '1 week ago',
    keywordsHint: 'coral reef'
  },
  {
    id: '3',
    title: 'Ancient City Exploration 360°',
    description: 'Walk through the historic ruins of an ancient civilization. Discover secrets of the past in this immersive tour.',
    thumbnailUrl: 'https://picsum.photos/seed/ruins-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '6:22',
    views: '980K',
    uploadDate: '2 weeks ago',
    keywordsHint: 'ancient ruins'
  },
  {
    id: '4',
    title: 'Aurora Borealis Night Sky 360°',
    description: 'Witness the magical dance of the Northern Lights in stunning 360° clarity. A truly unforgettable spectacle.',
    thumbnailUrl: 'https://picsum.photos/seed/aurora-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '3:50',
    views: '3.2M',
    uploadDate: '5 days ago',
    keywordsHint: 'aurora borealis'
  },
  {
    id: '5',
    title: 'Rainforest Canopy Walk 360°',
    description: 'Journey through the lush green canopy of a tropical rainforest. Encounter diverse flora and fauna from a unique perspective.',
    thumbnailUrl: 'https://picsum.photos/seed/rainforest-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '8:10',
    views: '750K',
    uploadDate: '1 month ago',
    keywordsHint: 'rainforest canopy'
  },
  {
    id: '6',
    title: 'Desert Dunes at Sunset 360°',
    description: 'Experience the serene beauty of desert dunes as the sun sets, painting the sky with incredible colors.',
    thumbnailUrl: 'https://picsum.photos/seed/desert-vizzie/600/400',
    videoUrl: 'placeholder.mp4',
    duration: '5:05',
    views: '1.1M',
    uploadDate: '10 days ago',
    keywordsHint: 'desert sunset'
  },
];

export const getVideoById = (id: string): Video | undefined => {
  return mockVideos.find(video => video.id === id);
};
