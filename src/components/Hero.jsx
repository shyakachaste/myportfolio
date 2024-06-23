import { HERO_CONTENT } from "../constants";
import heroPic from "../assets/chastepic.jpeg";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <motion.div
          style={{ y: y1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Iam Chaste
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-red-300 via-slate-500 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="my-1 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <img src={heroPic} alt="Hero Picture" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

