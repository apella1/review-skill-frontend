import * as z from "zod";

export const flashcardSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(1000, "Content is too long"),
  answer: z
    .string()
    .min(1, "Answer is required")
    .max(1000, "Answer is too long"),
  tags: z.string().optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
});

export type FlashcardFormValues = z.infer<typeof flashcardSchema>;
