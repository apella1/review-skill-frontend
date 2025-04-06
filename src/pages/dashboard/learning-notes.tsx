import { NoteEditor } from "@/components/learning-notes/notes-editor";
import { NotesList } from "@/components/learning-notes/notes-list";
import { NoteViewer } from "@/components/learning-notes/notes-viewer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "react-toastify";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function LearningNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (
    noteData: Omit<Note, "id" | "createdAt" | "updatedAt">,
  ) => {
    if (isEditing && selectedNote) {
      // Update existing note
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote.id
          ? {
              ...note,
              ...noteData,
              updatedAt: new Date(),
            }
          : note,
      );
      setNotes(updatedNotes);
      setSelectedNote(null);
      setIsEditing(false);
      toast.success("Note updated successfully");
    } else {
      // Create new note
      const newNote: Note = {
        id: crypto.randomUUID(),
        ...noteData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setNotes([...notes, newNote]);
      toast.success("Note created successfully");
    }
  };

  const handleEdit = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  const handleDelete = (noteId: string) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    setSelectedNote(null);
    toast.success("Note deleted successfully");
  };

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="create" className="space-y-6">
        <TabsList>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="browse">Browse</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          <NoteEditor
            onSave={handleSave}
            initialValues={isEditing && selectedNote ? selectedNote : undefined}
            isEditing={isEditing}
          />
        </TabsContent>

        <TabsContent value="browse">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <NotesList
                notes={notes}
                onNoteSelect={(note) => setSelectedNote(note)}
              />
            </div>
            <div className="md:col-span-2">
              {selectedNote && (
                <NoteViewer
                  note={selectedNote}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
