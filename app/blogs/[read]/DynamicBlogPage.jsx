"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";


export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const { read } = params; 
  
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blog", { next: { revalidate: 10 } });
      const data = await res.json();

      const slugify = (heading) =>
        heading.toLowerCase().replace(/\s+/g, "-");

      const FoundBlog = data.foundblog.find(
        (item) => slugify(item.heading) === read
      );

      setBlog(FoundBlog || null);
      setLoading(false);
    };
    fetchBlog();
  }, [read]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>No blog found!</p>;

  return (
    <div>
      <h1>{blog.heading}</h1>
      <p>{blog.blogType}</p>
      <p>
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <Image src={blog.image} alt={blog.heading} width={600} height={300} />
      <h3>{blog.title}</h3>
      <p>{blog.LongPara}</p>
    </div>
  );
}
