import BlogsList from "../blogs/BlogSec.jsx"; 
import { getAllBlogs } from "../lib/blogs.js";
import style from "../style/blog.module.css";

export const revalidate = 10;

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <div>
      <div className={style.blog_head}>
        <div className={style.blog_head_details}>
          <p className={style.blog_head_details_heading}>
            Explore Ideas That Inspire
          </p>
          <p className={style.blog_head_details_para}>
            Insights, strategies and news about digital advertising, ad tech, and marketing trends
          </p>
          <a href="#blogs">
            <button className={style.blog_head_details_btn}>Start Reading</button>
          </a>
        </div>
      </div>

      {/* pagination */}
      <BlogsList blogs={blogs} />
    </div>
  );
}
