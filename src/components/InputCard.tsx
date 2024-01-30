import { InputProps } from "../types/types";

export default function InputCard({ input }: { input: InputProps }) {
  const {
    inputId,
    type,
    name,
    placeholder,
    value,
    label,
    handleChange,
    disabled,
  } = input;
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={inputId}
        className="text-[#7C7C8D] text-[13px] leading-[16px] font-medium"
      >
        {label}
      </label>
      <input
        disabled={disabled || false}
        type={type}
        name={name}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
      />
    </div>
  );
}
