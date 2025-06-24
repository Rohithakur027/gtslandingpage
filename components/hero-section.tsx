"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  isVisible?: boolean;
}

export default function HeroSection({ isVisible = true }: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen px-6 md:px-8 lg:px-12 py-12 md:py-20 bg-gradient-to-br from-[#a855f7] via-[#8b5cf6] to-[#6366f1] overflow-hidden">
      {/* Decorative Background Elements */}
      {/* Dot pattern - top right */}
      <div className="absolute top-16 right-16 opacity-30">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Large circular background elements */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tl from-blue-400/20 to-indigo-300/15 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-purple-300/15 to-pink-300/10 rounded-full blur-xl"></div>

      {/* Additional decorative shapes */}
      <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] bg-gradient-to-tr from-green-300/15 to-emerald-300/10 rounded-full blur-lg"></div>

      <div className="container mx-auto relative z-10 h-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Shifted slightly right */}
          <div className="text-left space-y-8 lg:pl-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Launch Your{" "}
                <span className="block text-yellow-300">Aviation Career</span>
                <span className="block">with Air Hostess Academy</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                Join 5000+ successful aviation professionals. Expert training,
                guaranteed placement, and industry-recognized certification.
              </p>

              <div className="flex justify-start">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <Headphones className="w-5 h-5" />
                    <span>Book Free Counseling</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  5000+
                </div>
                <div className="text-white/80 text-sm lg:text-base leading-tight">
                  Students Placed Successfully
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-white/80 text-sm lg:text-base leading-tight">
                  Placement Assistance
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-white/80 text-sm lg:text-base leading-tight">
                  Airline Partners
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video with working play button */}
          <div className="flex justify-center items-center mt-8 lg:mt-0 px-4 lg:px-8">
            <div className="relative">
              {/* Device Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                {/* Screen bezel */}
                <div className="relative bg-black rounded-2xl p-3">
                  {/* Video Container */}
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-black rounded-xl overflow-hidden">
                    {!isVideoPlaying ? (
                      // Video thumbnail with play button
                      <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                        {/* Thumbnail background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50"></div>

                        {/* Play button */}
                        <button
                          onClick={handlePlayVideo}
                          className="relative z-10 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                        >
                          <svg
                            className="w-8 h-8 text-gray-800 ml-1 group-hover:text-purple-600 transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>

                        {/* Decorative elements on thumbnail */}
                        <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
                          Aviation Career
                        </div>
                        <div className="absolute bottom-4 right-4 text-white/60 text-xs">
                          ▶ Watch Now
                        </div>
                      </div>
                    ) : (
                      // Actual video iframe
                      <iframe
                        src="https://www.youtube.com/embed/f-v0upJIpKQ?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&autohide=1&playsinline=1"
                        className="absolute inset-0 w-full h-full scale-150 origin-center"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder="0"
                        title="Aviation Career Video"
                      />
                    )}

                    {/* Overlays to hide YouTube branding when video is playing */}
                    {isVideoPlaying && (
                      <div className="absolute inset-0 pointer-events-none z-10">
                        {/* Top overlay */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent"></div>
                        {/* Bottom overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Device details */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-600 rounded-full"></div>
              </div>

              {/* Glow effects */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-2xl -z-10 scale-110"></div>
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-20 scale-125"></div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-lg">✈️</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <span className="text-xl">🎓</span>
              </div>

              {/* Reset button (optional) */}
              {isVideoPlaying && (
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xs z-20 transition-all duration-300"
                  title="Reset video"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Support Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 group">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
