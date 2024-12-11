import { FaReact } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";


import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const content = <>
        <div className="lg:hidden fixed top-0 left-0 size-full bg-black bg-opacity-70 flex items-center justify-center z-40">
            <div className="bg-background px-10 py-5 list-none flex flex-col items-center gap-3 rounded-lg text-white font-orbitron font-medium">
                <Link spy={true} smooth={true} to='/'>
                    <li className="text-lg cursor-pointer transition duration-300 hover:text-secondary">

                        Home
                    </li>
                </Link>

                <Link spy={true} smooth={true} to='/sobre'>
                    <li className=" text-lg cursor-pointer transition duration-300 hover:text-secondary">

                        Sobre
                    </li>
                </Link>

                <Link spy={true} smooth={true} to='/projetos'>
                    <li className=" text-lg cursor-pointer transition duration-300 hover:text-secondary">

                        Projetos
                    </li>
                </Link>

                <Link spy={true} smooth={true} to='/contato'>
                    <li className="text-lg cursor-pointer transition duration-300 hover:text-secondary">

                        Curriculo
                    </li>
                </Link>
            </div>
        </div>
    </>

    return (

        <header className="sticky bg-primary z-20 font-orbitron font-bold shadow-3xl">

            <nav className="flex gap-4 justify-between items-center mx-5 lg:mx-36 py-7">

                <Link to='/'>
                    <div className="flex items-center gap-3">
                        <FaReact className="text-5xl text-secondary animate-spin animate-infinite animate-duration-[5000ms] animate-ease-linear animate-normal" />
                        <h1 className="text-3xl text-white">Victor<span className="text-secondary">.dev/</span></h1>
                    </div>
                </Link>

                <ul className="lg:flex gap-14 text-white hidden">
                    <Link spy={true} smooth={true} to='/'>
                        <li className="flex flex-col items-center text-lg cursor-pointer transition hover:border-b border-secondary">
                            <FaHome className="text-xl lg:text-2xl text-secondary" />
                            Home
                        </li>
                    </Link>

                    <Link spy={true} smooth={true} to='/sobre'>
                        <li className="flex flex-col items-center text-lg cursor-pointer hover:border-b border-secondary">
                            <IoPersonSharp className="text-xl lg:text-2xl" />
                            Sobre
                        </li>
                    </Link>

                    <Link spy={true} smooth={true} to='/projetos'>
                        <li className="flex flex-col items-center text-lg cursor-pointer hover:border-b border-secondary">
                            <FaCode className="text-xl lg:text-2xl" />
                            Projetos
                        </li>
                    </Link>

                    <Link spy={true} smooth={true} to='/contato'>
                        <li className="flex flex-col items-center text-lg cursor-pointer hover:border-b border-secondary">
                            <MdChat className="text-xl lg:text-2xl" />
                            Curriculo
                        </li>
                    </Link>
                </ul>

                <div className="lg:hidden">
                    <div>
                        {click && content}
                    </div>

                    <button onClick={handleClick} className="fixed top-10 right-5 z-50">
                        {click ? <FiAlignRight  className="text-3xl text-white cursor-pointer" /> : <FiAlignJustify className="text-3xl text-white cursor-pointer" />}
                    </button>
                </div>
            </nav>
        </header>



    )
}