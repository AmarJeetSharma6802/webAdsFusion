import DBconnect from "../../Db/DBconnect.js"
import { NextResponse } from "next/server"
import { uploadOnCloudinary} from "../../utils/cloudinary.js"
import signInUser from "../../model/signIn.model.js"
import { writeFile,unlink  } from "fs/promises";
import path from "path";

export async function GET(req){
DBconnect()

const foundSignUser = await signInUser.find()

if(foundSignUser){
    return NextResponse.json({message:"Sign in User not found"},{status:401})
}

return NextResponse.json({message:"Sign in User found",foundSignUser},{status:201})
}

export  async function POST(req){
    DBconnect()

    try {
        
        const formData  = await req.formData()
        const name = formData.get("name")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const file = formData.get("image")

        if(!name || !email || !phone || !file){
            return NextResponse.json({message:"all fields are required"},{status:404})
        }

       const buffer = Buffer.from(await file.arrayBuffer())
        const tempFile = path.join("/tmp" ,file.name)
        await writeFile(tempFile,buffer)

        const uploadedImage=  await uploadOnCloudinary(tempFile)

        await unlink(tempFile);

        if(!uploadedImage){
             return NextResponse.json({message:"image is not uploaded on cloundinary"},{status:404})
        }
        const alreadyUser = await signInUser.findOne({email})
        
        if(!alreadyUser){
             return NextResponse.json({message:"email already have"},{status:401})
        }

        const SignUser = await signInUser.create({
            name,
            email,
            phone,
            image:uploadedImage.secure_url
        })

    

    } catch (error) {
        
    }
}