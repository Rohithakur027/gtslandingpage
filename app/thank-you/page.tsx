"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Plane,
  Home,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";

interface ThankYouModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  applicantName?: string;
}

export default function ThankYouModal({
  isOpen = true,
  onClose = () => {},
  applicantName = "Applicant",
}: ThankYouModalProps) {
  // The useEffect hook that pushed the GTM event has been removed.

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <CardHeader className="text-center pb-4 pt-6">
          <div className="relative mx-auto mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5a4fe0] to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            </div>
          </div>

          <CardTitle className="text-xl font-bold text-[#032789] mb-2">
            Application Submitted!
          </CardTitle>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Plane className="h-4 w-4 text-[#5a4fe0]" />
            <span className="text-sm font-semibold text-[#032789]">
              Ground to Sky Academy
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 px-6 pb-6">
          <div className="text-center space-y-2">
            <p className="text-base text-black">
              Dear{" "}
              <span className="font-semibold text-[#5a4fe0]">{applicantName}</span>,
            </p>
            <p className="text-sm text-black leading-snug">
              Thank you for choosing us for your aviation career journey.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm">
                🕐 We'll contact you within an hour
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Button
              asChild
              className="w-full bg-[#5a4fe0] hover:bg-[#4a3fd4] text-white py-2 text-sm"
            >
              <Link href="/">
                <Home className="h-3 w-3 mr-1" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center pt-2 border-t">
            <p className="text-xs text-gray-600">🔒 Your information is secure</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
