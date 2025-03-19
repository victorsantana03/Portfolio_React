import { FaGithub } from "react-icons/fa";

const Projeto = ({imgUrl, title, description, tecs, linkGH, linkDeploy}) => {
    return (
        <div>
            <div className="border border-border_color shadow-shadow_border rounded-lg w-min">
                <div className="w-80 h-min xl:h-[550px] lg:w-96">
                    <div className="flex max-w-full">
                        <img src={imgUrl} alt="" className="rounded-t-lg w-full" />
                    </div>
                    <div className="p-6 flex flex-col gap-4 text-white">
                        <h2 className="text-white text-2xl font-bold font-orbitron">{title}</h2>
                        <p>{description}</p>
                        <div className="flex items-center gap-3">
                            {tecs.map((tec, index) =>(
                                <div key={index} className="border border-gray-400 rounded-md px-1">{tec}</div>)) 
                            }
                        </div>
                        <div className="flex gap-5 items-center">
                            <a href={linkDeploy} target="_blank" rel="noopener noreferrer">
                                <button className="transition ease-in-out text-white bg-button shadow-shadow_button font-bold text-lg p-2 rounded-lg hover:opacity-90 hover:-translate-y-1 hover:scale-110 duration-300">Ver Projeto</button>
                            </a>
                            <a href={linkGH} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-secondary text-4xl cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projeto
