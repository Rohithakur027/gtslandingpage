"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/training-1.jpg",
    alt: "Air hostess training session",
    category: "Training",
    description: "Students practicing in-flight service procedures",
  },
  {
    id: "2",
    src: "/images/gallery/graduation-1.jpg",
    alt: "Graduation ceremony",
    category: "Events",
    description: "Proud graduates receiving their certificates",
  },
  {
    id: "3",
    src: "/images/gallery/facilities-1.jpg",
    alt: "Academy facilities",
    category: "Facilities",
    description: "State-of-the-art training facilities",
  },
  {
    id: "4",
    src: "/images/gallery/workshop-1.jpg",
    alt: "Industry workshop",
    category: "Events",
    description: "Industry experts conducting workshops",
  },
  {
    id: "5",
    src: "/images/gallery/training-2.jpg",
    alt: "Grooming session",
    category: "Training",
    description: "Professional grooming and etiquette training",
  },
  {
    id: "6",
    src: "/images/gallery/campus-1.jpg",
    alt: "Campus life",
    category: "Campus",
    description: "Students enjoying campus activities",
  },
  {
    id: "7",
    src: "/images/gallery/placement-1.jpg",
    alt: "Placement drive",
    category: "Events",
    description: "Students participating in placement interviews",
  },
  {
    id: "8",
    src: "/images/gallery/facilities-2.jpg",
    alt: "Mock aircraft cabin",
    category: "Facilities",
    description: "Realistic aircraft cabin for practical training",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<string>("all");

  const categories = ["all", "Training", "Events", "Facilities", "Campus"];

  const filteredImages =
    currentCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === currentCategory);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedIndex < filteredImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedImage(filteredImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-0">
          Our Gallery
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Life at Ground to sky Academy
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our vibrant campus life, world-class facilities, and memorable
          moments from training sessions and events.
        </p>
      </div>

      <Tabs
        value={currentCategory}
        onValueChange={setCurrentCategory}
        className="w-full"
      >
        <div className="flex justify-center mb-12">
          <TabsList className="bg-gray-100 p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all capitalize"
              >
                {category === "all" ? "All" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={currentCategory} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => handleImageClick(image, index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <Badge className="mb-2 bg-accent text-white border-0 text-xs">
                      {image.category}
                    </Badge>
                    <h3 className="text-white font-medium text-sm">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 backdrop-blur-lg border-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6 backdrop-blur-sm">
                <Badge className="mb-2 bg-accent text-white border-0">
                  {selectedImage.category}
                </Badge>
                <h3 className="text-lg font-medium text-white mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-sm text-white/80">
                  {selectedImage.description}
                </p>
              </div>

              {selectedIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </button>
              )}

              {selectedIndex < filteredImages.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
