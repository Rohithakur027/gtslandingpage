"use client";

import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#fff4ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#f0eeff] text-[#796efd] border-0 px-4 py-2 mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-6">
            Start Your Aviation Journey With Us
            <span className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our streamlined enrollment process gets you started on your aviation
            career path quickly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
              1
            </div>
            <h3 className="text-lg font-bold text-[#032789] mb-4">
              Apply & Get Counseling
            </h3>
            <p className="text-sm text-slate-600">
              Submit your application and get personalized career counseling
              from our aviation experts.
            </p>
            {/* Continuous line */}
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#796efd]/30 z-0"></div>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
              2
            </div>
            <h3 className="text-lg font-bold text-[#032789] mb-4">
              Choose Your Course
            </h3>
            <p className="text-sm text-slate-600">
              Select from Air Hostess, Ground Staff, or Hospitality programs
              based on your career goals.
            </p>
            {/* Continuous line */}
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#796efd]/30 z-0"></div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-[#032789] mb-4">
              Train & Get Placed
            </h3>
            <p className="text-sm text-slate-600">
              Complete your training with hands-on experience and secure your
              dream job with our placement support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
