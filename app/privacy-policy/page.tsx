import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Ground to Sky Academy",
  description:
    "Read the Privacy Policy of Ground to Sky Academy, Janakpuri, New Delhi. Understand how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://groundtosky.in/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-[#032789] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: April 2026 &nbsp;|&nbsp; Ground to Sky Academy, Janakpuri, New Delhi – 110058
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">1. Introduction</h2>
            <p>
              Ground to Sky Academy (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your
              personal information. This Privacy Policy explains what data we collect when you visit{" "}
              <Link href="https://groundtosky.in" className="text-[#796efd] hover:underline">
                groundtosky.in
              </Link>
              , how we use it, and the choices available to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong>Contact information:</strong> Your name and mobile number when you submit our
                enquiry or application form.
              </li>
              <li>
                <strong>Usage data:</strong> Pages visited, time spent on pages, browser type, and
                device type — collected automatically via Google Analytics and Google Tag Manager.
              </li>
              <li>
                <strong>Cookies:</strong> Small files stored on your browser used for analytics and
                advertising (Google Ads, Meta Pixel). You can disable cookies in your browser settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Contact you about your course enquiry or application</li>
              <li>Provide career counselling and admissions guidance</li>
              <li>Send relevant updates about courses, admissions, and placement drives (with your consent)</li>
              <li>Improve our website and user experience through analytics</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">4. Third-Party Services</h2>
            <p>
              Our website uses the following third-party services, each with their own privacy policies:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong>Google Analytics (GA4):</strong> Website traffic analysis. Data is anonymised
                and aggregated.
              </li>
              <li>
                <strong>Google Tag Manager:</strong> Manages analytics and tracking tags.
              </li>
              <li>
                <strong>Google Ads:</strong> Conversion tracking for our advertising campaigns.
              </li>
              <li>
                <strong>Meta (Facebook) Pixel:</strong> Tracks conversions from Facebook and Instagram
                ads.
              </li>
              <li>
                <strong>Google Sheets (via Apps Script):</strong> Stores form submissions securely in
                a private spreadsheet.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">5. Data Retention</h2>
            <p>
              We retain your contact information for as long as needed to provide our services or as
              required by law. You may request deletion of your data at any time by emailing us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">7. Data Security</h2>
            <p>
              We use industry-standard security measures to protect your information. Our website is
              served over HTTPS. Form submissions are transmitted securely to our private Google Sheets
              database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights,
              please contact us:
            </p>
            <div className="mt-4 bg-gray-50 rounded-lg p-6 space-y-2 text-sm">
              <p>
                <strong>Ground to Sky Academy</strong>
              </p>
              <p>Janakpuri, New Delhi – 110058, India</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@groundtosky.in" className="text-[#796efd] hover:underline">
                  hello@groundtosky.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919560002923" className="text-[#796efd] hover:underline">
                  +91 95600 02923
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-[#796efd] hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
