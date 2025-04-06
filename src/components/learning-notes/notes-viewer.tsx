import { Card, CardContent } from "@/components/ui/card";
import MDEditor from "@uiw/react-md-editor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoteViewerProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (noteId: string) => void;
}

export function NoteViewer({ note, onEdit, onDelete }: NoteViewerProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{note.title}</h2>
            <div className="flex gap-2 mb-2">
              {note.tags.split(",").map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag.trim()}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date(note.updatedAt).toLocaleDateString()}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => onEdit(note)}>
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete(note.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div data-color-mode="light">
          <MDEditor.Markdown source={note.content} />
        </div>
      </CardContent>
    </Card>
  );
}
