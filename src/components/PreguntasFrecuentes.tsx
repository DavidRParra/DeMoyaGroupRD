'use client';
import React, {useState} from "react";

interface PreguntasFrecuentes {
    pregunta: string;
    respuesta: string;
}

interface PreguntasFrecuentesProps {
    preguntasRespuestas: PreguntasFrecuentes[];
}

function PreguntasFrecuentes({preguntasRespuestas}: PreguntasFrecuentesProps) {

    const [abierto, setAbierto] = useState<number | null>(null);

    const manejarClick = (index: number) => {
        setAbierto(abierto === index ? null : index);
    }

    return (
        <div className="flex flex-col items-center gap-8 px-8 py-16 space-y-6 w-full">
            
            <div className="w-[40%]">
                <h2 className="text-[3rem] font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
                {preguntasRespuestas.map((item , index ) => (
                    <div key={index} className="flex flex-col mb-6 w-full">

                        <button
                            onClick={() => manejarClick(index)}
                            className="
                                flex justify-between items-center 
                                w-full p-4 
                                text-[1.8rem] font-semibold text-left 
                                focus:outline-none
                                bg-gray-200">
                            <span>{item.pregunta}</span>
                            <span className="text-[2.8rem]">{abierto === index ? '-' : '+'}</span>
                        </button>
                        {abierto === index && (
                            <div className="mt-2 text-[1.6rem] text-gray-700">
                                <p className="text-gray-700">{item.respuesta}</p>
                            </div>
                        )}
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreguntasFrecuentes;