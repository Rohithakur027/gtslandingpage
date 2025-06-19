"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function FAQSection() {
  return (
    <section className="py-20 bg-[#f0e4fc]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="FAQ Illustration"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white shadow-sm rounded-xl px-6 py-2 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline py-6 text-base">
                    What are the eligibility criteria for aviation courses?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pt-2 pb-6">
                    Candidates should be between 18-26 years of age, minimum height 5'2" for females and 5'6" for males,
                    12th pass from any stream, good communication skills in English, and medically fit with clear
                    vision.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white shadow-sm rounded-xl px-6 py-2 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline py-6 text-base">
                    Do you provide 100% placement guarantee?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pt-2 pb-6">
                    Yes, we provide 100% placement assistance to all students who successfully complete the course. We
                    have partnerships with major airlines and our placement team works until you get placed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white shadow-sm rounded-xl px-6 py-2 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline py-6 text-base">
                    What airlines do you have partnerships with?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pt-2 pb-6">
                    We have partnerships with major domestic and international airlines including Air India, IndiGo,
                    Emirates, Qatar Airways, and many leading hospitality brands.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white shadow-sm rounded-xl px-6 py-2 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline py-6 text-base">
                    Are the courses internationally recognized?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pt-2 pb-6">
                    Yes, our courses are internationally recognized and certified by aviation authorities. This opens
                    doors to global career opportunities in the aviation industry.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white shadow-sm rounded-xl px-6 py-2 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[#032789] hover:no-underline py-6 text-base">
                    What is the average salary after course completion?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pt-2 pb-6">
                    Starting salaries range from ₹25,000 to ₹45,000 per month for domestic positions and ₹80,000 to
                    ₹1,50,000 per month for international positions, depending on the airline and role.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
