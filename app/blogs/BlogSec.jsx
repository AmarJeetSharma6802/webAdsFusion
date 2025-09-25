"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../style/blog.module.css";
import { useRouter } from "next/navigation";

export default function BlogsList({ blogs }) {

    const router = useRouter()
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;
  const blogRef = useRef(null);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = page * blogsPerPage;
  const indexOfFirstBlog = (page - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      blogRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      blogRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBlog = (heading)=>{
    const sulg  = heading.toLowerCase().replace(/\s+/g, "-")
    router.push(`/blogs/${sulg}`)
  }
  return (
    <div className={style.blog_box} id="blogs">
      <h1 className={style.blog_box_heading}>Featured Articles</h1>
      <div className={style.blog} ref={blogRef}>
        {currentBlogs.map((item) => (
          <div key={item._id} className={style.blog_key} onClick={()=>handleBlog(item.heading)}>
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
                <Link
                  href={`/blogs/${item.heading.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <p className={style.blog_details_btn}>Read more</p>
                </Link>
                <p><i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={style.pageNumber}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={style.pageNumber_btn}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageClick(num)}
            className={`${style.pageNumber_btn} ${num === page ? style.active : ""}`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={style.pageNumber_btn}
        >
          Next
        </button>
      </div>
    </div>
  );
}
