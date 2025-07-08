export interface Placement {
  id: string;
  name: string;
  image: string;
  company: string;
  companyLogo: string;
  role: string;
  year: string;
  course: string;
  location: string;
  salary: string;
}

export const placements: Placement[] = [
  {
    id: "1",
    name: "Priya Sharma",
    image: "/images/courses/airhostess.jpg",
    company: "Air India",
    companyLogo: "/images/companies/air-india.png",
    role: "Flight Attendant",
    year: "2024",
    course: "Air Hostess Training",
    location: "Delhi",
    salary: "₹45,000/month",
  },
  {
    id: "2",
    name: "Rahul Kumar",
    image: "/images/placements/rahul.jpg",
    company: "Emirates",
    companyLogo: "/images/companies/emirates.png",
    role: "Cabin Crew",
    year: "2024",
    course: "Air Hostess Training",
    location: "Dubai",
    salary: "₹85,000/month",
  },
  {
    id: "3",
    name: "Anita Singh",
    image: "/images/placements/anitasingh.jpg",
    company: "Taj Hotels",
    companyLogo: "/images/companies/taj.png",
    role: "Guest Relations Executive",
    year: "2024",
    course: "Hospitality Management",
    location: "Mumbai",
    salary: "₹38,000/month",
  },
  {
    id: "4",
    name: "Vikash Gupta",
    image: "/images/placements/vikash.jpg",
    company: "IndiGo",
    companyLogo: "/images/companies/indigo.png",
    role: "Ground Staff",
    year: "2023",
    course: "Airport Ground Staff",
    location: "Bangalore",
    salary: "₹32,000/month",
  },
  {
    id: "5",
    name: "Sneha Patel",
    image: "/images/placements/sneha.jpg",
    company: "Qatar Airways",
    companyLogo: "/images/companies/qatar.png",
    role: "Flight Attendant",
    year: "2023",
    course: "Air Hostess Training",
    location: "Doha",
    salary: "₹90,000/month",
  },
  {
    id: "6",
    name: "Arjun Mehta",
    image: "/images/placements/arjun.jpg",
    company: "Marriott",
    companyLogo: "/images/companies/marriott.png",
    role: "Front Office Executive",
    year: "2023",
    course: "Hospitality Management",
    location: "Delhi",
    salary: "₹35,000/month",
  },
  {
    id: "7",
    name: "Kavya Reddy",
    image: "/images/placements/kavya.jpg",
    company: "Singapore Airlines",
    companyLogo: "/images/companies/singapore.png",
    role: "Cabin Crew",
    year: "2023",
    course: "Air Hostess Training",
    location: "Singapore",
    salary: "₹95,000/month",
  },
  {
    id: "8",
    name: "Rohit Jain",
    image: "/images/placements/rohit.jpg",
    company: "SpiceJet",
    companyLogo: "/images/companies/spicejet.png",
    role: "Customer Service Agent",
    year: "2022",
    course: "Airport Ground Staff",
    location: "Hyderabad",
    salary: "₹28,000/month",
  },
  {
    id: "9",
    name: "Pooja Agarwal",
    image: "/images/placements/pooja.jpg",
    company: "Hyatt",
    companyLogo: "/images/companies/hyatt.png",
    role: "Concierge",
    year: "2022",
    course: "Hospitality Management",
    location: "Chennai",
    salary: "₹32,000/month",
  },
];
