import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight, GraduationCap, BookOpen, Users, Briefcase } from "lucide-react";
import { courses, type Course } from "@/data/coursesdata";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Aviation & Hospitality Courses in Delhi | Ground to Sky Academy",
  description:
    "Explore air hostess training, cabin crew, airport ground staff, hotel management & travel tourism courses at Ground to Sky Academy, Janakpuri, Delhi. 100% placement assistance. Admissions open!",
  alternates: { canonical: "https://groundtosky.in/courses" },
  openGraph: {
    title: "Aviation & Hospitality Courses in Delhi | Ground to Sky Academy",
    description:
      "Professional aviation & hospitality courses at Ground to Sky Academy, Janakpuri, Delhi. Air hostess, cabin crew, ground staff & hotel management programs with placement support.",
    url: "https://groundtosky.in/courses",
    siteName: "Ground to Sky Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviation & Hospitality Courses in Delhi | Ground to Sky Academy",
    description:
      "Professional aviation & hospitality courses with 100% placement assistance at Ground to Sky Academy, Delhi.",
  },
};

function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

        {/* Image */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={`${course.title} — Ground to Sky Academy`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 bg-[#796efd] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
              <course.icon className="h-3.5 w-3.5" />
              {course.category}
            </span>
          </div>
          {course.universityRecognized && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 bg-white text-[#796efd] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                <GraduationCap className="h-3 w-3" />
                UGC Recognized
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#796efd] transition-colors leading-snug line-clamp-2">
            {course.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
            {course.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 bg-gray-50 rounded-xl mb-4 overflow-hidden">
            <div className="py-3 px-2 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Duration</p>
              <p className="text-sm font-bold text-gray-800">{course.duration}</p>
            </div>
            <div className="py-3 px-2 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Daily</p>
              <p className="text-sm font-bold text-gray-800">{course.classesPerDay}</p>
            </div>
            <div className="py-3 px-2 text-center">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Practical</p>
              <p className="text-sm font-bold text-gray-800">{course.practicalHours.split(" ").slice(0, 2).join(" ")}</p>
            </div>
          </div>

          {/* Certification */}
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-4 w-4 text-[#796efd] flex-shrink-0" />
            <span className="text-xs font-medium text-[#796efd]">{course.certification}</span>
          </div>

          {/* CTA */}
          <div className="mt-auto w-full bg-[#796efd] hover:bg-[#695ef0] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm group-hover:shadow-md">
            View Details <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

const universityCourses = courses.filter((c) => c.universityRecognized);
const certificateCourses = courses.filter((c) => !c.universityRecognized);

export default function CoursesPage() {
  return (
    <>
      <Navigation />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-[#796efd]/5 to-white pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#796efd] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Our Programs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Aviation &amp; Hospitality<br className="hidden sm:block" /> Courses in Delhi
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Industry-focused programs designed to prepare you for a thriving career in aviation and hospitality — with 100% placement assistance.
          </p>
        </div>

        {/* Stats strip */}
        <div className="max-w-2xl mx-auto mt-10 grid grid-cols-3 gap-4">
          {[
            { icon: BookOpen,  label: "Programs",             value: "8+"   },
            { icon: Users,     label: "Placed Students",      value: "500+" },
            { icon: Briefcase, label: "Placement Assistance", value: "100%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 py-4 px-3 text-center">
              <Icon className="h-5 w-5 text-[#796efd] mx-auto mb-1.5" />
              <p className="text-xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-14 max-w-7xl mx-auto space-y-20">

        {/* ── University Recognized ────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2.5 bg-[#796efd]/10 border border-[#796efd]/25 rounded-full px-4 py-2">
              <GraduationCap className="h-4 w-4 text-[#796efd]" />
              <span className="text-sm font-semibold text-[#796efd]">University Recognized</span>
            </div>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Degree &amp; Diploma Programs</h2>
            <p className="text-gray-500 max-w-xl">
              UGC-affiliated programs with academic credentials — ideal for long-term career growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universityCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </section>

        {/* ── Certificate Courses ──────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2.5 bg-[#796efd]/10 border border-[#796efd]/25 rounded-full px-4 py-2">
              <BookOpen className="h-4 w-4 text-[#796efd]" />
              <span className="text-sm font-semibold text-[#796efd]">Certificate Courses</span>
            </div>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Short-Term Skill Development</h2>
            <p className="text-gray-500 max-w-xl">
              Fast-track, industry-ready programs to get you job-ready in 4–8 months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section>
          <div className="bg-gradient-to-r from-[#796efd] to-[#5a4fe0] rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Not Sure Which Course to Pick?</h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Our career counselors will help you choose the right program based on your goals, background, and aspirations — completely free.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#796efd] hover:bg-gray-50 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 border-0"
            >
              <Link href="/contact">Get Free Career Counseling</Link>
            </Button>
          </div>
        </section>

      </div>
    </>
  );
}
