import Image from "next/image"
import { BlogPost } from "@/types/blogType"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="text-lg leading-relaxed text-foreground">
        <p>{post.introduction}</p>
      </div>

      {/* Main Sections */}
      {post.sections.map((section) => (
        <section key={section.id} className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">{section.heading}</h2>

          {section.image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
              <Image
                src={section.image || "/placeholder.svg"}
                alt={section.imageAlt || section.heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}

          {section.subSections.map((subSection) => (
            <div key={subSection.id} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">{subSection.subHeading}</h3>

              {subSection.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {subSection.codeSnippet && (
                <Card className="bg-muted">
                  <CardContent className="p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="language-{subSection.codeSnippet.language}">{subSection.codeSnippet.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              )}

              {subSection.quote && (
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg">
                  <p className="text-lg italic text-foreground">{subSection.quote}</p>
                </blockquote>
              )}

              {subSection.list && (
                <ul className="space-y-2 ml-6">
                  {subSection.list.map((item, index) => (
                    <li key={index} className="text-foreground list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}

      {/* Conclusion */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Conclusion</h2>
        <p className="text-foreground leading-relaxed">{post.conclusion}</p>
      </div>

      {/* Call to Action */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">{post.callToAction.title}</h3>
          <p className="text-muted-foreground">{post.callToAction.description}</p>
          <Button asChild size="lg">
            <Link href={post.callToAction.buttonLink}>{post.callToAction.buttonText}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
