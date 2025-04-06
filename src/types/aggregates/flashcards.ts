export interface Flashcard {
  id: string;
  createdAt: string;
  updatedAat: string;
  title: string;
  body: string;
  answer: string;
  tags: string[];
  lastReviewedAt: string;
  reviewCount: number;
  correctCount: number;
  difficultyLevel: number;
  userId: string;
}
