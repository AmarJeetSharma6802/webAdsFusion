import Image from "next/image";
import Link from "next/link";
import style from "../../style/blog.module.css";

export default function BlogDetailPage({ blog }) {
  if (!blog) return <p>No blog found!</p>;

  return (
    <>
      <div className={style.blog_links}>
        <Link href="/">Home</Link> {"/"}
        <Link href="/about">About</Link> {"/"}
        <Link href="/blogs">Blogs</Link>
      </div>

      <div className={style.blog_page}>
        <div className={style.blog_content_content}>
          <h1>{blog.heading}</h1>
          <h3>{blog.title}</h3>
          <div className={style.blog_content_content_image}>
            <Image
              src={blog.image}
              alt={blog.heading}
              width={400}
              height={300}
              className={style.blog_content_content_img}
            />
          </div>
          <p className={style.blog_content_content_long_para}>
            {blog.LongPara}
          </p>
        </div>
      </div>
    </>
  );
}
