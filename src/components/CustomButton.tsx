import { ButtonProperties } from "../types/types";

export default function CustomButton({ button }: { button: ButtonProperties }) {
  const { action, title, bgColor, textColor, rounded, full } = button;
  return (
    <button
      onClick={action}
      className={`${bgColor} px-4 py-2 md:py-3 text-[14px] lg:text-[18px] leading-[17px] ${textColor} font-medium ${
        full ? "w-full" : "w-fit"
      } ${rounded && "rounded-[8px]"}`}
    >
      {title}
    </button>
  );
}
