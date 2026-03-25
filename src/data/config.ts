export const siteConfig = {
  name: "Startup Founders Community",
  description: "Join the leading online and offline community for startup founders. Connect, learn, and grow.",
  contact: {
    email: "hello@startupfounders.com",
    whatsapp: "+1234567890",
    instagram: "https://instagram.com/startupfounders",
    googleFormSrc: "https://docs.google.com/forms/d/e/1FAIpQLSc-test-form-link/viewform?embedded=true",
  },
  mission: "To empower early-stage founders with the knowledge, network, and resources needed to build the next generation of industry-defining companies.",
  vision: "A world where every ambitious founder has access to world-class mentorship and a supportive community.",
  story: "We started as a small group of 5 founders meeting in a coffee shop. Today, we're a global network of innovators who believe that a rising tide lifts all boats.",
};

export const benefits = [
  {
    title: "Expert Learning",
    description: "Weekly sessions with industry experts, VCs, and successful founders.",
    icon: "BookOpen", // Maps to lucide-react icon
  },
  {
    title: "Global Networking",
    description: "Connect with like-minded founders from around the world.",
    icon: "Globe",
  },
  {
    title: "Growth Resources",
    description: "Access our library of templates, pitch decks, and strategies.",
    icon: "TrendingUp",
  },
];

export const upcomingEvents = [
  {
    id: "evt-1",
    title: "Go-to-Market Strategy Masterclass",
    date: "This Friday at 10:00 AM (EST)",
    speaker: "Jane Doe, Ex-CMO at TechUnicorn",
    speakerImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    zoomLink: "https://zoom.us/j/123456789",
    webexLink: "https://webex.com/meet/123456789",
    isOnline: true,
  },
  {
    id: "evt-2",
    title: "Fundraising in 2024: What VCs want",
    date: "Next Tuesday at 2:00 PM (EST)",
    speaker: "John Smith, Partner at Alpha Ventures",
    speakerImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=250&auto=format&fit=crop",
    zoomLink: "https://zoom.us/j/987654321",
    webexLink: null,
    isOnline: true,
  },
  {
    id: "evt-3",
    title: "Founders Offline Meetup (NYC)",
    date: "April 15th at 6:00 PM (EST)",
    speaker: "Community Networking",
    speakerImage: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=250&auto=format&fit=crop",
    zoomLink: null,
    webexLink: null,
    isOnline: false,
    location: "WeWork Space, 5th Ave",
  }
];

export const testimonials = [
  {
    quote: "This community helped me secure my pre-seed round. The intros to investors were invaluable.",
    author: "Sarah Jenkins",
    role: "Founder, AI Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The weekly workshops are pure gold. I've completely revamped our GTM strategy based on the expert advice.",
    author: "Michael Chang",
    role: "Co-Founder, SaaSify",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Finally, a place where founders can be open about the struggles of building a company. 10/10.",
    author: "Elena Rodriguez",
    role: "CEO, HealthTech Innovators",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  }
];
