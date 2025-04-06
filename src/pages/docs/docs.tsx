import { DocsLayout } from "@/components/docs/docs-layout";
import { useParams } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { components } from "@/components/docs/mdx-components";
import { docsAnalytics } from "@/lib/services/docs-analytics";
import { useEffect } from "react";

export default function Docs() {
  const { slug = "introduction" } = useParams();

  useEffect(() => {
    docsAnalytics.trackPageView(`/docs/${slug}`);
  }, [slug]);

  return (
    <DocsLayout slug={slug}>
      <MDXProvider components={components}>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {/* MDX content would be rendered here */}
          <h1>Documentation</h1>
          <p>Current page: {slug}</p>
        </div>
      </MDXProvider>
    </DocsLayout>
  );
}
