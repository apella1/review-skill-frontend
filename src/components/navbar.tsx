import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface MenuItem {
  title: string;
  link: string;
  variant?: "default" | "ghost" | "link";
}

const menuItems: MenuItem[] = [
  { title: "Docs", link: "/docs", variant: "ghost" },
  { title: "Login", link: "/auth/login", variant: "ghost" },
  { title: "Sign Up", link: "/auth/sign-up", variant: "default" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "flex items-center space-x-2",
              "font-bold text-xl hover:text-primary",
            )}
          >
            ReviewSkill
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button asChild variant={item.variant} size="sm">
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <div className="flex flex-col gap-4 py-4">
                  {menuItems.map((item, index) => (
                    <Button
                      key={index}
                      asChild
                      variant={item.variant}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item.link}>{item.title}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
