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
        <section className="flex flex-col items-center w-full h-[100vh] p-4">
          <PreguntasFrecuentes
            preguntasRespuestas={preguntasRespuestas}
          />

          <div className="flex gap-6 ">
            <Image src="/image_ig1.png" alt="Publicacion de IG 1" width={400} height={700} className="shadow-2xl"></Image>

            <Image src="/image_ig2.png" alt="Publicacion de IG 1" width={400} height={700} className="shadow-2xl"></Image>

            <Image src="/image_ig3.png" alt="Publicacion de IG 1" width={400} height={700} className="shadow-2xl"></Image>
          </div>

        </section>
    );
}