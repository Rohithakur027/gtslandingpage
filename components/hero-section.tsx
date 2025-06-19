"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import Link from "next/link";
// import video from "@/public/videos/main-video.mp4";

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = Number.parseFloat(e.target.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-[#796efd] to-[#5a4fe0]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${
              isVisible
                ? "animate-in slide-in-from-left duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Launch Your Aviation Career with Ground to Sky Academy
              </h1>

              <Button
                size="lg"
                className="bg-[#ee7d57] hover:bg-[#47e5b1] text-white font-bold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  <Headphones className="w-5 h-5" />
                  <span>Book Free Counseling</span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">5000+</div>
                <div className="text-white/80 text-xs">
                  Students Placed Successfully
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-xs">
                  Placement Assistance Guarantee
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-xs">
                  Airline & Hotel Partners
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative ${
              isVisible
                ? "animate-in slide-in-from-right duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/30 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-black rounded-3xl shadow-2xl border-4 border-white/20 overflow-hidden">
                <div className="aspect-video relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=400&width=600"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  >
                    <source src={"#"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between mb-2">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white ml-1" />
                        )}
                      </button>

                      <div className="text-white text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={toggleMute}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-white" />
                          )}
                        </button>
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Maximize className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="relative w-full h-1 bg-white/30 rounded-full">
                      <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div
                        className="h-full bg-white rounded-full"
                        style={{
                          width: `${(currentTime / (duration || 1)) * 100}%`,
                        }}
                      ></div>
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
                        style={{
                          left: `${(currentTime / (duration || 1)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Big Play Button for Initial Play */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button
                        onClick={togglePlay}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-transform transform hover:scale-110"
                      >
                        <Play className="w-10 h-10 text-white ml-2" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-black p-4">
                  <h3 className="text-white font-semibold">
                    Ground to Sky Academy - Student Success Stories
                  </h3>
                  <p className="text-white/70 text-sm">
                    Watch how our training transforms careers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
