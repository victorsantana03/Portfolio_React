import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiVite,
  SiExpress,
  SiAxios,
} from "react-icons/si";
import {
  FaNode,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";

export function Habilidades() {
  return (
    <div className="gap-9 flex flex-col lg:w-3/6 font-poppins mb-10 2xl:mb-0">
      <h1 className="text-3xl lg:text-5xl text-white font-medium font-orbitron text-center">
        Habilidades
      </h1>

      <div className="grid grid-cols-3 xl:grid-cols-1 xl:grid-rows-3 gap-2 lg:gap-5 justify-center">
        <div className=" bg-primary flex flex-col xl:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6 rounded-xl h-min">
          <h1 className="text-secondary text-xl lg:text-2xl text-center font-bold">
            Back-end
          </h1>
          <div className="flex flex-col xl:flex-row gap-4 text-4xl lg:text-5xl text-white">
            <SiMongodb />
            <FaNode />
            <SiExpress />
            <SiAxios />
            <SiPrisma />
            <SiPostgresql />
          </div>
        </div>
        <div className=" bg-primary flex flex-col xl:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6  rounded-xl h-min">
          <h1 className="text-secondary text-center text-xl lg:text-2xl font-bold">
            Front-End
          </h1>
          <div className="flex flex-col xl:flex-row gap-4 text-4xl lg:text-5xl text-white">
            <FaHtml5 />
            <FaCss3 />
            <FaJsSquare />
            <FaReact />
            <RiTailwindCssFill />
            <SiNextdotjs />
            <SiTypescript />
            <FaGitAlt />
          </div>
        </div>
        <div className=" bg-primary flex flex-col xl:flex-row items-center gap-4 lg:gap-8 px-2 lg:px-8 py-4 lg:py-6 rounded-xl h-min">
          <h1 className="text-secondary text-xl lg:text-2xl font-bold">
            Tools
          </h1>
          <div className="flex flex-col xl:flex-row gap-4 text-4xl lg:text-5xl text-white">
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
