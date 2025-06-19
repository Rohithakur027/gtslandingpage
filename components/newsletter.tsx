"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 shadow-2xl border-0 bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800">Stay Updated</h3>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
              ×
            </Button>
          </div>
          <p className="text-sm text-slate-600 mb-4">Get the latest updates about new batches and exclusive offers.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-[#796efd]/30 focus:border-[#796efd]"
            />
            <Button type="submit" className="w-full bg-[#796efd] hover:bg-[#5a4fe0] text-white">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
