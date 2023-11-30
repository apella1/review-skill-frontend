import { FcCamera } from "react-icons/fc";
import { InputCard } from "..";
import { inputs } from "../../constants/content";
import { useState } from "react";

export default function DashboardMainContent() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  return (
    <form className="flex flex-col space-y-4 border border-gray-200 p-8">
      <section className="flex flex-col space-y-12">
        <div
          className="p-12 bg-[#f6f6f6] rounded-[80px] self-center"
          style={{
            backgroundImage: profileImage ? `url(${profileImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <label htmlFor="profile-image" className="cursor-pointer">
            <input
              type="file"
              id="profile-image"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const result = event.target?.result;
                    if (result) {
                      setProfileImage(result.toString());
                    }
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {!profileImage && (
              <div className="bg-gray-600 w-full h-full flex items-center justify-center">
                <FcCamera className="text-3xl"/>
              </div>
            )}
          </label>
        </div>
        <section className="flex flex-col space-y-4">
          {inputs.map((input, index) => (
            <InputCard input={input} key={index} />
          ))}
        </section>
      </section>
      <div className="">
        <button className="bg-[#035afc] px-4 py-2 rounded-[8px] text-white text-[14px] leading-[20px] font-medium w-full">
          Save Changes
        </button>
      </div>
    </form>
  );
}
