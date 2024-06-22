
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
        <footer className=" text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Shyaka Chaste. All Rights Reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://github.com/shyakachaste" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://x.com/Shyakachaste" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaSquareXTwitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shyaka-chaste-982a32272/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/iamchaste.rw/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer