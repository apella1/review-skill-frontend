interface Summary {
  title: string;
  value: string;
}
export default function FlashcardSummary({ summary }: { summary: Summary }) {
  const { title, value } = summary;
  return (
    <div className="p-4 flex flex-col space-y-2 border border-gray-200">
      <p>{title}</p>
      <p className="text-[#035afc]">{value}</p>
    </div>
  );
}
