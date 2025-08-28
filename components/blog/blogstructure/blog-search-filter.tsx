"use client"

import { useState } from "react"
import { BlogListingFilters } from "@/types/blogType"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X, Filter, SortAsc, SortDesc } from "lucide-react"

import { getAllTags } from "@/data/blogdata/blogs"

interface BlogSearchFiltersProps {
  filters: BlogListingFilters
  onFiltersChange: (filters: BlogListingFilters) => void
  totalResults: number
}

export function BlogSearchFilters({ filters, onFiltersChange, totalResults }: BlogSearchFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const allTags = getAllTags()

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchQuery: value })
  }

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tag) ? currentTags.filter((t) => t !== tag) : [...currentTags, tag]

    onFiltersChange({ ...filters, tags: newTags.length > 0 ? newTags : undefined })
  }

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split("-") as [typeof filters.sortBy, typeof filters.sortOrder]
    onFiltersChange({ ...filters, sortBy, sortOrder })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  const hasActiveFilters = filters.searchQuery || (filters.tags && filters.tags.length > 0) || filters.author

  const getSortValue = () => {
    if (!filters.sortBy) return "date-desc"
    return `${filters.sortBy}-${filters.sortOrder || "desc"}`
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search blog posts..."
              value={filters.searchQuery || ""}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Toggle and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                    {(filters.tags?.length || 0) + (filters.author ? 1 : 0)}
                  </Badge>
                )}
              </Button>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {totalResults} {totalResults === 1 ? "post" : "posts"} found
              </span>

              <Select value={getSortValue()} onValueChange={handleSortChange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">
                    <div className="flex items-center gap-2">
                      <SortDesc className="w-4 h-4" />
                      Newest First
                    </div>
                  </SelectItem>
                  <SelectItem value="date-asc">
                    <div className="flex items-center gap-2">
                      <SortAsc className="w-4 h-4" />
                      Oldest First
                    </div>
                  </SelectItem>
                  <SelectItem value="title-asc">
                    <div className="flex items-center gap-2">
                      <SortAsc className="w-4 h-4" />
                      Title A-Z
                    </div>
                  </SelectItem>
                  <SelectItem value="title-desc">
                    <div className="flex items-center gap-2">
                      <SortDesc className="w-4 h-4" />
                      Title Z-A
                    </div>
                  </SelectItem>
                  <SelectItem value="readTime-asc">
                    <div className="flex items-center gap-2">
                      <SortAsc className="w-4 h-4" />
                      Quick Reads
                    </div>
                  </SelectItem>
                  <SelectItem value="readTime-desc">
                    <div className="flex items-center gap-2">
                      <SortDesc className="w-4 h-4" />
                      Long Reads
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Expanded Filters */}
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-border">
              {/* Tags Filter */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Filter by Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => {
                    const isSelected = filters.tags?.includes(tag) || false
                    return (
                      <Badge
                        key={tag}
                        variant={isSelected ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 transition-colors"
                        onClick={() => handleTagToggle(tag)}
                      >
                        {tag}
                        {isSelected && <X className="w-3 h-3 ml-1" />}
                      </Badge>
                    )
                  })}
                </div>
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.searchQuery && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Search: "{filters.searchQuery}"
                        <X className="w-3 h-3 cursor-pointer" onClick={() => handleSearchChange("")} />
                      </Badge>
                    )}
                    {filters.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        Tag: {tag}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => handleTagToggle(tag)} />
                      </Badge>
                    ))}
                    {filters.author && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Author: {filters.author}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => onFiltersChange({ ...filters, author: undefined })}
                        />
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
