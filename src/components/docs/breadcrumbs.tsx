import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router";
import { docsNavigation } from "@/data/docs-navigation";

interface BreadcrumbsProps {
  slug: string;
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const getBreadcrumbs = () => {
    const section = docsNavigation.find((section) =>
      section.items.some((item) => item.slug === slug),
    );
    const page = section?.items.find((item) => item.slug === slug);

    return {
      section: section?.title,
      page: page?.title,
    };
  };

  const { section, page } = getBreadcrumbs();

  return (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link to="/docs" className="hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      {section && (
        <>
          <span>{section}</span>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
      {page && <span className="text-foreground">{page}</span>}
    </div>
  );
}
