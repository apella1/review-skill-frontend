import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { docsNavigation } from "@/data/docs-navigation";
import { Link } from "react-router";

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const getRelatedArticles = () => {
    // Simple algorithm to find related articles based on the current section
    const currentSection = docsNavigation.find((section) =>
      section.items.some((item) => item.slug === currentSlug),
    );

    return currentSection?.items
      .filter((item) => item.slug !== currentSlug)
      .slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <div className="mt-8 border-t pt-6">
      <h4 className="text-lg font-semibold mb-4">Related Articles</h4>
      <div className="grid gap-4">
        {relatedArticles?.map((article) => (
          <Card key={article.slug}>
            <CardContent className="p-4">
              <Link to={`/docs/${article.slug}`}>
                <CardTitle className="text-base hover:text-primary">
                  {article.title}
                </CardTitle>
                {article.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {article.description}
                  </p>
                )}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
