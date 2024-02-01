export interface DBFlashcard {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  body: string;
  tags: string[];
  last_reviewed_at: string;
  review_count: number;
  correct_count: number;
  difficulty_level: number;
  user_id: string;
}
