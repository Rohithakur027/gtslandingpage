"use client"

import { useState } from "react"
import { BlogPost } from "@/types/blogType"
import { Button } from "@/components/ui/button"
import { Share2, Twitter, Linkedin, Facebook, LinkIcon, Check } from "lucide-react"

interface SocialShareProps {
  post: BlogPost
}

export function SocialShare({ post }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Check out this article: ${post.title}`

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy URL:", err)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground flex items-center gap-1">
        <Share2 className="w-4 h-4" />
        Share:
      </span>

      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="w-4 h-4" />
        </a>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-4 h-4" />
        </a>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-4 h-4" />
        </a>
      </Button>

      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
      </Button>
    </div>
  )
}
