'use client';
import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaPhone, FaCheck, FaMapMarked, FaTimes, FaBars} from "react-icons/fa";
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

    const stado: string = "hidden";
    const [menuAbierto, setMenuAbierto] = useState(false);


  return (
    <header className="
        flex items-center md:justify-evenly justify-between
        p-2 text-[1.7rem] md:text-[2rem] 
        shadow-md bg-white z-20">

        <Link href="/" className="flex items-center space-x-2">
            <Image src="/DeMoyaGroupProfile.png" alt="De Moya Group Perfil" width={300} height={300} className="w-[5rem]"></Image>
            <h1 className="font-bold">De Moya Group & Asociados</h1>
        </Link>

        <div className="relative flex items-center justify-between">
            <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="p-2 text-[2rem] text-gray-800 focus:outline-none cursor-pointer flex lg:hidden items-center justify-center"
                aria-label="Menu"
            >
                {menuAbierto ? <FaTimes /> : <FaBars />}
            </button>

            <div className="hidden lg:flex items-center space-x-8">
                <nav>
                    <ul className="flex items-center space-x-4">
                        <Link href="/solicitar-prestamos" className="group relative inline-block">
                            <span className="transition-colors group-hover:text-[#DE3933]">
                                Solicitar Prestamo
                            </span>
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </Link>
                        <span className="bg-[#DE3933] w-[.2rem] h-5"/>
                        <Link href="/nosotros" className="group relative inline-block">
                            <span className="transition-colors group-hover:text-[#DE3933]">
                                Nosotros
                            </span>
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </Link>
                        <span className="bg-[#DE3933] w-[.2rem] h-5"/>
                        <Link href="/preguntas-frecuentes" className="group relative inline-block">
                            <span className="transition-colors group-hover:text-[#DE3933]">
                                Preguntas Frecuentes
                            </span>
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </Link>
                        <span className="bg-[#DE3933] w-[.2rem] h-5"/>
                        <Link href="/quienes-somos" className="group relative inline-block">
                            <span className="transition-colors group-hover:text-[#DE3933]">
                                Quienes Somos
                            </span>
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </Link>
                        <span className="bg-[#DE3933] w-[.2rem] h-5"/>
                        <Link href="/contactanos" className="group relative inline-block">
                            <span className="transition-colors group-hover:text-[#DE3933]">
                                Contactanos
                            </span>
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-[#DE3933] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </Link>
                    </ul>
                </nav>

                <div className="w-[20rem]">
                    <button onClick={handleCopy} className="flex items-center hover:bg-gray-100 cursor-pointer justify-center w-full space-x-2 px-4 py-2 border rounded-lg">
                        <AnimatePresence mode="wait">
                            {copiado ? (
                                <motion.div
                                    key="copiado"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center space-x-2 text-[#DE3933]"
                                >
                                    <FaCheck/>
                                    <span>Texto Copiado</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="telefono"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center space-x-2"
                                >
                                    <FaPhone className="text-[1.5rem] rotate-90 text-[#DE3933]"/>
                                    <span>+1 809-242-5777</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <Link 
                        href="https://maps.app.goo.gl/7h6yi6bqKBCsgfvL6"
                        className="flex items-center gap-4 text-white text-[1.5rem] bg-[#DE3933] px-4 py-2 rounded-[1rem] hover:bg-[#c32a2a] transition-colors duration-300"
                        target="_blank"
                    >
                        <FaMapMarked/>
                    </Link>
                    <p className="flex flex-col text-[1rem]">
                        <span>Calle Garcia Godoy Plaza Estella,</span> 
                        <span>La Vega, Dominican Republic 41000</span>
                    </p>
                </div>
            </div>

            <AnimatePresence>
                {menuAbierto && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-14 w-[22rem] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-6 z-50 lg:hidden"
                    >
                        <nav>
                            <ul className="flex flex-col space-y-4">
                                <Link href="/solicitar-prestamos" onClick={() => setMenuAbierto(false)} className="group relative inline-block">
                                    <span className="transition-colors group-hover:text-[#DE3933]">Solicitar Prestamo</span>
                                </Link>
                                <Link href="/nosotros" onClick={() => setMenuAbierto(false)} className="group relative inline-block">
                                    <span className="transition-colors group-hover:text-[#DE3933]">Nosotros</span>
                                </Link>
                                <Link href="/preguntas-frecuentes" onClick={() => setMenuAbierto(false)} className="group relative inline-block">
                                    <span className="transition-colors group-hover:text-[#DE3933]">Preguntas Frecuentes</span>
                                </Link>
                                <Link href="/quienes-somos" onClick={() => setMenuAbierto(false)} className="group relative inline-block">
                                    <span className="transition-colors group-hover:text-[#DE3933]">Quienes Somos</span>
                                </Link>
                                <Link href="/contactanos" onClick={() => setMenuAbierto(false)} className="group relative inline-block">
                                    <span className="transition-colors group-hover:text-[#DE3933]">Contactanos</span>
                                </Link>
                            </ul>
                        </nav>

                        <div className="flex items-center space-x-4 w-full">
                            <button onClick={handleCopy} className="flex items-center hover:bg-gray-100 cursor-pointer justify-center w-full space-x-2 px-4 py-2 border rounded-lg">
                                {copiado ? (
                                    <span className="text-[#DE3933] flex items-center space-x-2"><FaCheck/><span>Texto Copiado</span></span>
                                ) : (
                                    <span className="flex items-center space-x-2"><FaPhone className="text-[1.5rem] rotate-90 text-[#DE3933]"/><span>+1 809-242-5777</span></span>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Link 
                                href="https://maps.app.goo.gl/7h6yi6bqKBCsgfvL6"
                                className="flex items-center justify-center gap-4 text-white text-[1.2rem] bg-[#DE3933] w-full px-4 py-2 rounded-[1rem] hover:bg-[#c32a2a] transition-colors duration-300"
                                target="_blank"
                                onClick={() => setMenuAbierto(false)}
                            >
                                <FaMapMarked/>
                                <span>Localización</span>
                            </Link>
                            <p className="flex flex-col text-[0.9rem] text-center">
                                <span>Calle Garcia Godoy Plaza Estella,</span> 
                                <span>La Vega, Dominican Republic 41000</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
    </header>
  );
}


export default NavBar;