"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Phone, User, CheckCircle } from "lucide-react";

interface CounselingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CounselingPopup({
  isOpen,
  onClose,
}: CounselingPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-[#f3f1ff] to-[#faf9ff] border-[#8064f4]/30 relative overflow-hidden shadow-2xl">
        {/* Airplane Animation Overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#8064f4] via-[#9575f5] to-[#a686f6] z-10 flex items-center justify-center">
            {/* Sky Background with Clouds */}
            <div className="absolute inset-0">
              {/* Cloud 1 */}
              <div className="absolute top-8 left-4 w-16 h-8 bg-white/30 rounded-full animate-pulse">
                <div className="absolute top-1 left-2 w-8 h-6 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 right-2 w-6 h-4 bg-white/40 rounded-full"></div>
              </div>

              {/* Cloud 2 */}
              <div className="absolute top-16 right-8 w-12 h-6 bg-white/30 rounded-full animate-pulse delay-1000">
                <div className="absolute top-0 left-1 w-6 h-4 bg-white/40 rounded-full"></div>
                <div className="absolute top-1 right-1 w-4 h-3 bg-white/40 rounded-full"></div>
              </div>

              {/* Cloud 3 */}
              <div className="absolute bottom-16 left-8 w-14 h-7 bg-white/30 rounded-full animate-pulse delay-2000">
                <div className="absolute top-1 left-2 w-7 h-5 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 right-2 w-5 h-3 bg-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Airplane */}
            <div className="relative z-20">
              <div className="animate-bounce">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  className="text-white drop-shadow-lg"
                >
                  {/* Airplane Body */}
                  <ellipse cx="40" cy="30" rx="25" ry="4" fill="currentColor" />
                  {/* Wings */}
                  <ellipse cx="35" cy="30" rx="15" ry="2" fill="currentColor" />
                  <ellipse cx="45" cy="30" rx="15" ry="2" fill="currentColor" />
                  {/* Tail */}
                  <polygon points="15,30 20,25 20,35" fill="currentColor" />
                  {/* Windows */}
                  <circle cx="45" cy="30" r="2" fill="#8064f4" opacity="0.8" />
                  <circle cx="50" cy="30" r="2" fill="#8064f4" opacity="0.8" />
                  <circle cx="55" cy="30" r="2" fill="#8064f4" opacity="0.8" />
                  {/* Propeller */}
                  <circle
                    cx="65"
                    cy="30"
                    r="1"
                    fill="currentColor"
                    className="animate-spin"
                  />
                  <line
                    x1="63"
                    y1="30"
                    x2="67"
                    y2="30"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="animate-spin"
                  />
                </svg>
              </div>

              {/* Loading Text */}
              <div className="text-center mt-8">
                <div className="text-white font-bold text-lg mb-2">
                  Taking Off...
                </div>
                <div className="text-white/80 text-sm">
                  Processing your counseling request
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {isSuccess && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 z-10 flex items-center justify-center">
            <div className="text-center text-white">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
              <p className="text-sm opacity-90">
                We'll contact you within 24 hours
              </p>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 z-20 text-[#8064f4] hover:text-[#6b52d9]"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-2 bg-gradient-to-r from-[#8064f4] to-[#9575f5] text-white border-0">
            🎓 Free Counseling
          </Badge>
          <CardTitle className="text-xl font-bold text-[#8064f4]">
            Get Expert Career Guidance
          </CardTitle>
          <p className="text-sm text-gray-600">
            Speak with our aviation experts and discover your perfect career
            path
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium flex items-center gap-2 text-[#002685]"
              >
                <User className="h-4 w-4 text-[#8064f4]" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border-[#8064f4]/30 focus:border-[#8064f4] focus:ring-[#8064f4]/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium flex items-center gap-2 text-[#002685]"
              >
                <Phone className="h-4 w-4 text-[#8064f4]" />
                Mobile Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border-[#8064f4]/30 focus:border-[#8064f4] focus:ring-[#8064f4]/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-[#002685]"
              >
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your career goals..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="border-[#8064f4]/30 focus:border-[#8064f4] focus:ring-[#8064f4]/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#8064f4] to-[#9575f5] hover:from-[#6b52d9] hover:to-[#8064f4] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Taking Off..." : "Get Free Counseling"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is secure and will not be shared with third
              parties
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
