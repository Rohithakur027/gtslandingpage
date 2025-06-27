"use client";

import Image from "next/image";
import { type PlacementData, placementsData } from "@/app/data/placementdata";

// Component to render individual placement card
const PlacementCard = ({
  placement,
  animationDelay,
}: {
  placement: PlacementData;
  animationDelay: number;
}) => {
  // Calculate scaled dimensions with no limits
  const scale = placement.logoScale || 1.0;
  const scaledWidth = placement.logoWidth * scale;
  const scaledHeight = placement.logoHeight * scale;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center animate-float border border-gray-100 hover:shadow-2xl transition-all duration-300"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Realistic Airplane Window Frame */}
      <div className="relative mb-4">
        <div className="relative w-32 h-40">
          {/* Aircraft Fuselage Panel */}
          <div className="absolute -inset-6 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-3xl shadow-2xl">
            {/* Panel Rivets - More realistic positioning */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-lg border border-gray-400"></div>
            <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-lg border border-gray-400"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-lg border border-gray-400"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-lg border border-gray-400"></div>

            {/* Additional rivets for realism */}
            <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-md border border-gray-400"></div>
            <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full shadow-md border border-gray-400"></div>

            {/* Panel lines */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-gray-400 to-gray-500 transform -translate-x-1/2 opacity-30"></div>
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 transform -translate-y-1/2 opacity-30"></div>
          </div>

          {/* Outer Window Frame - Aluminum */}
          <div className="absolute -inset-2 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-[2.5rem] shadow-2xl border-2 border-gray-400">
            {/* Frame bolts */}
            <div className="absolute top-2 left-1/2 w-1.5 h-1.5 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-lg transform -translate-x-1/2"></div>
            <div className="absolute left-2 top-1/2 w-1.5 h-1.5 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-lg transform -translate-y-1/2"></div>
            <div className="absolute right-2 top-1/2 w-1.5 h-1.5 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-lg transform -translate-y-1/2"></div>
          </div>

          {/* Middle Frame - Plastic/Rubber Seal */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] shadow-xl">
            {/* Inner seal detail */}
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[1.8rem] shadow-inner"></div>
          </div>

          {/* Inner Window Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-[1.8rem] shadow-xl border border-gray-300">
            {/* Glass layers */}
            <div className="absolute inset-1 bg-gradient-to-br from-blue-50/30 via-white/50 to-gray-50/40 rounded-[1.5rem] shadow-inner">
              <div className="absolute inset-0.5 bg-gradient-to-br from-white/60 via-blue-50/20 to-white/40 rounded-[1.3rem] shadow-inner">
                {/* Photo container with realistic glass effect */}
                <div className="absolute inset-1 rounded-[1.1rem] overflow-hidden bg-white shadow-2xl border border-gray-200">
                  <Image
                    src={placement.photo || "/placeholder.svg"}
                    alt={placement.name}
                    width={120}
                    height={150}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  {/* Realistic glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-gray-100/5"></div>

                  {/* Realistic window reflections */}
                  <div className="absolute top-4 left-6 w-8 h-16 bg-gradient-to-br from-white/40 to-white/10 rounded-lg blur-sm transform -rotate-12 opacity-60"></div>
                  <div className="absolute top-8 right-6 w-4 h-10 bg-gradient-to-br from-white/30 to-transparent rounded-sm blur-sm opacity-40"></div>
                  <div className="absolute bottom-6 left-8 w-6 h-8 bg-gradient-to-tr from-white/20 to-transparent rounded-md blur-sm opacity-30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Outer frame highlight */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none"></div>

          {/* Realistic scratches and wear */}
          <div className="absolute top-6 left-4 w-8 h-0.5 bg-gray-400/30 rounded-full transform rotate-12 opacity-50"></div>
          <div className="absolute bottom-8 right-5 w-6 h-0.5 bg-gray-400/20 rounded-full transform -rotate-6 opacity-40"></div>
        </div>
      </div>

      {/* Student Name */}
      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
        {placement.name}
      </h3>

      {/* Large Logo Section */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 mb-3 shadow-inner border border-gray-100">
        <p className="text-xs text-gray-500 text-center mb-3 uppercase tracking-wide">
          Placed at
        </p>

        {/* Logo - Maximum Visibility */}
        <div className="flex justify-center items-center min-h-[80px]">
          <Image
            src={placement.companyLogo || "/placeholder.svg"}
            alt={`${placement.companyName} logo`}
            width={scaledWidth}
            height={scaledHeight}
            className="object-contain max-w-full"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "180px",
              maxHeight: "100px",
            }}
            crossOrigin="anonymous"
          />
        </div>
      </div>

      {/* Company Name */}
      <p className="text-base font-bold bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent text-center">
        {placement.companyName}
      </p>
    </div>
  );
};

export default function PlacementsShowcase() {
  return (
    <section className="py-20 bg-[#f0e4fc] relative overflow-hidden">
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
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proud{" "}
              <span className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent">
                Placements
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full mx-auto mb-6"></div>
            <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Meet our successful graduates who are now soaring high with
              leading airlines across the industry
            </p>
          </div>

          {/* Placement Cards - 3 Rows */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {placementsData.slice(0, 4).map((placement, index) => (
                <PlacementCard
                  key={placement.id}
                  placement={placement}
                  animationDelay={index * 0.5}
                />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {placementsData.slice(4, 8).map((placement, index) => (
                <PlacementCard
                  key={placement.id}
                  placement={placement}
                  animationDelay={(index + 2) * 0.5}
                />
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {placementsData.slice(8, 12).map((placement, index) => (
                <PlacementCard
                  key={placement.id}
                  placement={placement}
                  animationDelay={(index + 4) * 0.5}
                />
              ))}
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#796efd]/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#5a4fe0]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#796efd]/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
