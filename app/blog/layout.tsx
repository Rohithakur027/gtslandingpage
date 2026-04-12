import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Career Blog Delhi | Ground to Sky Academy",
  description:
    "Expert tips on air hostess interviews, cabin crew careers, ground staff jobs, and aviation industry insights from Ground to Sky Academy, Delhi. Read guides & career advice.",
  alternates: { canonical: "https://groundtosky.in/blog" },
  openGraph: {
    title: "Aviation Career Blog Delhi | Ground to Sky Academy",
    description:
      "Expert tips on air hostess interviews, cabin crew careers, ground staff jobs, and aviation industry insights from Ground to Sky Academy, Delhi.",
    url: "https://groundtosky.in/blog",
    siteName: "Ground to Sky Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviation Career Blog Delhi | Ground to Sky Academy",
    description:
      "Expert cabin crew career tips, air hostess guides, and ground staff insights from Delhi's leading aviation academy.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
