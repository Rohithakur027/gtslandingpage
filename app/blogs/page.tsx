"use client"

import { useState, useMemo } from "react"
import { getAllPosts } from "@/data/blogdata/blogs"
import { BlogListingFilters } from "@/types/blogType"
import { BlogCard } from "@/components/blog/blogs/blog-card"
import { BlogHeader } from "@/components/blog/blogs/blog-header"
import { BlogSearchFilters } from "@/components/blog/blogs/blog-search-filter"
import { Pagination } from "@/components/ui/pagination"
import { BlogListStructuredData } from "@/components/blog/seo/blog-list-structured-data"
import { BackToTop } from "../../components/ui/back-to-top"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { CustomPagination } from "@/components/blog/blogstructure/pagination"
import Navigation from "@/components/navigation"

// Configuration for pagination
const POSTS_PER_PAGE = 6

/**
 * Main blog listing page for SkyWings Aviation Academy
 * Features: Search, filtering, sorting, and pagination of aviation blog posts
 */
export default function AviationBlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<BlogListingFilters>({})

  // Get all aviation blog posts
  const allPosts = getAllPosts()

  // Filter and sort posts based on user selections
  const filteredAndSortedPosts = useMemo(() => {
    let posts = [...allPosts]

    // Apply search filter across title, excerpt, author, and tags
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by selected tags (aviation specialties)
    if (filters.tags && filters.tags.length > 0) {
      posts = posts.filter((post) => filters.tags!.some((tag) => post.tags.includes(tag)))
    }

    // Filter by author (aviation instructors)
    if (filters.author) {
      posts = posts.filter((post) => post.author.name === filters.author)
    }

    // Apply sorting (date, title, or read time)
    const sortBy = filters.sortBy || "date"
    const sortOrder = filters.sortOrder || "desc"

    posts.sort((a, b) => {
      let comparison = 0

      switch (sortBy) {
        case "date":
          comparison = new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
          break
        case "title":
          comparison = a.title.localeCompare(b.title)
          break
        case "readTime":
          comparison = a.readTime - b.readTime
          break
        default:
          comparison = new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
      }

      return sortOrder === "asc" ? comparison : -comparison
    })

    return posts
  }, [allPosts, filters])

  // Calculate pagination
  const { paginatedPosts, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const paginatedPosts = filteredAndSortedPosts.slice(startIndex, endIndex)
    const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE)

    return { paginatedPosts, totalPages }
  }, [filteredAndSortedPosts, currentPage])

  // Handle filter changes and reset to first page
  const handleFiltersChange = (newFilters: BlogListingFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  // Handle page navigation with smooth scroll
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        {/* SEO structured data for search engines */}
        <BlogListStructuredData
          posts={allPosts}
          url={typeof window !== "undefined" ? window.location.origin : "https://skywings-aviation.com"}
        />

        {/* Aviation academy header with branding */}
        <Navigation/>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and filter controls */}
          <BlogSearchFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            totalResults={filteredAndSortedPosts.length}
          />

          {/* Aviation blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty state when no posts match filters */}
          {paginatedPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-foreground mb-2">
                {filteredAndSortedPosts.length === 0 ? "No aviation articles found" : "No posts on this page"}
              </h3>
              <p className="text-muted-foreground">
                {filteredAndSortedPosts.length === 0
                  ? "Try adjusting your search or filter criteria to find aviation content."
                  : "Check back later for new aviation career guidance."}
              </p>
            </div>
          )}

          {/* Pagination controls */}
          {totalPages > 1 && (
            <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </main>

        {/* Back to top button for better UX */}
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}
