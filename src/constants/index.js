import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a front-end developer with 3 years of experience. I build strong and scalable web apps using JavaScript, CSS, React, and TypeScript. I love turning ideas into real, user-friendly web applications. I'm passionate about coding and always eager to learn new things. I enjoy working in a team and solving problems together.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Founder & CEO",
    company: "Youth Code Camp",
    description: `I started and run Youth Code Camp. Our goal is to help young people learn about technology. We do this by creating projects and working together. We teach young people how to program, help them be creative, and show their projects. I lead the team to make sure we achieve our mission. We want to give young people chances to learn useful skills and help their communities. I manage the daily work, plan for the future, and try to grow our programs. I also work with schools, community groups, and businesses to make our programs reach more people and do more good.`,
    technologies: ["JS", "C++", "CSS", "HTML"],
  },
  {
    year: "March - 2023",
    role: "Competition participant",
    company: "Pico Ctf",
    description: `Participated in the PicoCTF cybersecurity competition as a member of Team called Cybers, ranking
                  4th in Rwanda and 16th in Africa. Collaborated with team members to solve various cybersecurity
                  challenges and enhance practical skills in the field. This position was voluntary.`,
    technologies: ["Penetration Testing", "Ethicak Hacking", "CTF"],
  },
  {
    year: "2023 - present",
    role: "Fronted Developer",
    company: "Audemy",
    description: ` I have been working as a frontend developer at Audemy, an educational platform for blind and visually impaired students. I help build and maintain the Audemy website, making sure it is easy to use and accessible for everyone. `,
    technologies: ["HTML", "CSS", "JS", "SASS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
