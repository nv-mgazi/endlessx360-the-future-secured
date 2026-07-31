import npc1 from "@/assets/portfolio/navnss-npc-1.jpg.asset.json";
import npc2 from "@/assets/portfolio/navnss-npc-2.jpg.asset.json";
import npc3 from "@/assets/portfolio/navnss-npc-3.jpg.asset.json";
import pty1 from "@/assets/portfolio/navnss-pty-1.jpg.asset.json";
import pty2 from "@/assets/portfolio/navnss-pty-2.jpg.asset.json";
import pty3 from "@/assets/portfolio/navnss-pty-3.jpg.asset.json";
import yui1 from "@/assets/portfolio/yui-1.jpg.asset.json";
import yui2 from "@/assets/portfolio/yui-2.jpg.asset.json";
import yui3 from "@/assets/portfolio/yui-3.jpg.asset.json";
import yui4 from "@/assets/portfolio/yui-4.jpg.asset.json";
import sos1 from "@/assets/portfolio/sos-1.jpg.asset.json";
import sos2 from "@/assets/portfolio/sos-2.jpg.asset.json";
import sos3 from "@/assets/portfolio/sos-3.jpg.asset.json";
import shandu1 from "@/assets/portfolio/shandu-1.jpg.asset.json";
import shandu2 from "@/assets/portfolio/shandu-2.jpg.asset.json";

export interface ProjectShot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  stack: string[];
  accent: string;
  shots: ProjectShot[];
}

export const projects: Project[] = [
  {
    id: "navnss-npc",
    client: "NAVNSS NPC",
    category: "Non-profit donation platform",
    year: "2026",
    summary:
      "A public-facing donation site where donors fund verified school needs and follow the money through to delivery.",
    stack: ["Web design", "Donations", "Impact reporting"],
    accent: "hsl(var(--brand-purple))",
    shots: [
      { url: npc1.url, caption: "Home page and donation entry point" },
      { url: npc2.url, caption: "Live impact figures pulled from verified projects" },
      { url: npc3.url, caption: "Who we serve — school and programme showcase" },
    ],
  },
  {
    id: "navnss-pty",
    client: "NAVNSS PTY",
    category: "Operations & procurement system",
    year: "2026",
    summary:
      "The operations side of the same organisation: school verification, supplier quoting and order tracking in one admin workspace.",
    stack: ["System development", "Admin dashboard", "Reporting"],
    accent: "hsl(var(--brand-blue))",
    shots: [
      { url: pty1.url, caption: "Partner portal landing page" },
      { url: pty2.url, caption: "Contact and enquiry routing for suppliers and schools" },
      { url: pty3.url, caption: "Internal project timeline and lifecycle analytics" },
    ],
  },
  {
    id: "yui-inc",
    client: "YUI Inc.",
    category: "Education funding portal",
    year: "2025",
    summary:
      "A student funding portal connecting donors and applicants, with dashboards on both sides of the transaction.",
    stack: ["Web application", "Dashboards", "Data visualisation"],
    accent: "hsl(var(--brand-coral))",
    shots: [
      { url: yui1.url, caption: "Home page with donor and applicant paths" },
      { url: yui2.url, caption: "Engagement insights and reporting charts" },
      { url: yui3.url, caption: "Student dashboard — applications and progress" },
      { url: yui4.url, caption: "Donor dashboard — history, matches and certificates" },
    ],
  },
  {
    id: "safety-over-sight",
    client: "Safety Over Sight",
    category: "School safety & attendance system",
    year: "2026",
    summary:
      "A QR-based check-in system for schools: learners scan at gate checkpoints and parents are notified when a child does not arrive.",
    stack: ["System development", "QR check-in", "Parent notifications"],
    accent: "hsl(var(--brand-blue))",
    shots: [
      { url: sos1.url, caption: "Public site explaining tracking, alerts and data handling" },
      { url: sos2.url, caption: "Parent register with search and per-learner views" },
      { url: sos3.url, caption: "Checkpoint management with scan windows" },
    ],
  },
  {
    id: "shandu360",
    client: "Shandu360",
    category: "Services company website",
    year: "2025",
    summary:
      "A booking-focused site for a landscaping, cleaning and logistics company, with service pages, enquiries and a mapped office location.",
    stack: ["Web design", "Enquiry forms", "Google Maps"],
    accent: "hsl(var(--brand-coral))",
    shots: [
      { url: shandu1.url, caption: "Home page and service entry points" },
      { url: shandu2.url, caption: "Contact page with map and enquiry form" },
    ],
  },
];
