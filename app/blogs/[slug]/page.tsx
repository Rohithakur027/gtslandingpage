import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getRelatedPosts } from "@/data/blogdata/blogs";
import { BlogContent } from "@/components/blog/blogstructure/blog-content";

import { AuthorBio } from "@/components/blog/blogstructure/author-bio";

import { RelatedPosts } from "@/components/blog/blogstructure/realted-posts";
import { SocialShare } from "@/components/blog/blogstructure/socialshare";
import { Breadcrumbs } from "@/components/blog/blogstructure/breadcrumbs";

import { BlogStructuredData } from "@/components/blog/seo/blog-structured-data";
import { BackToTop } from "@/components/ui/back-to-top";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { ReadingProgress } from "@/components/blog/blogstructure/reading-progress";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id);
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://your-blog-domain.com/blog/${post.slug}`;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <BlogStructuredData post={post} url={currentUrl} />

        <ReadingProgress />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs post={post} />

          <article className="prose prose-lg max-w-none">
            <div className="flex items-center justify-between my-8">
              <SocialShare post={post} />
            </div>

            <BlogContent post={post} />
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <AuthorBio author={post.author} />
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <RelatedPosts posts={relatedPosts} />
            </div>
          )}
        </div>

        <BackToTop />
      </div>
    </ErrorBoundary>
  );
}
