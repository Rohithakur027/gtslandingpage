"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Phone, Mail, Clock, MapPin, Train, Bus, Car, CheckCircle } from "lucide-react";
import Navigation from "@/components/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    ageGroup: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    ageGroup: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const validateMobile = (mobile: string) => /^[0-9]{10}$/.test(mobile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
    }
    if (submitError) setSubmitError("");
    if (submitSuccess) setSubmitSuccess("");
  };

  const handleAgeGroupChange = (value: string) => {
    setFormData((prev) => ({ ...prev, ageGroup: value }));
    if (errors.ageGroup) setErrors((prev) => ({ ...prev, ageGroup: "" }));
    if (submitError) setSubmitError("");
    if (submitSuccess) setSubmitSuccess("");
  };

  const submitEnquiry = async (data: typeof formData) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: data.name,
          phone: data.mobile,
          age_group: data.ageGroup,
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) return { success: true };
      throw new Error(result.error || "Failed to submit");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to submit application. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", mobile: "", ageGroup: "" });
    setSubmitError("");
    setSubmitSuccess("");

    let hasErrors = false;
    const newErrors = { name: "", mobile: "", ageGroup: "" };

    if (!formData.name.trim()) { newErrors.name = "Name is required"; hasErrors = true; }
    if (!formData.mobile.trim()) { newErrors.mobile = "Mobile number is required"; hasErrors = true; }
    else if (!validateMobile(formData.mobile)) { newErrors.mobile = "Mobile number must be exactly 10 digits"; hasErrors = true; }
    if (!formData.ageGroup) { newErrors.ageGroup = "Age group is required"; hasErrors = true; }

    if (hasErrors) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    try {
      await submitEnquiry(formData);
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-18154479899/grmHCl3ijaecBJvC3dRD",
          value: 1.0,
          currency: "INR",
        });
      }
      setSubmitSuccess("Thank you. Our admissions team will call you shortly.");
      window.setTimeout(() => {
        router.push("/thank-you");
      }, 900);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-20 max-w-7xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#796efd] text-white border-0">Start Your Journey</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contact Ground to Sky Air Hostess Academy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take the first step towards your dream career in aviation and hospitality. Fill in the form or reach us directly.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Form + Map */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 md:p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-2">Apply Now</h2>
              <p className="text-gray-500 text-sm mb-6">
                Our admissions team will call you back within 24 hours.
              </p>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                    <p className="text-sm text-red-700 mt-1">{submitError}</p>
                  </div>
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-green-800">Submitted Successfully</h3>
                    <p className="text-sm text-green-700 mt-1">{submitSuccess}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#796efd]/40 focus:border-[#796efd] transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#796efd]/40 focus:border-[#796efd] transition-colors ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                  />
                  {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                  <p className="mt-1 text-xs text-gray-400">Enter exactly 10 digits (e.g., 9876543210)</p>
                </div>

                <div>
                  <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-2">
                    Age Group <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.ageGroup}
                    onValueChange={handleAgeGroupChange}
                  >
                    <SelectTrigger
                      id="ageGroup"
                      className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-[#796efd]/40 focus:ring-offset-0 focus:border-[#796efd] transition-colors data-[placeholder]:text-gray-500 ${
                        errors.ageGroup ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent className="border-[#796efd]/30">
                      <SelectItem value="Below 18" className="focus:bg-[#796efd]/10 focus:text-primary">
                        Below 18
                      </SelectItem>
                      <SelectItem value="18-26" className="focus:bg-[#796efd]/10 focus:text-primary">
                        18-26
                      </SelectItem>
                      <SelectItem value="26+" className="focus:bg-[#796efd]/10 focus:text-primary">
                        26+
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.ageGroup && <p className="mt-1 text-sm text-red-600">{errors.ageGroup}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || Boolean(submitSuccess)}
                  className={`w-full ${
                    isSubmitting ? "bg-[#796efd]/80 animate-pulse" : "bg-[#796efd] hover:bg-[#695ef0]"
                  } text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>

              <p className="mt-6 text-xs text-center text-gray-400">
                Walk-ins welcome · Mon – Sat, 10:00 AM – 5:30 PM
              </p>
            </Card>

            {/* Map under form */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.484!2d77.07711390000001!3d28.629821600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0549ef5ff5fd%3A0x30f2eadc9294a32f!2sGround+To+Sky+Airhostess+Academy+(+Best+Air+Hostess+%26+Cabin+Crew+Training+Institute+In+Delhi)!5e0!3m2!1sen!2sin!4v1747305600000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ground to Sky Airhostess Academy Location - Janakpuri, New Delhi"
              ></iframe>
            </div>
          </div>

          {/* RIGHT — Contact Info, Addresses, How to Reach */}
          <div className="space-y-6">

            {/* Quick contact strip */}
            <div className="bg-[#796efd] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href="tel:+919560002923" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 rounded-full p-2">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">+91 95600 02923</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>hello@groundtosky.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Mon – Sat, 10:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>

            {/* Campus addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#796efd]/10 rounded-full p-2 mt-0.5 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#796efd]" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Janakpuri Campus</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Ground to Sky Air Hostess Academy<br />
                      Janakpuri, West Delhi<br />
                      New Delhi – 110058
                    </p>
                    <p className="text-[#796efd] text-xs mt-1">Near Metro Gate 1, Blue Line</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-[#796efd]/10 rounded-full p-2 mt-0.5 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#796efd]" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Green Park Campus</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      GTS Air Hostess Academy<br />
                      Ajit Singh House, 6th Floor<br />
                      Green Park, Yusuf Sarai<br />
                      New Delhi – 110049
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to reach */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-primary mb-4">How to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#796efd]/10 rounded-full p-2 flex-shrink-0">
                    <Train className="h-4 w-4 text-[#796efd]" />
                  </div>
                  <p className="text-gray-600 text-sm pt-1">
                    <strong>Metro:</strong> Janakpuri West Station (Blue Line), Gate 1 — short walk to campus
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#796efd]/10 rounded-full p-2 flex-shrink-0">
                    <Bus className="h-4 w-4 text-[#796efd]" />
                  </div>
                  <p className="text-gray-600 text-sm pt-1">
                    <strong>Bus:</strong> Multiple DTC &amp; cluster routes connect Janakpuri to all parts of Delhi and NCR
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#796efd]/10 rounded-full p-2 flex-shrink-0">
                    <Car className="h-4 w-4 text-[#796efd]" />
                  </div>
                  <p className="text-gray-600 text-sm pt-1">
                    <strong>Car:</strong> Via Pankha Road or Janakpuri District Centre — parking available nearby
                  </p>
                </div>
              </div>
            </div>

            {/* Admission note */}
            <div className="bg-[#796efd]/5 border border-[#796efd]/20 rounded-2xl p-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                Our admissions counselors are available to help you choose the right aviation or
                hospitality course. <strong>Walk-ins welcome</strong> during office hours — no appointment needed.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
