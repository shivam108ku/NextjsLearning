import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PUT(request, { params}){
    try {
        const {id} = await params;
        const userId = parseInt(id);

        const userIndex = users.findIndex(u=>u.id === userId)
        if(userIndex === -1){
            return NextResponse({
                success:false , error: "User not found"
            }, {status: 404});
        }
    }
    catch (err){

    }
}