/* ==========================================================================
   All portfolio content lives here. Everything below comes from the resume
   (Java_Dev_Pankaj.pdf). Edit this file to update the site.
   ========================================================================== */

// ⚠️ The GitHub link in the resume still reads github.com/REPLACE-ME.
// Put your real GitHub username here and every GitHub link/icon on the site
// (hero, footer, ERP repo link) will switch on automatically.
const GITHUB_USERNAME = 'pankajbhhhE'
const githubReady = GITHUB_USERNAME !== 'REPLACE-ME'
export const githubUrl = githubReady ? `https://github.com/${GITHUB_USERNAME}` : null

// Months of industry experience, counted from the OneNet Solutions start date
// (March 2026). Updates itself, so it never goes stale.
const JOB_START = new Date(2026, 2, 1)
export function experienceLabel(now = new Date()) {
  const months = Math.max(
    1,
    (now.getFullYear() - JOB_START.getFullYear()) * 12 + (now.getMonth() - JOB_START.getMonth())
  )
  return months >= 12 ? `${Math.floor(months / 12)}+ yrs` : `${months}+ months`
}

export const profile = {
  name: 'Pankaj Kumar Bharti',
  brand: 'Pankaj.dev',
  role: 'Java Developer',
  currentRole: 'Java Developer @ OneNet Solutions',
  tagline:
    'Java Developer building secure, full-stack applications with Java, Spring Boot, React.js and MySQL — with JWT authentication, real-time systems (WebSocket, Redis) and clean, well-structured code backed by strong OOP fundamentals.',
  location: 'Pune, India',
  availability: 'Open to new opportunities',
  email: 'rajpankajbharti1802@gmail.com',
  phone: '+91-7361015626',
  resumeFile: '/Pankaj_Kumar_Bharti_Resume.pdf',
  // Optional: drop a photo in /public (e.g. photo.jpg) and set photo: '/photo.jpg'
  photo: 'png.jpeg',
  initials: 'PB',
}

export const socials = [
  githubUrl && { name: 'GitHub', url:'https://github.com/pankajbhhh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pankaj-kumar-bharti-847893254/' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/pankajbharti/' },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/rajpankajbharti1802?tab=activity' },
  { name: 'Email', url: `mailto:${profile.email}` },
].filter(Boolean)

export const heroStats = () => [
  { value: experienceLabel().replace(' months', ' mo'), label: 'Industry Experience' },
  { value: '3', label: 'Projects Built' },
  { value: '290+', label: 'DSA Problems Solved' },
  { value: '20+', label: 'Technologies' },
]

export const about = {
  summary:
    'Java Developer building secure, full-stack applications with Spring Boot, React.js and MySQL. I focus on JWT-based security, real-time systems with WebSocket and Redis, and clean, well-structured code.',
  strengths: [
    {
      icon: 'JWT',
      title: 'Secure by design',
      text: 'JWT authentication and role-based access control (RBAC) using Spring Security.',
    },
    {
      icon: 'WebSocket',
      title: 'Real-time systems',
      text: 'WebSocket, Redis and MySQL working together for reliable message delivery and persistence.',
    },
    {
      icon: 'REST APIs',
      title: 'Full-stack delivery',
      text: 'React.js frontends connected to Spring Boot REST APIs with request validation.',
    },
    {
      icon: 'OOP',
      title: 'Strong fundamentals',
      text: 'OOP, Collections Framework, Multithreading, Java 8 and the Stream API.',
    },
  ],
  practices: ['API Integration', 'Authentication', 'Authorization', 'Request Validation', 'Debugging'],
}

export const projects = [
  {
    id: 1,
    title: 'ERP Management System',
    tag: 'Full Stack',
    description:
      'A full-stack ERP covering Sales, Purchase, Items, Parties, Payments and Invoicing, with a React.js frontend on Spring Boot REST APIs.',
    highlights: [
      'Built the React.js frontend and Spring Boot REST APIs for end-to-end ERP workflows.',
      'Implemented business logic and request validation in the API layer and integrated it with the UI.',
      'Tested APIs with Postman, resolved integration issues and managed code with Git.',
    ],
    stack: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL', 'Git', 'Postman'],
    metrics: [
      { value: '6', label: 'Core modules' },
      { value: 'REST', label: 'API-driven' },
    ],
    github: githubReady ? `${githubUrl}/erp-management-system` : null,
    demo: null,
  },
  {
    id: 2,
    title: 'Role-Based Support Desk System',
    tag: 'Real-time',
    description:
      'A support platform where users and agents communicate in real time, secured with JWT and role-based access control.',
    highlights: [
      'Architected the platform with Spring Boot REST APIs for real-time user-to-agent communication.',
      'Secured it with JWT authentication and RBAC across user roles using Spring Security.',
      'Delivered reliable messaging with WebSocket and Redis, persisted in MySQL, behind a responsive React.js interface.',
    ],
    stack: ['Spring Boot', 'Spring Security', 'JWT', 'Redis', 'WebSocket', 'React.js', 'MySQL'],
    metrics: [
      { value: 'JWT', label: 'RBAC security' },
      { value: 'Real-time', label: 'WebSocket + Redis' },
    ],
    github: null,
    demo: 'https://support.mewin.live/',
  },
  {
    id: 3,
    title: 'UTR Extraction from Payment Screenshots',
    tag: 'OCR Automation',
    description:
      'An OCR tool that automatically extracts UTR numbers from payment screenshots, removing manual data entry.',
    highlights: [
      'Automated UTR extraction from payment screenshots using Tesseract OCR.',
      'Exposed REST APIs for image upload, text extraction and data processing.',
      'Added validation logic to identify and verify UTR numbers from the extracted text.',
    ],
    stack: ['Java', 'Spring Boot', 'Tesseract OCR', 'REST APIs'],
    metrics: [
      { value: 'OCR', label: 'Tesseract' },
      { value: 'Auto', label: 'Data extraction' },
    ],
    github: null,
    demo: 'https://mewin.live/deposit',
  },
]

export const projectStats = [
  { value: '153', label: 'LeetCode Problems' },
  { value: '137', label: 'GfG Problems' },
  { value: '150/455', label: "Striver's A2Z Sheet" },
  { value: '3', label: 'Projects Built' },
  { value: '6', label: 'ERP Modules' },
  { value: '7.1', label: 'B.Tech CGPA' },
]

export const experience = [
  {
    role: 'Java Developer',
    company: 'OneNet Solutions Pvt. Ltd., Pune',
    initial: 'O',
    period: 'Mar 2026 — Present',
    points: [
      'ERP Management System: built a React.js frontend across 6 modules on Spring Boot REST APIs for end-to-end ERP workflows.',
      'Support Desk System: secured with JWT and RBAC, with real-time messaging over WebSocket, Redis and MySQL.',
      'UTR Extraction: automated data entry from payment screenshots with Tesseract OCR and validation logic.',
    ],
  },
  {
    role: 'Java Full Stack Development Training',
    company: 'QSpiders, Hadapsar, Pune',
    initial: 'Q',
    period: 'Apr 2025 — Dec 2025',
    points: [
      'Hands-on training in Core Java, Spring Boot, Hibernate, JPA, SQL, REST APIs, JavaScript, React.js, HTML5 and CSS3.',
    ],
  },
]

export const education = {
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  school: 'Datta Meghe Institute of Higher Education and Research',
  year: 'Graduated 2025',
  cgpa: 'CGPA 7.1 / 10',
}

// Names here must match the keys in src/data/techIcons.js so each gets its logo.
export const skillGroups = {
  Backend: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'REST APIs', 'JWT'],
  Frontend: ['React.js', 'React Router', 'JavaScript', 'HTML5', 'CSS3'],
  'Database & ORM': ['MySQL', 'PostgreSQL', 'SQL', 'Hibernate', 'JPA'],
  'Real-Time & DevOps': ['WebSocket', 'Redis', 'Apache Kafka', 'Docker'],
  'Core Java': ['OOP', 'Collections Framework', 'Exception Handling', 'Multithreading', 'Java 8', 'Stream API'],
  Tools: ['Git', 'GitHub', 'Postman', 'Maven', 'Eclipse', 'VS Code', 'Tesseract OCR'],
}

export const codingProfiles = [
  {
    platform: 'LeetCode',
    icon: 'LeetCode',
    metric: '153 problems solved',
    url: 'https://leetcode.com/u/pankajbharti/',
  },
  {
    platform: 'GeeksforGeeks',
    icon: 'GeeksforGeeks',
    metric: '137 problems solved',
    url: 'https://www.geeksforgeeks.org/profile/rajpankajbharti1802?tab=activity',
  },
  {
    platform: "Striver's A2Z DSA Sheet",
    icon: 'Striver A2Z',
    metric: '150 / 455 solved',
    url: null,
  },
]

export const certifications = [
  {
    title: 'Data Analytics Certificate',
    org: 'Coursera',
    icon: 'Coursera',
    date: '2024',
    note: 'Completed 8 case studies in SQL, data cleaning and dashboards.',
  },
  {
    title: 'Cloud Computing',
    org: 'NPTEL',
    icon: 'NPTEL',
    date: '',
    note: '',
  },
]