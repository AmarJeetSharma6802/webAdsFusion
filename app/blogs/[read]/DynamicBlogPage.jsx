"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import  style from "../../style/blog.module.css"
import Link from "next/link";

export default function BlogDetailPage({read}) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blog");
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

  if (loading) return <p className={style.loading}>Blog Loading...</p>;
  if (!blog) return <p>No blog found!</p>;

  return (
    <>
    <div className={style.blog_links}>
        <Link href="/"><i className="fa-solid fa-angle-left"></i> Back</Link> {"/"}
        <Link href="/">Home</Link> {"/"}
        <Link href="/blogs">Blogs</Link>
    </div>
    <div className={style.blog_page}>
      <div className={style.blog_content_content}>
        <h1>{blog.heading}</h1>
      <h3>{blog.title}</h3>
     <div className={style.blog_content_content_image}>
         <Image src={blog.image} alt={blog.heading} width={400} height={300} className={style.blog_content_content_img} />
     </div>
      
      <p className={style.blog_content_content_long_para}>{blog.LongPara}</p>
      </div>
    </div>
    </>
  );
}
