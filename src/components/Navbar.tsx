import { Link } from "react-router-dom";
import { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  { title: "Docs", link: "/docs" },
  { title: "Login", link: "/auth/login" },
  { title: "Sign Up", link: "/auth/sign-up" },
];
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between pb-8">
      <Link to="/" className="text-[#035afc] font-semibold text-[26px]">
        ReviewSkill
      </Link>
      <div className="flex items-center space-x-6">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
