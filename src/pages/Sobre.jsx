import { Habilidades } from "../components/Habilidades"
import { Header } from "../components/Header"

export function Sobre() {
    return (
        <section className="flex flex-col h-screen">
            <Header />
            <main className="2xl:h-full flex flex-col justify-around items-center bg-background">

                <div className="flex flex-col lg:flex-row lg:my-20 mx-5 lg:mx-0 gap-10 lg:gap-0 text-white items-center justify-around font-poppins py-20 2xl:py-0">
                    <div className=" flex flex-col gap-9 lg:w-2/5">
                        <h1 className="font-orbitron text-3xl lg:text-5xl font-medium">// Quem sou eu?</h1>
                        <p className="text-xl lg:text-3xl font-medium hidden 2xl:block"><span className="text-secondary">Desenvolvedor Front-End</span> formado em <span className="text-secondary">Análise e Desenvolvimento de Sistemas</span></p>
                    </div>
                    <div className="lg:w-2/5">
                        <p className="text-lg 2xl:text-xl font-medium">- Olá, me chamo Victor <span>👋🏻</span>. <span className="text-secondary">Desenvolvedor Front-End</span> e graduado em ADS na Instituição de Ensino Eniac.
                            Venho me desenvolvendo na área de programação e adquirindo skills essênciais para seguir a carreira. <br />
                            Tenho me aprofundado em tecnologias que me permitem criar interfaces dinâmicas e funcionais como React, Node, MongoDb, Javascript e linguagens BackEnd. <span className="text-secondary">Pretendo me tornar FullStack.</span> <br />
                             Estou sempre disposto a contribuir para projetos desafiadores e cooperar com equipes dinâmicas. <span className="text-secondary">Entre em contato comigo e vamos construir algo juntos!</span></p> 
                    </div>
                </div>


                <Habilidades />

            </main>

        </section>
    )
}
