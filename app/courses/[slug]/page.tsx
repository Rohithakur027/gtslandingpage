import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Award, CheckCircle, TrendingUp } from "lucide-react";
import { courses } from "@/data/coursesdata";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-0">
              {course.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-4">
                <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{course.duration}</p>
                <p className="text-xs text-gray-500">Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-4">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{course.classesPerDay}</p>
                <p className="text-xs text-gray-500">Classes/Day</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-4">
                <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Certified</p>
                <p className="text-xs text-gray-500">Industry</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-4">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{course.practicalHours}</p>
                <p className="text-xs text-gray-500">Practical Hours</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#032789]">
              Course Syllabus
            </h2>
            <div className="space-y-4">
              {course.syllabus.map((module, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{module.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#032789]">
              Career Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.careerPaths.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-lg sticky top-24">
            <CardHeader className="bg-[#685bef] text-white">
              <CardTitle className="text-center">Course Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Classes per day:</span>
                  <span className="font-medium">{course.classesPerDay}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Practical Hours:</span>
                  <span className="font-medium">{course.practicalHours}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Certification:</span>
                  <span className="font-medium">{course.certification}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                <ul className="space-y-2">
                  {course.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Get More Info</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
