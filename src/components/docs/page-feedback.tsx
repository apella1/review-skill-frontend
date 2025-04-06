import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export function PageFeedback() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(
    null,
  );
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // TODO: Implement feedback submission to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 p-4 bg-muted rounded-lg text-center">
        Thank you for your feedback!
      </div>
    );
  }

  return (
    <div className="mt-8 border-t pt-6">
      <h4 className="text-lg font-semibold mb-4">Was this page helpful?</h4>
      <div className="flex gap-4 mb-4">
        <Button
          variant={feedback === "positive" ? "default" : "outline"}
          onClick={() => setFeedback("positive")}
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Yes
        </Button>
        <Button
          variant={feedback === "negative" ? "default" : "outline"}
          onClick={() => setFeedback("negative")}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          No
        </Button>
      </div>
      {feedback === "negative" && (
        <div className="space-y-4">
          <Textarea
            placeholder="How can we improve this page?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </div>
      )}
    </div>
  );
}
