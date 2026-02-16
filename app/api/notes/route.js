import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
 
let Note = null;

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📦 Body:", body);
    
    const { title, content } = body;
    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "Fields required" }, { status: 400 });
    }

    await dbConnect();
   
    if (!Note) {
      const mongoose = await import("mongoose");
      const noteSchema = new mongoose.Schema({
        title: String,
        content: String
      }, { timestamps: true });
      Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
    }
    
    const note = await Note.create({ title: title.trim(), content: content.trim() });
 
    
    return NextResponse.json({ success: true, data: note }, { status: 201 });
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
