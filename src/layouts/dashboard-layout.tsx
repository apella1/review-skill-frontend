import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {
  LogOut,
  Settings,
  User,
  Home,
  Calendar,
  BookOpen,
  StickyNote,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { client } from "@/axios/axios";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/theme-provider";
import { DBUser, SidebarLink } from "@/types/types";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const sidebarLinks: (SidebarLink & { icon: React.ReactNode })[] = [
  {
    title: "Summary",
    link: "/dashboard/summary",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Due Today",
    link: "/dashboard/today",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Flashcards",
    link: "/dashboard/flashcards",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Notes",
    link: "/dashboard/notes",
    icon: <StickyNote className="h-4 w-4" />,
  },
  {
    title: "Settings",
    link: "/dashboard/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export default function DashboardLayout() {
  const [user, setUser] = useState<DBUser>({} as DBUser);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSettings = () => {
    navigate("/dashboard/settings");
  };

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
    fetchUser();
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-6">
            <Link to="/" className="flex items-center">
              ReviewSkill
            </Link>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {sidebarLinks.map((link, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === link.link}
                    tooltip={link.title}
                  >
                    <Link to={link.link} className="flex items-center gap-2">
                      {link.icon}
                      <span>{link.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="font-medium">ReviewSkill</span>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="w-full">
          <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />

              {location.pathname !== "/dashboard/settings" && (
                <Input
                  type="search"
                  placeholder="Search Memory Cards..."
                  value={search}
                  onChange={handleSearchChange}
                  className="w-[400px]"
                />
              )}

              <div className="ml-auto flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {getInitials(
                            user.first_name || "",
                            user.last_name || "",
                          )}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>{`${user.first_name} ${user.last_name}`}</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSettings}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
