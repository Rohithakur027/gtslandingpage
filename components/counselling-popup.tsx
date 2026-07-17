"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Phone, User, AlertCircle, Calendar, CheckCircle } from "lucide-react";

interface CounselingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CounselingPopup({
  isOpen,
  onClose,
}: CounselingPopupProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ageGroup: "",
  });

  const submitEnquiry = async (data: typeof formData) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: data.name,
          phone: data.phone,
          age_group: data.ageGroup,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        return { success: true };
      } else {
        throw new Error(result.error || "Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to submit request. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.ageGroup
    ) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitEnquiry(formData);
      setSubmitSuccess("Thank you. Our admissions team will call you shortly.");
      setFormData({ name: "", phone: "", ageGroup: "" });
      setSubmitError("");
      window.setTimeout(() => {
        router.push("/thank-you");
        onClose();
      }, 900);
      return; 
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // For phone field, only allow numbers and limit to 10 digits
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
    if (submitSuccess) {
      setSubmitSuccess("");
    }
  };

  const handleAgeGroupChange = (value: string) => {
    setFormData({
      ...formData,
      ageGroup: value,
    });

    if (submitError) {
      setSubmitError("");
    }
    if (submitSuccess) {
      setSubmitSuccess("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] bg-gradient-to-br from-[#f3f1ff] to-[#faf9ff] border-[#8064f4]/30 relative overflow-hidden shadow-2xl">
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
          <CardTitle className="text-xl font-bold text-[#032789]">
            Get Expert Career Guidance
          </CardTitle>
          <p className="text-sm text-gray-600">
            Speak with our aviation experts and discover your perfect career
            path
          </p>
        </CardHeader>

        <CardContent className="max-h-[calc(90vh-2rem)] overflow-y-auto">
          {/* Error Message */}
          {submitError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            </div>
          )}

          {submitSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-green-700">{submitSuccess}</p>
              </div>
            </div>
          )}

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
                maxLength={10}
                className="border-[#8064f4]/30 focus:border-[#8064f4] focus:ring-[#8064f4]/20"
              />
              <p className="text-xs text-gray-500">Enter exactly 10 digits</p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="ageGroup"
                className="text-sm font-medium flex items-center gap-2 text-[#002685]"
              >
                <Calendar className="h-4 w-4 text-[#8064f4]" />
                Age Group *
              </Label>
              <Select
                value={formData.ageGroup}
                onValueChange={handleAgeGroupChange}
              >
                <SelectTrigger
                  id="ageGroup"
                  className="border-[#8064f4]/30 bg-white focus:ring-[#8064f4]/20 focus:ring-offset-0 data-[placeholder]:text-gray-500"
                >
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent className="border-[#8064f4]/30">
                  <SelectItem value="Below 18" className="focus:bg-[#8064f4]/10 focus:text-[#032789]">
                    Below 18
                  </SelectItem>
                  <SelectItem value="18-26" className="focus:bg-[#8064f4]/10 focus:text-[#032789]">
                    18-26
                  </SelectItem>
                  <SelectItem value="26+" className="focus:bg-[#8064f4]/10 focus:text-[#032789]">
                    26+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || Boolean(submitSuccess)}
              className="w-full bg-gradient-to-r from-[#8064f4] to-[#9575f5] hover:from-[#6b52d9] hover:to-[#8064f4] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
