import { NextResponse } from "next/server";
import DBconnect from "../../Db/DBconnect";
import RestItem from "../../model/model";
import { uploadOnCloudinary } from "../../utils/cloudinary";
import fs from "fs";
import { writeFile, mkdir } from "fs/promises";


export async function GET(req, { params }) {
  await DBconnect();

  const id = params.id;

  if (!id) {
    return NextResponse.json({ message: "No ID FOUND" }, { status: 400 });
  }
  const findItems = await RestItem.findById(id);

  if (!findItems) {
    return NextResponse.json(
      { message: "No crane items found" },
      { status: 400 }
    );
  }
  return NextResponse.json({
    message: " items found",
    craneItems: findItems,
  });
}

export async function PUT(req, { params }) {
  await DBconnect();

  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const formData = await req.formData();
    const name = formData.get("name");
    const title = formData.get("title");
    const imageFile = formData.get("image");
    const videoFile = formData.get("video");

    const updateData = {};
    if (name) updateData.name = name;
    if (title) updateData.title = title;

    // ⬇️ Handle image upload
    if (imageFile && imageFile.name) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const tempDir = "/tmp";
      await mkdir(tempDir, { recursive: true });
      const tempImagePath = `${tempDir}/${imageFile.name}`;
      await writeFile(tempImagePath, buffer);

      const uploaded = await uploadOnCloudinary(tempImagePath, "image");
      if (!uploaded) {
        return NextResponse.json(
          { error: "Cloudinary image upload failed" },
          { status: 500 }
        );
      }

      updateData.image = uploaded.secure_url;

      if (fs.existsSync(tempImagePath)) {
        fs.unlinkSync(tempImagePath);
      }
    }

    
    if (videoFile && videoFile.name) {
      const buffer = Buffer.from(await videoFile.arrayBuffer());
      const tempDir = "/tmp";
      await mkdir(tempDir, { recursive: true });
      const tempVideoPath = `${tempDir}/${videoFile.name}`;
      await writeFile(tempVideoPath, buffer);

      const uploaded = await uploadOnCloudinary(tempVideoPath, "video");
      if (!uploaded) {
        return NextResponse.json(
          { error: "Cloudinary video upload failed" },
          { status: 500 }
        );
      }

      updateData.video = uploaded.secure_url;
      
      if (fs.existsSync(tempVideoPath)) {
        fs.unlinkSync(tempVideoPath);
      }
    }

    
    
    const updatedItem = await RestItem.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedItem) {
      return NextResponse.json(
        { message: "No item found to update" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Item updated successfully",
      updatedItem,
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update item", details: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(req, { params }) {
  await DBconnect();

  const id = params.id;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const deletedItem = await RestItem.findByIdAndDelete(id);

  if (!deletedItem) {
    return NextResponse.json({ message: "No item found to delete" }, { status: 404 });
  }

  return NextResponse.json({
    message: "Item deleted successfully",
    deletedItem,
  }, { status: 200 });
}