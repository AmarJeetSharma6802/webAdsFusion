import DBconnect from "../../Db/DBconnect.js";
import { NextResponse } from "next/server";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import signInUser from "../../model/signIn.model.js";
import { writeFile} from "fs/promises";
import bcrypt from "bcryptjs";
import path from "path";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export async function GET() {
  await DBconnect();

  const foundSignUser = await signInUser.find();

  if (!foundSignUser || foundSignUser.length === 0) {
    return NextResponse.json(
      { message: "Sign in User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "Sign in User found", foundSignUser },
    { status: 200 }
  );
}

export async function POST(req) {
  await DBconnect();

  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const ComfirmPassword = formData.get("ComfirmPassword");
    const file = formData.get("image");

    console.log("formData:", formData);

    if (!name || !email || !phone || !file ,!ComfirmPassword ,!password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if(password !== ComfirmPassword){
        return NextResponse.json(
        { message: "password does  not match" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const tempFile = path.join("/tmp", file.name);
    await writeFile(tempFile, buffer);

    const uploadedImage = await uploadOnCloudinary(tempFile);

   

    if (!uploadedImage) {
      return NextResponse.json(
        { message: "Image is not uploaded on Cloudinary" },
        { status: 500 }
      );
    }

    const alreadyUser = await signInUser.findOne({ email });

    if (alreadyUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 401 }
      );
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await  bcrypt.hash(password,salt)

    const SignUser = await signInUser.create({
      name,
      email,
      phone,
      password:hashPassword,
      image: uploadedImage.secure_url,
    });

    const accessToken = jwt.sign(
      {
        user_id: SignUser._id,
        user_email: SignUser.email,
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      { message: "SignInUser created successfully", SignUser, accessToken },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "SignInUser error", error: error.message },
      { status: 500 }
    );
  }
}
