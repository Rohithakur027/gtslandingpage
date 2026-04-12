import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ground to Sky Academy | Aviation Training Delhi",
  description:
    "Get in touch with Ground to Sky Academy in Janakpuri, Delhi. Call +91 95600 02923 for aviation & hospitality course enquiries. Admissions open now!",
  alternates: { canonical: "https://groundtosky.in/contact" },
  openGraph: {
    title: "Contact Ground to Sky Academy | Aviation Training Delhi",
    description:
      "Get in touch with Ground to Sky Academy in Janakpuri, Delhi. Call +91 95600 02923 for course enquiries.",
    url: "https://groundtosky.in/contact",
    siteName: "Ground to Sky Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ground to Sky Academy",
    description:
      "Reach out for aviation & hospitality course enquiries. Admissions open at Janakpuri, Delhi.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
