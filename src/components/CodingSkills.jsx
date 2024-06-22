import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const CodingSkills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Coding Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine  className="text-7xl text-cyan-400"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript  className="text-7xl text-blue-500"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss  className="text-7xl text-teal-500"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSass  className="text-7xl text-pink-500"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNextdotjs  className="text-7xl"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPython  className="text-7xl text-yellow-500"/>
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus  className="text-7xl text-blue-600"/>
          </div>
          
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript  className="text-7xl text-yellow-400"/>
          </div>
        </div>
    </div>
  );
};

export default CodingSkills