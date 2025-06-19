import { NextResponse } from "next/server";
import DBconnect from "../Db/DBconnect";
import RestItem from "../model/model.js";
import { writeFile } from "fs/promises";
import path from "path";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export async function GET() {
  await DBconnect();
  const foundItems = await RestItem.find();

  if (!foundItems || foundItems.length === 0) {
    return NextResponse.json({ message: "No items found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Items found successfully", foundItems }, { status: 200 });
}

export async function POST(req) {
  await DBconnect();

  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const title = formData.get("title");
    const imageFile = formData.get("image");

    if (!name || !title || !imageFile) {
      return NextResponse.json({ message: "Name, title, and image are required" }, { status: 400 });
    }

    // Upload image to Cloudinary
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const tempFilePath = path.join("/tmp", imageFile.name);
    await writeFile(tempFilePath, buffer);
    const uploaded = await uploadOnCloudinary(tempFilePath,);

    if (!uploaded) {
      return NextResponse.json({ error: "Cloudinary image upload failed" }, { status: 500 });
    }

    
    const items = await RestItem.create({
      name,
      title,
      image: uploaded.secure_url,
      
    });

    if (!items) {
      return NextResponse.json({ message: "Failed to create item" }, { status: 500 });
    }

    return NextResponse.json({ message: "Item created successfully", items }, { status: 200 });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}