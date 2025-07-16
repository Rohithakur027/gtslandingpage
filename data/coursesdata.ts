import { Plane, Building2, Users, Globe } from "lucide-react"

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  category: string
  duration: string
  classesPerDay: string
  practicalHours: string
  certification: string
  image: string
  icon: any
  eligibility: string[]
  syllabus: {
    title: string
    description: string
  }[]
  careerPaths: string[]
  mentorship: string
  placement: string
  support: string
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Air Hostess Training Program",
    slug: "air-hostess-training",
    description:
      "Comprehensive training program to become a certified flight attendant with leading airlines worldwide. Learn safety procedures, customer service, and in-flight operations.",
    category: "Aviation",
    duration: "6 Months",
    classesPerDay: "2 hours",
    practicalHours: "40 hours",
    certification: "Industry Certified",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
    icon: Plane,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-26 years",
      "Height: 5'2\" minimum for females, 5'7\" for males",
      "Good communication skills in English",
      "Medical fitness certificate",
    ],
    syllabus: [
      {
        title: "Aviation Industry Overview",
        description: "Understanding the aviation industry, airline operations, and career opportunities",
      },
      {
        title: "Safety & Emergency Procedures",
        description: "Aircraft safety protocols, emergency evacuation, first aid, and firefighting",
      },
      {
        title: "Customer Service Excellence",
        description: "Passenger handling, service standards, complaint resolution, and hospitality",
      },
      {
        title: "Grooming & Personality Development",
        description: "Professional appearance, etiquette, body language, and communication skills",
      },
      {
        title: "In-flight Service Training",
        description: "Food and beverage service, cabin management, and passenger comfort",
      },
      {
        title: "International Protocols",
        description: "Immigration procedures, customs regulations, and international travel requirements",
      },
    ],
    careerPaths: [
      "Flight Attendant",
      "Senior Cabin Crew",
      "Purser",
      "Ground Staff",
      "Airport Customer Service",
      "Airline Training Instructor",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
  {
    id: "2",
    title: "Hospitality Management",
    slug: "hospitality-management",
    description:
      "Professional training in hotel and hospitality management with focus on luxury service standards, guest relations, and hotel operations management.",
    category: "Hospitality",
    duration: "8 Months",
    classesPerDay: "2 hours",
    practicalHours: "50 hours",
    certification: "Industry Certified",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    icon: Building2,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-28 years",
      "Good communication skills",
      "Pleasant personality",
      "Basic computer knowledge",
    ],
    syllabus: [
      {
        title: "Hotel Operations Management",
        description: "Front office operations, housekeeping, food & beverage service",
      },
      {
        title: "Customer Relationship Management",
        description: "Guest relations, complaint handling, and service recovery",
      },
      {
        title: "Food & Beverage Service",
        description: "Restaurant service, bar operations, and banquet management",
      },
      {
        title: "Housekeeping Operations",
        description: "Room maintenance, laundry operations, and quality control",
      },
      {
        title: "Event Management",
        description: "Conference planning, wedding coordination, and corporate events",
      },
      {
        title: "Hotel Software Training",
        description: "Property management systems, booking engines, and POS systems",
      },
    ],
    careerPaths: [
      "Front Office Executive",
      "Guest Relations Officer",
      "Restaurant Manager",
      "Event Coordinator",
      "Hotel Supervisor",
      "Concierge",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
  {
    id: "3",
    title: "Airport Ground Staff Training",
    slug: "airport-ground-staff",
    description:
      "Specialized training for airport ground operations including check-in procedures, baggage handling, customer service, and airport security protocols.",
    category: "Aviation",
    duration: "4 Months",
    classesPerDay: "2 hours",
    practicalHours: "35 hours",
    certification: "Industry Certified",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
    icon: Users,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-30 years",
      "Good physical fitness",
      "Basic English communication",
      "No criminal background",
    ],
    syllabus: [
      {
        title: "Airport Operations",
        description: "Understanding airport layout, terminal operations, and security procedures",
      },
      {
        title: "Check-in Procedures",
        description: "Passenger check-in, baggage handling, and boarding procedures",
      },
      {
        title: "Customer Service",
        description: "Passenger assistance, query resolution, and service excellence",
      },
      {
        title: "Aviation Security",
        description: "Security protocols, screening procedures, and threat assessment",
      },
      {
        title: "Cargo Operations",
        description: "Freight handling, documentation, and logistics coordination",
      },
      {
        title: "Emergency Response",
        description: "Crisis management, evacuation procedures, and first aid",
      },
    ],
    careerPaths: [
      "Check-in Agent",
      "Baggage Handler",
      "Security Officer",
      "Customer Service Agent",
      "Cargo Executive",
      "Ramp Agent",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
  {
    id: "4",
    title: "Travel & Tourism Management",
    slug: "travel-tourism",
    description:
      "Comprehensive program covering travel planning, tour operations, tourism industry management, and destination knowledge for travel professionals.",
    category: "Tourism",
    duration: "6 Months",
    classesPerDay: "2 hours",
    practicalHours: "45 hours",
    certification: "Industry Certified",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    icon: Globe,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-35 years",
      "Good communication skills",
      "Interest in travel and cultures",
      "Basic geography knowledge",
    ],
    syllabus: [
      {
        title: "Tourism Industry Overview",
        description: "Understanding tourism sectors, market trends, and career opportunities",
      },
      {
        title: "Travel Planning & Booking",
        description: "Itinerary planning, reservation systems, and booking procedures",
      },
      {
        title: "Tour Operations",
        description: "Tour packaging, guide services, and group management",
      },
      {
        title: "Destination Knowledge",
        description: "Geography, culture, attractions, and travel requirements",
      },
      {
        title: "Travel Technology",
        description: "GDS systems, online booking platforms, and travel software",
      },
      {
        title: "Customer Relations",
        description: "Client consultation, service delivery, and relationship management",
      },
    ],
    careerPaths: [
      "Travel Consultant",
      "Tour Operator",
      "Travel Agent",
      "Tour Guide",
      "Travel Coordinator",
      "Destination Specialist",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
]
