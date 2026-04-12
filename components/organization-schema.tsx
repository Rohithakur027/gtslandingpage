export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "Ground to Sky Academy",
    "alternateName": ["GTS Academy", "Ground to Sky Aviation Academy"],
    "url": "https://groundtosky.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://groundtosky.in/images/GTS-Logo.png",
      "width": 200,
      "height": 60,
    },
    "image": "https://groundtosky.in/images/GTS-Logo.png",
    "description":
      "Leading aviation and hospitality training academy in Delhi offering air hostess training, cabin crew courses, airport ground staff training, and hotel management programs with 100% placement assistance. Located near Janakpuri West Metro Station.",
    "telephone": "+919560002923",
    "email": "hello@groundtosky.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Janakpuri",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110058",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6219,
      "longitude": 77.0878,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, EMI",
    "areaServed": [
      "Delhi",
      "New Delhi",
      "West Delhi",
      "Janakpuri",
      "Dwarka",
      "Uttam Nagar",
      "Vikaspuri",
    ],
    "sameAs": [
      "https://www.instagram.com/rose.rajkumari",
      "https://www.linkedin.com/in/rose-rajkumari-3072782",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aviation & Hospitality Training Courses",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Air Hostess Training Program",
            "url": "https://groundtosky.in/courses/air-hostess-training",
            "description":
              "6-month professional air hostess & cabin crew training course with 100% placement assistance in Delhi.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Airport Ground Staff Training",
            "url": "https://groundtosky.in/courses/airport-ground-staff",
            "description":
              "4-month airport ground staff training course with practical sessions and placement support in Delhi.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Hotel Operations Management",
            "url": "https://groundtosky.in/courses/hotel-operations-management",
            "description":
              "8-month hotel operations and hospitality management course with industry placement assistance.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Travel & Tourism Management",
            "url": "https://groundtosky.in/courses/travel-tourism-management",
            "description":
              "6-month travel and tourism management course covering GDS systems, tour operations, and global destinations.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
