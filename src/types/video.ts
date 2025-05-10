export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string; // Actual video source, placeholder for now
  duration: string; 
  views: string; 
  uploadDate: string;
  keywordsHint?: string; // For data-ai-hint on images
  uploaderName?: string;
  uploaderAvatarUrl?: string;
  category?: string; // For category tabs like "Nature", "Cities"
}
