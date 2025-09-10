// utils/linkParser.tsx
import Link from "next/link";
import React from "react";

export function parseTextWithLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    const linkHref = match[2];

    // Check if external link
    if (linkHref.startsWith("http") || linkHref.startsWith("mailto:")) {
      parts.push(
        <a
          key={match.index}
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" // Updated with blue
        >
          {linkText}
        </a>
      );
    } else {
      // Internal link
      parts.push(
        <Link
          key={match.index}
          href={linkHref}
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" // Updated with blue
        >
          {linkText}
        </Link>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 1 ? <>{parts}</> : text;
}
