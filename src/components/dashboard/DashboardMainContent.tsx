import { useEffect, useState } from "react";
import { FcCamera } from "react-icons/fc";
import { InputCard } from "..";
import { DBUSer, InputProps } from "../../types/types";
import { client } from "../../axios/axios";

export default function DashboardMainContent() {
  const [userData, setUserData] = useState<DBUSer>({
    id: "",
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    async function fetchUser() {
      try {
        const res = await client.get("get_user", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const updatedData = res.data;
        setUserData(updatedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  const userInformation: InputProps[] = [
    {
      inputId: "firstName",
      type: "text",
      placeholder: "First Name",
      value: userData.first_name,
      label: "First Name",
      name: "firstName",
      disabled: true,
    },
    {
      inputId: "lastName",
      type: "text",
      placeholder: "Last Name",
      value: userData.last_name,
      label: "Last Name",
      name: "lastName",
      disabled: true,
    },
    {
      inputId: "email",
      type: "email",
      placeholder: "Email",
      value: userData.email,
      label: "Email",
      name: "email",
    },
  ];

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
                <FcCamera className="text-3xl" />
              </div>
            )}
          </label>
        </div>
        <section className="flex flex-col space-y-4">
          {userInformation.map((input, index) => (
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
