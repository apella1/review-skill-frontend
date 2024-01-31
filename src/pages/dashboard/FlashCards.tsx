import { useState } from "react";
import { CustomButton } from "../../components";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { client } from "../../axios/axios";

interface FlashCard {
  title: string;
  body: string;
  tags: string[];
}

export default function FlashCards() {
  const [flashcardData, setFlashcardData] = useState<FlashCard>({
    title: "",
    body: "",
    tags: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "tags") {
      const tags = value.split(",").map((tag) => tag.trim());
      setFlashcardData((prevData) => ({ ...prevData, tags }));
    } else {
      setFlashcardData((prev) => ({ ...prev, [name]: value }));
    }
  };

  async function handleCreateFlashcard(e: React.FormEvent<HTMLFormElement>) {
    const jwtToken = localStorage.getItem("token");
    try {
      e.preventDefault();
      const res = await client.post("create_flashcard", flashcardData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (res.status === 202) {
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section>
          <p className="font-semibold text-2xl">Available Flashcards</p>
        </section>
        <section>
          <h2 className="pb-4 font-semibold text-2xl">
            Create a New Flashcard
          </h2>
          <form action="" className="flex flex-col space-y-3">
            <input
              type="text"
              name="title"
              placeholder="Enter Card Title.."
              onChange={handleChange}
              value={flashcardData.title}
              className="w-[80%] px-4 py-2 border border-gray-200"
            />
            <textarea
              className="border-gray-200 border w-[80%] p-4 h-[200px]"
              name="body"
              placeholder="Enter Card Body"
              value={flashcardData.body}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Enter tags separated by a comma..."
              value={flashcardData.tags.join(", ")}
              onChange={handleChange}
              className="w-[80%] px-4 py-2 border border-gray-200"
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
