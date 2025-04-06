import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Flashcard } from "@/types/aggregates/flashcards";

interface BrowseTabProps {
  flashcards: Flashcard[];
}

export function BrowseFlashcards({ flashcards }: BrowseTabProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Browse Flashcards</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((card) => (
            <Dialog key={card.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Success Rate:{" "}
                      {card.reviewCount > 0
                        ? `${Math.round(
                            (card.correctCount / card.reviewCount) * 100,
                          )}%`
                        : "No reviews"}
                    </p>
                    {card.tags && (
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag.trim()}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{card.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Question:</h4>
                    <p>{card.body}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Answer:</h4>
                    <p>{card.answer}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Created: {card.createdAt}</p>
                    <p>
                      Last Reviewed:{" "}
                      {card.lastReviewedAt ? card.lastReviewedAt : "Never"}
                    </p>
                    <p>Reviews: {card.reviewCount}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
