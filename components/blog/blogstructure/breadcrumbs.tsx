import Link from "next/link"
import { BlogPost } from "@/types/blogType"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  post: BlogPost
}

export function Breadcrumbs({ post }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="w-4 h-4" />
      </Link>

      <ChevronRight className="w-4 h-4" />

      <Link href="/" className="hover:text-foreground transition-colors">
        Blog
      </Link>

      <ChevronRight className="w-4 h-4" />

      <span className="text-foreground font-medium truncate max-w-xs">{post.title}</span>
    </nav>
  )
}
