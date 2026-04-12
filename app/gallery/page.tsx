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
    src: "/images/training/01.webp",
    alt: "Personal grooming session at Ground to Sky Academy",
    category: "Training",
    description: "Students practicing professional grooming and etiquette",
  },
  {
    id: "2",
    src: "/images/training/02.webp",
    alt: "Mock interview practice for cabin crew",
    category: "Training",
    description: "Students preparing for airline interview processes",
  },
  {
    id: "3",
    src: "/images/training/03.webp",
    alt: "In-flight service training at GTS Academy",
    category: "Training",
    description: "Hands-on in-flight service training session",
  },
  {
    id: "4",
    src: "/images/training/04.webp",
    alt: "Safety demonstration class",
    category: "Training",
    description: "Students learning emergency safety procedures",
  },
  {
    id: "5",
    src: "/images/training/05.webp",
    alt: "Spoken English class for aviation students",
    category: "Training",
    description: "English language and communication training",
  },
  {
    id: "6",
    src: "/images/training/08.webp",
    alt: "Aircraft cabin mock-up training",
    category: "Facilities",
    description: "Realistic aircraft cabin for practical training",
  },
  {
    id: "7",
    src: "/images/training/09.webp",
    alt: "Emergency procedures drill at GTS Academy",
    category: "Training",
    description: "Students participating in emergency evacuation drills",
  },
  {
    id: "8",
    src: "/images/training/13.webp",
    alt: "Team building activities at Ground to Sky Academy",
    category: "Campus",
    description: "Students enjoying team building and campus activities",
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
          Training Life at Ground to Sky Academy, Delhi
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
