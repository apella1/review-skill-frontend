import { useEffect, useState } from "react";
import { client } from "../../axios/axios";
import { CustomButton, FlashcardView } from "../../components";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { DBFlashcard } from "../../types/flashcards";

interface FlashCard {
  title: string;
  body: string;
  tags: string[];
}

export default function FlashCards() {
  const [availableFlashcards, setAvailableFlashcards] = useState<DBFlashcard[]>(
    [],
  );
  const [successMsg, setSuccessMSg] = useState("");
  const [loading, setLoading] = useState(false);
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

  async function createFlashcard() {
    setLoading(true);
    const jwtToken = localStorage.getItem("token");
    try {
      const res = await client.post("create_flashcard", flashcardData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (res.status === 201) {
        setSuccessMSg("Card created successfully!");
        setLoading(false);
        setTimeout(() => {
          setSuccessMSg("");
        }, 5000);
      }
      setFlashcardData({
        title: "",
        body: "",
        tags: [],
      });
    } catch (error) {
      console.error(error);
    }
  }
  function handleCreateFlashcard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createFlashcard().catch((err) => {
      console.error(err);
    });
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    async function fetchFlashcards() {
      const res = await client.get("flashcards", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setAvailableFlashcards(res.data as DBFlashcard[]);
    }
    fetchFlashcards().catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section>
          <h2 className="pb-4 font-semibold text-2xl">
            Create a New Flashcard
          </h2>
          <form
            action=""
            className="flex flex-col space-y-3"
            onSubmit={handleCreateFlashcard}
          >
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
            {successMsg && <p className="text-green-800">{successMsg}</p>}
            <CustomButton
              button={{
                title: "Create Card",
                bgColor: "bg-[#035afc]",
                textColor: "text-white",
                type: "submit",
                rounded: true,
                disabled: loading ? true : false,
              }}
            />
          </form>
        </section>
        {availableFlashcards.length > 0 && (
          <section className="flex flex-col space-y-4">
            <p className="font-semibold text-2xl">Available Flashcards</p>
            <div className="grid grid-cols-4 gap-8">
              {availableFlashcards.map((flashcard, index) => (
                <FlashcardView flashcard={flashcard} key={index} />
              ))}
            </div>
          </section>
        )}
      </DashboardLayout>
    </ProtectedLayout>
  );
}
