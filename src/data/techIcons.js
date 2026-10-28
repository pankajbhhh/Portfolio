import {
  siOpenjdk,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siHibernate,
  siApachekafka,
  siRedis,
  siJsonwebtokens,
  siReact,
  siReactrouter,
  siJavascript,
  siHtml5,
  siCss,
  siMysql,
  siPostgresql,
  siDocker,
  siGit,
  siGithub,
  siApachemaven,
  siPostman,
  siEclipseide,
  siLeetcode,
  siGeeksforgeeks,
  siCoursera,
  siGmail,
} from 'simple-icons'

// Items with no official logo in the icon library get a small hand-drawn
// icon (outline = stroke, solid = fill) so every tile still reads clearly.
const custom = {
  'REST APIs': { hex: '3B82F6', stroke: true, path: 'M4 8h11M12 4l3 4-3 4M20 16H9M12 20l-3-4 3-4' },
  JPA: { hex: '59B4D9', stroke: true, path: 'M4 5h16v4H4V5zM4 11h16v4H4v-4zM4 17h16v4H4v-4z' },
  SQL: {
    hex: '0EA5E9',
    stroke: true,
    path: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  },
  WebSocket: { hex: '06B6D4', stroke: true, path: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z' },
  OOP: { hex: '8B5CF6', stroke: true, path: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5' },
  'Collections Framework': { hex: '6366F1', stroke: true, path: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5' },
  'Exception Handling': { hex: 'F59E0B', stroke: true, path: 'M12 4l9 16H3L12 4zM12 10v4M12 17.5v.01' },
  Multithreading: { hex: '10B981', stroke: true, path: 'M4 6h16M4 12h10M4 18h14M18 10l3 2-3 2' },
  'Stream API': {
    hex: '0EA5E9',
    stroke: true,
    path: 'M3 8c3-3 6 3 9 0s6 3 9 0M3 16c3-3 6 3 9 0s6 3 9 0',
  },
  'VS Code': { hex: '007ACC', stroke: true, path: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16' },
  'Tesseract OCR': {
    hex: '3B82F6',
    stroke: true,
    path: 'M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8',
  },
  'Striver A2Z': {
    hex: 'F97316',
    stroke: true,
    path: 'M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2',
  },
  NPTEL: {
    hex: '1D4ED8',
    stroke: true,
    path: 'M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v5',
  },
  LinkedIn: {
    hex: '0A66C2',
    stroke: false,
    path: 'M5 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zM3.2 9h3.6v11.8H3.2V9zM9.4 9h3.4v1.6c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.5h-3.6v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9.4V9z',
  },
}

const iconMap = {
  Java: siOpenjdk,
  'Java 8': siOpenjdk,
  'Spring Boot': siSpringboot,
  'Spring MVC': siSpring,
  'Spring Security': siSpringsecurity,
  'REST APIs': custom['REST APIs'],
  JWT: siJsonwebtokens,
  Hibernate: siHibernate,
  JPA: custom.JPA,

  'React.js': siReact,
  'React Router': siReactrouter,
  JavaScript: siJavascript,
  HTML5: siHtml5,
  CSS3: siCss,

  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  SQL: custom.SQL,

  WebSocket: custom.WebSocket,
  Redis: siRedis,
  'Apache Kafka': siApachekafka,
  Docker: siDocker,

  OOP: custom.OOP,
  'Collections Framework': custom['Collections Framework'],
  'Exception Handling': custom['Exception Handling'],
  Multithreading: custom.Multithreading,
  'Stream API': custom['Stream API'],

  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Maven: siApachemaven,
  Eclipse: siEclipseide,
  'VS Code': custom['VS Code'],
  'Tesseract OCR': custom['Tesseract OCR'],

  LeetCode: siLeetcode,
  GeeksforGeeks: siGeeksforgeeks,
  'Striver A2Z': custom['Striver A2Z'],
  LinkedIn: custom.LinkedIn,
  Email: siGmail,
  Coursera: siCoursera,
  NPTEL: custom.NPTEL,
}

export function getTechIcon(name) {
  return iconMap[name] || { hex: '3B82F6', path: null, stroke: false }
}
