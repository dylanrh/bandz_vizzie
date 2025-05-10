'use client';

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getPersonalizedSuggestions, type SuggestionFormState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LightbulbIcon, Loader2, ThumbsUpIcon, TriangleAlertIcon, VideoIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState: SuggestionFormState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LightbulbIcon className="mr-2 h-4 w-4" />}
      Get Suggestions
    </Button>
  );
}

export function Recommendations() {
  const [state, formAction] = useFormState(getPersonalizedSuggestions, initialState);
  const { toast } = useToast();
  const [key, setKey] = useState(Date.now()); // To reset form on successful submission or clear

  useEffect(() => {
    if (state?.timestamp) { // Only react to new state updates
      if (state.message && !state.errors && state.suggestions && state.suggestions.length > 0) {
         toast({
           title: "Suggestions Ready!",
           description: state.message,
           action: <ThumbsUpIcon/>
         });
      } else if (state.message && !state.errors && (!state.suggestions || state.suggestions.length === 0)) {
         toast({
           title: "No Suggestions",
           description: state.message,
         });
      } else if (state.errors) {
        toast({
          title: "Error",
          description: state.message || "Please check the form for errors.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);
  
  const handleClear = () => {
    setKey(Date.now()); // This will re-render the form with its initial state due to key change
    // Optionally, reset state manually if needed, though useFormState doesn't have a direct reset
    // For a full reset including clearing `state` from `useFormState`, a more complex approach or library might be needed
    // Or simply rely on the key change to clear input fields for now.
  };


  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LightbulbIcon className="w-6 h-6 text-primary" />
          Personalized Video Suggestions
        </CardTitle>
        <CardDescription>
          Tell us what you like, and we&apos;ll suggest some immersive videos for you! The more details, the better.
        </CardDescription>
      </CardHeader>
      <form action={formAction} key={key}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="viewingHistory">Your Viewing History (comma-separated titles)</Label>
            <Textarea
              id="viewingHistory"
              name="viewingHistory"
              placeholder="e.g., Mountain Adventure, Ocean Wonders, City Tour"
              rows={3}
              aria-describedby="viewingHistory-error"
            />
            {state?.errors?.viewingHistory && (
              <p id="viewingHistory-error" className="text-sm text-destructive">{state.errors.viewingHistory.join(', ')}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Your Preferences (genres, themes, keywords)</Label>
            <Textarea
              id="preferences"
              name="preferences"
              placeholder="e.g., Nature, Sci-Fi, Relaxing, Space Exploration, Ancient History"
              rows={3}
              aria-describedby="preferences-error"
            />
            {state?.errors?.preferences && (
              <p id="preferences-error" className="text-sm text-destructive">{state.errors.preferences.join(', ')}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="numberOfSuggestions">Number of Suggestions (1-10)</Label>
            <Input
              id="numberOfSuggestions"
              name="numberOfSuggestions"
              type="number"
              defaultValue="5"
              min="1"
              max="10"
              aria-describedby="numberOfSuggestions-error"
            />
            {state?.errors?.numberOfSuggestions && (
              <p id="numberOfSuggestions-error" className="text-sm text-destructive">{state.errors.numberOfSuggestions.join(', ')}</p>
            )}
          </div>
          {state?.errors?._form && (
             <Alert variant="destructive">
               <TriangleAlertIcon className="h-4 w-4" />
               <AlertTitle>Form Error</AlertTitle>
               <AlertDescription>{state.errors._form.join(', ')}</AlertDescription>
             </Alert>
           )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
          <Button type="button" variant="outline" onClick={handleClear} className="w-full sm:w-auto">Clear Form</Button>
          <SubmitButton />
        </CardFooter>
      </form>

      {state?.suggestions && state.suggestions.length > 0 && (
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-3 text-primary">Here are your suggestions:</h3>
          <ul className="space-y-2">
            {state.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-center gap-2 p-2 bg-accent/50 rounded-md">
                <VideoIcon className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
