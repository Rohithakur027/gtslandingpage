import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, User, ChevronRight } from "lucide-react"
import { blogs } from "@/data/blogsdata"

export default function BlogsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-0">Our Blog</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Aviation & Hospitality Insights</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Stay updated with the latest trends, tips, and insights from the aviation and hospitality industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white border-0">{blog.category}</Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h2>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-accent font-medium">{blog.category}</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
