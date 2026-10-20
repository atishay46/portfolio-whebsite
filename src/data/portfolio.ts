// Edit all portfolio content here - layout components read from this file.
export const personalInfo = {
  name: "Atishay Jain",
  initials: "AJ",
  role: "Computer Science & Engineering Student · Software Developer",
  tagline: "Building thoughtful web experiences with code and curiosity.",
  email: "atishayjain6245@gmail.com",
  emailHref: "https://mail.google.com/mail/?view=cm&fs=1&to=atishayjain6245@gmail.com",
  phone: "+91 9021585776",
  location: "Nagpur, India",
  github: "https://github.com/atishay46",
  linkedin: "https://linkedin.com/in/atishayjain06",
  portfolio: "https://atipersonalweb.vercel.app/",
  leetcode: "https://leetcode.com/u/AtishayJain6/",
  resume: "https://drive.google.com/file/d/15RZWEMrc88cisc2EdjEOCXVSoq8hNZZJ/view?usp=sharing",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Shri Ramdeobaba College of Engineering and Management",
    cgpa: "8.14",
  },
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: "github" },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: "linkedin" },
  { name: "Email", href: personalInfo.emailHref, icon: "mail" },
] as const;

export const about = {
  statement: "Building thoughtful digital experiences with code and curiosity.",
  paragraphs: [
    "I am a Computer Science and Engineering student at Shri Ramdeobaba College of Engineering and Management with a CGPA of 8.14.",
    "I enjoy building web applications and working across frontend and backend technologies. My interests include full-stack development, web applications, cloud technologies, and software engineering.",
    "I have worked with React.js, JavaScript, TypeScript, Node.js, Express.js, FastAPI, MongoDB, MySQL, Supabase, Docker, AWS, Git, and related technologies.",
    "I also enjoy strengthening my software engineering fundamentals through Data Structures and Algorithms and hands-on projects.",
  ],
};

export const experience = [
  {
    company: "Acencore",
    role: "SDE Intern",
    duration: "Aug - Oct 2025",
    orgLink: "https://github.com/scoutabl/scoutabl_frontend",
    summary:
      "Developed responsive, production-ready interfaces from Figma designs using React.js and JavaScript, while integrating REST APIs, resolving frontend-backend issues, and collaborating with the Tech Lead to improve code quality.",
    points: [
      "Translated Figma designs into responsive, production-ready React.js interfaces.",
      "Integrated and tested RESTful APIs with Postman, resolving frontend–backend integration issues.",
      "Delivered features with reusable components and backend services within project timelines.",
      "Used Git and GitHub for version control and took part in code reviews with the Tech Lead.",
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Postman", "Git", "GitHub", "Figma"],
  },
];

export const projects = [
  {
    name: "EcoSpectra",
    subtitle: "Plastic Pollution Detection System",
    description:
      "Full-stack platform for plastic waste detection, reporting, and environmental monitoring - integrating computer vision, GIS-based tracking, pollution indices, analytics, and automated reporting.",
    tech: ["React.js", "FastAPI", "Python", "Computer Vision", "GIS"],
    live: "https://ecospectra.vercel.app/",
    github: "https://github.com/atishay46", // replace with repo URL
  },
  {
    name: "Smart Reading Shelf",
    subtitle: "Reading management platform",
    description:
      "Full-stack reading management platform with JWT authentication, REST APIs, an LRU-based reading-list mechanism, and a Dockerized backend.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
    live: "https://readzy-read.vercel.app/",
    github: "https://github.com/atishay46",
  },
  {
    name: "TechFest Website",
    subtitle: "Event platform",
    description:
      "Responsive event platform with dynamic registration workflows, Supabase data management, and automated confirmation emails.",
    tech: ["React.js", "Supabase", "EmailJS", "Vercel"],
    live: "https://axis2025.vercel.app/",
    github: "https://github.com/atishay46",
  },
  {
    name: "Personal Portfolio",
    subtitle: "Developer portfolio",
    description:
      "Personal developer portfolio showcasing projects, technical skills, experience, and professional profile.",
    tech: ["React.js", "Tailwind CSS", "Vercel", "GitHub"],
    live: "https://atipersonalweb.vercel.app/",
    github: "https://github.com/atishay46",
  },
];

export const skillsPrimary = [
  { category: "Web Development", items: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design", "Figma"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "Postman", "EmailJS"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Mongoose"] },
  { category: "Programming", items: ["Java", "Python", "C++", "TypeScript"] },
];

export const skillsSecondary = [
  { category: "Core CS", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Linux"] },
  { category: "Tools & Cloud", items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "API Testing", "SDLC"] },
  { category: "Other", items: ["Three.js", "Spline", "UI/UX", "AI Tools", "Cloud Technologies"] },
];

export const highlights = [
  { label: "Certification", title: "AWS Cloud Essentials Certification", detail: "AWS Skill Builder" },
  { label: "Hackathon", title: "Final Round - Web Reshape Hackathon", detail: "VNIT Nagpur, 2025" },
  { label: "Community", title: "Nagpur Toastmasters Club", detail: "Public speaking and interpersonal communication" },
];
