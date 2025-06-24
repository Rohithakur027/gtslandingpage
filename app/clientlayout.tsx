"use client"

import type React from "react"

import CounselingPopup from "@/components/counselling-popup"
import { useState, useEffect } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem("counseling-popup-shown")

    if (!hasShownPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true)
        // Mark popup as shown in localStorage
        localStorage.setItem("counseling-popup-shown", "true")
      }, 5000)

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <body>
      {children}
      <CounselingPopup isOpen={showPopup} onClose={handleClosePopup} />
    </body>
  )
}
