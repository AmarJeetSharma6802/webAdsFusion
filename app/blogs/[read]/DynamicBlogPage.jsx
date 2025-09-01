"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";


export default function BlogDetailPage({read}) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  
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
      
      <Image src={blog.image} alt={blog.heading} width={600} height={300} />
      <h3>{blog.title}</h3>
      <p>{blog.LongPara}</p>
    </div>
  );
}
