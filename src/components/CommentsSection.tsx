import { MessageCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface CommentsSectionProps {
  commentCount?: number;
  className?: string;
}

const mockComments = [
    { id: '1', user: 'User123', avatar: 'https://picsum.photos/seed/commenter1/32/32', text: 'Amazing video! So immersive.', timestamp: '2 hours ago' },
    { id: '2', user: 'VRFan', avatar: 'https://picsum.photos/seed/commenter2/32/32', text: 'Felt like I was really there!', timestamp: '1 day ago' },
];


export function CommentsSection({ commentCount = mockComments.length, className }: CommentsSectionProps) {
  return (
    <div className={`py-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-foreground">Comments ({commentCount})</h3>
        {/* Sort button could go here */}
      </div>

      {/* Add comment input */}
      <div className="flex items-center gap-2 mb-6">
        <Avatar className="h-8 w-8">
            <AvatarImage src="https://picsum.photos/seed/currentuser/32/32" alt="Your avatar" data-ai-hint="user avatar" />
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Input type="text" placeholder="Add a comment..." className="bg-muted focus:bg-card" />
        <Button size="sm">Post</Button>
      </div>
      
      {/* List of comments */}
      <div className="space-y-4">
        {mockComments.map(comment => (
            <div key={comment.id} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.avatar} alt={comment.user} data-ai-hint="commenter avatar"/>
                    <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-foreground">{comment.user}</p>
                        <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                    </div>
                    <p className="text-sm text-foreground mt-0.5">{comment.text}</p>
                </div>
            </div>
        ))}
        {commentCount > mockComments.length && (
             <Button variant="link" className="text-primary p-0 h-auto">Show all comments</Button>
        )}
        {commentCount === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
