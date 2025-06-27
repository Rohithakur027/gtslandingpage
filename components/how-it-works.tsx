"use client";

import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Users,
  MessageCircle,
  Shield,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { trainingImages } from "@/app/data/training-data";
import { useEffect, useRef, useState } from "react";

export default function TrainingShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isMobile) return; // Don't animate on mobile

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed;
      container.scrollTop = scrollPosition;

      // Reset scroll when reaching the end for seamless loop
      if (scrollPosition >= container.scrollHeight / 2) {
        scrollPosition = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]); // Add isMobile as dependency

  const trainingPoints = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Personal Grooming",
      description: "Professional appearance & etiquette",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Mock Interviews",
      description: "Confidence building & communication",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "In-Flight Etiquette",
      description: "Service excellence & passenger care",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Spoken English",
      description: "Fluency & accent training",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Safety Training",
      description: "Emergency procedures & protocols",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Personality Development",
      description: "Leadership & interpersonal skills",
    },
  ];

  // Create columns for masonry layout
  const createMasonryColumns = (
    images: typeof trainingImages,
    columnCount: number
  ) => {
    const columns: (typeof trainingImages)[] = Array.from(
      { length: columnCount },
      () => []
    );
    const columnHeights = new Array(columnCount).fill(0);

    images.forEach((image) => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      columns[shortestColumnIndex].push(image);
      // Add estimated height to column (aspect ratio based)
      columnHeights[shortestColumnIndex] +=
        (image.height / image.width) * 200 + 12; // Reduced from 300 to 200
    });

    return columns;
  };

  // Use different image sets for mobile vs desktop
  const mobileImages = trainingImages.slice(0, 7); // Only 7 images for mobile
  const desktopImages = [
    ...trainingImages,
    ...trainingImages,
    ...trainingImages,
  ]; // Full duplicated set for desktop

  const imagesToUse = isMobile ? mobileImages : desktopImages;
  const columnCount = isMobile ? 1 : 4; // Keep 4 columns
  const columns = createMasonryColumns(imagesToUse, columnCount);

  return (
    <section className="py-20 bg-[#fff4ec] relative overflow-hidden">
      {/* Background Aircraft Silhouette */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 50 L350 200 L200 350 L50 200 Z M200 100 L300 200 L200 300 L100 200 Z"
              fill="currentColor"
              className="text-[#032789]"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#f0eeff] text-[#796efd] border-0 px-4 py-2 mb-4">
            Training Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-6">
            Experience Our{" "}
            <span className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent">
              World-Class Training
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Immerse yourself in hands-on learning with industry-standard
            facilities and expert guidance
          </p>
        </div>

        {/* Training Points Section - Moved to top (Hidden on Mobile) */}
        <div className="hidden lg:block mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-6xl mx-auto">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-[#032789] mb-2">
                Our Classes & Training
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Photos from our training sessions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:bg-[#f0eeff]/50 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#796efd] to-[#5a4fe0] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-[#032789] mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] text-white px-8 py-3 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <Plane className="w-5 h-5" />
                  <span>Start Your Journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section with Background Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl mx-auto">
          <div className="relative">
            <div className="h-[500px] overflow-hidden rounded-2xl bg-gradient-to-b from-white/50 to-transparent backdrop-blur-sm border border-white/20 shadow-xl">
              <div
                ref={scrollContainerRef}
                className={`h-full ${
                  isMobile ? "overflow-y-scroll" : "overflow-y-auto"
                } scrollbar-hide`}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                <div
                  className={`flex ${
                    isMobile ? "justify-center" : ""
                  } gap-3 p-4`}
                >
                  {columns.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className={`${
                        isMobile ? "w-full max-w-sm" : "flex-1"
                      } space-y-3`}
                    >
                      {column.map((image, imageIndex) => {
                        const aspectRatio = image.height / image.width;
                        let height = 180; // Reduced base height from 250 to 180

                        // Reduced heights for all aspect ratios
                        if (image.aspectRatio === "tall")
                          height = 240; // Reduced from 350
                        else if (image.aspectRatio === "wide")
                          height = 140; // Reduced from 180
                        else if (image.aspectRatio === "square")
                          height = 200; // Reduced from 280
                        else if (image.aspectRatio === "medium") height = 160; // Reduced from 220

                        return (
                          <div
                            key={`${image.id}-${columnIndex}-${imageIndex}`}
                            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white group cursor-pointer"
                            style={{ height: `${height}px` }}
                          >
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              width={250}
                              height={height}
                              className="w-full h-full object-cover"
                              crossOrigin="anonymous"
                            />

                            {/* Overlay - Reduced opacity */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white text-sm font-medium drop-shadow-lg">
                                {image.alt}
                              </p>
                              <div className="mt-1">
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                  {image.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
