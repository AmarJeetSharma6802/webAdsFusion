import contactForm from "../model/Form.model.js";
import DBconnect from "../Db/DBconnect.js"
import { NextResponse } from "next/server";


export async function POST(req){
    
    await DBconnect()

    const {name,email,phone,interest ,message} = await req.json()

    if(!name || !email || !phone || !interest || ! message){
        return NextResponse.json({message:"all fileds required"}, {status:401})
    }

    const findUser = await contactForm.findOne({email})
    if(findUser){
        return NextResponse.json({message:"Form already been submited"}, {status:409})
    }

    const Form = await contactForm.create({
        name,
        email,
        phone,
        interest,
        message
    })
if(!Form){
        return NextResponse.json({message:"Form is missing"}, {status:404})
    }

    return NextResponse.json({message:"Form submit succesfully",Form},{status:201})
    
}