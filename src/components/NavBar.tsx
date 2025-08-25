'use client';
import React, {use, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaPhone, FaCheck, FaMapMarked} from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion";

function NavBar() {

    const [copiado, setCopiado] = useState(false);

    const handleCopy =async  () => {
        try {
            await navigator.clipboard.writeText("+1 809-242-5777");
            setCopiado(true);
            setTimeout(() => setCopiado(false), 3000);
        }
        catch (error) {
            console.error("Error al copiar al portapapeles:", error);
        }
    };


  return (
    <header className="flex items-center justify-evenly p-2 text-[2rem] shadow-md bg-white z-20">

        <Link href="/" className="flex items-center space-x-2">
            <Image src="/DeMoyaGroupProfile.png" alt="De Moya Group Perfil" width={300} height={300} className="w-[5rem]"></Image>
            <h1 className="font-bold">De Moya Group & Asociados</h1>
        </Link>

        <nav>
            <ul className="flex space-x-4">
                

                <Link href="/solicitar-prestamos" className="group relative inline-block ">
                    <span className="transition-colors group-hover:text-[#DE3933]">
                        Solicitar Prestamo
                    </span>
                    <span
                        className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    />
                </Link>

                <span className="bg-[#DE3933] w-[.2rem]"/>

                <Link href="/nosotros" className="group relative inline-block">
                    <span className="transition-colors group-hover:text-[#DE3933]">
                        Nosotros
                    </span>
                    <span
                        className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    />
                </Link>

                <span className="bg-[#DE3933] w-[.2rem]"/>

                

                

                <Link href="/preguntas-frecuentes" className="group relative inline-block">
                    <span className="transition-colors group-hover:text-[#DE3933]">
                        Preguntas Frecuentes
                    </span>
                    <span
                        className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    />
                </Link>


                <span className="bg-[#DE3933] w-[.2rem]"/>

                
                <Link href="/quienes-somos" className="group relative inline-block">
                    <span className="transition-colors group-hover:text-[#DE3933]">
                        Quienes Somos
                    </span>
                    <span
                        className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    />
                </Link>
            </ul>
        </nav>

        <div className="flex items-center space-x-4 w-[20rem]">
            <button onClick={handleCopy} className="flex items-center hover:bg-gray-100 cursor-pointer justify-center w-full space-x-2 px-4 py-2 border rounded-lg">

                <AnimatePresence mode="wait">
                    {copiado ? (
                        <motion.div
                            key="copiado"
                            initial={{ opacity : 0 }}
                            animate={{ opacity : 1 }}
                            exit={{opacity : 0 }}
                            transition={{duration : 0.3 }}
                            className="flex items-center space-x-2 text-[#DE3933]"
                        >
                            <FaCheck/>
                            <span>Texto Copiado</span>
                        </motion.div>
                        
                    ) : (
                        <motion.div
                            key="telefono"
                            initial={{ opacity : 0 }}
                            animate={{ opacity : 1 }}
                            exit={{opacity : 0 }}
                            transition={{duration : 0.3 }} 
                            className="flex items-center space-x-2"
                        >
                            <FaPhone className="text-[1.5rem] rotate-90 text-[#DE3933]"/>
                            <span>+1 809-242-5777</span>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                
            </button>
        </div>
        <div className="flex items-center gap-8">
            <Link 
                href="https://maps.app.goo.gl/7h6yi6bqKBCsgfvL6"
                className="flex items-center gap-4 text-white text-[1.5rem] bg-[#DE3933] px-4 py-2 rounded-[1rem] hover:bg-[#c32a2a] transition-colors duration-300"
                target="_blank"
            >
                <div>
                    <FaMapMarked/>
                </div>

                <span>La Vega</span>

            </Link>
            <p className="flex flex-col text-[1rem]">
                <span>Calle Garcia Godoy Plaza Estella,</span> 
                <span>La Vega, Dominican Republic 41000</span>
            </p>
        </div>
    </header>
  );
}


export default NavBar;