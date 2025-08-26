export interface Project {
  project_id: number;
  title: string;
  image: string;
  sub_description: string;
}

export const projects: Project[] = [
  {
    project_id: 1,
    title: "Billing & Inventory System",
    image: "/projects/billing-system.png",
    sub_description:
      "A full-stack web app for managing invoices, tax, and inventory using React and Django.",
  },
  {
    project_id: 2,
    title: "Digital Visiting Card Builder",
    image: "/projects/digital-card.png",
    sub_description:
      "Create and customize digital business cards with drag-and-drop design and QR integration.",
  },
  {
    project_id: 3,
    title: "Music Sharing Platform",
    image: "/projects/music-platform.png",
    sub_description:
      "Private family-only music app with real-time synced playback, playlists, and requests.",
  },
  {
    project_id: 4,
    title: "Animated Portfolio Website",
    image: "/projects/animated-portfolio.png",
    sub_description:
      "A personal portfolio showcasing projects with GSAP and Framer Motion animations.",
  },
  {
    project_id: 5,
    title: "AI Image Generator",
    image: "/projects/ai-generator.png",
    sub_description:
      "Web app that integrates with OpenAI and Ideogram APIs to create unique images.",
  },
  {
    project_id: 6,
    title: "E-commerce Store",
    image: "/projects/ecommerce.png",
    sub_description:
      "Full-stack online store with product catalog, cart, and checkout using MERN stack.",
  },
  {
    project_id: 7,
    title: "Relationship Tracker App",
    image: "/projects/relationship-tracker.png",
    sub_description:
      "A social app for couples to track their relationship history, statuses, and milestones.",
  },
  {
    project_id: 8,
    title: "GSAP Scroll Animations",
    image: "/projects/gsap-scroll.png",
    sub_description:
      "Collection of creative scroll-based animations built with GSAP + Next.js.",
  },
  {
    project_id: 9,
    title: "Real-time Chat App",
    image: "/projects/chat-app.png",
    sub_description:
      "Socket.io-powered chat application with rooms, private messaging, and notifications.",
  },
  {
    project_id: 10,
    title: "System Design Notes",
    image: "/projects/system-design.png",
    sub_description:
      "An educational project documenting scalable system design patterns and architecture.",
  },
];
