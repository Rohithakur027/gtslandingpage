"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section
      id="faqsection"
      className="py-16 bg-[#f0e4fc] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#796efd]/10 to-[#5a4fe0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#5a4fe0]/10 to-[#796efd]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#796efd]/10 text-[#796efd] px-3 py-1.5 rounded-full text-sm font-medium mb-3">
              <span className="w-2 h-2 bg-[#796efd] rounded-full"></span>
              FAQ
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#032789] mb-3 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
              Quick answers to help you understand our aviation training
              programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="hidden md:flex flex-col">
              <div className="relative flex-1">
                {/* Decorative Blur */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#796efd]/20 via-[#5a4fe0]/10 to-transparent rounded-2xl blur-xl"></div>

                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-lg border border-gray-100 w-full max-w-md">
                  <div className="mt-8">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/air-hostess.jpg"
                        alt="Professional Air Hostess"
                        width={400}
                        height={320}
                        className="object-cover object-top w-full h-[320px] hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: "50% 20%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    Expert Guidance
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#796efd]/30 rounded-full animate-pulse"></div>
                <div className="absolute -top-1 left-1/4 w-4 h-4 bg-[#5a4fe0]/40 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Right Side - FAQ Content */}
            <div className="flex flex-col">
              <div className="space-y-3 flex-1">
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      question:
                        "What are the eligibility criteria for aviation courses?",
                      answer:
                        "Candidates should be between 18–26 years of age, minimum height 5'2\" for females and 5'7\" for males, 12th pass from any stream, good communication skills in English, and medically fit with clear vision.",
                    },
                    {
                      question: "Do you provide 100% placement assistance?",
                      answer:
                        "Yes, we provide 100% placement assistance to all students who successfully complete the course. Our placement team supports you until you're placed.",
                    },
                    {
                      question:
                        "Do you provide support after course completion?",
                      answer:
                        "Yes, we offer continued placement assistance, interview preparation, and career guidance even after you complete the course. Our team supports you until you are successfully placed.",
                    },
                    {
                      question: "Are the courses internationally recognized?",
                      answer:
                        "Yes, our courses are internationally recognized and certified by aviation authorities. This opens doors to global career opportunities in the aviation industry.",
                    },
                    {
                      question:
                        "What is the average salary after course completion?",
                      answer:
                        "Starting salaries range from ₹25,000 to ₹45,000 per month for domestic positions and ₹80,000 to ₹1,50,000 per month for international positions, depending on the airline and role.",
                    },
                  ].map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx + 1}`}
                      className="bg-gradient-to-r from-white to-gray-50/50 shadow-sm hover:shadow-md rounded-xl px-5 py-1 border border-gray-100 hover:border-[#796efd]/20 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline hover:text-[#796efd] py-4 text-sm transition-colors duration-300">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-slate-600 pt-1 pb-4 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#796efd]/5 to-[#5a4fe0]/5 rounded-3xl p-8 border border-[#796efd]/10 max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#032789] mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Our expert counselors are here to help you make the right
                  career choice. Get personalized guidance for your aviation
                  journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] hover:from-[#5a4fe0] hover:to-[#796efd] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Our Counselors
                  </Link>
                </Button>

                <div className="text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Phone className="w-4 h-4" />
                    <span>Call us: +91-9560002923</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>Email: hello@groundtosky.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#796efd]/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#5a4fe0]/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
