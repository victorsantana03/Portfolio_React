import { Header } from "../components/Header";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import imgPerfil from "../assets/images/home/perfil-portfolio.jpg"


export function Home() {
    return (
        <div>
            <section className="flex flex-col h-screen">
                <Header />
               
                <main className="lg:h-full flex justify-center items-center bg-background ">
                    <div className="flex flex-col lg:flex-row mx-5 lg:mx-0 my-20 lg:my-0 w-full items-center justify-around gap-20 lg:gap-0">
                        <div className="flex flex-col gap-3 font-poppins max-w-2xl">
                            <h2 className="text-secondary text-3xl lg:text-5xl font-orbitron">// Front-End Developer</h2>
                            <h1 className="text-2xl lg:text-4xl font-semibold text-white">Victor Alves Santana</h1>
                            <p className="text-lg lg:text-xl text-white">Olá. Bem-vindo ao meu portfólio! Fique a vontade para me conhecer melhor.</p>
                            <div className="flex items-center gap-2">
                                <p className="font-bold text-white">Minhas redes:</p>
                                <a href="https://www.linkedin.com/in/victor-alves-santana-111440196/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-secondary text-3xl cursor-pointer hover:-translate-y-1 hover:scale-100 duration-300" /></a>
                                <a href="https://github.com/victorsantana03" target="_blank" rel="noopener noreferrer"><FaGithub className="text-secondary text-3xl cursor-pointer hover:-translate-y-1 hover:scale-100 duration-300" /></a>
                            </div>
                        </div>


                        <img src={imgPerfil} alt="" className="size-72 lg:size-80 xl:size-96 object-cover rounded-full shadow-2xl shadow-border_color animate-shake animate-infinite animate-duration-[8000ms] animate-ease-linear" />

                    </div>

                </main>
            </section>
        </div>
    )
}