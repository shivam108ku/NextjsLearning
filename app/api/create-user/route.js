import { NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST(request){
    try {
        const {name , email , age} = await request.json();
        if(!name || !email || !age){
            return NextResponse.json({
                sucess:false , error:" name , email , age is required"
            }, {status:400})
        }

    const emailExists = users.find(user=>user.email === email)
    if(emailExists){
        return NextResponse.json({
            success:false , error:"Exisiting user"
        },{status:400})
    }
    // Createing user

    const newUser = {
        id:users.length + 1,
        name:name,
        email:email,
        age:age
    }

    users.push(newUser)

    return NextResponse.json({
        success:true,
        data:users,
        message:"User Created",
    },{status:201})

    } catch (err) {
        return NextResponse.json({success:false, error:"Failed to ctreate user"},
            {status:500}
        )
    }
}