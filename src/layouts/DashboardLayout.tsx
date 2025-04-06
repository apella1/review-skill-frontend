import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = useState<DBUser>({} as DBUser);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSettings = () => {
    navigate("/dashboard/settings");
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
          <Link to={"/"} className="font-medium text-2xl pb-8">
            reviewskill
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
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                {...stringAvatar(`${user.first_name} ${user.last_name}`)}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleSettings}>
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <IoMdLogOut />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </section>
        {children}
      </section>
    </section>
  );
}
