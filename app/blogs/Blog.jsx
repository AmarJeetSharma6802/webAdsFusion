import BlogsList from "../blogs/BlogSec.jsx"; 
import style from "../style/blog.module.css";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    next: { revalidate: 10 }, 
  });
  return res.json();
}

export default async function Blog() {
  const data = await getBlogs();
  const blogs = [...data.foundblog].reverse(); 

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
