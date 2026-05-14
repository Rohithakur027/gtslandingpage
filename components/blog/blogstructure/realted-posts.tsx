import { BlogPost } from "@/types/blogType"
import { BlogCard } from "./blog-card"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div>
          <span className="inline-block bg-[#796efd] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            Keep Reading
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Related Posts</h2>
        </div>
        <div className="flex-1 h-px bg-gray-100 mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
