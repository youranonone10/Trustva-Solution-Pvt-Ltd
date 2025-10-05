// Mock data for TrustVA landing page

export const mockServices = [
  {
    id: 1,
    title: "Customer Service",
    description: "Professional support across Email, Chat, and Phone channels with 24/7 availability and multilingual capabilities.",
    features: ["24/7 Support", "Multi-channel", "Multilingual", "Quick Response"],
    icon: "HeadphonesIcon"
  },
  {
    id: 2, 
    title: "Dispute & Chargeback Management",
    description: "Expert handling of payment disputes and chargebacks to protect your revenue and maintain customer relationships.",
    features: ["Revenue Protection", "Expert Handling", "Quick Resolution", "Compliance Assured"],
    icon: "CreditCard"
  },
  {
    id: 3,
    title: "Fraud Detection & Prevention", 
    description: "Advanced fraud prevention systems and expert analysis to safeguard your business from fraudulent activities.",
    features: ["Advanced Detection", "Real-time Monitoring", "Risk Assessment", "Prevention Strategies"],
    icon: "Shield"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Diego Vercammen",
    duration: "11 months ago",
    rating: 5,
    review: "Been working with Harsh for like a month now and its absolutely amazing. Fast communication very honest and does his work very well and clean. Definitely a great guy to work with!",
    company: "Business Owner"
  },
  {
    id: 2,
    name: "Jeffrey Meijer",
    duration: "a year ago", 
    rating: 5,
    review: "I am working with Harsh and I can say that it is a pleasure to work with him, he delivers good work and is a kind person. I really recommend him to every business owner.",
    company: "Entrepreneur"
  },
  {
    id: 3,
    name: "Jaap Driessen",
    duration: "a year ago",
    rating: 5,
    review: "I have been working with Harsh for a long time. Harsh is a hard working good guy. Does his job well and knows exactly what he is doing.",
    company: "Business Partner"
  },
  {
    id: 4,
    name: "Dario",
    duration: "11 months ago",
    rating: 5,
    review: "Real great service and 10/10 experience. A big win for me and my business to work together with TrustVA.",
    company: "Client"
  }
];

export const mockTimeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: true }, 
  { time: "11:00 AM", available: false },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: true }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of Outsourcing: Trends to Watch in 2025",
    excerpt: "Explore the latest trends shaping the outsourcing industry and how businesses can leverage these changes for growth.",
    author: "Harsh Aggarwal",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights"
  },
  {
    id: 2,
    title: "Building Trust in Virtual Teams: Best Practices",
    excerpt: "Learn effective strategies for building and maintaining trust in remote and virtual team environments.",
    author: "TrustVA Team",
    date: "Dec 10, 2024", 
    readTime: "7 min read",
    category: "Team Management"
  },
  {
    id: 3,
    title: "Fraud Prevention in Digital Age: A Complete Guide",
    excerpt: "Comprehensive guide to protecting your business from digital fraud with modern prevention techniques.",
    author: "Security Team",
    date: "Dec 5, 2024",
    readTime: "10 min read", 
    category: "Security"
  }
];

export const mockBookingData = {
  selectedDate: null,
  selectedTime: null,
  customerInfo: {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  }
};