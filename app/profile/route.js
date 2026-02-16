import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    const requestHeaders = new Headers(request.Headers);
    const authHeader = requestHeaders.get("Authorization")
    const headerlist = await headers() // by next js, readonly 

    return NextResponse.json({
        success:true,
        data:"Hello WOrks"
    })
}