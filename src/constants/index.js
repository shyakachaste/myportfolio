import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

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
    title: "Blog With Chaste",
    image: project1,
    description:
      "I made a blog where you can read about TypeScript, ReactJS, NextJS, TailwindCSS, Supabase, Supabase Auth, and ShadCN UI. Join me and boost your skills with easy-to-follow guides and practical advice.",
    technologies: ["Typescipt", "Next.js", "React.js", "Tailwind.css", "Supabase"],
    visit: "https://github.com/shyakachaste/Blog-With-Chaste",
    source: "https://www.shyakachaste.tech/"
  },
  {
    title: "Musician Website",
    image: project2,
    description:
      "The website is designed to provide fans and visitors with a seamless and immersive experience to explore Element's music, biography, and upcoming events.",
    technologies: ["HTML", "CSS", "JS"],
    visit: "https://github.com/shyakachaste/musician-website",
    source: "https://eleeeh.netlify.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "My personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["TailWind CSS", "React","JS"],
    visit: "https://github.com/shyakachaste/myportfolio",
    source: "http://shyakachaste.me/"
  },
  {
    title: "Face Detection",
    image: project4,
    description:
      " C++ program for face detection using OpenCV. The program captures video from a camera and uses Haar cascades for face detection.",
    technologies: ["C++", "OpenCV"],
    visit: "https://github.com/shyakachaste/facedetection",
    source: ""

  },
  {
    title: "Inspire Mate Bot",
    image: project5,
    description:
      " Inspire Mate Bot is a Discord bot designed to bring inspiration, motivation, and positive vibes to your Discord server.",
    technologies: ["Python", "Flask"],
    visit: "https://github.com/shyakachaste/InspireMateBot",
    source: ""

  },
  {
    title: "Youth Code Camp",
    image: project6,
    description:
      "Welcome to the Youth Code Camp Hackathon! This event is designed to bring together young programmers for a day of collaborative coding and innovation.",
    technologies: ["CSS", "JS" , "HTML", "SASS"],
    visit: "https://github.com/Youth-codecamp/YouthCodeCampHackaton",
    source: "https://youthcodecamp.net/"

  },
];

export const CONTACT = {
  address: "Jabana, Gasabo , Kigali, Rwanda",
  phoneNo: "+250 789651172",
  email: "shyakachaste1@gmail.com",
};
