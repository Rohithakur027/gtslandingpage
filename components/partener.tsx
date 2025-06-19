"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PartnerPlacementSection() {
  return (
    <section className="py-20 bg-[#f0e4fc] relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Animated Logos Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1 */}
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">✈</span>
                  </div>
                  <div className="text-red-600 font-bold text-sm">Emirates</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <div className="text-orange-600 font-bold text-sm">Air India</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">6E</span>
                  </div>
                  <div className="text-blue-600 font-bold text-sm">IndiGo</div>
                </div>

                {/* Row 2 */}
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">QR</span>
                  </div>
                  <div className="text-purple-800 font-bold text-sm">Qatar Airways</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">EY</span>
                  </div>
                  <div className="text-yellow-600 font-bold text-sm">Etihad</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">LH</span>
                  </div>
                  <div className="text-blue-800 font-bold text-sm">Lufthansa</div>
                </div>

                {/* Row 3 */}
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "3s" }}
                >
                  <div className="w-12 h-12 bg-yellow-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">TAJ</span>
                  </div>
                  <div className="text-yellow-700 font-bold text-sm">Taj Hotels</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "3.5s" }}
                >
                  <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">M</span>
                  </div>
                  <div className="text-red-700 font-bold text-sm">Marriott</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "4s" }}
                >
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">H</span>
                  </div>
                  <div className="text-blue-700 font-bold text-sm">Hilton</div>
                </div>

                {/* Row 4 */}
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "4.5s" }}
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">SG</span>
                  </div>
                  <div className="text-green-600 font-bold text-sm">SpiceJet</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "5s" }}
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">UK</span>
                  </div>
                  <div className="text-blue-500 font-bold text-sm">Vistara</div>
                </div>
                <div
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-28 animate-float border border-gray-100"
                  style={{ animationDelay: "5.5s" }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">ITC</span>
                  </div>
                  <div className="text-purple-600 font-bold text-sm">ITC Hotels</div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#796efd]/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#5a4fe0]/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#796efd]/40 rounded-full animate-bounce"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Trusted by{" "}
                  <span className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent">
                    5000+
                  </span>{" "}
                  Students
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full mb-6"></div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed">
                Across India, Ground to Sky Academy is helping students build successful aviation careers with our
                industry partnerships and placement guarantee in top airlines and hospitality brands.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-slate-600 text-xs">Placement Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-slate-600 text-xs">Industry Partners</div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
