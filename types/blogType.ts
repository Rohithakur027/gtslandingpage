export interface BlogAuthor {
  id: string
  name: string
  bio: string
  avatar: string
  socialLinks?: {
    thread?: string
    linkedin?: string
    instagram?: string
  }
}

export interface BlogSection {
  id: string
  heading: string
  subSections: BlogSubSection[]
  image?: string
  imageAlt?: string
}

export interface BlogSubSection {
  id: string
  subHeading: string
  paragraphs: string[]
  codeSnippet?: {
    language: string
    code: string
  }
  quote?: string
  list?: string[]
}

export interface BlogPost {
  // Metadata
  id: string
  title: string
  slug: string
  author: BlogAuthor
  publishDate: string
  readTime: number
  tags: string[]
  featuredImage: string
  featuredImageAlt: string
  excerpt: string

  // SEO
  metaDescription: string
  keywords: string[]

  // Content Structure
  hero: {
    title: string
    featuredImage: string
    featuredImageAlt: string
  }
  introduction: string
  sections: BlogSection[]
  conclusion: string
  callToAction: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }

  // Related content
  relatedPosts?: string[] // Array of post IDs
}

export interface BlogListingFilters {
  searchQuery?: string
  tags?: string[]
  author?: string
  sortBy?: "date" | "readTime" | "title"
  sortOrder?: "asc" | "desc"
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
}
