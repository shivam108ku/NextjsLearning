"use client"

import { useState } from "react";

const NoteClient = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    loading: false,
  });

  return(
    <div className="p-4 bg-gray-50 rounded-md max-w-md mx-auto mt-8">
        <form action="" className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Create New Note</h2>
            <div>
                <input
                  type="text"
                  placeholder="Note Title"
                  value={state.title}
                  onChange={e => setState(prev => ({ ...prev, title: e.target.value }))}
                  required
                className="w-full border-b border-gray-300 text-gray-800 p-2 focus:outline-none focus:border-black/80"
                />

                <textarea
                  placeholder="Note Content"
                  value={state.content}
                  onChange={e => setState(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full border-b border-gray-300 text-gray-800 p-2 focus:outline-none focus:border-black/80 resize-none"
                  required
                />

                <button disabled={state.loading}
                className=" mt-4 bg-blue-500 hover:bg-blue-600
                 text-white py-2 px-6 rounded-md transition 
                 duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {state.loading ? "Saving...": "Create Note"}
                </button>
            </div>
        </form>
    </div>
  )
};

export default NoteClient;
