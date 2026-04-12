import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0eeff] to-[#f8f7ff] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-6">
          <Plane className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[#032789] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you are looking for does not exist. Explore our aviation and
          hospitality courses or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-[#796efd] hover:bg-[#5a4fe0] text-white rounded-full px-6"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6"
          >
            <Link href="/courses">
              <BookOpen className="w-4 h-4 mr-2" />
              View Courses
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
