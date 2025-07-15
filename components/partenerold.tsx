"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PartnerPlacementSection() {
  // Array of airline partners with their logo paths, names, and individual dimensions
  const partners = [
    {
      name: "Emirates",
      logo: "/images/logos/emirates.png",
      width: 120,
      height: 60,
    },
    {
      name: "Air India",
      logo: "/images/logos/air-india.png",
      width: 100,
      height: 60,
    },
    {
      name: "IndiGo",
      logo: "/images/logos/indigo.png",
      width: 150,
      height: 100,
    },
    {
      name: "Qatar Airways",
      logo: "/images/logos/qatar-airways.png",
      width: 130,
      height: 65,
    },
    {
      name: "Etihad",
      logo: "/images/logos/Etihad-airways.png",
      width: 90,
      height: 75,
    },
    {
      name: "Lufthansa",
      logo: "/images/logos/lufthansa.png",
      width: 85,
      height: 85,
    },
    {
      name: "Taj Hotels",
      logo: "/images/logos/taj.png",
      width: 70,
      height: 100,
    },
    {
      name: "Marriott",
      logo: "/images/logos/marriott.png",
      width: 110,
      height: 65,
    },
    { name: "Hilton", logo: "/images/logos/hilton.png", width: 95, height: 70 },
    {
      name: "SpiceJet",
      logo: "/images/logos/spicejet.png",
      width: 125,
      height: 55,
    },
    {
      name: "Vistara",
      logo: "/images/logos/vistara.png",
      width: 90,
      height: 80,
    },
    {
      name: "Swift Air",
      logo: "/images/logos/swift.png",
      width: 75,
      height: 70,
    },
  ];

  return (
    <section
      id="placements"
      className="py-20 bg-[#f0e4fc] relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 max-w-7xl mx-auto">
          {/* Mobile Layout: Text First */}
          <div className="block lg:hidden">
            {/* Content First - Mobile */}
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Trusted by 10000+ Students
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full mb-4"></div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Ground to Sky Academy offers 100% placement assistance.Our student have made successful transition to leading airline and esteemed hospitality brands.
               
              </p>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    100%
                  </div>
                  <div className="text-slate-600 text-xs">
                    Placement Assistance
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    50+
                  </div>
                  <div className="text-slate-600 text-xs">
                    Industry Partners
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Contact Us 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
offers
            {/* Company Logos Second - Mobile */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {partners.slice(0, 8).map((partner, index) => (
                  <div
                    key={partner.name}
                    className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center justify-center min-h-[120px] animate-float border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {/* Logo Container - Mobile optimized */}
                    <div className="flex items-center justify-center mb-2 flex-grow w-full">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        width={partner.width}
                        height={partner.height}
                        className="object-contain"
                        style={{
                          width: `${partner.width}px`,
                          height: `${partner.height}px`,
                          maxWidth: "100%",
                          maxHeight: "70px",
                        }}
                        sizes="80px"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <span className="text-gray-400 text-xs font-medium">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="text-gray-500 font-medium text-xs text-center leading-tight px-1">
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout: Original Side-by-Side */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Animated Logos Grid */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-6">
                  {partners.map((partner, index) => (
                    <div
                      key={partner.name}
                      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center min-h-[160px] animate-float border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {/* Logo Container */}
                      <div className="flex items-center justify-center mb-3 flex-grow w-full">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={partner.width}
                          height={partner.height}
                          className="object-contain"
                          style={{
                            width: `${partner.width}px`,
                            height: `${partner.height}px`,
                            maxWidth: "100%",
                            maxHeight: "80px",
                          }}
                          sizes="120px"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget
                              .nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div
                          className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <span className="text-gray-400 text-sm font-medium">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div className="text-gray-500 font-medium text-xs text-center leading-tight px-1">
                        {partner.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#796efd]/20 rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#5a4fe0]/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#796efd]/40 rounded-full animate-bounce"></div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Trusted by 10000+ Students
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full mb-6"></div>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  Ground to Sky Academy offers 100% placement assistance, with
                  our students successfully placed in top airlines and leading
                  hospitality brands.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      100%
                    </div>
                    <div className="text-slate-600 text-xs">
                      Placement Assistance
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      50+
                    </div>
                    <div className="text-slate-600 text-xs">
                      Industry Partners
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                   Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
