import { useCreateFlashcardMutation } from "@/features/flashcards/flashcardApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  flashcardSchema,
  type FlashcardFormValues,
} from "@/lib/schemas/flashcard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function CreateFlashcard() {
  const [createFlashcard] = useCreateFlashcardMutation();

  const form = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardSchema),
    defaultValues: {
      title: "",
      content: "",
      answer: "",
      tags: "",
      difficulty: "medium",
    },
  });

  const onSubmit = async (values: FlashcardFormValues) => {
    try {
      await createFlashcard(values).unwrap();
      form.reset();
      toast.success("Flashcard created successfully");
    } catch (error) {
      console.error("Failed to create flashcard:", error);
      toast.error("Failed to create flashcard");
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Create New Flashcard</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter flashcard title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question/Front Side</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the question or front side content"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer/Back Side</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the answer or back side content"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="javascript, react, frontend"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Create Flashcard</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
