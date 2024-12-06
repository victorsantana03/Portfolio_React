import { Header } from "../components/Header"
import { FaGithub } from "react-icons/fa";
import projetoTwitter from "../assets/images/projects/Projeto_Twitter.png"
import projetoMaiz from "../assets/images/projects/Projeto_Maiz.png"
import projetoSlider from "../assets/images/projects/Projeto_Slider.png"

export function Projetos() {
    return (
        <section className="flex flex-col 2xl:h-screen min-h-0">
            <Header />
            <main className="h-full flex flex-col justify-center gap-10 items-center bg-background font-poppins">

                <div className="flex justify-around items-center w-full mt-14">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold font-orbitron">// Últimos <span className="text-secondary">Projetos</span></h1>
                    <p className="text-gray-300 font-medium text-lg animate-pulse hidden md:flex">Confira alguns dos meus projetos</p>
                </div>

                <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 gap-20 2xl:gap-48 mb-14">

                    <div className="border border-border_color shadow-shadow_border rounded-lg w-min">
                        <div className="w-80 lg:w-96">
                            <div className="flex max-w-full">
                                <img src={projetoMaiz} alt="" className="rounded-t-lg w-full" />
                            </div>
                            <div className="p-6 flex flex-col gap-4 text-white">
                                <h2 className="text-white text-2xl font-bold font-orbitron">Maiz - Comida Árabe</h2>
                                <p className="text-">Uma ideia de e-commerce envolvendo um restaurante de comida árabe. O site contém um sistema de carrinho que permite o usuário adicionar o pedido, ver a quantidade e descartar se necessário. Totalmente responsivo. </p>
                                <div className="flex items-center gap-3">
                                    <div className="border border-gray-400 rounded-md px-1">HTML</div>
                                    <div className="border border-gray-400 rounded-md px-1">Tailwind</div>
                                    <div className="border border-gray-400 rounded-md px-1">JavaScript</div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href="https://victorsantana03.github.io/maiz_ecommerce/" target="_blank" rel="noopener noreferrer">
                                        <button className="transition ease-in-out text-white bg-button shadow-shadow_button font-bold text-lg p-2 rounded-lg hover:opacity-90 hover:-translate-y-1 hover:scale-110 duration-300">Ver Projeto</button>
                                    </a>
                                    <a href="https://github.com/victorsantana03/maiz_ecommerce" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-secondary text-4xl cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-border_color shadow-shadow_border rounded-lg w-min">
                        <div className="w-80 lg:w-96">
                            <div>
                                <img src={projetoTwitter} alt="" className="rounded-t-lg" />
                            </div>
                            <div className="p-6 flex flex-col gap-4 text-white">
                                <h2 className="text-white text-2xl font-bold font-orbitron">Twitter em React</h2>
                                <p className="">Uma aplicação inspirada no Twitter. Nesse projeto foi utilizado API's para gerar fotos de perfis e imagens aleatórias simbolizando posts. Também foi utilizado UseState e UseEffect do React. Os Tweets são gerados por setInterval.  </p>
                                <div className="flex items-center gap-3">
                                    <div className="border border-gray-400 rounded-md px-1">Vite</div>
                                    <div className="border border-gray-400 rounded-md px-1">React</div>
                                    <div className="border border-gray-400 rounded-md px-1">Tailwind</div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href="https://victorsantana03.github.io/twitter-react/" target="_blank" rel="noopener noreferrer">
                                        <button className="transition ease-in-out text-white bg-button shadow-shadow_button font-bold text-lg p-2 rounded-lg hover:opacity-90 hover:-translate-y-1 hover:scale-110 duration-300">Ver Projeto</button>
                                    </a>
                                    <a href="https://github.com/victorsantana03/twitter-react" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-secondary text-4xl cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-border_color shadow-shadow_border rounded-lg w-min">
                        <div className="w-80 lg:w-96">
                            <div>
                                <img src={projetoSlider} alt="" className="rounded-t-lg" />
                            </div>
                            <div className="p-6 flex flex-col gap-4 text-white">
                                <h2 className="text-white text-2xl font-bold font-orbitron">Slider Cereais</h2>
                                <p className="text-">Um projeto mais simples focado em animações CSS. A idéia é um slider em carrosel com imagens de alguns cereais e suas respectivas informações. Um projeto pensado para uma loja cerealista.</p>
                                <div className="flex items-center gap-3">
                                    <div className="border border-gray-400 rounded-md px-1">HTML</div>
                                    <div className="border border-gray-400 rounded-md px-1">CSS</div>
                                    <div className="border border-gray-400 rounded-md px-1">JavaScript</div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href="https://victorsantana03.github.io/slider/" target="_blank" rel="noopener noreferrer">
                                        <button className="transition ease-in-out text-white bg-button shadow-shadow_button font-bold text-lg p-2 rounded-lg hover:opacity-90 hover:-translate-y-1 hover:scale-110 duration-300">Ver Projeto</button>
                                    </a>
                                    <a href="https://github.com/victorsantana03/slider" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-secondary text-4xl cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </main>

        </section>
    )
}
