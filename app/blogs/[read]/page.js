import BlogDetailPage from "../[read]/DynamicBlogPage";

// Page component
export default function Page({ params }) {

  const { read } = params;

  return (
    <div>
      <BlogDetailPage read={read} />
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
