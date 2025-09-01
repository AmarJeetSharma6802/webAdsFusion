"use client"
import React, { useEffect, useState ,useRef} from "react";
import style from "../style/blog.module.css";

function Blog() {
  const [dt, setDt] = useState([]);
   const blogRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blog");
      const data = await res.json();
    //   console.log(data);
      setDt(data.foundblog); 
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        <div className={style.blog_head}>
            {/* <Image src="/blog.avif" alt="" width={200} height={100} className={style.blog_head_img}  />
             */}
             <div className={style.blog_head_details}>
                <p className={style.blog_head_details_heading}>Explore Ideas That Inspire</p>
                <p className={style.blog_head_details_para}>Insights, strategies and news about digital advertising, ad tech, and marketing trends</p>
                <button
            className={style.blog_head_details_btn}
            onClick={handleScroll} 
          >
            Start Reading
          </button>
             </div>
        </div>
      <div className={style.blog}  ref={blogRef}>
        {dt.map((item) => (
          <div key={item._id}>
            <img src={item.image} alt={item.heading} width={200} />
            <p>{item.heading}</p>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
