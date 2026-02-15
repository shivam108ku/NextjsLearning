import { NextResponse } from "next/server";

export  const  users = [
    {
         id:1,
         name:"Shivam Kuamr",
         email:"shivaam108ku@gmail.com",
         agr:"231",
    },
     {
         id:2,
         name:"Shivam Kuamr2",
         email:"shivaam108ku@gmail.com2",
         agr:"232",
    },
     {
         id:3,
         name:"Shivam Kuamr3",
         email:"shivaam108ku@gmail.com3",
         agr:"233",
    },
];

export async function GET(request){
    try {
        return NextResponse.json({
            success: true,
            data: users,
            total: users.length
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "An error occurred",
            error: error?.message || error
        }, { status: 500 });
    }

}