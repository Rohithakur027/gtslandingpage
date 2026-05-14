import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Calendar } from "lucide-react"
import { BlogPost } from "@/types/blogType"

interface BlogCardProps {
  post: BlogPost
}

/**
 * Aviation Blog Card Component
 * Displays individual blog post preview with aviation-themed styling
 * Features: Featured image, title, excerpt, author info, tags, and metadata
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.featuredImageAlt}
            width={400}
            height={240}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Primary Tag Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-sky-600 hover:bg-sky-700 text-white font-medium">{post.tags[0]}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        {/* Blog Post Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-sky-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-4">
        {/* Blog Post Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(1, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between">
        {/* Author Information */}
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{post.author.name}</span>
          </div>
        </div>

        {/* Post Metadata */}
        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
