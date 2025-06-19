"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plane } from "lucide-react"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#796efd] via-[#5a4fe0] to-[#4338ca] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg
                  className="absolute top-0 left-0 w-full h-full opacity-20"
                  viewBox="0 0 1200 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300V600H0V300Z"
                    fill="url(#gradient1)"
                  />
                  <path
                    d="M0 400C200 300 400 500 600 400C800 300 1000 500 1200 400V600H0V400Z"
                    fill="url(#gradient2)"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Launch Your <span className="text-yellow-300">Aviation Career</span> Today
                  </h2>

                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Join 5000+ successful aviation professionals. Expert training, guaranteed placement.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                    asChild
                  >
                    <Link href="/contact">
                      <Plane className="mr-2 w-5 h-5" />
                      Get Free Counseling
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">5000+</div>
                    <div className="text-white/80 text-xs">Students Placed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-white/80 text-xs">Placement Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">50+</div>
                    <div className="text-white/80 text-xs">Airline Partners</div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Phone mockup container */}
                  <div className="relative mx-auto w-80 h-96 bg-white rounded-3xl shadow-2xl p-2 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                      {/* Phone screen content */}
                      <div className="absolute inset-0 bg-white m-4 rounded-xl shadow-inner">
                        <div className="p-4 space-y-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 bg-[#796efd] rounded-lg flex items-center justify-center">
                              <Plane className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-xs text-gray-500">Ground to Sky</div>
                          </div>

                          {/* Stats cards */}
                          <div className="space-y-3">
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="text-xs text-blue-600 mb-1">Air Hostess Training</div>
                              <div className="text-lg font-bold text-blue-800">6 Months</div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-3">
                              <div className="text-xs text-green-600 mb-1">Placement Rate</div>
                              <div className="text-lg font-bold text-green-800">100%</div>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-xs text-purple-600 mb-1">Starting Salary</div>
                              <div className="text-lg font-bold text-purple-800">₹45K+</div>
                            </div>
                          </div>

                          {/* Progress bars */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Course Progress</span>
                              <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#796efd] h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-xl">✈️</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
