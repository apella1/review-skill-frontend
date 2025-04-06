import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Flashcard } from "@/types/aggregates/flashcards";
import { useState } from "react";

interface ReviewFlashcardProps {
  flashcards: Flashcard[];
  onReview: (cardId: string, isCorrect: boolean) => void;
}

export function ReviewFlashcards({
  flashcards,
  onReview,
}: ReviewFlashcardProps) {
  const [selectedCard, setSelectedCard] = useState<Flashcard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReview = (cardId: string, isCorrect: boolean) => {
    onReview(cardId, isCorrect);
    setShowAnswer(false);
    setSelectedCard(null);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Review Flashcards</h2>
      </CardHeader>
      <CardContent>
        {selectedCard ? (
          <div className="space-y-4">
            <div className="min-h-[200px] p-6 border rounded-lg">
              <h3 className="font-semibold mb-4">{selectedCard.title}</h3>
              {showAnswer ? selectedCard.answer : selectedCard.body}
            </div>
            {!showAnswer ? (
              <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
            ) : (
              <div className="flex space-x-4">
                <Button
                  variant="destructive"
                  onClick={() => handleReview(selectedCard.id, false)}
                >
                  Incorrect
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleReview(selectedCard.id, true)}
                >
                  Correct
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            {flashcards.length > 0 ? (
              <Button
                onClick={() =>
                  setSelectedCard(
                    flashcards[Math.floor(Math.random() * flashcards.length)],
                  )
                }
              >
                Start Review
              </Button>
            ) : (
              <p>No flashcards available for review</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
