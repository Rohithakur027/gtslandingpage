"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  Plane,
  Navigation,
  Award,
  Users,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import VideoSection from "./videosection";

interface HeroSectionProps {
  isVisible?: boolean;
}

export default function HeroSection({ isVisible = true }: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure this only runs on client side
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background - Single implementation */}
      <div className="absolute inset-0">
        {isMobile ? (
          <div className="absolute inset-0 bg-[#fff5ed] z-0"></div>
        ) : (
          <>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/take-off.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
          </>
        )}
      </div>

      {/* Floating elements - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 animate-float">
            <Plane className="w-8 h-8 text-blue-400/60 rotate-45" />
          </div>
          <div className="absolute top-40 left-16 animate-float-delayed">
            <Navigation className="w-6 h-6 text-green-400/60" />
          </div>
          <div className="absolute bottom-32 right-32 animate-bounce-slow">
            <Award className="w-7 h-7 text-yellow-400/60" />
          </div>
          <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-green-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="absolute bottom-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform rotate-12"></div>
        </div>
      )}

      {/* Main content - Single implementation */}
      <div className="container mx-auto relative z-10 h-full max-w-7xl px-6 md:px-8 lg:px-12 pt-16 md:pt-12 pb-8 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]">
          <div className={`text-left space-y-6 lg:pl-8 ${isMobile ? 'text-gray-800' : 'text-white'}`}>
            <div className={`inline-flex items-center gap-2 ${isMobile ? 'bg-blue-600/10 border-blue-400/20 text-blue-700' : 'bg-blue-600/20 backdrop-blur-sm border-blue-400/30 text-blue-300'} border rounded-full px-4 py-2 text-sm font-medium`}>
              <Plane className="w-4 h-4" />
              <span>Elite Aviation Academy</span>
            </div>

            <div className="space-y-5">
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isMobile ? 'text-gray-900' : 'text-white'} leading-tight`}>
                Soar High with{" "}
                <span className={`block ${isMobile ? 'text-blue-600' : 'text-blue-400'} relative`}>
                  GTS Academy
                  <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r ${isMobile ? 'from-blue-600 to-green-600' : 'from-blue-400 to-green-400'} rounded-full`}></div>
                </span>
                <span className="block">Become An Accomplished Cabin Crew</span>
              </h1>

              <p className={`text-base md:text-lg ${isMobile ? 'text-gray-700' : 'text-white/90'} leading-relaxed max-w-lg`}>
                Transform your passion for aviation into a rewarding career.
                Join thousands of successful cabin crew professionals with our
                comprehensive training program.
              </p>

              <div className="flex justify-start">
                <Button
                  className={`bg-gradient-to-r ${isMobile ? 'from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700' : 'from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600'} text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-base transform hover:scale-105 border ${isMobile ? 'border-gray-200' : 'border-white/20'}`}
                  asChild
                >
                  <Link href="/contact">
                    <Headphones className="w-4 h-4" />
                    <span>Board Now</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className={`text-left ${isMobile ? 'bg-white/80 text-gray-800 border-gray-200' : 'bg-white/10 backdrop-blur-sm text-white border-white/20'} rounded-lg p-3 border`}>
                <div className="flex items-center gap-2 mb-1">
                  <Users className={`w-4 h-4 ${isMobile ? 'text-blue-600' : 'text-blue-400'}`} />
                  <div className="text-xl lg:text-2xl font-bold">
                    10000+
                  </div>
                </div>
                <div className={`${isMobile ? 'text-gray-600' : 'text-white/80'} text-xs lg:text-sm leading-tight`}>
                  Graduates Placed
                </div>
              </div>
              <div className={`text-left ${isMobile ? 'bg-white/80 text-gray-800 border-gray-200' : 'bg-white/10 backdrop-blur-sm text-white border-white/20'} rounded-lg p-3 border`}>
                <div className="flex items-center gap-2 mb-1">
                  <Award className={`w-4 h-4 ${isMobile ? 'text-green-600' : 'text-green-400'}`} />
                  <div className="text-xl lg:text-2xl font-bold">
                    100%
                  </div>
                </div>
                <div className={`${isMobile ? 'text-gray-600' : 'text-white/80'} text-xs lg:text-sm leading-tight`}>
                  Job Assistance
                </div>
              </div>
              <div className={`text-left ${isMobile ? 'bg-white/80 text-gray-800 border-gray-200' : 'bg-white/10 backdrop-blur-sm text-white border-white/20'} rounded-lg p-3 border`}>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className={`w-4 h-4 ${isMobile ? 'text-yellow-600' : 'text-yellow-400'}`} />
                  <div className="text-xl lg:text-2xl font-bold">
                    50+
                  </div>
                </div>
                <div className={`${isMobile ? 'text-gray-600' : 'text-white/80'} text-xs lg:text-sm leading-tight`}>
                  Airline Partners
                </div>
              </div>
            </div>
          </div>

          <VideoSection/>
        </div>
      </div>

      {/* Chat widget - Desktop only */}
      {!isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 group border-2 border-white/20`}>
            <svg
              className="w-6 h-6 text-white"
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
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}