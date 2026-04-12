import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PartnerPlacementSectionOld from "@/components/partner-placement";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/gallery";
import CoursesSection from "@/components/course-section";
import FAQSection from "@/components/faq-section";
import TestimonialsSection from "@/components/testimonials-section";
import FinalCTASection from "@/components/final-cta-section";
import Footer from "@/components/footer";
import { HomepageCounselingPopup } from "@/components/homepage-client-wrapper";
import FAQSchema from "@/components/faq-schema";

export const metadata: Metadata = {
  title: "Best Air Hostess & Ground Staff Training Institute in Delhi | Ground to Sky Academy",
  description:
    "Join Delhi's top aviation training academy. Professional cabin crew, air hostess, ground staff & hospitality courses near Janakpuri Metro. 100% placement support. Enroll now!",
  keywords:
    "air hostess training Delhi, ground staff training Delhi, cabin crew training Delhi, aviation training courses Delhi India, best air hostess academy Delhi, cabin crew course Janakpuri, airport ground staff course Delhi, air hostess institute Delhi",
  alternates: { canonical: "https://groundtosky.in" },
  openGraph: {
    title: "Best Air Hostess & Ground Staff Training Institute in Delhi | Ground to Sky Academy",
    description:
      "Join Delhi's top aviation training academy. Professional cabin crew, air hostess, ground staff & hospitality courses. 100% placement support near Janakpuri Metro.",
    url: "https://groundtosky.in",
    siteName: "Ground to Sky Academy",
    type: "website",
    images: [
      {
        url: "https://groundtosky.in/images/GTS-Logo.png",
        width: 1200,
        height: 630,
        alt: "Ground to Sky Academy — Best Air Hostess & Aviation Training Institute in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Air Hostess & Ground Staff Training in Delhi | Ground to Sky Academy",
    description:
      "Delhi's top aviation academy. Air hostess, cabin crew, ground staff & hotel management courses with 100% placement assistance near Janakpuri Metro.",
    images: ["https://groundtosky.in/images/GTS-Logo.png"],
  },
};

export default function GroundToSkyAcademy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0eeff] to-[#f8f7ff]">
      <FAQSchema />
      <Navigation />
      <HomepageCounselingPopup />
      <HeroSection />
      <PartnerPlacementSectionOld />
      <FeaturesSection />
      <HowItWorksSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
