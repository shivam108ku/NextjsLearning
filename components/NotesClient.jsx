"use client";

import axios from "axios";
import { useState } from "react";

const NoteClient = ({initialNotes}) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    loading: false,
    notes:initialNotes,
  });

  const createNote = async (e) => {
    e.preventDefault();
    if (!state.title.trim() || !state.content.trim()) return;

    setState((prev) => ({ ...prev, loading: true }));
    try {
     const response = await axios.post(
  "/api/notes",
  { title: state.title.trim(), content: state.content.trim() },  // DATA
  { headers: { "Content-Type": "application/json" } }           // OPTIONS
);
      const result = response.data?.data;
      if (!result) {
        throw new Error("Invalid API response");
      }
      const newNote = {
        _id: result._id?.toString?.() ?? String(result._id),
        title: result.title,
        content: result.content,
        createdAt: result.createdAt ?? null,
        updatedAt: result.updatedAt ?? null,
      };
      setState((prev) => ({ 
        ...prev, 
        loading: false,
        notes: [newNote, ...prev.notes],
        title: "",
        content: ""
      }));
    } catch (error) {
      console.error("Error creating note:", error);
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-md max-w-md mx-auto mt-8">
      <form onSubmit={createNote} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Create New Note
        </h2>
        <div>
          <input
            type="text"
            placeholder="Note Title"
            value={state.title}
            onChange={(e) =>
              setState((prev) => ({ ...prev, title: e.target.value }))
            }
            required
            className="w-full border-b border-gray-300 text-gray-800 p-2 focus:outline-none focus:border-black/80"
          />

          <textarea
            placeholder="Note Content"
            value={state.content}
            onChange={(e) =>
              setState((prev) => ({ ...prev, content: e.target.value }))
            }
            rows={4}
            className="w-full border-b border-gray-300 text-gray-800 p-2 focus:outline-none focus:border-black/80 resize-none"
            required
          />

          <button
            disabled={state.loading}
            className=" mt-4 bg-blue-500 hover:bg-blue-600
                 text-white py-2 px-6 rounded-md transition 
                 duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {state.loading ? "Saving..." : "Create Note"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Notes ({state.notes.length})</h2>
        {state.notes.length === 0 ? ( 
          <p>No Notes</p> 
        ) : ( 
          state.notes.map((note) => (
            <div key={note._id} className="border p-3 rounded bg-white mb-3"> 
              <h3 className="font-semibold text-gray-800">{note.title}</h3>
              <p className="text-gray-600 mt-2">{note.content}</p>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-500 hover:underline">edit</button>
                <button className="text-red-500 hover:underline">delete</button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default NoteClient;
