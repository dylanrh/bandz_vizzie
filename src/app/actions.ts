'use server';

import { suggestVideos as suggestVideosFlow, type SuggestVideosInput, type SuggestVideosOutput } from '@/ai/flows/suggest-videos';
import { z } from 'zod';

const SuggestionFormSchema = z.object({
  viewingHistory: z.string().min(1, "Viewing history cannot be empty."),
  preferences: z.string().min(1, "Preferences cannot be empty."),
  numberOfSuggestions: z.coerce.number().min(1).max(10).default(5),
});

export interface SuggestionFormState {
  message: string | null;
  suggestions?: string[];
  errors?: {
    viewingHistory?: string[];
    preferences?: string[];
    numberOfSuggestions?: string[];
    _form?: string[];
  };
  timestamp?: number;
}

export async function getPersonalizedSuggestions(
  prevState: SuggestionFormState | undefined,
  formData: FormData
): Promise<SuggestionFormState> {
  const validatedFields = SuggestionFormSchema.safeParse({
    viewingHistory: formData.get('viewingHistory'),
    preferences: formData.get('preferences'),
    numberOfSuggestions: formData.get('numberOfSuggestions'),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  }
  
  const inputData: SuggestVideosInput = validatedFields.data;

  try {
    const result: SuggestVideosOutput = await suggestVideosFlow(inputData);
    if (result.suggestions && result.suggestions.length > 0) {
      return {
        message: "Here are your personalized video suggestions!",
        suggestions: result.suggestions,
        timestamp: Date.now(),
      };
    } else {
      return {
        message: "No suggestions found based on your input. Try broadening your preferences.",
        timestamp: Date.now(),
      };
    }
  } catch (error) {
    console.error("Error calling suggestVideosFlow:", error);
    return {
      message: "An error occurred while fetching suggestions. Please try again later.",
      errors: { _form: ["AI service error."] },
      timestamp: Date.now(),
    };
  }
}
