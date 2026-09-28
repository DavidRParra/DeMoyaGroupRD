import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import Image from "next/image";

export default function PreguntasFrecuentesPage() {
    const preguntasRespuestas = [
        {
            pregunta: "¿Cómo puedo solicitar un préstamo?",
            respuesta: "Puedes solicitar un préstamo a través de nuestra página web o visitando nuestras oficinas.",
        },
        {
            pregunta: "¿Qué requisitos necesito para un préstamo?",
            respuesta: "Los requisitos varían según el tipo de préstamo, pero generalmente necesitas identificación, comprobante de ingresos y una solicitud completa.",
        },
        {
            pregunta: "¿Cuál es la tasa de interés?",
            respuesta: "Nuestras tasas de interés son competitivas y varían según el monto y el plazo del préstamo.",
        },
    ];

    return (
        <section className="flex flex-col items-center w-full min-h-screen p-4 md:p-8 gap-8">
            <div className="w-full max-w-[900px] flex flex-col items-center">
                <div className="w-full">
                    <PreguntasFrecuentes preguntasRespuestas={preguntasRespuestas} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-[1200px] pb-10">
                <div className="w-full max-w-[350px] md:max-w-[400px]">
                    <Image 
                        src="/image_ig1.png" 
                        alt="Publicacion de IG 1" 
                        width={400} 
                        height={700} 
                        className="shadow-2xl rounded-xl w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full max-w-[350px] md:max-w-[400px]">
                    <Image 
                        src="/image_ig2.png" 
                        alt="Publicacion de IG 2" 
                        width={400} 
                        height={700} 
                        className="shadow-2xl rounded-xl w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full max-w-[350px] md:max-w-[400px]">
                    <Image 
                        src="/image_ig3.png" 
                        alt="Publicacion de IG 3" 
                        width={400} 
                        height={700} 
                        className="shadow-2xl rounded-xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}