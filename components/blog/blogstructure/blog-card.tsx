import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/types/blogType"
import { Calendar, Clock, ChevronRight } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.featuredImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {post.tags[0] && (
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-[#796efd] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {post.tags[0]}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-[#796efd] transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto w-full bg-[#796efd] hover:bg-[#695ef0] text-white font-semibold py-2.5 px-5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-1.5 text-sm group-hover:shadow-md">
            Read More <ChevronRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
