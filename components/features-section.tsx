"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Users, Award, Shield, CreditCard, Clock } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#f0eeff] text-[#796efd] border-0 px-4 py-2 mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#032789] mb-6">
            Why Choose Ground to Sky Academy?
           
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to launch your successful
            aviation career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-[#fff4ec]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a7f3d0] to-[#34d399] rounded-full flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                100% Placement Assitance
              </h3>
              <p className="text-sm text-slate-600">
                Guaranteed job placement in top airlines and hospitality brands
                with our extensive industry network.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-white hover:bg-[#f0e4fc] transition-colors duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                Industry Expert Faculty
              </h3>
              <p className="text-sm text-slate-600">
                Learn from experienced aviation professionals and former airline
                staff with real industry insights.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-[#fff4ec]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                Modern Training Facilities
              </h3>
              <p className="text-sm text-slate-600">
                State-of-the-art training facilities with aircraft simulators
                and real-world practice environments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-white hover:bg-[#f0e4fc] transition-colors duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                International Certifications
              </h3>
              <p className="text-sm text-slate-600">
                Globally recognized certifications that open doors to
                international career opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-[#fff4ec]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                Flexible Payment Options
              </h3>
              <p className="text-sm text-slate-600">
                Easy EMI options and education loan assistance to make your
                aviation dreams affordable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-white hover:bg-[#f0e4fc] transition-colors duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#032789] mb-4">
                24/7 Student Support
              </h3>
              <p className="text-sm text-slate-600">
                Round-the-clock support for students with dedicated mentors and
                career guidance counselors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
