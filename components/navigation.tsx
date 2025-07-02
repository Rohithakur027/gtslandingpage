"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#796efd]/20 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Logo"
              width={60}
              height={60}
              className="md:w-[100px] md:h-[100px]"
            />
            {/* Hide text heading on mobile, show on md and up */}
            <div className="hidden md:block">
              <span className="text-xl font-bold text-slate-800">
                Ground to Sky Academy
              </span>
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <CheckCircle className="w-3 h-3" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Mobile phone number - visible on mobile */}
          <div className="flex items-center space-x-2 text-sm text-slate-600 md:hidden">
            <Phone className="w-4 h-4" />
            <a href="tel:+919560002923">+91 95600 02923</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#courses"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#faqsection"
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
              href="#footer"
              className="text-slate-600 hover:text-[#796efd] transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="w-4 h-4" />
              <a href="tel:+919560002923">+91 95600 02923</a>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#796efd]/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#courses"
                className="text-slate-600 hover:text-[#796efd] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="#faqsection"
                className="text-slate-600 hover:text-[#796efd] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#placements"
                className="text-slate-600 hover:text-[#796efd] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Placements
              </Link>
              <Link
                href="#footer"
                className="text-slate-600 hover:text-[#796efd] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-[#796efd] hover:bg-[#5a4fe0] text-white relative w-fit"
                asChild
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enroll Now
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
