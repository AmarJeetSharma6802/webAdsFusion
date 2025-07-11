import { NextResponse } from "next/server";
import signInUser from "../../model/signIn.model.js";
import DBconnect from "../../Db/DBconnect.js";
import { authUser } from "../../middleware/auth.middleware.js";
import { writeFile, mkdir } from "fs/promises";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import bcrypt from "bcryptjs";
import fs from "fs";

export async function PUT(req) {
  await DBconnect();
  const { user, error } = await authUser(req);
  if (error) {
  return error;
}

  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("file");
    const currentPassword = formData.get("currentPassword");

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const foundUser = await signInUser.findById(user._id);
    if (!foundUser) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    const provider = foundUser.provider || "credentials";

    if (provider === "google") {
      console.log("foundUser.provider:", foundUser.provider);
      if (email !== foundUser.email) {
        return NextResponse.json(
          {
            message:
              "Email cannot be changed for Google-authenticated accounts.",
          },
          { status: 403 }
        );
      }
    } else {
      if (email !== foundUser.email) {
        if (!currentPassword) {
          return NextResponse.json(
            { message: "Current password is required to change email." },
            { status: 400 }
          );
        }

        const isMatch = await bcrypt.compare(
          currentPassword,
          foundUser.password
        );

        if (!isMatch) {
          return NextResponse.json(
            { message: "Current password is incorrect." },
            { status: 401 }
          );
        }
      }
    }

    // ✅ check if file exists
    let uploadedUrl = foundUser.image;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const tempDir = await mkdir("/tmp", { recursive: true });
      const tempImagePath = `${tempDir}/${file.name}`;
      await writeFile(tempImagePath, buffer);

      const uploaded = await uploadOnCloudinary(tempImagePath);
      if (uploaded?.secure_url) {
        uploadedUrl = uploaded.secure_url;
      }
      if (fs.existsSync(tempImagePath)) {
              fs.unlinkSync(tempImagePath);
            }
    }

    const updateUser = await signInUser
      .findByIdAndUpdate(
        foundUser._id,
        {
          name,
          email,
          phone,
          image: uploadedUrl,
        },
        { new: true }
      )
      .select("-password -__v -createdAt -updatedAt");

    return NextResponse.json(
      {
        message: "Account update successfully",
        user: updateUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("UPDATE ERROR →", error);
    return NextResponse.json(
      { message: "Account update failed", error: error.message },
      { status: 500 }
    );
  }
}
