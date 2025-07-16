import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, ChevronRight } from "lucide-react";
import { courses } from "@/data/coursesdata";
export default function CoursesPage() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-24">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-600 border-0">
          Our Programs
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Professional Aviation & Hospitality Courses
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Choose from our comprehensive range of industry-focused courses
          designed to prepare you for a successful career in aviation and
          hospitality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.slug}`}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer h-[500px] flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white border-0">
                    {course.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <course.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    {course.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-[#032789] transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Classes: {course.classesPerDay}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <span>Practical: {course.practicalHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">
                        {course.certification}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <Button className="w-full bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gray-200 rounded-lg p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Need Help Choosing the Right Course?
          </h3>
          <p className="text-gray-600 mb-6">
            Our career counselors are here to help you select the perfect
            aviation or hospitality course for your goals and aspirations.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 w-full sm:w-auto"
          >
            <Link href="/contact">Get Free Career Counseling</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
