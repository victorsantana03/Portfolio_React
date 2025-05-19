import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiAxios } from "react-icons/si";

export function Habilidades() {
  return (
    <div className="gap-9 flex flex-col lg:w-3/6 font-poppins mb-10 2xl:mb-0">
      <h1 className="text-3xl lg:text-5xl text-white font-medium font-orbitron text-center">
        Habilidades
      </h1>

      <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-2 lg:gap-5 justify-center">
        <div className=" bg-primary flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6 rounded-xl h-min">
          <h1 className="text-secondary text-xl lg:text-3xl font-bold">
            Back-end
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 text-4xl lg:text-5xl text-white">
            <SiMongodb />
            <FaNode />
            <SiExpress />
            <SiAxios />
          </div>
        </div>
        <div className=" bg-primary flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6  rounded-xl h-min">
          <h1 className="text-secondary text-xl lg:text-3xl font-bold">
            Front-End
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 text-4xl lg:text-5xl text-white">
            <FaHtml5 />
            <FaCss3 />
            <FaJsSquare />
            <FaReact />
            <RiTailwindCssFill />
            <FaGitAlt />
          </div>
        </div>
        <div className=" bg-primary flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6 rounded-xl h-min">
          <h1 className="text-secondary text-xl lg:text-3xl font-bold">
            Tools
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 text-4xl lg:text-5xl text-white">
            <VscVscode />
            <SiVite />
            <FaGithub />
            <BiLogoNetlify />
            <FaFigma />
            <RiNotionFill />
          </div>
        </div>
      </div>
    </div>
  );
}
