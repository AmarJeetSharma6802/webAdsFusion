"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "../style/blog.module.css";
import Image from "next/image";


function Blog() {
  const [dt, setDt] = useState([]);
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;
  const blogRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
     const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 10 } 
  });
      const data = await res.json();
      setDt(data.foundblog); 
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Current page blogs
  const indexOfLastBlog = page * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = dt.slice(indexOfFirstBlog, indexOfLastBlog);

  // Total pages
  const totalPages = Math.ceil(dt.length / blogsPerPage);

  // Click on page number
  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    handleScroll();
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
  <h1  className={style.blog_box_heading}>Featured Articles</h1>
      <div className={style.blog} ref={blogRef}>
        {currentBlogs.map((item) => (
          <div key={item._id} className={style.blog_key}>
            <div className={style.blog_wrap}>
              <Image src={item.image} alt={item.heading} width={200} height={100} className={style.blog_image} />
            </div>
           <div className={style.blog_details}>
               <h3 className={style.blog_details_heading}  >{item.heading}</h3>
            <p className={style.blog_details_title}>{item.title}</p>
            <a href="" className={style.blog_details_btn}>Read more</a>
           </div>
          </div>
        ))}
      </div>

</div>
      {/* Page Numbers */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageClick(num)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: num === page ? "#0070f3" : "#eee",
              color: num === page ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
