import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLElement>;
}

export function TableOfContents({ contentRef }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll("h2, h3");
    const headingElements = Array.from(elements) as HTMLHeadingElement[];

    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id =
          heading.textContent?.toLowerCase().replace(/\s+/g, "-") ?? "";
      }
    });

    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [contentRef]);

  return (
    <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <h4 className="text-sm font-semibold mb-4">On This Page</h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              "hover:text-foreground transition-colors",
              heading.tagName === "H3" && "pl-4",
              activeId === heading.id
                ? "text-primary font-medium"
                : "text-muted-foreground",
            )}
          >
            <a href={`#${heading.id}`}>{heading.textContent}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
