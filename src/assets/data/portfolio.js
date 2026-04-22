// ============================================================
// Portfolio Data — Wesley Sumedha Deano
// ============================================================

export const personal = {
  name: "Wesley Sumedha Deano",
  alias: "MemoriesF",
  tagline: "AI Engineer",
  subtitle: "BINUS – AI Engineering",
  bio: "I am an AI-Specialized developer specializing in building intelligent, product-driven systems that bridge machine learning and real-world usability. With a strong foundation in computer vision and modern web technologies, I design and develop solutions that are not only technically robust but also intuitive and impactful.",
  bio2: "As a Computer Science student at Bina Nusantara University, I am focused on building at the intersection of AI engineering and product development. I approach technology through execution — identifying problems and turning them into functional systems. My background in UI/UX design allows me to translate complex AI capabilities into user-centered experiences, ensuring that every solution is both powerful and accessible. I work with modern development stacks to deliver scalable, production-ready applications that align with real-world needs.",
  email: "wsly.sdeano@gmail.com",
  //website: "",
  location: "Jakarta, Indonesia",
  links: {
    github: "https://github.com/Ws995566",
    linkedin: "www.linkedin.com/in/wesley-sumedha-deano",
    //facebook: "",
    instagram: "https://www.instagram.com/_.auzora/",
    //telegram: "",
  },
};

export const stats = [
  { label: "Total Projects", value: "3+", icon: "code", description: "Innovative AI integrated projects" },
  { label: "Certificates", value: "2", icon: "award", description: "Professional skills validated" },
  { label: "Years of Experience", value: "1", icon: "globe", description: "Continuous learning journey" },
];

export const skills = ["Python", "Java", "Figma", "C/C++", "MySQL", "and many more"];

export const techStack = [
  // {
  //   category: "Front-End (Client-Side)",
  //   techs: [
  //     { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  //     { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  //     { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  //     { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  //     { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  //     { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  //     { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
  //   ]
  // },
  // {
  //   category: "Back-End (Server-Side)",
  //   techs: [
  //     { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  //     { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  //     { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  //   ]
  // },
  {
    category: "Database Layer",
    techs: [
      { name: "MySQL", icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Creative & Prototyping Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "/Images/figma.png" },
      { name: "Claude", icon: "/Images/Claude.svg" },
      { name: "ChatGPT", icon: "/Images/chatgpt.png" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Hello MMS",
    description: "Hellomms.com is a dual-role web platform that combines a Store Management System (admin side) with a customer-facing service and e-commerce interface.  ",
    extendedDescription: "",
    tags: ["Laravel", "UI/UX"],
    image: "/Images/HelloMMS.png",
    liveUrl: "https://hellomms.com/",
    detailUrl: "#",
    status: "Deployed",
    color: "#0066FF",
  },
  // {
  //   id: 2,
  //   title: "ControlWindow",
  //   description: "An AI-driven system, where user can control their device especially PC from afar by simply command or just using finger to control the pointer",
  //   extendedDescription: "Developing a robust AI model to assist user. This projects used Computer Vision and Speech Recognition to train the model",
  //   tags: ["AI/ML", "Computer Vision", "Speech Recognition"],
  //   image: "/Images/Musaic.png",
  //   liveUrl: "#",
  //   detailUrl: "#",
  //   status: "Developing",
  //   color: "#10B981",
  // },
];

export const certificates = [
  { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2025" },
  { title: "Java Programming", issuer: "BNCC BINUS @Malang", year: "2025" },
  { title: "Claude 101", issuer: "Anthropic Education", year: "2026" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic Education", year: "2026" },
  // { title: "Back-End Developer Professional Certificate", issuer: "Coursera", year: "2026" },
];

export const academic = {
  degree: "Bachelor of Computer Science",
  major: "Major in Intelligence System",
  institution: "Bina Nusantara University – School of Computer Science",
  period: "2024 — Present",
  timeline: [
    {
      id: "01",
      year: "First Year",
      title: "The Foundations",
      focus: "Logic & Programming",
      concepts: ["OOP", "Data Structures", "Algorithm and Programming"],
      stack: ["Java", "C", "C++"],
      //project: "Personal Portfolio v1 — A minimalist introduction to web presence.",
      icon: "code"
    },
    {
      id: "02",
      year: "Second Year",
      title: "The Systems",
      focus: "Intelligence System",
      concepts: ["Machine Learning", "Software Engineering", "Computer Vision"],
      stack: ["Python"],
      //project: "Wonder of Aklan — A curated tourism platform showcasing local destinations with a clean, aesthetic UI.",
      icon: "database"
    },
    // {
    //   id: "03",
    //   year: "Third Year",
    //   title: "The Modern Stack",
    //   focus: "Full-Stack & Quality Assurance",
    //   concepts: ["SQA", "API Design", "Component Architecture"],
    //   stack: ["React", "Node.js", "Express", "MongoDB"],
    //   project: "Banana Leaf Disease Detection — An AI-driven application designed to identify agricultural threats through image analysis.",
    //   status: "In Progress",
    //   icon: "layers"
    // },
    {
      id: "04",
      year: "Current Focus",
      title: "Current Focus",
      status: "Building & Researching",
      deepDives: ["Machine Learning", "Computer Vision", "Software Development"],
      goal: "Bridging academic theory with industry-grade software deployment.",
      icon: "activity"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
