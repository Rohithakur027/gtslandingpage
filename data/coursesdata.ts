import { Plane, Building2, Users, Globe } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  duration: string;
  classesPerDay: string;
  practicalHours: string;
  certification: string;
  image: string;
  icon: any;
  eligibility: string[];
  syllabus: {
    title: string;
    description: string;
  }[];
  careerPaths: string[];
  mentorship: string;
  placement: string;
  support: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Air Hostess Training Program",
    slug: "air-hostess-training",
    description:
      "Do you dream of walking down the aircraft aisle, greeting passengers with a warm smile, and flying across the world as part of your career? At Ground to Sky, we don't just train you—we transform you into a confident, polished, and industry-ready professional. Our 6-month Air Hostess Training Course covers everything from grooming and customer service to safety procedures and international standards.",
    category: "Aviation",
    duration: "6 Months",
    classesPerDay: "2 hours",
    practicalHours: "40+ hours of simulations",
    certification: "Industry-recognized & airline-accepted",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
    icon: Plane,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-26 years",
      "Height: 5'2\" minimum for females, 5'7\" for males",
      "Good English communication",
      "Medical fitness certificate",
    ],
    syllabus: [
      {
        title: "Aviation Basics",
        description: "How the industry works, roles, and opportunities",
      },
      {
        title: "Safety & First Aid",
        description: "Emergency handling, firefighting, and first aid",
      },
      {
        title: "Customer Service",
        description: "Passenger care, complaint handling, hospitality",
      },
      {
        title: "Grooming & Personality",
        description: "Poise, etiquette, communication, confidence",
      },
      {
        title: "In-flight Service",
        description: "Food & beverage service, passenger comfort",
      },
      {
        title: "International Protocols",
        description: "Immigration, customs, etiquette",
      },
    ],
    careerPaths: [
      "Flight Attendant",
      "Senior Cabin Crew",
      "Purser",
      "Ground Staff",
      "Airport Service Executive",
      "Airline Trainer",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
  {
    id: "2",
    title: "Hotel Operations Management",
    slug: "hotel-operations-management",
    description:
      "The hotel industry is all about creating unforgettable experiences for guests. If you see yourself working in luxury hotels, resorts, or event spaces, our 8-month Hotel Operations Management Course is your launchpad. This isn't just about theory—you'll get 50+ hours of hands-on practice to prepare for real-world hotel operations.",
    category: "Hospitality",
    duration: "8 Months",
    classesPerDay: "2 hours",
    practicalHours: "50+ hours of simulations",
    certification: "Industry-accepted",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    icon: Building2,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-28 years",
      "Good English communication",
      "Professional grooming & personality",
      "Basic computer knowledge",
    ],
    syllabus: [
      {
        title: "Hotel Operations",
        description: "Front office, housekeeping, F&B basics",
      },
      {
        title: "Customer Relations",
        description: "Handling complaints, guest feedback",
      },
      {
        title: "Food & Beverage Service",
        description: "Fine dining, banquets, bar service",
      },
      {
        title: "Housekeeping",
        description: "Room upkeep, hygiene, eco-friendly practices",
      },
      {
        title: "Event Management",
        description: "Weddings, corporate events, banquets",
      },
      {
        title: "Hotel Software",
        description: "PMS, POS, booking systems",
      },
    ],
    careerPaths: [
      "Front Office Executive",
      "Guest Relations Officer",
      "Restaurant Manager",
      "Event Coordinator",
      "Concierge",
      "Hotel Supervisor",
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
      "Not all heroes wear uniforms—some ensure every flight runs smoothly from the ground up. If you want to work at the heart of aviation but not as cabin crew, then this 4-month Airport Ground Staff Course is perfect for you. We prepare you for real airport environments with 35+ hours of practical training.",
    category: "Aviation",
    duration: "4 Months",
    classesPerDay: "2 hours",
    practicalHours: "35+ hours",
    certification: "Recognized across aviation industry",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
    icon: Users,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-30 years",
      "Good physical fitness",
      "English communication basics",
      "No criminal background",
    ],
    syllabus: [
      {
        title: "Airport Operations",
        description: "Terminal structure, SOPs, coordination",
      },
      {
        title: "Check-in Procedures",
        description: "Boarding passes, baggage handling",
      },
      {
        title: "Customer Service",
        description: "Passenger assistance, complaint handling",
      },
      {
        title: "Aviation Security",
        description: "Screening, safety checks, compliance",
      },
      {
        title: "Cargo Operations",
        description: "Documentation, customs, special cargo",
      },
      {
        title: "Emergency Response",
        description: "Evacuations, firefighting, first aid",
      },
    ],
    careerPaths: [
      "Check-in Agent",
      "Security Officer",
      "Cargo Executive",
      "Ramp Agent",
      "Customer Service Executive",
      "Baggage Handler",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
  {
    id: "4",
    title: "Travel & Tourism Management",
    slug: "travel-tourism-management",
    description:
      "If travel excites you, why not turn it into a career? The global tourism industry is booming, and skilled professionals are always in demand. Our 6-month Travel & Tourism Management Course prepares you to design tours, manage travel services, and create memorable experiences for clients.",
    category: "Tourism",
    duration: "6 Months",
    classesPerDay: "2 hours",
    practicalHours: "45+ hours",
    certification: "Industry-recognized",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    icon: Globe,
    eligibility: [
      "12th Pass from recognized board",
      "Age between 18-35 years",
      "Good English communication",
      "Interest in travel, culture, destinations",
      "Basic geography knowledge",
    ],
    syllabus: [
      {
        title: "Tourism Industry Basics",
        description: "Career scope, global trends",
      },
      {
        title: "Travel Planning & Booking",
        description: "Airline, hotel, transport reservations",
      },
      {
        title: "Tour Operations",
        description: "Group tours, package design, coordination",
      },
      {
        title: "Destination Knowledge",
        description: "Geography, cultures, documentation",
      },
      {
        title: "Travel Technology",
        description: "GDS (Amadeus, Sabre, Galileo), booking tools",
      },
      {
        title: "Customer Relations",
        description: "Handling queries, service excellence",
      },
    ],
    careerPaths: [
      "Travel Consultant",
      "Tour Operator",
      "Travel Agent",
      "Destination Specialist",
      "Tour Guide",
      "Travel Coordinator",
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "24/7 Student Support",
  },
];
