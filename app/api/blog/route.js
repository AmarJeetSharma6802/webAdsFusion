import { NextResponse } from "next/server.js"
import DBconnect from "../Db/DBconnect.js"
import blogData from "../model/blog.model.js"
import path from "path"
import { writeFile } from "fs/promises";
import {uploadOnCloudinary} from "../utils/cloudinary.js"


export async function GET(){
    await DBconnect()

    const foundblog = await blogData.find()

    if(!foundblog){
        return NextResponse.json({message:"blog data not found"},{status:404})
    }
    return NextResponse.json({message:"blog data found succefully", foundblog},{status:201})
}

export async function POST(req){}