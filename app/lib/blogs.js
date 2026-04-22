import "server-only";

import DBconnect from "../api/Db/DBconnect.js";
import blogData from "../api/model/blog.model.js";

function serializeBlog(blog) {
  return {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString?.() ?? blog.createdAt,
    updatedAt: blog.updatedAt?.toISOString?.() ?? blog.updatedAt,
    date: blog.date?.toISOString?.() ?? blog.date,
  };
}

export async function getAllBlogs() {
  try {
    await DBconnect();

    const blogs = await blogData
      .find({ heading: { $ne: null } })
      .sort({ date: -1, createdAt: -1 })
      .lean();

    return blogs.map(serializeBlog);
  } catch (error) {
    console.error("Failed to load blogs:", error);
    return [];
  }
}
