import type { ProjectDetails } from "@/components/ui/project-modal";

const projects: ProjectDetails[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "My personal website showcasing my projects and skills as a developer.",
    longDescription:
      "My personal portfolio website was developed using modern web technologies to showcase my skills and projects. The website is fully responsive and provides an intuitive user interface.\n\nSpecial emphasis was placed on performance, accessibility, and SEO.",
    images: [
      {
        src: "/projects/portfolio.png",
        alt: "Portfolio Website Screenshot",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Animated UI elements",
      "Dark mode",
      "SEO-optimized",
    ],
    liveUrl: "https://sebastianbrandes.dev",
    githubUrl: "https://github.com/SirSebi/portfolio",
    year: "2025",
  },
  {
    id: "commercial-website",
    title: "Commercial Website",
    description: "A simple and clean website for a commercial cleaning company.",
    longDescription:
      "This commercial website was developed for a cleaning company. The design is clean and professional, with a strong focus on user experience and conversion optimization.\n\nThe website provides information about available services, pricing, customer reviews, and a contact form. Special attention was given to loading speed and SEO optimization.",
    images: [
      {
        src: "/projects/gebaeudereinigung-puetz.png",
        alt: "Cleaning company homepage",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Animated UI elements with Framer Motion",
      "Contact form with email integration",
      "SEO-optimized structure",
    ],
    liveUrl: "https://gebaeudereinigung-puetz.de",
    year: "2024",
  },
  {
    id: "dnd-compendium",
    title: "DnD Compendium",
    description: "A Dungeons and Dragons compendium for the 5th edition, intended for private use.",
    longDescription:
      "This Dungeons & Dragons compendium is a comprehensive application for players and Dungeon Masters of the 5th edition. It provides a user-friendly interface for looking up rules, spells, monsters, and items.",
    images: [
      {
        src: "/projects/dnd-compendium.png",
        alt: "DnD Compendium dashboard",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    features: [
      "Comprehensive database with D&D 5e content",
      "Fast search functionality",
      "Filtering by various criteria",
    ],
    githubUrl: "https://github.com/SirSebi/dnd-kompendium",
    year: "2025",
  },
  {
    id: "management-system",
    title: "Management System",
    description: "First ever project I did. A simple management system for an ingame tattoo studio.",
    longDescription:
      "This management system was my first project and was developed for a virtual tattoo studio in a game. It enables the management of customers, appointments, and designs.\n\nThe system provides a simple user interface for studio employees and helps organize daily operations.",
    images: [
      {
        src: "/projects/northern-ink.png",
        alt: "Management System dashboard",
      },
    ],
    technologies: ["JavaScript", "PHP", "CSS", "AJAX", "MySQL"],
    features: [
      "Customer management",
      "Appointment scheduling",
      "Design catalog",
      "Reporting",
    ],
    year: "2020",
  },
  {
    id: "esport-website",
    title: "E-Sports Website",
    description: "A project that started as a joke but became reality—I created the website for our joke e-sports team.",
    longDescription:
      "What started as a joke became a real project. This website was developed for our fun e-sports team and provides information about the team, players, tournaments, and results.\n\nThe website features a modern design with animations and is fully responsive.",
    images: [
      {
        src: "/projects/eloweitwurf.png",
        alt: "E-Sports team website",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    features: [
      "Team profile",
      "Player profiles",
      "Tournament overview",
      "Results and statistics",
    ],
    year: "2025",
  },
];

export function getProjectById(id: string): ProjectDetails | undefined {
  return projects.find(project => project.id === id);
}

export default projects;