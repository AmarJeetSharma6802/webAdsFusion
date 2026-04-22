import { NextResponse } from "next/server.js";
import DBconnect from "../Db/DBconnect.js";
import blogData from "../model/blog.model.js";
import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { getAllBlogs } from "../../lib/blogs.js";

export async function GET() {
  const foundblog = await getAllBlogs();

  if (foundblog.length === 0) {
    return NextResponse.json(
      { message: "blog data not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(
    { message: "blog data found succefully", foundblog },
    { status: 200 }
  );
}

export async function POST(req) {
  await DBconnect();

  const formData = await req.formData();
  const blogType = formData.get("blogType");
  const heading = formData.get("heading");
  const title = formData.get("title");
  const LongPara = formData.get("LongPara");
  const image = formData.get("image");

  if (!heading || !title || !LongPara) {
    return NextResponse.json({ message: "All field reuired" }, { status: 404 });
  }
  if (!image) {
    return NextResponse.json(
      { message: "Image field reuired" },
      { status: 404 }
    );
  }

  // const buffer = Buffer.from(await image.arrayBuffer());
  // const tempFilePath = path.join("/tmp", image.name);
  // await writeFile(tempFilePath, buffer);
  
  const tempDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(tempDir, { recursive: true });

  // ✅ Create file locally
  const buffer = Buffer.from(await image.arrayBuffer());
  const tempFilePath = path.join(tempDir, image.name);
  await writeFile(tempFilePath, buffer);

  const uploadImage = await uploadOnCloudinary(tempFilePath);

  if (!uploadImage) {
    return NextResponse.json(
      { error: "Cloudinary image upload failed" },
      { status: 500 }
    );
  }

  const createBlog = await blogData.create({
    blogType,
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
