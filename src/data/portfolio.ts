export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  period: string;
  location: string;
  type: string;
  skills: string[];
  achievements: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MEKA [Confidential Client]",
    description: "A comprehensive platform with role-based access for Administrators, Instructors, and Students, featuring Shopify integration for purchases and D2L integration for automatic grading.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
    technologies: ["Svelte", "TypeScript", "Tailwind CSS", "Firebase", "D2L"],
    githubUrl: "https://github.com/NirbhayVachhani/",
  },
  {
    id: 2,
    title: "ArcTunes",
    description: "A music player app with Google Sign-In authentication and Firebase storage for music and profile images, built using React Native and Expo.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800",
    technologies: ["React Native", "Firebase", "Expo", "Tailwind CSS"],
    githubUrl: "https://github.com/NirbhayVachhani/ArcTunes.git"
  },
  {
    id: 3,
    title: "Petify",
    description: "A pet care app connecting pet owners and lovers, featuring secure chat with end-to-end encryption and authentication.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800",
    technologies: ["Flutter", "Firebase", "Dart"],
    githubUrl: "" 
  },
  {
    id: 4,
    title: "Cultural Rail",
    description: "An educational Unity game exploring India's cultural heritage, featuring quizzes and rewards for enhanced engagement.",
    image: "https://images.unsplash.com/photo-1470350576089-539d5a852bf7?auto=format&fit=crop&w=800",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    githubUrl: "https://github.com/NirbhayVachhani/Cultural-Rail.git"
  },
  {
    id: 5,
    title: "C-Programming",
    description: "A comprehensive repository of C programs covering essential concepts and core algorithms.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800",
    technologies: ["C"],
    githubUrl: "https://github.com/NirbhayVachhani/C-Programming.git"
  },

];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "OMNI Customer Fulfillment Associate",
    company: "Walmart",
    startDate: "2023-09",
    endDate: "Present",
    period: "Sep 2023 - Present · 1 yr 8 mos",
    location: "Calgary, Alberta, Canada",
    type: "Permanent Part-time",
    skills: ["Order Fulfillment", "Inventory Management", "Workflow Optimization", "Time Management", "Customer Satisfaction"],
    achievements: [
      "Managed online and in-store order fulfillment at Walmart, ensuring fast and accurate processing.",
      "Collaborated with cross-functional teams to improve customer experience and workflow efficiency."
    ]
  },
  {
    id: 2,
    role: "Instructor",
    company: "LearnWithYantraMayaa",
    startDate: "2023-01",
    endDate: "2023-06",
    period: "Jan 2023 - Jun 2023 · 6 mos",
    location: "Remote",
    type: "Internship",
    skills: ["Python (Programming Language)", "Teaching Programming", "Curriculum Development"],
    achievements: [
      "Led Python programming tutorials for 30+ students, focusing on logic and clean coding.",
      "Mentored on test automation with Selenium and Cypress.",
      "Developed engaging teaching methods to enhance learning outcomes."
    ]
  },
  {
    id: 3,
    role: "Co Lead",
    company: "Parul University",
    startDate: "2020-08",
    endDate: "2023-03",
    period: "Aug 2020 - Mar 2023 · 2 yrs 8 mos",
    location: "Vadodara, Gujarat, India",
    type: "Permanent Part-time",
    skills: ["Leadership Management", "Event Management", "Team Collaboration"],
    achievements: [
      "Co-Lead at Parul University overseeing campus-wide activities and departmental initiatives.",
      "Planned and organized events for smooth coordination and collaboration.",
      "Managed departmental initiatives fostering collaboration and teamwork."
    ]
  },
  {
    id: 4,
    role: "Research Intern",
    company: "ClointFusion",
    startDate: "2021-09",
    endDate: "2022-09",
    period: "Sep 2021 - Sep 2022 · 1 yr 1 mo",
    location: "Remote",
    type: "Permanent Part-time",
    skills: ["Python Automation", "Workflow Optimization", "Technical Documentation", "Research Skills", "Scripting"],
    achievements: [
      "Developed Python automation scripts to streamline daily tasks and improve workflow efficiency.",
      "Conducted research on tools and presented recommendations for workflow enhancements.",
      "Created user-friendly guides to help non-dev teams utilize automation tools effectively."
    ]
  },
  {
    id: 5,
    role: "Frontend Developer",
    company: "Rotary Club",
    startDate: "2021-06",
    endDate: "2021-07",
    period: "Jun 2021 - Jul 2021 · 2 mos",
    location: "Vadodara, Gujarat, India",
    type: "Contract Part-time",
    skills: ["Web Development", "Frontend Development", "UI/UX"],
    achievements: [
      "Redesigned the Rotary Club website for event registration, enabling seamless login and registration processes.",
      "Implemented user-friendly features to enhance user experience and engagement on the website."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Soft Skills",
    skills: [
      "Team Management",
      "Problem Solving",
      "Managing Ambiguity",
      "Planning",
      "Priority Planning",
      "Documentation",
      "User Stories",
      "Flow Charts",
      "Gantt Charts",
      "Product Features",
      "Mathematics",
      "Content Management",
      "Digital Products",
    ],
  },
  {
    name: "Front-End",
    skills: [
      "TypeScript",
      "JavaScript",
      "React Native",
      "Flutter",
      "Dart",
      "Svelte",
      "React JS",
      "HTML/CSS",
      "CSS",
      "UX/UI Design",
      "Shadow DOM",
      "Prototypes",
      "SCSS",
    ],
  },
  {
    name: "Back-End",
    skills: [
      "Node.js",
      "Python",
      "Java",
      "PHP",
      "Scala",
      "Apache Kafka",
      "GraphQL",
      "MySQL",
      "REST APIs",
      "Data Modeling",
      "Microservices",
      "Algorithm Design",
      "Backtracking",
      "Hash Tables",
      "Trees",
      "Stacks",
      "Queues",
      "Linked Lists",
      "Sorting",
      "Graphs",
    ],
  },
  {
    name: "Tools, Platforms & Operating Systems",
    skills: [
      "Digital Ocean",
      "Docker",
      "Kubernetes",
      "JIRA",
      "Gradle",
      "Microsoft Office Suite",
      "Microsoft Project Professional",
      "Git",
      "Linux/Unix",
      "MacOS",
      "Ubuntu",
      "Windows",
      "Google Firebase",
      "Firestore",
      "Maven",
      "Microsoft Azure",
    ],
  },
  {
    name: "Full-Stack",
    skills: [
      "Web Services",
      "CI/CD (Continuous Integration and Deployment)",
      "Troubleshooting",
      "Distributed Storage",
      "Data Science",
      "Design Patterns",
      "Webpack",
      "Code Review",
      "SSL",
    ],
  },
  {
    name: "SDLC Methods",
    skills: [
      "Agile/Scrum",
      "Waterfall",
      "Rapid Application Development (RAD)",
      "Hybrid Agile-Waterfall",
      "SDLC (Software Development Life Cycle)",
      "UML (Unified Modeling Language)",
    ],
  },
];