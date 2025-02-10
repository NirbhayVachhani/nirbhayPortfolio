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
    githubUrl: "https://github.com",
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
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Cultural Rail",
    description: "An educational Unity game exploring India's cultural heritage, featuring quizzes and rewards for enhanced engagement.",
    image: "https://images.unsplash.com/photo-1470350576089-539d5a852bf7?auto=format&fit=crop&w=800",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "C-Programming",
    description: "A comprehensive repository of C programs covering essential concepts and core algorithms.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800",
    technologies: ["C"],
    githubUrl: "https://github.com"
  },

];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "OMNI Customer Fulfillment Associate",
    company: "Walmart",
    period: "Sep 2023 - Present",
    location: "Calgary, Alberta, Canada",
    type: "Permanent Part-time",
    skills: ["Customer Service", "Inventory Management", "Team Collaboration"],
    achievements: [
      "Responsible for picking and dispensing online orders received through the system",
      "Encourage customers to complete surveys to help maintain the store's NPS score",
      "Assist other departments with price changes, recovery, and zoning tasks"
    ]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Technospot Technologies",
    period: "Apr 2024 - Sep 2024",
    location: "Remote",
    type: "Internship",
    skills: ["React Native", "Firebase", "Cloud Firestore", "SDLC"],
    achievements: [
      "Participated in Agile software development processes, including sprint planning and daily standups",
      "Supported the team in researching and implementing new technologies for system improvement"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Swarm Technologies",
    period: "Sep 2022 - May 2023",
    location: "Remote",
    type: "Internship",
    skills: ["Web Development", "Frontend Development", "UI/UX"],
    achievements: [
      "Developed and maintained responsive user interfaces for web applications",
      "Worked closely with the development team to implement new features",
      "Gained hands-on experience with modern frontend technologies"
    ]
  },
  {
    id: 4,
    role: "Co Lead",
    company: "Parul University",
    period: "Aug 2020 - Mar 2023",
    location: "InPerson",
    type: "Permanent Part-time",
    skills: ["Leadership", "Event Management", "Team Coordination"],
    achievements: [
      "Served as the Co-Lead for the PIET-DS campus, overseeing activities across all departments",
      "Planned and organized campus-wide events ensuring smooth coordination",
      "Managed departmental initiatives fostering collaboration"
    ]
  },
  {
    id: 5,
    role: "Research Intern",
    company: "ClointFusion",
    period: "Sep 2021 - Sep 2022",
    location: "Remote",
    type: "Internship",
    skills: ["Python", "Automation", "Scrum"],
    achievements: [
      "Developed automation scripts in Python to enhance efficiency",
      "Worked within a Scrum framework participating in sprint planning",
      "Conducted bi-weekly research for automation projects"
    ]
  },
  {
    id: 6,
    role: "Frontend Developer",
    company: "Rotary Club",
    period: "Jun 2021 - Jul 2021",
    location: "Remote",
    type: "Internship",
    skills: ["Web Development", "Frontend Development"],
    achievements: [
      "Collaborated with a team to design and develop an event website",
      "Created key features including login functionality and registration forms",
      "Contributed to building a user-friendly event management platform"
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