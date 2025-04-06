import { useCallback, useEffect, useState } from "react";
import { client } from "../../axios/axios";
import { DBFlashcard } from "../../types/flashcards";
import CustomButton from "@/components/CustomButton";
import FlashcardView from "@/components/FlashcardView";

interface FlashCard {
  title: string;
  body: string;
  tags: string[];
}

export default function FlashCards() {
  const [dataPosted, setDataPosted] = useState(false);
  const [successDeleteMsg, setSuccessDeleteMsg] = useState("");
  const [availableFlashcards, setAvailableFlashcards] = useState<DBFlashcard[]>(
    [],
  );
  const [successCreateMsg, setSuccessCreateMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [flashcardData, setFlashcardData] = useState<FlashCard>({
    title: "",
    body: "",
    tags: [],
  });
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

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
  const deleteFlashcard = useCallback(async function (id: string) {
    const jwtToken = localStorage.getItem("token");
    try {
      const res = await client.delete(`flashcards/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (res.status === 200) {
        setSuccessDeleteMsg("Flashcard deleted successfully!");
        setTimeout(() => {
          setSuccessDeleteMsg("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const handleFlashcardDelete = useCallback(
    (id: string) => {
      deleteFlashcard(id)
        .then(() => {
          setAvailableFlashcards((prevCards) =>
            prevCards.filter((card) => card.id !== id),
          );
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [deleteFlashcard],
  );
  const createFlashcard = useCallback(
    async function () {
      setLoading(true);
      const jwtToken = localStorage.getItem("token");
      try {
        const res = await client.post("create_flashcard", flashcardData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (res.status === 201) {
          setDataPosted(true);
          setSuccessCreateMsg("Card created successfully!");
          setLoading(false);
          setTimeout(() => {
            setSuccessCreateMsg("");
          }, 2000);
        }
        setFlashcardData({
          title: "",
          body: "",
          tags: [],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [flashcardData],
  );

  const handleCreateFlashcard = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createFlashcard().catch((err) => {
        console.error(err);
      });
    },
    [createFlashcard],
  );

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
  }, [dataPosted]);

  return (
    <section>
      <section>
        <h2 className="pb-4 font-semibold text-2xl">Create a New Flashcard</h2>
        <form
          action=""
          className="flex flex-col space-y-3"
          onSubmit={handleCreateFlashcard}
        >
          <input
            required
            type="text"
            name="title"
            placeholder="Enter Card Title.."
            onChange={handleChange}
            value={flashcardData.title}
            className="w-[80%] px-4 py-2 border border-gray-200"
          />
          <textarea
            required
            className="border-gray-200 border w-[80%] p-4 h-[200px]"
            name="body"
            placeholder="Enter Card Body"
            value={flashcardData.body}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="tags"
            placeholder="Enter tags separated by a comma..."
            value={flashcardData.tags.join(", ")}
            onChange={handleChange}
            className="w-[80%] px-4 py-2 border border-gray-200"
          />
          {successCreateMsg && (
            <p className="text-green-800">{successCreateMsg}</p>
          )}
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
          <div>
            <input
              type="search"
              placeholder="Search Flashcards..."
              value={search}
              onChange={handleSearchChange}
              className="w-fit border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
            />
          </div>
          {successDeleteMsg && (
            <p className="text-green-800 text-base">{successDeleteMsg}</p>
          )}
          <div className="grid grid-cols-4 gap-8">
            {availableFlashcards.map((flashcard, index) => (
              <FlashcardView
                flashcard={flashcard}
                key={index}
                handleFlashcardDelete={() => {
                  handleFlashcardDelete(flashcard.id);
                }}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
