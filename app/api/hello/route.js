import { NextResponse } from "next/server";

export const users = [
    {
         id:1,
         name:"Shivam Kuamr",
         email:"shivaam108ku@gmail.com",
         age:"231",
    },
     {
         id:2,
         name:"Shivam Kuamr2",
         email:"shivaam108ku@gmail.com2",
         age:"232",
    },
     {
         id:3,
         name:"Shivam Kuamr3",
         email:"shivaam108ku@gmail.com3",
         age:"233",
    },
];

export async function GET(request) {
  try {

    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name")
    const age = searchParams.get("age")
     
    let filteredUser = users;
    if(age){
        filteredUser = filteredUser.filter((user)=>user.age == Number(age))
    }
    if(name){
        filteredUser = filteredUser.filter((user)=>user.name.toLowerCase().includes(name.toLowerCase))

    }

    return NextResponse.json({
      success: true,
      data: filteredUser,
      total:filteredUser.length
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred",
        error: error?.message || error,
      },
      { status: 500 },
    );
  }
}
