import { Course } from "@/data/coursesdata";

export default function CourseSchema({ course }: { course: Course }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Ground to Sky Academy",
      "url": "https://groundtosky.in",
    },
    "url": `https://groundtosky.in/courses/${course.slug}`,
    "timeRequired": course.duration,
    "educationalLevel": "Professional",
    "inLanguage": "en",
    "availableLanguage": ["en", "hi"],
    "locationCreated": {
      "@type": "Place",
      "name": "Ground to Sky Academy, Janakpuri, Delhi",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
