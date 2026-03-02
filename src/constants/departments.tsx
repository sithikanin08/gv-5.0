import { Crown, Coins, Handshake, Truck, Users, CalendarDays, Megaphone, Mic } from 'lucide-react';
import type { Role } from '../types';

export const ROLES: Role[] = [
  {
    title: "Organizing Committee President (OCP)",
    openings: 1,
    icon: Crown,
    jobDescription: [
      "Lead the entire Organizing Committee towards delivering a successful and impactful event, ensuring strong financial planning, smooth logistics, clear strategy, teamwork, creativity, and a memorable experience for all stakeholders.",
      "Manage the OC and ensure effective communication among all members.",
      "Ensure the project meets objectives agreed upon with the EB of AIESEC in SLIIT.",
      "Maintain accurate communication and reporting with OCVPs, EMs, and EB.",
      "Set timelines, action plans, and ensure accountability.",
      "Track OC performance and overall project progress.",
      "Coordinate PD raising together with LCVP BD.",
      "Plan initial marketing and PR campaigns with LCVP Marketing.",
      "Coordinate with LCVP Finance regarding ER status and budget tracking.",
      "Ensure marketing materials and content calendars are finalized before publishing deadlines.",
      "Facilitating good OC experience."
    ],
    skills: [
      "Strong leadership and communication skills",
      "Time and task management",
      "Solution-oriented mindset",
      "Experience in event management",
      "Creativity and attention to detail"
    ],
    kpis: [
      "# of delegates",
      "# of PD raised",
      "Event GPM",
      "# of OGX sign-ups",
      "# of reapplying for OCs",
      "# of OC deliverables completed",
      "# of milestones achieved"
    ],
    learningOutcomes: [
      "Event leadership and management",
      "Team and performance management",
      "Financial oversight of projects",
      "Project tracking and reporting",
      "Partnership coordination skills"
    ]
  },
  {
    title: "Finance",
    openings: 1,
    icon: Coins,
    jobDescription: [
      "Prepare and manage the overall event budget.",
      "Track income, expenses, and partnerships.",
      "Maintain financial documentation and supporting evidence.",
      "Ensure smooth cash flow throughout the project lifecycle.",
      "Execute the budget with minimal variance.",
      "Prepare and submit the final financial report.",
      "Support cross-functional collaboration as requested by the OCP."
    ],
    skills: [
      "Budget preparation and control",
      "Data and documentation management",
      "Reporting and analytical skills",
      "Critical thinking and adaptability"
    ],
    kpis: [
      "Event GPM",
      "# of PD raised",
      "# of financial documents completed",
      "# of expenses recorded",
      "# of reimbursements processed",
      "# of finance reports submitted"
    ],
    learningOutcomes: [
      "Event finance management",
      "Budgeting and reporting skills",
      "Financial tracking tools usage",
      "Data-driven decision-making"
    ]
  },
  {
    title: "Partnership Development (PD)",
    openings: 4,
    icon: Handshake,
    jobDescription: [
      "Identify and onboard corporate, NGO, and stakeholder partners.",
      "Raise monetary and in-kind sponsorships.",
      "Manage ER accounts and partnership pipelines.",
      "Implement PD strategies aligned with project goals.",
      "Ensure proper and timely partnership delivery.",
      "Coordinate media-related content with Marketing and PR teams.",
      "Maintain partnership documentation and follow-ups."
    ],
    skills: [
      "Communication and negotiation skills",
      "Stakeholder management",
      "Time management and documentation",
      "Sales and partnership experience"
    ],
    kpis: [
      "# of PD raised",
      "# of partners onboarded",
      "# of monetary partnerships",
      "# of in-kind partnerships",
      "# of company meetings conducted",
      "# of partnership deliveries completed"
    ],
    learningOutcomes: [
      "Corporate exposure",
      "Market research skills",
      "Negotiation and sales experience",
      "Partnership management skills"
    ]
  },
  {
    title: "Logistics",
    openings: 4,
    icon: Truck,
    jobDescription: [
      "Secure and manage suitable venues.",
      "Handle all logistical requirements before and during the event.",
      "Manage in-project event operations.",
      "Oversee merchandise printing and distribution.",
      "Ensure smooth technical operations.",
      "Provide logistics updates during meetings.",
      "Support ER delivery when required."
    ],
    skills: [
      "Event organization experience",
      "Inventory and supply management",
      "Communication and coordination skills",
      "Flexibility and adaptability"
    ],
    kpis: [
      "# of event components executed",
      "# of logistics setups completed",
      "# of in-kind partners raised",
      "# of technical operations handled",
      "# of merchandise items delivered",
      "# of logistics issues resolved",
      "# of venues managed"
    ],
    learningOutcomes: [
      "Event operations management",
      "Inventory and logistics coordination",
      "Negotiation and supplier management",
      "Problem-solving under pressure"
    ]
  },
  {
    title: "Delegates",
    openings: 2,
    icon: Users,
    jobDescription: [
      "Manage delegate communication (emails, newsletters, updates).",
      "Coordinate delegate registration and engagement.",
      "Address delegate queries and support during pre, during, and post-event phases.",
      "Collect and analyze delegate feedback.",
      "Support the creation of delegate attraction campaigns."
    ],
    skills: [
      "Strong communication and interpersonal skills",
      "Time management and multitasking",
      "Problem-solving under pressure",
      "Attention to detail"
    ],
    kpis: [
      "# of delegates attractions",
      "# of delegate communications sent",
      "# of delegate queries handled",
      "# of OGX sign-ups from delegates",
      "# of feedback responses collected"
    ],
    learningOutcomes: [
      "Delegate management skills",
      "Communication and coordination experience",
      "Teamwork and problem-solving skills",
      "Event support and planning exposure"
    ]
  },
  {
    title: "Events",
    openings: 2,
    icon: CalendarDays,
    jobDescription: [
      "Plan and coordinate all event-specific sessions and activities.",
      "Manage agendas, schedules, and sub-events.",
      "Coordinate with Logistics, Marketing, PR, and Delegates teams to ensure smooth execution.",
      "Ensure events run on time and maintain quality standards.",
      "Track and report on event success metrics."
    ],
    skills: [
      "Event planning and coordination",
      "Time and project management",
      "Communication and collaboration skills",
      "Creativity and innovation in event design"
    ],
    kpis: [
      "# of events or sessions executed",
      "# of agenda items completed",
      "# of performances coordinated",
      "# of facilitators managed",
      "# of delegates engaged in sessions"
    ],
    learningOutcomes: [
      "Event planning and execution experience",
      "Cross-team collaboration skills",
      "Time management under pressure",
      "Problem-solving and creativity in events"
    ]
  },
  {
    title: "Marketing",
    openings: 3,
    icon: Megaphone,
    jobDescription: [
      "Plan and execute the event marketing timeline.",
      "Create and implement marketing campaigns.",
      "Manage digital platforms and outreach.",
      "Ensure AIESEC brand alignment.",
      "Create, manage, and publish content.",
      "Manage the event page and digital tools."
    ],
    skills: [
      "Content and campaign management",
      "Branding and graphic design knowledge",
      "Digital storytelling and creativity",
      "Strategic and time management skills"
    ],
    kpis: [
      "# of delegates generated through marketing",
      "# of OGX sign-ups generated through campaigns",
      "# of marketing campaigns executed",
      "# of content pieces published",
      "# of platforms managed",
      "# of event page interactions"
    ],
    learningOutcomes: [
      "Digital marketing expertise",
      "Brand and content management",
      "Campaign strategy development",
      "Social media analytics skills"
    ]
  },
  {
    title: "Public Relations (PR)",
    openings: 2,
    icon: Mic,
    jobDescription: [
      "Manage external communications and media relations.",
      "Coordinate press releases and official announcements.",
      "Ensure consistent public messaging.",
      "Support marketing and PD visibility efforts."
    ],
    skills: [
      "Communication and media skills",
      "Public speaking and presentation",
      "Stakeholder engagement",
      "Content writing and editing"
    ],
    kpis: [
      "# of delegates reached through PR",
      "# of media features or mentions",
      "# of external stakeholders engaged",
      "# of OGX sign-ups influenced",
      "# of public communications released",
      "# of brand collaborations supported"
    ],
    learningOutcomes: [
      "Public relations expertise",
      "Media and communications management",
      "External stakeholder engagement",
      "Brand visibility and reputation management"
    ]
  }
];
