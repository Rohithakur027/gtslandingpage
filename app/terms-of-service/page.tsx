import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Ground to Sky Academy",
  description:
    "Read the Terms of Service for Ground to Sky Academy, Janakpuri, New Delhi. Understand the terms governing use of our website and enrolment in our courses.",
  alternates: { canonical: "https://groundtosky.in/terms-of-service" },
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-[#032789] mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: April 2026 &nbsp;|&nbsp; Ground to Sky Academy, Janakpuri, New Delhi – 110058
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website{" "}
              <Link href="https://groundtosky.in" className="text-[#796efd] hover:underline">
                groundtosky.in
              </Link>{" "}
              (&ldquo;the Site&rdquo;) or enrolling in any course offered by Ground to Sky Academy
              (&ldquo;the Academy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">2. Courses & Enrolment</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                All course details, fees, and schedules are subject to change without prior notice.
                Confirmed enrolment details will be provided at the time of admission.
              </li>
              <li>
                Admission to a course is confirmed only upon receipt of the course fee and completion
                of the admission formalities.
              </li>
              <li>
                The Academy reserves the right to refuse admission or cancel enrolment at its
                discretion.
              </li>
              <li>
                Course certificates are issued upon successful completion of all course requirements,
                assessments, and attendance criteria.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">3. Fee & Refund Policy</h2>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                Course fees are non-refundable once the course has commenced, except in cases where
                the Academy cancels a course.
              </li>
              <li>
                Partial refunds may be considered at the Academy&apos;s discretion if a student
                withdraws before the course commencement date.
              </li>
              <li>
                Any EMI arrangement is between the student and the financing party. The Academy is
                not responsible for third-party financing disputes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">4. Placement Assistance</h2>
            <p>
              The Academy offers 100% placement assistance — meaning we actively assist students with
              job applications, interview preparation, and referrals. However, placement assistance
              does not guarantee employment. Final selection decisions rest solely with the recruiting
              organisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, videos, course materials, and
              branding — is the property of Ground to Sky Academy and is protected under applicable
              copyright and intellectual property laws. You may not reproduce, distribute, or use any
              content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">6. Limitation of Liability</h2>
            <p>
              Ground to Sky Academy shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of this website or our services. The Academy&apos;s total
              liability in any matter shall not exceed the course fee paid by the student.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">7. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising shall be subject to
              the exclusive jurisdiction of the courts in New Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">8. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of the
              Site after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#032789] mb-3">9. Contact Us</h2>
            <p>For any questions about these Terms, please reach us at:</p>
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
