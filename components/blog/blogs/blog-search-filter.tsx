"use client"

import { useState } from "react"
import { Search, Filter, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BlogListingFilters } from "@/types/blogType"

interface BlogSearchFiltersProps {
  filters: BlogListingFilters
  onFiltersChange: (filters: BlogListingFilters) => void
  totalResults: number
}

// Aviation-specific tags for filtering
const AVIATION_TAGS = [
  "Air Hostess",
  "Flight Attendant",
  "Pilot Training",
  "Commercial License",
  "Ground Operations",
  "Airport Jobs",
  "Aviation Career",
  "Career Guide",
  "Flight School",
  "Ramp Agent",
  "Aviation Jobs",
  "Cabin Crew",
]

// Aviation instructors/authors for filtering
const AVIATION_AUTHORS = ["Captain Sarah Mitchell", "Captain James Wilson", "Maria Rodriguez"]

/**
 * Aviation Blog Search and Filter Component
 * Provides search functionality and filtering options for aviation blog posts
 * Features: Text search, tag filtering, author filtering, and sorting options
 */
export function BlogSearchFilters({ filters, onFiltersChange, totalResults }: BlogSearchFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Handle search input changes
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchQuery: value })
  }

  // Handle tag selection/deselection
  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tag) ? currentTags.filter((t) => t !== tag) : [...currentTags, tag]

    onFiltersChange({ ...filters, tags: newTags.length > 0 ? newTags : undefined })
  }

  // Handle author filter changes
  const handleAuthorChange = (author: string) => {
    onFiltersChange({
      ...filters,
      author: author === "all" ? undefined : author,
    })
  }

  // Handle sorting changes
  const handleSortChange = (sortBy: string) => {
    const [field, order] = sortBy.split("-")
    onFiltersChange({
      ...filters,
      sortBy: field as any,
      sortOrder: order as "asc" | "desc",
    })
  }

  // Clear all filters
  const clearFilters = () => {
    onFiltersChange({})
  }

  // Check if any filters are active
  const hasActiveFilters = filters.searchQuery || filters.tags?.length || filters.author

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar and Results Count */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search aviation articles..."
            value={filters.searchQuery || ""}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 bg-background border-border focus:border-sky-500 focus:ring-sky-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {totalResults} article{totalResults !== 1 ? "s" : ""} found
          </span>

          {/* Filter Toggle Button */}
          <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${isFiltersOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-foreground">Active filters:</span>

          {filters.searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: "{filters.searchQuery}"
              <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => handleSearchChange("")} />
            </Badge>
          )}

          {filters.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              {tag}
              <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => handleTagToggle(tag)} />
            </Badge>
          ))}

          {filters.author && (
            <Badge variant="secondary" className="gap-1">
              Author: {filters.author}
              <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => handleAuthorChange("all")} />
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Expandable Filters Panel */}
      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <CollapsibleContent>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Aviation Specialties (Tags) Filter */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Aviation Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {AVIATION_TAGS.map((tag) => (
                      <Badge
                        key={tag}
                        variant={filters.tags?.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          filters.tags?.includes(tag)
                            ? "bg-sky-600 hover:bg-sky-700 text-white"
                            : "hover:bg-sky-50 hover:border-sky-300"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Aviation Instructor Filter */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Aviation Instructor</h4>
                  <Select value={filters.author || "all"} onValueChange={handleAuthorChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All instructors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Instructors</SelectItem>
                      {AVIATION_AUTHORS.map((author) => (
                        <SelectItem key={author} value={author}>
                          {author}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort Options */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Sort Articles</h4>
                  <Select
                    value={`${filters.sortBy || "date"}-${filters.sortOrder || "desc"}`}
                    onValueChange={handleSortChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-desc">Newest First</SelectItem>
                      <SelectItem value="date-asc">Oldest First</SelectItem>
                      <SelectItem value="title-asc">Title A-Z</SelectItem>
                      <SelectItem value="title-desc">Title Z-A</SelectItem>
                      <SelectItem value="readTime-asc">Shortest Read</SelectItem>
                      <SelectItem value="readTime-desc">Longest Read</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
