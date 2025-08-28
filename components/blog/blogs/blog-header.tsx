import { Button } from "@/components/ui/button"

/**
 * Aviation Academy Blog Header Component
 * Displays the main branding and navigation for the aviation blog
 */
export function BlogHeader() {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 text-center">
          {/* Aviation Academy Logo/Brand */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">✈️ SkyWings Aviation Academy</h1>
            <p className="text-xl text-sky-100">Your Gateway to Aviation Careers</p>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Aviation Career Insights & Training Guides</h2>

          {/* Description */}
          <p className="text-lg text-sky-100 max-w-3xl mx-auto mb-8">
            Discover comprehensive guides for aviation careers including air hostess training, commercial pilot
            licensing, and ground operations. Expert insights from industry professionals to help you soar in your
            aviation journey.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8">
              Explore Training Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-700 font-semibold px-8 bg-transparent"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
