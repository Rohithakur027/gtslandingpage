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
    name: "Modern Blog - Insights & Tutorials",
    description:
      "Discover the latest insights, tutorials, and best practices in web development, design, and technology.",
    url: url,
    image: "/og-image.png",
    publisher: {
      "@type": "Organization",
      name: "Modern Blog",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
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
