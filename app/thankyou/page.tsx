"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Plane, Mail, Phone, X } from "lucide-react"

interface ThankYouModalProps {
  isOpen?: boolean
  onClose?: () => void
  applicantName?: string
}

export default function ThankYouModal({
  isOpen = true,
  onClose = () => {},
  applicantName = "Future Flight Attendant",
}: ThankYouModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto bg-white shadow-2xl border-0 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Thank You!</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Your application has been successfully submitted
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Dear <span className="font-semibold text-blue-600">{applicantName}</span>,
            </p>
            <p className="text-gray-600 leading-relaxed">
              We have received your application for our Air Hostess Academy program. Our admissions team will review
              your information and contact you within
              <span className="font-semibold text-blue-600"> 2-3 business days</span>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Plane className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">What's Next?</h3>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Application review by our team</li>
              <li>• Interview scheduling (if selected)</li>
              <li>• Course details and enrollment information</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-3">Stay Connected</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>info@airhostessacademy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white"
            >
              Continue Browsing
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("mailto:info@airhostessacademy.com", "_blank")}
              className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
