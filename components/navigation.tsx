"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/GTS-Logo.png";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#796efd]/20 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={100} height={100} />

            <div>
              <span className="text-xl font-bold text-slate-800">
                Ground to Sky Academy
              </span>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <CheckCircle className="w-3 h-3" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#courses"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#about-us"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#placements"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              Placements
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="w-4 h-4" />
              <span>+91 95600 02923</span>
            </div>
            <Button
              className="bg-[#796efd] hover:bg-[#5a4fe0] text-white relative"
              asChild
            >
              <Link href="/contact">
                Enroll Now
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
