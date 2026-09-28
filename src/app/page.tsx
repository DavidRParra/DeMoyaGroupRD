import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen py-10 md:py-0">

      {/* Sección del Marquee / Carrusel de ayudas */}
      <FadeIn>
        <section className="relative overflow-hidden bg-gray-200 py-8 md:py-12 mt-[-2rem] md:mt-[-5rem]">
          <h2 className="w-full text-center mb-6 md:mb-[3rem] text-[#DE3933] font-semibold text-[2rem] md:text-[3rem] px-4">
            Nuestros Prestamos te Ayudan en
          </h2>
          <div className="w-full overflow-hidden">
            <div className="flex gap-6 md:gap-12 animate-marquee">
              {[
                { src: "/hipoteca.jpg", text: "Saldar una Hipoteca" },
                { src: "/NEGOCIO2.jpg", text: "Negocio" },
                { src: "/viaje.jpg", text: "Viejes" },
                { src: "/emergencia medica.jpg", text: "Emergencia medica " },
                { src: "/deuda.jpg", text: "Deudas" },
                { src: "/casa.jpg", text: "Compra de vivienda " },
                { src: "/EDUCACION.jpg", text: "Educacion" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center min-w-[18rem] md:min-w-[25rem] flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={`Imagen ${i + 1}`}
                    width={250}
                    height={160}
                    className="rounded-lg shadow-md w-[200px] md:w-[250px] h-auto object-cover"
                  />
                  <p className="mt-4 text-gray-700 font-medium text-center text-[1.2rem] md:text-[1.5rem]">
                    {item.text}
                  </p>
                </div>
              ))}

              {[
                { src: "/hipoteca.jpg", text: "Saldar una Hipoteca" },
                { src: "/NEGOCIO2.jpg", text: "Negocio" },
                { src: "/viaje.jpg", text: "Viejes" },
                { src: "/emergencia medica.jpg", text: "Emergencia medica " },
                { src: "/deuda.jpg", text: "Deudas" },
                { src: "/casa.jpg", text: "Compra de vivienda " },
                { src: "/EDUCACION.jpg", text: "Educacion" },
              ].map((item, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex flex-col items-center min-w-[18rem] md:min-w-[25rem] flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={`Imagen ${i + 1}`}
                    width={250}
                    height={160}
                    className="rounded-lg shadow-md w-[200px] md:w-[250px] h-auto object-cover"
                  />
                  <p className="mt-4 text-gray-700 font-medium text-center text-[1.2rem] md:text-[1.5rem]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Sección de Beneficios / Negocio */}
      <FadeIn>
        <section className="flex flex-col items-center justify-center w-full px-4 md:px-0 py-8">
          <h2 className="font-bold text-center text-gray-900 text-[1.5rem] md:text-[2rem] mb-8 md:mb-12 my-6">
            Haz crecer tu negocio con nuestros préstamos a bajo interés
          </h2>

          {/* Se apila en columna en móviles (w-full) y pasa a fila de 3 columnas en pantallas md en adelante */}
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-8 md:gap-[2%] justify-center items-stretch md:items-start mb-12">

            <div className="w-full md:w-[30%] border-b-2 md:border-b-0 md:border-r-[.2rem] border-red-500 pb-6 md:pb-0 md:pr-10">
              <h3 className="font-semibold mb-3 text-red-600 text-[1.3rem] md:text-[1.5rem]">
                Tasas de interés bajas:
              </h3>
              <p className="text-gray-600 text-[1.1rem] md:text-[1.3rem]">
                Te ofrecemos las mejores condiciones del mercado para que puedas acceder
                al capital que necesitas sin pagar de más.
              </p>
            </div>

            <div className="w-full md:w-[35%] px-0 md:px-10 border-b-2 md:border-b-0 pb-6 md:pb-0 border-red-500">
              <h3 className="font-semibold mb-3 text-red-600 text-[1.3rem] md:text-[1.5rem]">
                Requisitos flexibles:
              </h3>
              <p className="text-gray-600 text-[1.1rem] md:text-[1.3rem]">
                No te pedimos avales ni trámites complicados, solo lo necesario para evaluar tu solicitud.
              </p>
            </div>

            <div className="w-full md:w-[30%] md:border-l-[.2rem] border-red-500 md:pl-10">
              <h3 className="font-semibold mb-3 text-red-600 text-[1.3rem] md:text-[1.5rem]">
                Atención personalizada:
              </h3>
              <p className="text-gray-600 text-[1.1rem] md:text-[1.3rem]">
                Te acompañamos en todo el proceso y te asesoramos para que obtengas el préstamo
                que mejor se adapte a tus necesidades.
              </p>
            </div>

          </div>
        </section>
      </FadeIn>
      
      {/* Sección de Enlaces Rápidos / Historias */}
      <div className="flex flex-wrap gap-6 md:gap-[3rem] text-[1.2rem] md:text-[2rem] justify-center items-center my-6 md:my-[2rem] px-4">
        <Link href="/solicitar-prestamos" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_1.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[7rem] md:w-[10rem] h-auto object-cover rounded-full shadow-md"
          />
          <p>Prestamos</p>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/18025552499440341/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[7rem] md:w-[10rem] h-auto object-cover rounded-full shadow-md"
          />
          <p>Educacion</p>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/17934762872817568/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[7rem] md:w-[10rem] h-auto object-cover rounded-full shadow-md"
          />
          <p>Diferencia</p>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/18048475378957376/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[7rem] md:w-[10rem] h-auto object-cover rounded-full shadow-md"
          />
          <p>Quienes Somos</p>
        </Link>
      </div>

    </main>
  );
}