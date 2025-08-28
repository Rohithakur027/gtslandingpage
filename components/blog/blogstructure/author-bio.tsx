import Image from "next/image"
import Link from "next/link"
import { BlogAuthor } from "@/types/blogType"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github } from "lucide-react"

interface AuthorBioProps {
  author: BlogAuthor
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <Image
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-foreground">About {author.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{author.bio}</p>

            {author.socialLinks && (
              <div className="flex gap-2">
                {author.socialLinks.thread && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={author.socialLinks.thread} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
                {author.socialLinks.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
                {author.socialLinks.instagram && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={author.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
