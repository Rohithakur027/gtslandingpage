"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/GTS-Logo.png";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#796efd]/20 z-50 shadow-sm">
      {/* Full width container with horizontal padding only */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + name */}
        <div className="flex items-center space-x-3 min-w-0">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="flex-shrink-0"
            />
          </Link>

          {/* Text next to logo, hidden on small, visible on md+ */}
          <div className="hidden sm:block min-w-0 truncate">
            <span className="text-xl font-bold text-slate-800 lg:text-2xl">
              Ground to Sky Academy
            </span>
            <div className="flex items-center space-x-1 text-xs text-green-600">
              <CheckCircle className="w-3 h-3" />
              <span className="truncate">ISO Certified</span>
            </div>
          </div>
        </div>

        {/* Middle: Navigation links for tablet and up */}
        <div className="hidden sm:flex space-x-8 flex-1 justify-center">
          <Link
            href="/"
            className="text-slate-600 hover:text-[#796efd] transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-slate-600 hover:text-[#796efd] transition-colors whitespace-nowrap"
          >
            Courses
          </Link>
          <Link
            href="/blog"
            className="text-slate-600 hover:text-[#796efd] transition-colors whitespace-nowrap"
          >
            Blogs
          </Link>
          <Link
            href="#placements"
            className="text-slate-600 hover:text-[#796efd] transition-colors whitespace-nowrap"
          >
            Placements
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 hover:text-[#796efd] transition-colors whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

        {/* Right side: Phone and enroll now button */}
        <div className="flex items-center space-x-4 min-w-fit">
          {/* Phone shown only on mobile */}
          <div className="flex items-center space-x-2 text-sm text-slate-600 sm:hidden">
            <Phone className="w-4 h-4" />
            <a href="tel:+911234567890" className="whitespace-nowrap">
              +91 95600 02923
            </a>
          </div>

          {/* Phone on md+ */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600 whitespace-nowrap">
            <Phone className="w-4 h-4" />
            <a href="tel:+911234567890">+91 95600 02923</a>
          </div>

          {/* Enroll Now button */}
          <Button
            className="bg-[#796efd] hover:bg-[#5a4fe0] text-white relative whitespace-nowrap px-4 sm:px-6"
            asChild
          >
            <Link href="/contact">
              Enroll Now
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
