import { BlogPost } from "@/types/blogType"
import { StructuredData } from "./structured-data"

interface BlogStructuredDataProps {
  post: BlogPost
  url: string
}

export function BlogStructuredData({ post, url }: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [post.featuredImage],
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      description: post.author.bio,
      image: post.author.avatar,
      sameAs: Object.values(post.author.socialLinks || {}).filter(Boolean),
    },
    publisher: {
      "@type": "Organization",
      name: "Modern Blog",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
    wordCount: post.sections.reduce(
      (count, section) =>
        count +
        section.subSections.reduce(
          (subCount, subSection) => subCount + subSection.paragraphs.join(" ").split(" ").length,
          0,
        ),
      post.introduction.split(" ").length + post.conclusion.split(" ").length,
    ),
    timeRequired: `PT${post.readTime}M`,
    articleSection: post.tags,
    inLanguage: "en-US",
  }

  return <StructuredData data={structuredData} />
}
