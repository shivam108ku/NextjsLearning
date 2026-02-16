import { NextResponse } from "next/server";
import { users } from "../../hello/route";

// PUT for all changes 

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextResponse(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 },
      );
    }

    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          sucess: false,
          error: " name , email , age is required",
        },
        { status: 400 },
      );
    }

    users[userIndex] = {
        id:userId,
        name:name,
        email:email,
        age:age
    }

    return NextResponse.json({
        success:true,
        date:users[userIndex],
        message:"User Updated"
    })

  } catch (err) {
    return NextResponse.json({
        success:false, 
        message:"User Not Updated"
    },{status:500})
  }
}
