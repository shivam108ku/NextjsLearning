import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function DELETE(request, { params }) {
  try {
    const {id} = await params;
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

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return NextResponse.json({
      success: true,
      date: deletedUser,
      message: "User Deleted",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "User Not Updated",
      },
      { status: 500 },
    ); 
  }
}
