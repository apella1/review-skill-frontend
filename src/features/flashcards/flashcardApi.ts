import { baseApi } from "@/lib/api/baseApi";
import type { Flashcard } from "@/types/aggregates/flashcards";
import type { FlashcardFormValues } from "@/lib/schemas/flashcard";

export const flashcardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlashcards: builder.query<Flashcard[], void>({
      query: () => "flashcards",
      providesTags: ["Flashcard"],
    }),

    createFlashcard: builder.mutation<Flashcard, FlashcardFormValues>({
      query: (flashcard) => ({
        url: "flashcards",
        method: "POST",
        body: {
          title: flashcard.title,
          body: flashcard.content,
          answer: flashcard.answer,
          tags: flashcard.tags
            ? flashcard.tags.split(",").map((tag) => tag.trim())
            : [],
          difficulty_level:
            flashcard.difficulty === "easy"
              ? 1
              : flashcard.difficulty === "medium"
                ? 2
                : 3,
        },
      }),
      invalidatesTags: ["Flashcard"],
    }),

    updateFlashcard: builder.mutation<
      Flashcard,
      Partial<Flashcard> & Pick<Flashcard, "id">
    >({
      query: ({ id, ...patch }) => ({
        url: `flashcards/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Flashcard"],
    }),

    deleteFlashcard: builder.mutation<void, string>({
      query: (id) => ({
        url: `flashcards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Flashcard"],
    }),
  }),
});

export const {
  useGetFlashcardsQuery,
  useCreateFlashcardMutation,
  useUpdateFlashcardMutation,
  useDeleteFlashcardMutation,
} = flashcardApi;
