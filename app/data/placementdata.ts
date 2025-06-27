export interface PlacementData {
  id: string;
  name: string;
  photo: string;
  companyName: string;
  companyLogo: string;
  logoWidth: number;
  logoHeight: number;
  logoScale?: number; // Optional scale factor (1.0 = normal, 1.5 = 50% larger, etc.)
}

export const placementsData: PlacementData[] = [
  {
    id: "1",
    name: "Pranshika",
    photo: "/images/placement/pranshika.webp",
    companyName: "Indigo",
    companyLogo: "images/logos/indigo.png",
    logoWidth: 80,
    logoHeight: 32,
    logoScale: 3,
  },
  {
    id: "2",
    name: "Vaishnavi Singh",
    photo: "/images/placement/vaishnavi-singh.webp",
    companyName: "Indigo",
    companyLogo: "images/logos/indigo.png",
    logoWidth: 80,
    logoHeight: 32,
    logoScale: 1.2,
  },
  {
    id: "3",
    name: "Nandini Singh",
    photo: "/images/placement/nandini-singh.webp",
    companyName: "Indigo",
    companyLogo: "images/logos/indigo.png",
    logoWidth: 80,
    logoHeight: 32,
    logoScale: 1.2,
  },
  {
    id: "4",
    name: "Isha Singh",
    photo: "/images/placement/Isha-singh.webp",
    companyName: "Indigo",
    companyLogo: "images/logos/indigo.png",
    logoWidth: 80,
    logoHeight: 32,
    logoScale: 1.2,
  },
  {
    id: "5",
    name: "Aarti Ghamandi",
    photo: "/images/placement/aarti-ghamandi.webp",
    companyName: "Celebi",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png",
    logoWidth: 90,
    logoHeight: 40,
    logoScale: 1.0,
  },
  {
    id: "6",
    name: "Diksha",
    photo: "/images/placement/diksha.webp",
    companyName: "Air India",
    companyLogo: "images/logos/air-india.png",
    logoWidth: 70,
    logoHeight: 35,
    logoScale: 1.3,
  },
  {
    id: "7",
    name: "Honey Singh",
    photo: "/images/placement/honey-singh.webp",
    companyName: "Delhi Airport",
    companyLogo: "images/logos/delhi-airport.png",
    logoWidth: 85,
    logoHeight: 30,
    logoScale: 2, // Smaller scale for this large logo
  },
  {
    id: "8",
    name: "Jasleen Kaur",
    photo: "/images/placement/jasleen-kaur.webp",
    companyName: "Delhi Airport",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/11/AirAsia-Logo.png",
    logoWidth: 75,
    logoHeight: 38,
    logoScale: 1.1,
  },
  {
    id: "9",
    name: "Palakdeep kaur",
    photo: "/images/placement/palakdeep-kaur.webp",
    companyName: "Delhi Airport",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/11/AirAsia-Logo.png",
    logoWidth: 75,
    logoHeight: 38,
    logoScale: 1.1,
  },
  {
    id: "10",
    name: "Khushi Pandey",
    photo: "/images/placement/khushi-pandey.webp",
    companyName: "Delhi Airport",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/11/AirAsia-Logo.png",
    logoWidth: 75,
    logoHeight: 38,
    logoScale: 1.1,
  },
  {
    id: "11",
    name: "Ritu Sharma",
    photo: "/images/placement/ritu-sharma.webp",
    companyName: "Delhi Airport",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/11/AirAsia-Logo.png",
    logoWidth: 75,
    logoHeight: 38,
    logoScale: 1.1,
  },
  {
    id: "12",
    name: "Sherlyn Phillip",
    photo: "/images/placement/sherlyn-philip.webp",
    companyName: "Delhi Airport",
    companyLogo:
      "https://logos-world.net/wp-content/uploads/2020/11/AirAsia-Logo.png",
    logoWidth: 75,
    logoHeight: 38,
    logoScale: 1.1,
  },
];
