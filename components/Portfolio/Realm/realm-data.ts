import { projects } from '@/constants/constants';

export const artifacts = [
  { title: 'Webpulse', type: 'Monitoring / Full stack', image: '/images/webpulse-site.png', description: 'A monitoring interface backed by Go workers, authenticated team routes, and PostgreSQL response history. The public link is the frontend demo; backend availability is separate.', tools: ['React', 'TypeScript', 'Go / Gin', 'PostgreSQL'], visit: 'https://webpulse-livid.vercel.app/', source: '' },
  { title: 'For Loop', type: 'Consultancy / Web', image: '/images/forloop-site.png', description: 'A multi-page data and digital consultancy website, with responsive interfaces and video-based brand animation.', tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'], visit: 'https://for-loop-rust.vercel.app/', source: '' },
  { title: 'Detroit Store', type: 'Commerce / Web', image: '/images/detroit store.png', description: 'A commerce interface with product browsing and a storefront experience.', tools: [], visit: 'https://ecommerce-store-pied-psi.vercel.app/', source: '' },
  ...projects.map(project => ({ title: project.title, type: 'Web / Selected creation', image: project.image, description: project.id === 1 ? 'A responsive business website for Bozeam Construction. Built with React Router, TypeScript, and Tailwind CSS.' : project.id === 11 ? 'An education-focused web platform built with Next.js, TypeScript, and Shadcn UI.' : project.id === 4 ? 'A full-stack community application for sharing memories from anime conventions, built with React, Express, and MongoDB.' : project.description, tools: project.tags, visit: project.visit, source: project.source })),
  { title: 'Roshar', type: 'Desktop / Personal artifact', image: '', description: 'A C++ and Qt application for Stormlight Archive quotes, with timed updates, system tray integration, and display settings. Where the books and the code meet.', tools: ['C++', 'Qt', 'Desktop'], visit: '', source: 'https://github.com/D3troit98/roshar' },
  { title: 'Go feed API', type: 'Backend / Public source', image: '', description: 'User, feed, and feed-follow handlers, PostgreSQL migrations, user-scoped queries, and sqlc-generated database access.', tools: ['Go', 'PostgreSQL', 'Chi', 'sqlc'], visit: '', source: 'https://github.com/D3troit98/go-rrsagg' },
  { title: 'ImageEditor', type: 'Desktop / Public source', image: '', description: 'A Qt image editor with file opening and saving, zoom controls, and an OpenCV blur operation wired into the interface.', tools: ['C++', 'Qt', 'OpenCV'], visit: '', source: 'https://github.com/D3troit98/ImageEditor' },
];

export const orders = [
  { name: 'The visible', subtitle: 'Interfaces & applications', sigil: 'I', description: 'The point where a system meets a person. Thoughtful interfaces, reusable components, and considered interactions.', tools: ['HTML', 'CSS', 'React', 'Next.js', 'Nuxt', 'React Native', 'Expo', 'Qt / QML', 'Tailwind CSS', 'Sass', 'shadcn/ui', 'Framer Motion'] },
  { name: 'The connected', subtitle: 'Backend & data', sigil: 'II', description: 'The rules beneath the surface. APIs, authentication, persistence, and the paths data takes between systems.', tools: ['Django', 'Node.js', 'Express', 'Gin', 'PostgreSQL', 'SQL', 'MongoDB', 'sqlx', 'sqlc', 'GraphQL', 'HyGraph', 'Sanity'] },
  { name: 'The foundations', subtitle: 'Languages', sigil: 'III', description: 'A growing vocabulary, from my first C++ programs to Rust and backend engineering. Some are daily tools; others come from earlier explorations.', tools: ['C', 'C++', 'BASIC', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Java', 'C#'] },
  { name: 'The instruments', subtitle: 'Tools & connected systems', sigil: 'IV', description: 'Building beyond the browser: desktop software, cloud integrations, deployment tools, and the systems that connect them.', tools: ['Git', 'Vite', 'Webpack', 'ESLint', 'OpenCV', 'AWS IoT Core', 'Google Cloud', 'OAuth / PKCE'] },
];

export const destinations = [
  { id: 'realm-arrival', name: 'Arrival', subtitle: 'The Shattered Plains' },
  { id: 'realm-archive', name: 'Creations', subtitle: 'The Archive' },
  { id: 'realm-orders', name: 'Abilities', subtitle: 'The Celestial Workshop' },
  { id: 'realm-oaths', name: 'My story', subtitle: 'The Oathstones' },
  { id: 'realm-beacon', name: 'Contact', subtitle: 'The Beacon' },
];
