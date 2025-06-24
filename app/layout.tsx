import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout";

export const metadata: Metadata = {
  title: "Top Air Hostess Academy in Delhi | Cabin Crew & Hospitality Training",
  description: "Join the best air hostess training academy in Delhi. Get expert guidance, practical training, and 100% placement assistance for a successful aviation and hospitality career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
