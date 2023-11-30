import { Avatar, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <section className="flex">
      <section className="bg-[#c8cedb] fixed w-[17%] flex flex-col space-y-6 px-4 pt-4 h-screen">
        <div className="flex flex-col space-y-2">
          <Avatar />
          <TextField
            type="search"
            placeholder="Search Cards..."
            value={search}
            onChange={handleSearchChange}
          />
          <Link to="/dashboard/today">Due Today</Link>
          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-2"
          >
            <IoSettingsOutline />
            <p>Settings</p>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="/dashboard/flashcards">Flashcards</Link>
          <Link to="/dashboard/notes">Notes</Link>
        </div>
      </section>
      <section className="min-h-screen ml-auto flex flex-col w-[83%] p-8">
        {children}
      </section>
    </section>
  );
}
