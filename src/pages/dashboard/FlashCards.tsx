import { useState } from "react";
import { CustomButton } from "../../components";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { client } from "../../axios/axios";

type FlashCard = {
  title: string;
  body: string;
};

export default function FlashCards() {
  const [flashcardData, setFlashcardData] = useState<FlashCard>({
    title: "",
    body: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFlashcardData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleCreateFlashcard() {
    try {
      const res = await client.post("flashcard", flashcardData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section>
          <p>Available Flashcards</p>
        </section>
        <section>
          <h2 className="pb-4">Create a New Flashcard</h2>
          <form action="" className="flex flex-col space-y-3">
            <input
              type="text"
              name="title"
              placeholder="Enter Card Title.."
              onChange={handleChange}
              value={flashcardData.title}
              className="w-fit px-4 py-2 border border-gray-200"
            />
            <textarea
              className="border-gray-200 border w-[80%] p-4 h-[200px]"
              name="body"
              placeholder="Enter Card Body"
              value={flashcardData.body}
              onChange={handleChange}
            />
            <CustomButton
              button={{
                title: "Create Card",
                bgColor: "bg-[#035afc]",
                textColor: "text-white",
                action: () => handleCreateFlashcard,
                rounded: true,
              }}
            />
          </form>
        </section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
