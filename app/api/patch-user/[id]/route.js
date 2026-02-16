import { NextResponse } from "next/server";
import { users } from "../../hello/route";

// PATCh for selected changes 

export async function PATCH(request, { params }) {
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

    const body = await request.json();

    users[userIndex] = {
        ...users[userIndex],
        ...body,
        id:userId
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
