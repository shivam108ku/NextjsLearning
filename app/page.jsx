import dbConnect from "@/lib/db";
import NotesClient from "@/components/NotesClient"
import Note from "@/models/Note"

async function getNotes(){
  await dbConnect();
  const notes = await Note.find({}).sort({createdAt:-1})
  return notes.map({note}=>({
    ...note,
    _id: note._id.toString(),
  }))
}

export default async function Home() {
  return (
     <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="text-4xl text-green-500 font-extrabold">Notes App</h1>
          <NotesClient/>
     </div>
  );
}
