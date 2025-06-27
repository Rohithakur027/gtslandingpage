"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plane, Users, Award } from "lucide-react";
import Link from "next/link";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-br from-[#f0eeff] to-[#f8f7ff]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#f0eeff] text-[#796efd] border-0 px-4 py-2 mb-4">
            Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] bg-clip-text text-transparent">
              Aviation Career Path
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to launch your successful
            aviation career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Ground Staff Course */}
          <Card className="border-2 border-[#796efd]/20 hover:border-[#796efd]/60 transition-colors duration-300 bg-white flex flex-col h-full">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032789] mb-2">
                  Ground Staff Training
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  6-month intensive program
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Airport operations & management
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Baggage handling & cargo
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Passenger assistance & check-in
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Security procedures & protocols
                  </span>
                </li>
              </ul>
              <Button
                className="w-full bg-[#796efd] hover:bg-[#5a4fe0] text-white mt-auto"
                asChild
              >
                <Link href="/contact">Get Course Details</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Air Hostess Course - MOST POPULAR */}
          <Card className="border-2 border-[#796efd] relative bg-white shadow-xl flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#796efd] text-white px-4 py-2">
                Most Popular
              </Badge>
            </div>
            <CardContent className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032789] mb-2">
                  Air Hostess Training
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  8-month comprehensive program
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Cabin safety & emergency procedures
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Customer service excellence
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Grooming & personality development
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    International protocols & etiquette
                  </span>
                </li>
              </ul>
              <Button
                className="w-full bg-[#796efd] hover:bg-[#5a4fe0] text-white mt-auto"
                asChild
              >
                <Link href="/contact">Get Course Details</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Hospitality Course */}
          <Card className="border-2 border-[#796efd]/20 hover:border-[#796efd]/60 transition-colors duration-300 bg-white flex flex-col h-full">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#796efd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032789] mb-2">
                  Hospitality & Retail
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  3-month specialized program
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Hotel management & operations
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Retail operations & sales
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Customer relations & service
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Event management & coordination
                  </span>
                </li>
              </ul>
              <Button
                className="w-full bg-[#796efd] hover:bg-[#5a4fe0] text-white mt-auto"
                asChild
              >
                <Link href="/contact">Get Course Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Add conversion-focused elements */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-[#796efd]/20">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032789] mb-2">
                  5000+
                </div>
                <div className="text-slate-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032789] mb-2">
                  100%
                </div>
                <div className="text-slate-600">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032789] mb-2">
                  50+
                </div>
                <div className="text-slate-600">Airline Partners</div>
              </div>
            </div>
            <p className="text-[#032789] font-semibold mb-4">
              ⏰ Next batch starts in 15 days - Only 12 seats left!
            </p>
            <Button
              size="lg"
              className="bg-[#032789] hover:bg-[#032789]/90 text-white px-8 py-3 rounded-full"
              asChild
            >
              <Link href="/contact">Reserve Your Seat Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
