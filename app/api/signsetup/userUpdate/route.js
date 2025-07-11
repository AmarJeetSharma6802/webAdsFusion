import { NextResponse } from "next/server";
import signInUser from "../../model/signIn.model.js";
import DBconnect from "../../Db/DBconnect.js";
import { authUser } from "../../middleware/auth.middleware.js";
import { writeFile, mkdir } from "fs/promises";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

export async function PUT(req) {
  await DBconnect();
  const { user, error } = await authUser(req);
  if (error) {
    return error;
  }

  try {
    const formData = await req.formData;
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("file");

    if (!name || !email || phone) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const tempDir = await mkdir("/tmp", { recursive: true });
    const tempImagePath = `${tempDir}/${file.name}`;
    await writeFile(tempImagePath, buffer);
    const uploaded = await uploadOnCloudinary(tempImagePath);

    const updateUser = await signInUser.findByIdAndUpdate(user?._id,{
        name,
        email,
        phone,
        image:uploaded.secure_url
    },
    {new:true}
).select("-password -__v -createdAt -updatedAt");
return NextResponse.json(updateUser,{message :"account update succcefully"}, { status: 200 });

  } catch (error) {
     return NextResponse.json({ message: "Account update failed" }, { status: 500 });
  }
}
