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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const noteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  tags: z.string(),
  content: z.string().min(1, "Content is required"),
});

type NoteFormValues = z.infer<typeof noteSchema>;

interface NoteEditorProps {
  onSave: (note: NoteFormValues) => Promise<void>;
  initialValues?: NoteFormValues;
  isEditing?: boolean;
}

export function NoteEditor({
  onSave,
  initialValues,
  isEditing = false,
}: NoteEditorProps) {
  const [content, setContent] = useState(initialValues?.content || "");

  const form = useForm<NoteFormValues>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: initialValues?.title || "",
      tags: initialValues?.tags || "",
      content: initialValues?.content || "",
    },
  });

  const onSubmit = async (values: NoteFormValues) => {
    try {
      await onSave({ ...values, content });
      if (!isEditing) {
        form.reset();
        setContent("");
      }
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {isEditing ? "Edit Note" : "Create New Note"}
        </h2>
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
                    <Input placeholder="Enter note title" {...field} />
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
                      placeholder="react, typescript, web-development"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={() => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <div data-color-mode="light">
                      <MDEditor
                        value={content}
                        onChange={(val) => setContent(val || "")}
                        height={400}
                        preview="edit"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">
              {isEditing ? "Update" : "Create"} Note
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
