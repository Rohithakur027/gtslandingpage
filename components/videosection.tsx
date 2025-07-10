"use client"

import { useState } from "react"
import { Play, X, Star, Award, Plane } from "lucide-react"
import Image from "next/image"

interface VideoSectionProps {
  videoUrl?: string
  thumbnailUrl?: string
  title?: string
  description?: string
  duration?: string
}

export default function VideoSection({
  videoUrl = "https://www.youtube.com/embed/f-v0upJIpKQ?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0",
  thumbnailUrl = "/placeholder.svg?height=400&width=400",
  title = "Success Stories",
  description = "See how our graduates achieved their dreams",
  duration = "0:27",
}: VideoSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }

  return (
    <div className="flex justify-center items-center lg:justify-end">
      <div className="relative">
        {/* Main Video Container */}
        <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/30">
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-black rounded-2xl overflow-hidden shadow-inner">
            {!isVideoPlaying ? (
              // Video Thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                <Image
                  src={thumbnailUrl || "/placeholder.svg"}
                  alt="Air hostess training preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Video Info Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-blue-600">{title.toUpperCase()}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs text-white">{duration}</span>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <button
                  onClick={handlePlayVideo}
                  className="relative z-10 w-20 h-20 bg-white hover:bg-blue-50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group border-4 border-blue-400/50"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:text-blue-700 transition-colors duration-300 fill-current" />
                </button>

                {/* Video Description */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-800">Watch {title}</div>
                    <div className="text-xs text-gray-600">{description}</div>
                  </div>
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative w-full h-full">
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title="Air Hostess Academy Video"
                />
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white z-20 transition-all duration-300"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Device Frame Details */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-white/30 rounded-full"></div>
        </div>

        {/* Floating Elements Around Video */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-xl border-2 border-white/30">
          <Plane className="w-5 h-5 text-white rotate-45" />
        </div>

        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-pulse shadow-xl border-2 border-white/30">
          <Star className="w-5 h-5 text-white fill-current" />
        </div>

        <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-float shadow-lg border-2 border-white/20">
          <Award className="w-4 h-4 text-white" />
        </div>

        {/* Glow Effects */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
        <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl -z-20 scale-125"></div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
