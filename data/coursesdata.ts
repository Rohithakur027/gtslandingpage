import { Plane, Building2, Users, Globe, BookOpen, GraduationCap, Briefcase } from "lucide-react";

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
  universityRecognized: boolean;
}

export const courses: Course[] = [
  // ── University Recognized ──────────────────────────────────────────────────
  {
    id: "1",
    title: "B.Sc (Vocational Studies) – Hospitality & Aviation Management",
    slug: "bsc-hospitality-aviation-management",
    description: "Build a successful career in the aviation and hospitality industry with our industry-focused program designed for skill development, confidence, and job readiness. This comprehensive degree program equips students with in-depth knowledge of aviation operations, hospitality management, customer service, and leadership skills. Ideal for students aiming for long-term career growth in aviation and management roles.",
    category: "Degree Program",
    duration: "3 Years",
    classesPerDay: "3-4 hours",
    practicalHours: "200+ hours of simulations",
    certification: "UGC Recognized Degree",
    image: "/images/training/12.webp",
    icon: GraduationCap,
    universityRecognized: true,
    eligibility: [
      "12th Pass (Any Stream) from recognized board",
      "Good communication skills",
      "Interest in aviation and hospitality management"
    ],
    syllabus: [
      { title: "Aviation Management Principles", description: "Core concepts of airline and airport operations, aviation economics." },
      { title: "Hospitality Operations", description: "Front office, housekeeping, and food & beverage management." },
      { title: "Customer Relationship Management", description: "Service excellence, complaint handling, and passenger care." },
      { title: "Tourism & Travel Operations", description: "Travel agency management, tour planning, and geography." },
      { title: "Communication & Grooming", description: "Personality development, professional etiquette, and communication." },
      { title: "Aviation Safety & Security", description: "Emergency protocols, aviation law, and security measures." }
    ],
    careerPaths: [
      "Airport Operations Manager",
      "Airline Trainer",
      "Hospitality Operations Head",
      "Duty Manager",
      "Guest Relations Manager"
    ],
    mentorship: "Industry Expert Mentorship",
    placement: "100% Placement Assistance",
    support: "Comprehensive Career Guidance"
  },
  {
    id: "2",
    title: "Diploma in Cabin Crew Management",
    slug: "diploma-cabin-crew-management",
    description: "Designed for aspiring air hostesses and flight stewards, this course focuses on grooming, communication skills, in-flight service procedures, and safety training to prepare students for airline careers. Join our specialized program to build a successful career in the aviation industry with industry-focused training and job readiness.",
    category: "Aviation",
    duration: "1 Year",
    classesPerDay: "2-3 hours",
    practicalHours: "100+ hours of simulations",
    certification: "Industry Recognized Diploma",
    image: "/images/training/03.webp",
    icon: Plane,
    universityRecognized: true,
    eligibility: [
      "12th Pass (Any Stream) from recognized board",
      "Age: 18-26 years",
      "Height requirements as per airline standards",
      "Excellent communication and grooming"
    ],
    syllabus: [
      { title: "In-Flight Services & Hospitality", description: "Food & beverage service, passenger handling, in-flight announcements." },
      { title: "Aviation Safety & Emergency", description: "First aid, emergency evacuation, ditching, fire fighting." },
      { title: "Personality Development & Grooming", description: "Professional makeup, attire, poise, and etiquette." },
      { title: "Communication Skills", description: "Spoken English, interpersonal skills, interview preparation." },
      { title: "Aviation Terminology", description: "Phonetic alphabet, airline codes, aircraft familiarization." },
      { title: "Customer Service Excellence", description: "Handling difficult situations, VIP passenger care." }
    ],
    careerPaths: [
      "Cabin Crew / Air Hostess",
      "Senior Cabin Crew",
      "In-Flight Service Manager",
      "Airline Trainer"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Interview Preparation Support"
  },
  {
    id: "3",
    title: "Diploma in Ground Staff Services",
    slug: "diploma-ground-staff-services",
    description: "This program trains students for airport ground operations including check-in procedures, passenger handling, ticketing, and airport coordination. Build a successful career in the aviation industry with our industry-focused program designed for skill development, confidence, and job readiness.",
    category: "Aviation",
    duration: "1 Year",
    classesPerDay: "2-3 hours",
    practicalHours: "80+ hours of practical training",
    certification: "Industry Recognized Diploma",
    image: "/images/training/05.webp",
    icon: Users,
    universityRecognized: true,
    eligibility: [
      "12th Pass (Any Stream) from recognized board",
      "Age: 18-28 years",
      "Good communication and interpersonal skills",
      "Ability to work in shifts"
    ],
    syllabus: [
      { title: "Airport Terminal Operations", description: "Understanding terminal layout, check-in counters, boarding gates." },
      { title: "Passenger Handling & Ticketing", description: "Reservation systems, baggage handling, boarding procedures." },
      { title: "Aviation Security & Safety", description: "Security checks, dangerous goods regulations, safety protocols." },
      { title: "Customer Service Operations", description: "Managing queues, special handling passengers, complaint resolution." },
      { title: "Cargo & Ramp Operations", description: "Basic cargo handling procedures and ramp safety." },
      { title: "Personality Development", description: "Professional grooming, communication skills, interview training." }
    ],
    careerPaths: [
      "Ground Staff",
      "Airport Executive",
      "Customer Service Associate",
      "Duty Manager",
      "Check-in Agent"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Interview Preparation Support"
  },
  {
    id: "4",
    title: "Diploma in Hospitality, Travel & Customer Services",
    slug: "diploma-hospitality-travel-customer-services",
    description: "A versatile course covering hospitality management, travel operations, and customer service excellence perfect for careers in hotels, airlines, and tourism sectors. Build a successful career in the hospitality industry with our industry-focused program designed for skill development, confidence, and job readiness.",
    category: "Hospitality & Travel",
    duration: "1 Year",
    classesPerDay: "2-3 hours",
    practicalHours: "100+ hours",
    certification: "Industry Recognized Diploma",
    image: "/images/training/08.webp",
    icon: Building2,
    universityRecognized: true,
    eligibility: [
      "12th Pass (Any Stream) from recognized board",
      "Pleasing personality and good communication",
      "Interest in customer service and travel"
    ],
    syllabus: [
      { title: "Hotel Operations & Management", description: "Front office procedures, housekeeping, food and beverage service." },
      { title: "Travel & Tourism Management", description: "Tour packaging, itinerary planning, destination knowledge." },
      { title: "Customer Service Excellence", description: "Service standards, relationship management, handling feedback." },
      { title: "Computerized Reservation Systems", description: "GDS training (Amadeus/Galileo), ticketing software." },
      { title: "Event & Convention Management", description: "Planning and organizing corporate and social events." },
      { title: "Business Communication & Grooming", description: "Professional etiquette, spoken English, corporate grooming." }
    ],
    careerPaths: [
      "Customer Service Associate",
      "Guest Relations Manager",
      "Travel Consultant",
      "Front Office Executive",
      "Tour Operator"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Interview Preparation Support"
  },

  // ── Short-Term / Certificate Courses ──────────────────────────────────────
  {
    id: "5",
    title: "Cabin Crew Training Program",
    slug: "cabin-crew-training-program",
    description: "Do you dream of walking down the aircraft aisle, greeting passengers with a warm smile? Our Cabin Crew Training Program is designed to turn that dream into reality. This intensive program covers everything from grooming and etiquette to emergency procedures and in-flight service techniques.",
    category: "Aviation",
    duration: "8 Months",
    classesPerDay: "2 hours",
    practicalHours: "40+ hours of simulations",
    certification: "Industry-recognized & airline-accepted",
    image: "/images/training/04.webp",
    icon: Plane,
    universityRecognized: false,
    eligibility: [
      "10+2 from any recognized board",
      "Age: 17–25 years",
      "Height: 5'2\" and above",
      "Good communication in English and Hindi"
    ],
    syllabus: [
      { title: "Grooming & Personal Presentation", description: "Professional appearance, uniform standards, and makeup techniques." },
      { title: "In-Flight Service Procedures", description: "Meal service, beverage handling, passenger interaction." },
      { title: "Emergency & Safety Drills", description: "Evacuation, first aid, ditching, fire fighting." },
      { title: "Communication & Soft Skills", description: "Spoken English, body language, interview preparation." },
      { title: "Aviation Basics", description: "Aircraft types, crew roles, aviation terminology." },
      { title: "Mock Airline Interviews", description: "Group discussions, HR rounds, role-plays." }
    ],
    careerPaths: [
      "Cabin Crew",
      "Lounge Executive",
      "Customer Service Representative",
      "Airline Ground Staff"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Interview Preparation Support"
  },
  {
    id: "6",
    title: "Hotel Operations Management",
    slug: "hotel-operations-management",
    description: "The hotel industry is all about creating unforgettable experiences for guests. If you have a passion for hospitality and want to build a rewarding career in one of the world's fastest-growing industries, this program is for you. Learn front office, F&B, and housekeeping operations from industry experts.",
    category: "Hospitality",
    duration: "3 Months",
    classesPerDay: "2 hours",
    practicalHours: "50+ hours of simulations",
    certification: "Industry-accepted",
    image: "/images/training/07.webp",
    icon: Building2,
    universityRecognized: false,
    eligibility: [
      "10+2 from any recognized board",
      "Good communication and interpersonal skills",
      "Customer-focused attitude"
    ],
    syllabus: [
      { title: "Front Office & Reservations", description: "Check-in/check-out, PMS systems, guest communication." },
      { title: "Food & Beverage Service", description: "Restaurant operations, banquet management, bar service." },
      { title: "Housekeeping Operations", description: "Room management, linen handling, hygiene standards." },
      { title: "Hotel Sales & Marketing", description: "Revenue management, OTAs, corporate accounts." },
      { title: "Hospitality Communication", description: "Guest interaction, complaint handling, upselling." },
      { title: "Hotel Accounting Basics", description: "Billing procedures, invoicing, night audit." }
    ],
    careerPaths: [
      "Front Desk Executive",
      "F&B Associate",
      "Housekeeping Supervisor",
      "Guest Relations Officer",
      "Hotel Operations Trainee"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Industry Internship Support"
  },
  {
    id: "7",
    title: "Airport Ground Staff Training",
    slug: "airport-ground-staff-training",
    description: "Not all heroes wear uniforms — some ensure every flight runs smoothly behind the scenes. Our Airport Ground Staff Training program prepares you for the fast-paced world of airport operations, covering check-in, boarding, baggage handling, and passenger assistance.",
    category: "Airport",
    duration: "6 Months",
    classesPerDay: "2 hours",
    practicalHours: "35+ hours",
    certification: "Recognized across aviation industry",
    image: "/images/training/10.webp",
    icon: Users,
    universityRecognized: false,
    eligibility: [
      "10+2 from any recognized board",
      "Age: 18–28 years",
      "Ability to work in rotational shifts",
      "Good English communication"
    ],
    syllabus: [
      { title: "Check-in & Boarding Procedures", description: "Passenger check-in, seat allocation, boarding gate management." },
      { title: "Baggage Handling", description: "Tagging, tracing lost baggage, dangerous goods awareness." },
      { title: "Ramp & Tarmac Safety", description: "Aircraft marshalling, FOD control, safety compliance." },
      { title: "Ticketing & Reservation Systems", description: "GDS basics, e-ticketing, fare calculation." },
      { title: "Passenger Assistance", description: "Wheelchair handling, unaccompanied minors, VIP protocols." },
      { title: "Aviation Security Awareness", description: "BCAS guidelines, pre-boarding screening, access control." }
    ],
    careerPaths: [
      "Airport Ground Staff",
      "Passenger Service Agent",
      "Check-in Executive",
      "Ramp Agent",
      "Baggage Services Agent"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Interview Preparation Support"
  },
  {
    id: "8",
    title: "Travel & Tourism Management",
    slug: "travel-tourism-management",
    description: "If travel excites you, why not turn it into a career? The global tourism industry is booming and there has never been a better time to enter. This program covers destination knowledge, tour packaging, travel agency operations, and ticketing to make you job-ready in the travel sector.",
    category: "Tourism",
    duration: "3 Months",
    classesPerDay: "2 hours",
    practicalHours: "45+ hours",
    certification: "Industry-recognized",
    image: "/images/training/11.webp",
    icon: Globe,
    universityRecognized: false,
    eligibility: [
      "10+2 from any recognized board",
      "Passion for travel and geography",
      "Good communication skills"
    ],
    syllabus: [
      { title: "World Destination Knowledge", description: "Popular tourist circuits, visa requirements, climate guide." },
      { title: "Tour Packaging & Itinerary Planning", description: "Designing packages, costing, supplier negotiations." },
      { title: "Travel Agency Operations", description: "GDS booking, ticketing, documentation, commissions." },
      { title: "Airline & Hotel Reservations", description: "PNR creation, hotel GDS, booking management." },
      { title: "Tourism Marketing", description: "Social media marketing, brochure design, client acquisition." },
      { title: "MICE & Outbound Tourism", description: "Corporate travel, conference management, international tours." }
    ],
    careerPaths: [
      "Travel Consultant",
      "Tour Operator",
      "Ticketing Executive",
      "Tourism Manager",
      "Holiday Planner"
    ],
    mentorship: "One-to-One Mentorship",
    placement: "100% Placement Assistance",
    support: "Career Counselling Support"
  }
];
