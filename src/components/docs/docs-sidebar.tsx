import { cn } from "@/lib/utils";
import { docsNavigation } from "@/data/docs-navigation";
import { Link, useLocation } from "react-router";

export function DocsSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-[calc(100vh-4rem)] overflow-y-auto border-r">
      <div className="space-y-4 py-4 px-2">
        {docsNavigation.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/docs/${item.slug}`}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                    location.pathname === `/docs/${item.slug}`
                      ? "bg-accent text-accent-foreground"
                      : "transparent",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
