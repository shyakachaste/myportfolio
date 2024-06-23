import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiSass, SiNextdotjs, SiPython, SiCplusplus, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, key: "react" },
  { icon: <SiTypescript className="text-7xl text-blue-500" />, key: "typescript" },
  { icon: <SiTailwindcss className="text-7xl text-teal-500" />, key: "tailwind" },
  { icon: <SiSass className="text-7xl text-pink-500" />, key: "sass" },
  { icon: <SiNextdotjs className="text-7xl" />, key: "nextjs" },
  { icon: <SiPython className="text-7xl text-yellow-500" />, key: "python" },
  { icon: <SiCplusplus className="text-7xl text-blue-600" />, key: "cplusplus" },
  { icon: <SiJavascript className="text-7xl text-yellow-400" />, key: "javascript" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const CodingSkills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl">Coding Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.key}
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodingSkills;
