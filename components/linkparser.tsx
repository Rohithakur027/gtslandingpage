// utils/linkParser.tsx
import Link from "next/link"
import React from "react"

export function parseTextWithLinks(text: string): React.ReactNode {
  // Pattern: [link text](/path) - standard markdown link syntax
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  
  const parts = []
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    
    // Add the link component
    parts.push(
      <Link 
        key={match.index} 
        href={match[2]} 
        className="text-primary hover:underline font-medium"
      >
        {match[1]}
      </Link>
    )
    
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  
  return parts.length > 1 ? <>{parts}</> : text
}
