/* eslint-disable react/jsx-no-comment-textnodes */
import { Header } from "../components/Header";
import Projeto from "../components/Projeto";
import { projects } from "../data/projects";

export function Projetos() {
  return (
    <section className="flex flex-col  min-h-0">
      <Header />
      <main className="h-full flex flex-col justify-center items-center bg-background font-poppins">
        <div className="flex justify-around items-center w-full my-20">
          <h1 className="text-white text-3xl lg:text-4xl font-bold font-orbitron">
            // Últimos <span className="text-secondary">Projetos</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg animate-pulse hidden md:flex">
            Confira alguns dos meus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 2xl:grid-cols-3 xl:grid-cols-2 2xl:gap-36 2xl:gap-y-24 mb-14">
          {projects.map((project) => (
            <Projeto
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              tecs={project.tecs}
              linkDeploy={project.linkDeploy}
              linkGH={project.linkGH}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
