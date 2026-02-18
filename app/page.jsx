import dbConnect from "@/lib/db";
import NotesClient from "@/components/NotesClient";
import Note from "@/models/Note";

async function getNotes() {
  await dbConnect();
  const notes = await Note.find({}).sort({ createdAt: -1 }).lean();
  return notes.map((note) => ({
    title: note.title,
    content: note.content,
    _id: note._id.toString(),
    createdAt: note.createdAt ? new Date(note.createdAt).toISOString() : null,
    updatedAt: note.updatedAt ? new Date(note.updatedAt).toISOString() : null,
  }));
}

export default async function Home() {

  const notes = await getNotes();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl text-green-500 font-extrabold">Notes App</h1>
      <NotesClient initialNotes={notes} />
    </div>
  );
}
