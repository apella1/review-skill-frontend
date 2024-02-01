import { DBFlashcard } from "../types/flashcards";

export default function FlashcardView({
  flashcard,
}: {
  flashcard: DBFlashcard;
}) {
  const { title, tags } = flashcard;
  return (
    <div className="border border-gray-200 rounded-md flex flex-col space-y-2 p-4">
      <h2 className="text-base">{title}</h2>
      <div className="flex items-center space-x-2 italic font-light">
        <p>Tags: </p>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}
