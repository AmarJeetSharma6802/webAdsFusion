import { NextResponse } from "next/server.js";
import DBconnect from "../Db/DBconnect.js";
import blogData from "../model/blog.model.js";
import path from "path";
import { writeFile } from "fs/promises";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export async function GET() {
  await DBconnect();

  const foundblog = await blogData.find();

  if (!foundblog) {
    return NextResponse.json(
      { message: "blog data not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(
    { message: "blog data found succefully", foundblog },
    { status: 201 }
  );
}

export async function POST(req) {
  await DBconnect();

  const formData = req.formData();
  const heading = formData.get("name");
  const title = formData.get("title");
  const LongPara = formData.get("LongPara");
  const image = formData.get("image");

  if (!heading || !title || !title || !LongPara) {
    return NextResponse.json({ message: "All field reuired" }, { status: 404 });
  }
  if (!image) {
    return NextResponse.json(
      { message: "Image field reuired" },
      { status: 404 }
    );
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const tempFilePath = path.join("/tmp", image.name);
  await writeFile(tempFilePath, buffer);

  const uploadImage = await uploadOnCloudinary(tempFilePath);

  if (!uploadImage) {
    return NextResponse.json(
      { error: "Cloudinary image upload failed" },
      { status: 500 }
    );
  }

  const createBlog = blogData.create({
    heading,
    title,
    LongPara,
    image: uploadImage.secure_url,
  });

  if (!createBlog) {
    return NextResponse.json(
      { message: "Failed to create item" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Blog created successfully", createBlog },
    { status: 200 }
  );
}
