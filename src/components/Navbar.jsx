import logo from "../assets/mylogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-2 w-10"
          src={logo}
          alt="logo"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <motion.a
          href="https://www.linkedin.com/in/shyaka-chaste-982a32272/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/shyakachaste"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://x.com/Shyakachaste"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaSquareXTwitter />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/iamchaste.rw/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

