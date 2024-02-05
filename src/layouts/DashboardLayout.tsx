import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { client } from "../axios/axios";
import { DBUser, SidebarLink } from "../types/types";

const sidebarLinks: SidebarLink[] = [
  { title: "Summary", link: "/dashboard/summary" },
  { title: "Due Today", link: "/dashboard/today" },
  { title: "Flashcards", link: "/dashboard/flashcards" },
  { title: "Notes", link: "/dashboard/notes" },
  { title: "Settings", link: "/dashboard/settings" },
];

function stringToColor(str: string) {
  let hash = 0;
  let i;
  for (i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<DBUser>({} as DBUser);
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  const location = useLocation();

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
        setUser(updatedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser().catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <section className="flex">
      <section className="fixed w-[17%] flex flex-col justify-between space-y-6 px-4 py-4 h-screen">
        <div className="flex flex-col space-y-4">
          <Link
            to={"/"}
            className="text-[#035afc] font-semibold text-[26px] pb-8"
          >
            ReviewSkill
          </Link>
          <div className="flex flex-col space-y-2">
            {sidebarLinks.map((sidebarLink, index) => (
              <Link
                to={sidebarLink.link}
                key={index}
                className={`${
                  location.pathname === sidebarLink.link
                    ? "bg-[#035afc] text-white"
                    : "bg-[#fafcfc]"
                } px-4 py-2 w-full rounded-[5px] font-medium`}
              >
                {sidebarLink.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p> &copy; {new Date().getFullYear()}</p>
          <p className="text-[#035afc] font-medium">ReviewSkill</p>
        </div>
      </section>
      <section className="min-h-screen ml-auto flex flex-col space-y-6 w-[83%] p-4">
        <section
          className={`flex items-center ${
            location.pathname === "/dashboard/settings"
              ? "justify-end"
              : "justify-between"
          }`}
        >
          {location.pathname !== "/dashboard/settings" && (
            <input
              type="search"
              placeholder="Search Memory Cards..."
              value={search}
              onChange={handleSearchChange}
              className="w-[50%] border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
            />
          )}
          <Avatar {...stringAvatar(`${user.first_name} ${user.last_name}`)} />
        </section>
        {children}
      </section>
    </section>
  );
}
