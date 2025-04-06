import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface EditOnGithubProps {
  path: string;
}

export function EditOnGithub({ path }: EditOnGithubProps) {
  const REPO_URL = "https://github.com/your-username/reviewskill";
  const editUrl = `${REPO_URL}/edit/main/docs/${path}.mdx`;

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={() => window.open(editUrl, "_blank")}
    >
      <Github className="h-4 w-4" />
      Edit this page on GitHub
    </Button>
  );
}
