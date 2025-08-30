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
        

    }
}
export async function POST(req){}