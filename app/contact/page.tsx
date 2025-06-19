"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // For mobile field, only allow numbers and limit to 10 digits
    if (name === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));

      // Clear mobile error when user starts typing
      if (errors.mobile) {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear name error when user starts typing
      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", mobile: "" });

    // Validation
    let hasErrors = false;
    const newErrors = { name: "", mobile: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      hasErrors = true;
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-24">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-accent text-white border-0">
          Start Your Journey
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Contact us
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Take the first step towards your dream career in aviation and
          hospitality by applying to SkyWings Aviation Academy.
        </p>
      </div>

      {isSuccess ? (
        <Card className="max-w-2xl mx-auto p-8 shadow-lg">
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to SkyWings Aviation Academy. Our
              admissions team will review your application and contact you
              within 48 hours.
            </p>
            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
              <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-blue-700 text-sm">
                Please check your mobile for a confirmation SMS. Our team will
                contact you on the provided number.
              </p>
            </div> */}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-6 text-primary border-b pb-2">
                Application Form
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:border-primary transition-colors ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Enter exactly 10 digits (e.g., 9876543210)
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}
