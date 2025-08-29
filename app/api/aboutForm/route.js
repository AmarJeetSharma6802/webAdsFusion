import AboutForm from "../model/aboutForm";
import DBconnect from "../Db/DBconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  await DBconnect();

  const { name, email, phone, message, aboutName } = await req.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { message: "all fileds required" },
      { status: 401 }
    );
  }
  const findUser = await AboutForm.findOne({ phone });
  if (findUser) {
    return NextResponse.json(
      { message: "Form already been submited" },
      { status: 404 }
    );
  }

   const Form = await AboutForm.create({
    aboutName,
        name,
        email,
        phone,
        message
    })
if(!Form){
        return NextResponse.json({message:"Form is missing"}, {status:404})
    }

    return NextResponse.json({message:"Form submit succesfully",Form},{status:201})
}
