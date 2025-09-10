import Image from "next/image";
import { BlogPost } from "@/types/blogType";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        {post.hero.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="font-medium">{post.author.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.readTime} min read</span>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
        <Image
          src={post.hero.featuredImage || "/placeholder.svg"}
          alt={post.hero.featuredImageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
    </header>
  );
}
