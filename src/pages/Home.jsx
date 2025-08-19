/* eslint-disable react/jsx-no-comment-textnodes */
import { Header } from "../components/Header";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import imgPerfil2 from "../assets/images/home/perfil-portfolio-2.jpg";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export function Home() {
  return (
    <div>
      <section className="flex flex-col h-screen">
        <Header />

        <main className="lg:h-full flex justify-center items-center bg-background ">
          <div className="flex flex-col lg:flex-row mx-5 lg:mx-0 my-20 lg:my-0 w-full items-center justify-around gap-20 lg:gap-0">
            <div className="flex flex-col gap-10 font-poppins max-w-2xl ">
              <div className="space-y-3">
                <h2 className="text-secondary text-3xl lg:text-5xl font-orbitron">
                  // Full-Stack Developer
                </h2>
                <h1 className="text-2xl lg:text-4xl font-semibold text-white">
                  Victor Alves Santana
                </h1>
              </div>

              <div className=" w-full">
                <p className="text-lg 2xl:text-xl font-medium text-white">
                  - Olá, me chamo Victor <span>👋🏻</span>.{" "}
                  <span className="text-secondary">
                    Desenvolvedor FullStack
                  </span>{" "}
                  com sólida base em HTML, CSS e JavaScript e forte
                  especialização em React, Next, Node, Tailwind e banco de
                  dados. Também possuo domínio de versionamento de código com
                  Git, prezando sempre por boas práticas de colaboração e
                  trabalho em equipe. <br />
                  Valorizo interfaces responsivas, boa usabilidade e código
                  limpo.{" "}
                  <span className="text-secondary">
                    Com foco na qualidade e no crescimento conjunto da equipe.
                  </span>{" "}
                  <br />
                  Estou sempre disposto a contribuir para projetos desafiadores
                  e cooperar com equipes dinâmicas.{" "}
                  <span className="text-secondary">
                    Entre em contato comigo e vamos construir algo juntos!
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-white">Minhas redes:</p>
                <a
                  href="https://www.linkedin.com/in/victor-alves-santana-111440196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-secondary text-3xl cursor-pointer hover:-translate-y-1 hover:scale-100 duration-300" />
                </a>
                <a
                  href="https://github.com/victorsantana03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-secondary text-3xl cursor-pointer hover:-translate-y-1 hover:scale-100 duration-300" />
                </a>
              </div>
              <div className="text-white space-y-3">
                <h3 className="text-lg font-bold">Principais tecnologias</h3>
                <div className="flex items-center gap-5 text-4xl">
                  <FaReact />
                  <SiNextdotjs />
                  <RiTailwindCssFill />
                </div>
              </div>
            </div>

            <div className="flex z-10">
              <img
                src={imgPerfil2}
                alt=""
                className="size-72 lg:size-80 xl:size-96 object-cover rounded-full shadow-2xl shadow-border_color animate-shake animate-infinite animate-duration-[8000ms] animate-ease-linear"
              />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
