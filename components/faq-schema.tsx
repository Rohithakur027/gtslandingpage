export default function FAQSchema() {
  const faqs = [
    {
      question: "What are the eligibility criteria for aviation courses?",
      answer:
        'Candidates should be between 18–26 years of age, minimum height 5\'2" for females and 5\'7" for males, 12th pass from any stream, good communication skills in English, and medically fit with clear vision.',
    },
    {
      question: "Do you provide 100% placement assistance?",
      answer:
        "Yes, we provide 100% placement assistance to all students who successfully complete the course. Our placement team supports you until you're placed.",
    },
    {
      question: "Do you provide support after course completion?",
      answer:
        "Yes, we offer continued placement assistance, interview preparation, and career guidance even after you complete the course. Our team supports you until you are successfully placed.",
    },
    {
      question: "Are the courses internationally recognized?",
      answer:
        "Yes, our courses are internationally recognized and certified by aviation authorities. This opens doors to global career opportunities in the aviation industry.",
    },
    {
      question: "What is the average salary after course completion?",
      answer:
        "Starting salaries range from ₹25,000 to ₹45,000 per month for domestic positions and ₹80,000 to ₹1,50,000 per month for international positions, depending on the airline and role.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
