import { useRef } from "react";
import { DocsSidebar } from "./docs-sidebar";
import { DocsCommandMenu } from "./command-menu";
import { ReadingProgress } from "./reading-progress";
import { Breadcrumbs } from "./breadcrumbs";
import { TableOfContents } from "./table-of-contents";
import { VersionSelector } from "./version-selector";
import { PageFeedback } from "./page-feedback";
import { RelatedArticles } from "./related-articles";
import { EditOnGithub } from "./edit-on-github";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface DocsLayoutProps {
  children: React.ReactNode;
  slug: string;
}

export function DocsLayout({ children, slug }: DocsLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen">
      <ReadingProgress />
      <DocsSidebar />
      <div className="flex-1">
        <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
          <div className="flex h-14 items-center px-4 gap-4">
            <Button
              variant="outline"
              className="w-full justify-start text-muted-foreground"
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent("keydown", {
                    key: "k",
                    ctrlKey: true,
                  }),
                )
              }
            >
              <Search className="mr-2 h-4 w-4" />
              Search docs...
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <VersionSelector />
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex-1 max-w-3xl mx-auto py-6 px-8">
            <Breadcrumbs slug={slug} />
            <div className="mt-4 mb-8 flex items-center justify-between">
              <EditOnGithub path={slug} />
            </div>
            <div ref={contentRef} className="docs-content">
              {children}
            </div>
            <PageFeedback />
            <RelatedArticles currentSlug={slug} />
          </div>
          <div className="w-64 py-6 px-4 hidden xl:block">
            <TableOfContents
              contentRef={contentRef as React.RefObject<HTMLElement>}
            />
          </div>
        </div>
      </div>
      <DocsCommandMenu />
    </div>
  );
}
