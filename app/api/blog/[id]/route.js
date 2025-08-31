import { NextResponse } from "next/server.js";
import DBconnect from "../../Db/DBconnect.js";
import blogData from "../../model/blog.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary";
import fs from "fs";
import { writeFile, mkdir } from "fs/promises";

export async function GET(req, { params }) {
  await DBconnect();

  const { id } = params.id;

  const FindBlogById = await blogData.findById(id);

  if (!FindBlogById) {
    return NextResponse.json(
      { message: "Blog data not found" },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "blog data found succefully by ID " });
}

export async function POST(req, { params }) {

  await DBconnect();

  const {id} = params.id

  const formData = await req.formData();
  const heading = formData.get("heading");
  const title = formData.get("title");
  const LongPara = formData.get("LongPara");
  const image = formData.get("image");

  let updateData = { heading, title, LongPara };

  if (image || image.name) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const tempDir = "/tmp";
    await mkdir(tempDir, { recursive: true });
    const tmpfilePath = `${tempDir},/${image.name}`;
    await writeFile(tmpfilePath, buffer);

    const uploaded = await uploadOnCloudinary(tmpfilePath, "image");

    if (!uploaded) {
      return NextResponse.json(
        { error: "Cloudinary image upload failed" },
        { status: 500 }
      );
    }

    updateData.image = uploaded.secure_url;

    if (fs.existsSync(tmpfilePath)) {
      fs.unlinkSync(tmpfilePath);
    }
  }
  const updateBlog = await blogData.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  if (!updateBlog) {
    return NextResponse.json({ message: "Blog not updated" }, { status: 404 });
  }

  return NextResponse.json({
    message: "blog updated successfully",
    updatedItem,
  });
}

