import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

import icon1 from "../assets/icons/softtek.png"
import icon2 from "../assets/icons/solera.png"
import icon3 from "../assets/icons/unops.jpg"

export const HERO_CONTENT = `A passionate Software Engineer from Mexico skilled in developing robust and scalable Web Applications. With 2+ years of hands-on experience, I have cultivated expertise in Front-end technologies like React and LitElement, alongside back-end frameworks like Spring, MySQL, SQL Server, and PostgreSQL. I aim to harness my passion and skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "Softtek / BBVA",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "LitElement", "Next.js", "mongoDB"],
    iconBg: "#82BC19",
    icon: icon1,
    points : [
      "Engaged in comprehensive training on LitElement, a Google library for web components, as requested by BBVA",
      "Learning best practices for secure development with LitElement and JavaScript to ensure robust and secure applications.",
      "Working towards certification to validate expertise in this technology"
    ]
  },
  {
    year: "2022 - 2023",
    role: "Software Development Engineer",
    company: "Solera Inc",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    iconBg: "#5A3582",
    icon: icon2,
    points : [
      "Spearheaded the development of new features, demonstrating proficiency in React, and Springboot.",
      "Used SQL Server for efficient database management, ensuring seamless data retrieval and manipulation.",
      "Actively participated in code reviews, maintaining high code quality standards and ensuring best practices.",
      "Resolved critical bugs promptly, demonstrating a proactive approach to problem-solving."
    ]
  },
  {
    year: "2021 - 2022",
    role: "Intern",
    company: "United Nations Office for Project Services",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    iconBg: "#4D8BC9",
    icon: icon3,
    points : [
      "Developed robust scripts for the automation of office processes, harnessing the power of Google Apps Script and JavaScript.",
      "Engineered automation solutions that significantly improved efficiency and streamlined day-to-day operations.",
      "Successfully implemented Google Apps Script to automate repetitive tasks, allowing for a more focused and productive work environment.",
      "Conceived and executed web application interfaces from inception, employing a blend of React, JavaScript, CSS, and HTML to ensure seamless and engaging user experiences created scripts for the automation of office processes. (Google App Script - JavaScript)"
    ]
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Search Character App",
    image: project2,
    description:
      "An application that implements information retrieval through an API for manipulation and communication between web components by performing a search and displaying it.",
    technologies: ["HTML", "CSS", "JavaScript", "LitElement"],
  },
  {
    title: "Music Player Web App",
    image: project1,
    description:
      "A web application that allows you to play music, download it and control the volume on the interface.",
    technologies: ["HTML", "SASS", "JavaScript"],
  },
  {
    title: "Speech to text Web App",
    image: project4,
    description:
      "An experimental application that allows us to pass information from voice to text and also reads what we write. ",
    technologies: ["HTML", "SASS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
