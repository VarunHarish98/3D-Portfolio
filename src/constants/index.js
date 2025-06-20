import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  accenture,
  vi_solutions,
  sbu,
  rnsit,
  java,
  kubernetes,
  github,
  linkedin,
  portfolio,
  aws,
} from "../assets";

export const firstName = "Varun";
export const middleName = "Hosadurga";
export const lastName = "Harish";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    id: "github",
    title: github,
  },
  {
    id: "linkedin",
    title: linkedin,
  },
];

export const filePath = {
  drive:
    "https://drive.google.com/file/d/1WMwDMhaVmqUpnaWJ3SuJy7OQT-sDQR1Z/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/varun-harish1998",
  github: "https://github.com/VarunHarish98",
};

export const resumePath =
  "https://uyugsntixuocxvrjcwan.supabase.co/storage/v1/object/public/Static%20Data%20-%20PII/Resume_Varun_HH.pdf?t=2024-08-10T22%3A24%3A25.170Z";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const education = [
  {
    title: "Master's in Computer Engineering",
    school: "Stony Brook University",
    icon: sbu,
    date: "August 2023 - Present",
    cgpa: "3.8/4",
    iconBg: "#000000",
    courses: [
      "Computer Vision",
      "Switching & Routing in parallel and distributed systems",
      "Network Security",
      "Practical ML and AI",
      "Data Structures and Algorithms",
    ],
  },
  {
    title: "Bachelor's in Electronics and Communication Engineering",
    school: "RNS Institute of Technology",
    icon: rnsit,
    date: "August 2016 - July 2020",
    cgpa: "8.7/10",
    iconBg: "#000000",
    courses: [
      "Network Analysis",
      "Programming in Java",
      "Machine Learning",
      "Microprocessor 8086",
    ],
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Stony Brook University",
    icon: sbu,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Designed a modular React-based LLM medical assistant using microfrontend architecture with independently deployed modules through ShadCN UI.",
      "Built a RAG-based assistant with LangChain and Google Gemini API to extract and summarize multimodal medical content with 90%+ accuracy.",
      "Deployed the application securely on AWS with JWT-based access control and responsive design for clinical workflows across devices."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accenture (AT&T)",
    icon: accenture,
    iconBg: "#383E56",
    date: "December 2020 - August 2022",
    points: [
      "Built and maintained AI chatbot interfaces in ReactJS and NodeJS serving 150K+ daily users across web and mobile.",
      "Resolved cross-browser UI issues using React DevTools, HTML, and CSS debugging, improving visual consistency and user experience by 28%.",
      "Scaled chatbot transactional MVP flows from prototype to production using modular React components, driving $180K ARR impact.",
      "Led frontend delivery of CRM dashboards from Figma using Tailwind and Chart.js, improving KPI visibility and PM reporting by 40%.",
      "Redesigned UI architecture using memoization and dynamic imports, reducing initial load by 30% for low-bandwidth devices.",
      "Improved frontend delivery using Docker and Kubernetes with CI/CD pipelines, and implemented WCAG-compliant accessibility features boosting retention by 12%.",
      "Drove TDD adoption with Jest/Mocha, achieving 90%+ test coverage and reducing production bugs by 40%."
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Flix-GPT",
    description:
      "Web-based platform that allows users to search movies through queries using OpenAI (Chat-GPT), providing a convenient and efficient solution for movie recommendation.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "openAi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/VarunHarish98/NetflixGPT",
    live_link: "https://netflix-gpt-ten-navy.vercel.app/",
    hasLink: true,
    isBlack: false,
  },
  {
    name: "Portfolio",
    description:
      "A 3D portfolio created using react and three.js with awesome 3-D animations showcasing various projects, work experience and education. Used WebGL for graphics rendering through three.js. Integrated google analytics for all button clicks and scroll events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/VarunHarish98/3D-Portfolio",
    live_link: "https://varun-portfolio-one.vercel.app/",
    hasLink: true,
    isBlack: false,
  },
  {
    name: "3-D Shirt Viewer",
    description:
      "Web application that enables users to customise shirt, view 3D customised shirt for a better look created using javascript animation library three.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react-fiber",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/VarunHarish98/AI-Shirt-Threejs",
    live_link: "",
    hasLink: false,
    isBlack: false,
  },
  {
    name: "Bill Automator",
    description:
      "A static and a minimalist website for automating personalised bill generation. Users can download the entered the data in the form of PDF, with all customised billing features.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/VarunHarish98/Bill-Data",
    live_link: "https://pdf-bill.tiiny.site/",
    hasLink: true,
    isBlack: true,
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
