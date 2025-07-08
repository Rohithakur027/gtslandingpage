export interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  tags: string[]
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Top 10 Skills Every Air Hostess Should Master",
    slug: "top-10-skills-air-hostess",
    excerpt:
      "Discover the essential skills that make a successful flight attendant in today's competitive aviation industry.",
    content: `
      <p>The aviation industry demands excellence from its cabin crew members. Here are the top 10 skills every aspiring air hostess should master:</p>
      
      <h2>1. Exceptional Communication Skills</h2>
      <p>Clear, confident communication is crucial for passenger safety and comfort. Air hostesses must be able to convey important information effectively in multiple languages.</p>
      
      <h2>2. Emergency Response Training</h2>
      <p>Being prepared for any emergency situation is paramount. This includes first aid, evacuation procedures, and crisis management.</p>
      
      <h2>3. Cultural Sensitivity</h2>
      <p>Working with passengers from diverse backgrounds requires cultural awareness and sensitivity to provide inclusive service.</p>
      
      <h2>4. Physical Fitness</h2>
      <p>The demanding nature of the job requires good physical health and stamina to handle long flights and emergency situations.</p>
      
      <h2>5. Professional Grooming</h2>
      <p>Maintaining a professional appearance is essential as cabin crew represent the airline's brand and image.</p>
    `,
    image: "/images/blogs/air-hostess-skills.jpg",
    category: "Aviation Tips",
    author: "Captain Sarah Johnson",
    date: "March 15, 2024",
    tags: ["Air Hostess", "Skills", "Career Tips"],
  },
  {
    id: "2",
    title: "The Future of Hospitality: Trends to Watch in 2024",
    slug: "future-hospitality-trends-2024",
    excerpt:
      "Explore the emerging trends shaping the hospitality industry and how professionals can adapt to these changes.",
    content: `
      <p>The hospitality industry is evolving rapidly. Here are the key trends shaping its future:</p>
      
      <h2>Technology Integration</h2>
      <p>From AI-powered chatbots to contactless check-ins, technology is revolutionizing guest experiences.</p>
      
      <h2>Sustainability Focus</h2>
      <p>Hotels are increasingly adopting eco-friendly practices to meet growing environmental consciousness.</p>
      
      <h2>Personalized Experiences</h2>
      <p>Data analytics enables hotels to offer highly personalized services tailored to individual preferences.</p>
    `,
    image: "/images/blogs/hospitality-trends.jpg",
    category: "Hospitality Trends",
    author: "Maria Rodriguez",
    date: "March 10, 2024",
    tags: ["Hospitality", "Trends", "Technology"],
  },
  {
    id: "3",
    title: "How to Ace Your Aviation Interview: Expert Tips",
    slug: "ace-aviation-interview-tips",
    excerpt: "Get insider tips from industry experts on how to succeed in your aviation career interviews.",
    content: `
      <p>Landing your dream job in aviation requires more than just qualifications. Here's how to excel in your interview:</p>
      
      <h2>Research the Airline</h2>
      <p>Understand the company's values, routes, and recent developments to show genuine interest.</p>
      
      <h2>Practice Common Questions</h2>
      <p>Prepare for scenario-based questions about customer service and emergency situations.</p>
      
      <h2>Professional Presentation</h2>
      <p>Your appearance should reflect the airline's standards and demonstrate attention to detail.</p>
    `,
    image: "/images/blogs/aviation-interview.jpg",
    category: "Career Guidance",
    author: "Captain Rajesh Kumar",
    date: "March 5, 2024",
    tags: ["Interview", "Career", "Aviation"],
  },
  {
    id: "4",
    title: "Building a Successful Career in Airport Ground Operations",
    slug: "career-airport-ground-operations",
    excerpt:
      "Learn about the diverse opportunities available in airport ground operations and how to build a successful career.",
    content: `
      <p>Airport ground operations offer numerous career paths for aviation enthusiasts. Here's your guide to success:</p>
      
      <h2>Understanding Ground Operations</h2>
      <p>From baggage handling to aircraft maintenance, ground operations keep airports running smoothly.</p>
      
      <h2>Career Progression</h2>
      <p>Start as ground staff and advance to supervisory or management roles with experience and training.</p>
      
      <h2>Essential Skills</h2>
      <p>Safety awareness, teamwork, and attention to detail are crucial for ground operations success.</p>
    `,
    image: "/images/blogs/ground-operations.jpg",
    category: "Career Guidance",
    author: "Amit Sharma",
    date: "February 28, 2024",
    tags: ["Ground Operations", "Career", "Airport"],
  },
  {
    id: "5",
    title: "The Importance of Soft Skills in Hospitality",
    slug: "soft-skills-hospitality-importance",
    excerpt: "Discover why soft skills are crucial for success in the hospitality industry and how to develop them.",
    content: `
      <p>Technical skills get you hired, but soft skills determine your success in hospitality. Here's why they matter:</p>
      
      <h2>Emotional Intelligence</h2>
      <p>Understanding and managing emotions helps in dealing with challenging guest situations effectively.</p>
      
      <h2>Active Listening</h2>
      <p>Truly hearing guest needs and concerns is the foundation of exceptional service.</p>
      
      <h2>Adaptability</h2>
      <p>The ability to adjust to changing situations and guest preferences sets professionals apart.</p>
    `,
    image: "/images/blogs/soft-skills.jpg",
    category: "Professional Development",
    author: "Priya Patel",
    date: "February 20, 2024",
    tags: ["Soft Skills", "Hospitality", "Professional Development"],
  },
  {
    id: "6",
    title: "International Aviation Regulations: What You Need to Know",
    slug: "international-aviation-regulations",
    excerpt:
      "A comprehensive guide to understanding international aviation regulations and their impact on cabin crew.",
    content: `
      <p>Understanding aviation regulations is essential for all aviation professionals. Here's what you need to know:</p>
      
      <h2>ICAO Standards</h2>
      <p>The International Civil Aviation Organization sets global standards for aviation safety and security.</p>
      
      <h2>National Regulations</h2>
      <p>Each country has specific regulations that complement international standards.</p>
      
      <h2>Compliance Importance</h2>
      <p>Strict adherence to regulations ensures passenger safety and operational efficiency.</p>
    `,
    image: "/images/blogs/aviation-regulations.jpg",
    category: "Aviation Knowledge",
    author: "Captain Michael Brown",
    date: "February 15, 2024",
    tags: ["Regulations", "Aviation", "Safety"],
  },
]
