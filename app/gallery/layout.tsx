import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Gallery | Aviation Academy Delhi | Ground to Sky",
  description:
    "Explore photos of air hostess & cabin crew training sessions, campus life, mock interviews, and placement events at Ground to Sky Academy, Janakpuri, New Delhi.",
  alternates: { canonical: "https://groundtosky.in/gallery" },
  openGraph: {
    title: "Training Gallery | Aviation Academy Delhi | Ground to Sky",
    description:
      "See photos of air hostess training, cabin crew sessions, campus life, and placement events at Ground to Sky Academy, Janakpuri, Delhi.",
    url: "https://groundtosky.in/gallery",
    siteName: "Ground to Sky Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Gallery | Ground to Sky Academy Delhi",
    description:
      "Explore our aviation training sessions, campus facilities, and placement events at Ground to Sky Academy, Delhi.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
