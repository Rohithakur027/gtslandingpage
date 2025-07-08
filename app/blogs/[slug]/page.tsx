import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { blogs } from "@/data/blogsdata"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>

        <article className="space-y-8">
          <header className="space-y-6">
            <Badge className="bg-accent text-white border-0">{blog.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">{blog.title}</h1>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
            </div>
          </header>

          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          <div className="flex flex-wrap gap-2 pt-8 border-t">
            <span className="text-sm font-medium text-gray-600">Tags:</span>
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">Join ground to sky Academy and turn your aviation dreams into reality.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
