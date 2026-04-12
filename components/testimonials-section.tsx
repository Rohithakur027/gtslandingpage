"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Priya Sharma",
    placement: "IndiGo Airlines",
    course: "Air Hostess Training",
    quote:
      "Ground to Sky Academy completely transformed my career. Within 3 months of completing the air hostess training, I got placed at IndiGo. The grooming and interview prep sessions were outstanding.",
    initials: "PS",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Rahul Mehra",
    placement: "GMR Group — IGI Airport",
    course: "Ground Staff Training",
    quote:
      "The ground staff training here is extremely practical. I learned real airport operations — check-in, boarding, baggage — and landed a job at IGI Airport within weeks of graduating.",
    initials: "RM",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Simran Kaur",
    placement: "Taj Hotels",
    course: "Hotel Operations Management",
    quote:
      "I joined from Punjabi University and had no hospitality experience. The faculty here are so supportive. I'm now working at Taj Hotels and it's all thanks to Ground to Sky Academy.",
    initials: "SK",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Ankit Verma",
    placement: "Air Arabia",
    course: "Cabin Crew Training",
    quote:
      "Dreaming of flying international was just a dream until I joined here. The cabin crew course is very detailed — safety, service, communication. I'm now flying with Air Arabia out of Delhi.",
    initials: "AV",
    color: "from-orange-500 to-orange-600",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Ground to Sky Academy",
  "url": "https://groundtosky.in",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": testimonials.map((t) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": t.name },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "reviewBody": t.quote,
  })),
};

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#f0eeff] text-[#796efd] border-0 px-4 py-2 mb-4">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-4">
            Students Who Took Flight With Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Over 10,000 graduates have launched their aviation and hospitality
            careers with the support of Ground to Sky Academy, Delhi.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating />
            <span className="text-sm font-semibold text-gray-700">4.9 / 5</span>
            <span className="text-sm text-gray-500">from our students</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#032789] text-sm leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#796efd] font-medium">
                      {testimonial.placement}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Course badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Badge className="bg-gray-100 text-gray-600 border-0 text-xs font-normal">
                    {testimonial.course}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
