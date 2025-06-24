"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#796efd] via-[#5a4fe0] to-[#4338ca] rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 relative overflow-hidden">
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
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
              {/* Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Launch Your{" "}
                    <span className="text-yellow-300">Aviation Career</span>{" "}
                    Today
                  </h2>

                  <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Join 5000+ successful aviation professionals. Expert
                    training, guaranteed placement.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contact">
                      <Plane className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                      Get Free Counseling
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                      5000+
                    </div>
                    <div className="text-white/80 text-xs md:text-sm">
                      Students Placed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                      100%
                    </div>
                    <div className="text-white/80 text-xs md:text-sm">
                      Placement Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                      50+
                    </div>
                    <div className="text-white/80 text-xs md:text-sm">
                      Airline Partners
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Phone mockup container - responsive sizing */}
                  <div className="relative mx-auto w-64 h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 bg-white rounded-2xl md:rounded-3xl shadow-2xl p-2 transform rotate-6 lg:rotate-12 hover:rotate-3 lg:hover:rotate-6 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl md:rounded-2xl overflow-hidden relative">
                      {/* Phone screen content */}
                      <div className="absolute inset-0 bg-white m-3 md:m-4 rounded-lg md:rounded-xl shadow-inner">
                        <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#796efd] rounded-md md:rounded-lg flex items-center justify-center">
                              <Plane className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                            <div className="text-xs text-gray-500">
                              Ground to Sky
                            </div>
                          </div>

                          {/* Stats cards */}
                          <div className="space-y-2 md:space-y-3">
                            <div className="bg-blue-50 rounded-lg p-2 md:p-3">
                              <div className="text-xs text-blue-600 mb-1">
                                Air Hostess Training
                              </div>
                              <div className="text-sm md:text-lg font-bold text-blue-800">
                                6 Months
                              </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-2 md:p-3">
                              <div className="text-xs text-green-600 mb-1">
                                Placement Rate
                              </div>
                              <div className="text-sm md:text-lg font-bold text-green-800">
                                100%
                              </div>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-2 md:p-3">
                              <div className="text-xs text-purple-600 mb-1">
                                Starting Salary
                              </div>
                              <div className="text-sm md:text-lg font-bold text-purple-800">
                                ₹45K+
                              </div>
                            </div>
                          </div>

                          {/* Progress bars */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Course Progress</span>
                              <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#796efd] h-2 rounded-full"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-5 md:h-6 bg-black rounded-b-lg md:rounded-b-xl"></div>
                    </div>
                  </div>

                  {/* Floating elements - responsive positioning */}
                  <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-sm md:text-xl">✈️</span>
                  </div>
                  <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-10 h-10 md:w-16 md:h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-lg md:text-2xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
