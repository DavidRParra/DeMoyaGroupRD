'use client';
import React, { useState } from "react";

interface PreguntaRespuesta {
    pregunta: string;
    respuesta: string;
}

interface PreguntasFrecuentesProps {
    preguntasRespuestas: PreguntaRespuesta[];
}

function PreguntasFrecuentes({ preguntasRespuestas }: PreguntasFrecuentesProps) {
    const [abierto, setAbierto] = useState<number | null>(null);

    const manejarClick = (index: number) => {
        setAbierto(abierto === index ? null : index);
    }

    return (
        <div className="flex flex-col items-center gap-6 px-4 md:px-8 py-10 w-full">
            <div className="w-full max-w-[800px] flex flex-col items-center">
                <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-red-500 mb-8 text-center">
                    Preguntas Frecuentes
                </h2>

                <div className="flex flex-col gap-4 w-full">
                    {preguntasRespuestas.map((item, index) => (
                        <div key={index} className="flex flex-col w-full shadow-sm rounded-lg overflow-hidden">
                            <button
                                onClick={() => manejarClick(index)}
                                className="
                                    flex justify-between items-center 
                                    w-full p-4 md:p-5
                                    text-[1.2rem] md:text-[1.6rem] font-semibold text-left 
                                    focus:outline-none
                                    bg-gray-200 hover:bg-gray-300 transition-colors
                                "
                            >
                                <span className="pr-4">{item.pregunta}</span>
                                <span className="text-[2rem] md:text-[2.5rem] font-bold">
                                    {abierto === index ? '-' : '+'}
                                </span>
                            </button>

                            {abierto === index && (
                                <div className="p-4 bg-gray-50 text-[1.1rem] md:text-[1.4rem] text-gray-700 border-t border-gray-200">
                                    <p>{item.respuesta}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PreguntasFrecuentes;