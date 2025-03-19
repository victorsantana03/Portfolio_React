import { Header } from "../components/Header"
import Projeto from "../components/Projeto";


export function Projetos() {
    return (
        <section className="flex flex-col  min-h-0">
            <Header />
            <main className="h-full flex flex-col justify-center items-center bg-background font-poppins">

                <div className="flex justify-around items-center w-full my-20">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold font-orbitron">// Últimos <span className="text-secondary">Projetos</span></h1>
                    <p className="text-gray-300 font-medium text-lg animate-pulse hidden md:flex">Confira alguns dos meus projetos</p>
                </div>
                
                <div className="grid grid-cols-1 gap-20 2xl:grid-cols-3 xl:grid-cols-2 2xl:gap-36 2xl:gap-y-24 mb-14">
                    
                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_Maiz.png" 
                     title="Maiz - Comida Árabe" 
                     description="Uma ideia de e-commerce envolvendo um restaurante de comida árabe. O site contém um sistema de carrinho que permite o usuário adicionar o pedido, ver a quantidade e descartar se necessário. Totalmente responsivo." 
                     tecs={["HTML", "Tailwind", "JavaScript"]} 
                     linkDeploy="https://victorsantana03.github.io/maiz_ecommerce/"
                     linkGH="https://github.com/victorsantana03/maiz_ecommerce" 
                    />

                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_Brastecno.png" 
                     title="Brastecno Landing Page" 
                     description="Meu primeiro projeto real feito para uma empresa de assistência de eletrodomésticos. Uma landing page feito em dupla utilizando git para versionamento do código. Totalmente responsivo e estilizado em Tailwind." 
                     tecs={["Tailwind", "HTML", "JavaScript"]} 
                     linkDeploy="https://www.brastecnoguarulhos.com.br/"
                     linkGH="https://github.com/victorsantana03/Brastecno-LandingPage"  
                    />

                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_Twitter.png" 
                     title="Twitter em React" 
                     description="Uma aplicação inspirada no Twitter. Nesse projeto foi utilizado API's para gerar fotos de perfis e imagens aleatórias simbolizando posts. Também foi utilizado UseState e UseEffect do React. Os Tweets são gerados por setInterval." 
                     tecs={["Vite", "React", "Tailwind"]} 
                     linkDeploy="https://victorsantana03.github.io/twitter-react/"
                     linkGH="https://github.com/victorsantana03/twitter-react"  
                    />

                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_Slider.png" 
                     title="Slider Cereais" 
                     description="Um projeto mais simples focado em animações CSS. A idéia é um slider em carrosel com imagens de alguns cereais e suas respectivas informações. Um projeto pensado para uma loja cerealista." 
                     tecs={["HTML", "CSS", "JavaScript"]} 
                     linkDeploy="https://victorsantana03.github.io/slider/"
                     linkGH="https://github.com/victorsantana03/slider"  
                    />

                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_MultistepForm.png" 
                     title="Formulário Multistep" 
                     description="Um formulário de avaliação para e-commerce com múltiplas etapas feito em React. Pratiquei conceitos essenciais de React realizando esse projeto, como persistência de dados entre componentes." 
                     tecs={["React", "CSS", "JavaScript", "Vite"]} 
                     linkDeploy="https://victorsantana03.github.io/multistep-form-react/"
                     linkGH="https://github.com/victorsantana03/multistep-form-react"  
                    />

                    <Projeto 
                     imgUrl="/public/image-projects/Projeto_Spotify.png" 
                     title="Spotify em React" 
                     description="Uma cópia do Spotify feita em React utilizando tecnologias importantes dessa biblioteca. Utilizei React-Router-Dom para fazer a navegação entre páginas, Props para passagem de dados, renderização condicional e outros..." 
                     tecs={["React", "CSS", "JavaScript", "Vite"]} 
                     linkGH="https://github.com/victorsantana03/Spotify-React"  
                    />

                </div>


            </main>

        </section>
    )
}
