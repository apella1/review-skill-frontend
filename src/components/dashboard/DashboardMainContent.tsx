import React, { useEffect, useState } from "react";
import { FcCamera } from "react-icons/fc";
import { client } from "../../axios/axios";
import { DBUser, InputProps } from "../../types/types";
import InputCard from "../InputCard";

export default function DashboardMainContent() {
  const [userData, setUserData] = useState<DBUser>({
    id: "",
    created_at: "",
    updated_at: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_image: null,
  });

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    async function fetchUser() {
      try {
        const res = await client.get("get_user", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const updatedData = res.data as DBUser;
        setUserData(updatedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser().catch((err) => {
      console.error(err);
    });
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

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const jwtToken = localStorage.getItem("token");
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      // form data instance to hold the file
      const formData = new FormData();
      formData.append("profile_image", file);
      try {
        const res = await client.put(
          `users/${userData.id}/profile_image`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${jwtToken}`,
            },
          },
        );
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    uploadImage(e).catch((err) => {
      console.error(err);
    });
  };

  return (
    <form className="flex flex-col space-y-4 border border-gray-200 p-8">
      <section className="flex flex-col space-y-12">
        <div
          className="p-12 bg-[#f6f6f6] rounded-[80px] self-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <label htmlFor="profile-image" className="cursor-pointer">
            <input
              type="file"
              id="profile-image"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="bg-gray-600 w-full h-full flex items-center justify-center">
              <FcCamera className="text-3xl" />
            </div>
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
