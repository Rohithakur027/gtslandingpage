import { BlogPost } from "@/types/blogType"
import { StructuredData } from "./structured-data"

interface BlogListStructuredDataProps {
  posts: BlogPost[]
  url: string
}

export function BlogListStructuredData({ posts, url }: BlogListStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": url,
    mainEntityOfPage: url,
    name: "Ground to Sky Academy - Aviation Career Blog",
    description:
      "Expert tips, guides, and insights on aviation careers, cabin crew training, air hostess courses, and hospitality industry from Ground to Sky Academy Delhi.",
    url: url,
    image: "https://groundtosky.in/images/GTS-Logo.png",
    publisher: {
      "@type": "Organization",
      name: "Ground to Sky Academy",
      logo: {
        "@type": "ImageObject",
        url: "https://groundtosky.in/images/GTS-Logo.png",
      },
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      "@id": `${url}/blog/${post.slug}`,
      headline: post.title,
      description: post.excerpt,
      image: post.featuredImage,
      datePublished: post.publishDate,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      url: `${url}/blog/${post.slug}`,
    })),
  }

  return <StructuredData data={structuredData} />
}
