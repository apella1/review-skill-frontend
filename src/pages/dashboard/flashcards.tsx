import { BrowseFlashcards } from "@/components/flashcards/browse-flashcards";
import { CreateFlashcard } from "@/components/flashcards/create-flashcard";
import { ReviewFlashcards } from "@/components/flashcards/review-flashcards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetFlashcardsQuery } from "@/features/flashcards/flashcardApi";

export default function Flashcards() {
  const { data: flashcards = [], isLoading } = useGetFlashcardsQuery();

  const handleReview = (cardId: string, isCorrect: boolean) => {
    // TODO: Implement review mutation
    console.log("Review:", cardId, isCorrect);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="create" className="space-y-6">
        <TabsList>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
          <TabsTrigger value="browse">Browse</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          <CreateFlashcard />
        </TabsContent>

        <TabsContent value="review">
          <ReviewFlashcards flashcards={flashcards} onReview={handleReview} />
        </TabsContent>

        <TabsContent value="browse">
          <BrowseFlashcards flashcards={flashcards} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
