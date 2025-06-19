"use client";

import { useState, useEffect } from "react";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PartnerPlacementSection from "@/components/partener";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works";
import CoursesSection from "@/components/course-section";
import FAQSection from "@/components/faq-section";
import FinalCTASection from "@/components/ui/final-cta-section";
import Footer from "@/components/footer";
import CounselingPopup from "@/components/counselling-popup";

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
`}</style>;

export default function GroundToSkyAcademy() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCounselingPopup, setShowCounselingPopup] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Show counseling popup after 5 seconds
    const timer = setTimeout(() => {
      setShowCounselingPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0eeff] to-[#f8f7ff]">
      <Navigation />

      <CounselingPopup
        isOpen={showCounselingPopup}
        onClose={() => setShowCounselingPopup(false)}
      />

      <HeroSection isVisible={isVisible} />
      <PartnerPlacementSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CoursesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
