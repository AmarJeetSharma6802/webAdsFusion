"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "../style/blog.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Blog() {
  const router = useRouter();
  const [dt, setDt] = useState([]);
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;
  const blogRef = useRef(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blog", { next: { revalidate: 10 } });
      const data = await res.json();
      
      // Latest blog first
      const sortedBlogs = [...data.foundblog].reverse(); // newest first
      setDt(sortedBlogs);
    };
    fetchData();
  }, []);

  // Scroll to blog list
  const handleScroll = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Current page blogs
  const indexOfLastBlog = page * blogsPerPage;
  const indexOfFirstBlog = (page - 1) * blogsPerPage;
  const currentBlogs = dt.slice(indexOfFirstBlog, indexOfLastBlog);

  // Total pages
  const totalPages = Math.ceil(dt.length / blogsPerPage);

  // Page click
  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    handleScroll();
  };

  // Navigate to blog details page
  const handleClick = (heading) => {
    const slug = heading.toLowerCase().replace(/\s+/g, "-");
    router.push(`/blogs/${slug}`);
  };

  return (
    <div>
      <div className={style.blog_head}>
        <div className={style.blog_head_details}>
          <p className={style.blog_head_details_heading}>Explore Ideas That Inspire</p>
          <p className={style.blog_head_details_para}>
            Insights, strategies and news about digital advertising, ad tech, and marketing trends
          </p>
          <button className={style.blog_head_details_btn} onClick={handleScroll}>
            Start Reading
          </button>
        </div>
      </div>

      <div className={style.blog_box}>
        <h1 className={style.blog_box_heading}>Featured Articles</h1>
        <div className={style.blog} ref={blogRef}>
          {currentBlogs.map((item) => (
            <div key={item._id} className={style.blog_key} onClick={() => handleClick(item.heading)}>
              <div className={style.blog_wrap}>
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={200}
                  height={100}
                  className={style.blog_image}
                />
              </div>
              <div className={style.blog_details}>
                <h3 className={style.blog_details_heading}>{item.heading}</h3>
                <p className={style.blog_details_title}>{item.title}</p>
                <div className={style.btn_arrow}>
                  <p className={style.blog_details_btn}>Read more</p>
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Numbers */}
      <div className={style.pageNumber}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageClick(num)}
            className={`${style.pageNumber_btn} ${num === page ? style.active : ""}`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
