/*Alterar imagem nied para offline*/

import Link from "next/link"
import { useState } from "react"
import { LuMenu } from "react-icons/lu"

export default function Navbar(){

    const [navbar, setNavbar] = useState(false);
    
    return(
        <>
            <nav className="bg-neutral-50 shadow-md py-1 sm:py-2">
                <div className="relative">
                    <div className="sm:absolute -top-1 flex items-center justify-between my-2">
                        <Link href="/" className="ml-7 py-1 sm:ml-20">
                            <img 
                                src="https://player.ggte.unicamp.br/img/logo-novo-nied-transparente.png" 
                                className="h-8 sm:h-10" alt="NIED Logo"
                            />
                        </Link>

                        <button 
                            className="sm:hidden mr-7 sm:mr-11 justify-self-center"
                            onClick={() => {
                                setNavbar(!navbar) 
                                console.log(navbar)
                            }}
                        >
                            <LuMenu className="text-gray-700 text-3xl"/>

                        </button>
                    </div>

                    <div className={`sm:block ${
                        navbar ? "block" : "hidden"
                        }`}>

                        <ul className="sm:flex sm:justify-end mr-11 font-medium font-bold text-gray-600">
                            <li className=" hover:text-blue-900 p-4">               
                                <Link href="/">Home</Link>
                            </li>

                            <li className=" hover:text-blue-900 p-4">
                                <Link href="/newresearch">Novo pesquisador</Link>
                            </li>

                            <li className=" hover:text-blue-900 p-4">
                                <Link href="/login">Sign out</Link>
                            </li>
                         </ul>   
                    </div>
                                    
                </div>
            </nav>
        </>
    )
}