import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NotesListProps {
  notes: Note[];
  onNoteSelect: (note: Note) => void;
}

export function NotesList({ notes, onNoteSelect }: NotesListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-y-2">
        {filteredNotes.map((note) => (
          <Card
            key={note.id}
            className="cursor-pointer hover:bg-accent"
            onClick={() => onNoteSelect(note)}
          >
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <div className="flex flex-wrap gap-2">
                {note.tags.split(",").map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Last updated: {new Date(note.updatedAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
