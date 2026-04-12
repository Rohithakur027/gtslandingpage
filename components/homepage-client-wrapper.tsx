"use client";

import { useState, useEffect } from "react";
import CounselingPopup from "@/components/counselling-popup";

export function HomepageCounselingPopup() {
  const [showCounselingPopup, setShowCounselingPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCounselingPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CounselingPopup
      isOpen={showCounselingPopup}
      onClose={() => setShowCounselingPopup(false)}
    />
  );
}
