"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface CounselingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CounselingPopup({ isOpen, onClose }: CounselingPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Counseling form submitted:", formData)
    onClose()
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      message: "",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#f0eeff] to-[#f8f7ff] border-[#796efd]/30">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-[#5a4fe0] flex items-center">
              <span className="mr-2">🎯</span>
              Confused About Career Choices?
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-[#796efd] hover:text-[#5a4fe0]">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center space-y-3">
            <p className="text-[#5a4fe0] font-semibold">
              Don't let uncertainty hold you back from your dream aviation career!
            </p>
            <p className="text-slate-600">
              Get personalized guidance from our expert career counselors who have helped 5,000+ students choose the
              right path and achieve success in aviation industry.
            </p>
            <div className="bg-[#f0eeff] p-3 rounded-lg">
              <p className="text-sm text-[#5a4fe0] font-medium">
                ✨ FREE 30-minute session • ✨ No obligations • ✨ Expert advice
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="popup-name" className="text-[#5a4fe0]">
                Full Name *
              </Label>
              <Input
                id="popup-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="border-[#796efd]/30 focus:border-[#796efd]"
              />
            </div>
            <div>
              <Label htmlFor="popup-phone" className="text-[#5a4fe0]">
                Phone Number *
              </Label>
              <Input
                id="popup-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="border-[#796efd]/30 focus:border-[#796efd]"
              />
            </div>
            <div>
              <Label htmlFor="popup-email" className="text-[#5a4fe0]">
                Email Address *
              </Label>
              <Input
                id="popup-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="border-[#796efd]/30 focus:border-[#796efd]"
              />
            </div>
            <div>
              <Label htmlFor="popup-city" className="text-[#5a4fe0]">
                City *
              </Label>
              <Input
                id="popup-city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Enter your city"
                className="border-[#796efd]/30 focus:border-[#796efd]"
              />
            </div>
            <Button type="submit" className="w-full bg-[#796efd] hover:bg-[#5a4fe0] text-white font-semibold py-3">
              Book My FREE Counseling Session
            </Button>
          </form>

          <p className="text-xs text-center text-slate-500">
            Our counselors will call you within 24 hours to schedule your session
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
