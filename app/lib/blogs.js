import "server-only";

import DBconnect from "../api/Db/DBconnect.js";
import blogData from "../api/model/blog.model.js";
import { createBlogSlug, normalizeBlogString } from "./blog-slug.js";

function serializeBlog(blog) {
  const heading = normalizeBlogString(blog.heading);
  const title = normalizeBlogString(blog.title);
  const image = normalizeBlogString(blog.image);

  return {
    ...blog,
    _id: blog._id.toString(),
    heading,
    title,
    image,
    slug: createBlogSlug(heading),
    createdAt: blog.createdAt?.toISOString?.() ?? blog.createdAt,
    updatedAt: blog.updatedAt?.toISOString?.() ?? blog.updatedAt,
    date: blog.date?.toISOString?.() ?? blog.date,
  };
}

export async function getAllBlogs() {
  try {
    await DBconnect();

    const blogs = await blogData
      .find()
      .sort({ date: -1, createdAt: -1 })
      .lean();

    return blogs
      .map(serializeBlog)
      .filter((blog) => blog.slug && blog.image);
  } catch (error) {
    console.error("Failed to load blogs:", error);
    return [];
  }
}
