import BlogDetailPage from "../[read]/DynamicBlogPage";

// Page component
export default async function Page({ params }) {

  const { read } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    next: { revalidate: 10 }, 
  });
  const data = await res.json();

  const slugify = (heading) =>
    heading.toLowerCase().replace(/\s+/g, "-");

const blog = data.foundblog.find(
    (item) => slugify(item.heading) === read
  );

  return (
    <div>
      <BlogDetailPage blog={blog} />
    </div>
  );
}

// Metadata generate karna
export async function generateMetadata({ params }) {
  const { read } = params;
  const slugToTitle = read
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${slugToTitle} | Creative Digital Marketing & Web Development Agency in India`,
    description: `Read about ${slugToTitle} on our blog.`,
    keywords: `${slugToTitle}, Web Ads Fusion, Digital Services, Web Development, Web Design`,
  };
}
