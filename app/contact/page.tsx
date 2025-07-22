"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import Navigation from "@/components/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Replace this with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyviVIE7-c_Es0gNz64Q-9PeIuXXJ9s6C7wddXySZYQFHGtz1mRCjsvsowxrRifs4IT/exec";

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));

      if (errors.mobile) {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors.name) {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", data.name);
      formDataToSend.append("mobile", data.mobile);
      formDataToSend.append("timestamp", new Date().toISOString());
      formDataToSend.append("source", "Aviation Academy Website");

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.text();

      if (result.includes("Success")) {
        return { success: true };
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      throw new Error("Failed to submit application. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ name: "", mobile: "" });
    setSubmitError("");

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

    try {
      await submitToGoogleSheets(formData);
      // Redirect to thank-you page on success
      router.push("/thankyou"); // replace with your actual thank-you page route
      return;
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Navigation OUTSIDE content padding wrapper */}
      <Navigation />

      {/* Main content container — max width and padding */}
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-white border-0">Start Your Journey</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Take the first step towards your dream career in aviation and hospitality by applying to Ground to Sky Academy.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-lg">
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                <p className="text-sm text-red-700 mt-1">{submitError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-6 text-primary border-b pb-2">
                Application Form
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
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
                  {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                  <p className="mt-1 text-xs text-gray-500">
                    Enter exactly 10 digits (e.g., 9876543210)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting
                    ? "bg-[#796efd]/80 animate-pulse"
                    : "bg-[#796efd] hover:bg-[#695ef0]"
                } text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
