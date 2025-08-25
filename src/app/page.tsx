import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";



export default function Home() {
  

  return (
    <main className="flex flex-col justify-center h-[100vh]">

      <FadeIn>
        <section className="relative overflow-hidden text-[1.5rem] bg-gray-200 py-12 mt-[-5rem]">
          <h2 className="w-full text-center mb-[3rem] text-[#DE3933] font-semibold text-[3rem] text-shadow-gray-300 text-shadow-lg" >
            Nuestros Prestamos te Ayudan en
          </h2>
          <div className="w-full overflow-hidden">
            <div className="flex gap-12 animate-marquee">
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
                  className="flex flex-col items-center min-w-[25rem] flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={`Imagen ${i + 1}`}
                    width={250}
                    height={160}
                    className="rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-700 font-medium text-center">
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
                  className="flex flex-col items-center min-w-[250px] flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={`Imagen ${i + 1}`}
                    width={250}
                    height={160}
                    className="rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-700 font-medium text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="flex flex-col items-center justify-center text-[1.8rem] w-full">

          <h2 className="font-bold text-center text-gray-900 text-[2rem] mb-12 my-10">
            Haz crecer tu negocio con nuestros préstamos a bajo interés
          </h2>

          <div className="flex w-[70%] gap-[2%] justify-center items-start mb-12">

            <div className="w-[30%] border-r-[.2rem] border-red-500 pr-10">

              <h3 className=" font-semibold mb-3 text-red-600">
                Tasas de interés bajas:
              </h3>

              <p className="text-gray-600">
                Te ofrecemos las mejores condiciones del mercado para que puedas acceder
                al capital que necesitas sin pagar de más.
              </p>
              
            </div>

            <div className=" w-[35%]  px-10 ">

              <h3 className="font-semibold mb-3 text-red-600">
                Requisitos flexibles:
              </h3>

              <p className="text-gray-600 ">
                No te pedimos avales ni trámites complicados, solo lo necesario para evaluar tu solicitud.
              </p>
              
            </div>

            <div className="w-[30%] border-l-[.2rem] border-red-500 pl-10">

              <h3 className="font-semibold mb-3 text-red-600">
                Atención personalizada:
              </h3>

              <p className="text-gray-600">
                Te acompañamos en todo el proceso y te asesoramos para que obtengas el préstamo
                que mejor se adapte a tus necesidades.
              </p>

            </div>

          </div>

        </section>
      </FadeIn>
      
      <div className="flex gap-[3rem] text-[2rem] justify-center items-center my-[2rem]">
        <Link  href="/solicitar-prestamos" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_1.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[10rem] h-auto object-cover rounded-full shadow-md"/>
            <p>Presentamos</p>
            
          
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/18025552499440341/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[10rem] h-auto object-cover rounded-full shadow-md"/>
            <p>Educacion</p>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/17934762872817568/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[10rem] h-auto object-cover rounded-full shadow-md"/>
            <p>Diferencia</p>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/stories/highlights/18048475378957376/" className="flex flex-col items-center gap-3">
          <Image
            src="/ig_2.jpg"
            alt="Instagram 1"
            width={200}
            height={200}
            className="w-[10rem] h-auto object-cover rounded-full shadow-md"/>
            <p>Quienes Somos</p>
        </Link>

      </div>

      {/*<section className="flex flex-col items-center gap-16   py-16 space-y-6 w-full">
        <FadeIn delay={200}>
          <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-[3rem] font-bold text-gray-900 mb-4">¿Qué hacemos?</h2>
              
            </div>
          </FadeIn>
      
        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">

          <div className="w-[50%]">
            <FadeIn>
              <div className="flex flex-col full">
                <h2 className=" font-bold text-red-600">Préstamos Personales</h2>
                <p className="text-gray-600 mt-2">
                  Obtén el dinero que necesitas de forma rápida y sencilla para cubrir tus gastos personales o emergencias.
                </p>
                <p className="mt-3 font-medium">Ideales para:</p>
                <div className="flex gap-4 mt-2 text-gray-700">
                  <span>🏠 Casa</span>
                  <span>❤️ Salud</span>
                  <span>📚 Estudios</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-[50%]">
            <ScaleIn delay={300}>
              <Image
                src="/personale.png"
                alt="Personales"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </ScaleIn>
          </div>
        </div>



        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">
          <div className="w-[50%]">
            <ScaleIn>
              <Image
                src="/negocio.jpg"
                alt="Negocios"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </ScaleIn>
          </div>

          <div className="w-[50%] flex items-center">
            <FadeIn>
              <div className=" flex flex-col">
                <h2 className="font-bold text-red-600">Préstamos para Negocios</h2>
                <p className="text-gray-600 mt-2">
                  Impulsa tu negocio con financiamiento flexible diseñado para hacer crecer tus proyectos.
                </p>
                <p className="mt-3 font-medium">Ideales para:</p>
                <div className="flex gap-4 mt-2 text-gray-700">
                  <span>📈 Potenciar Ventas</span>
                  <span>🏗️ Expansión</span>
                  <span>💼 Capital de Trabajo</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>



        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">
          <div className="w-[50%]">
            <FadeIn>
              <div className="flex flex-col w-full">
                <h2 className="font-bold text-red-600">Préstamos para Vehículos</h2>
                <p className="text-gray-600 mt-2">
                  Conduce el vehículo que sueñas con planes de financiamiento cómodos y accesibles.
                </p>
                <p className="mt-3 font-medium">Ideales para:</p>
                <div className="flex gap-4 mt-2 text-gray-700">
                  <span>🚗 Vehiculo</span>
                  <span>🏍️ Motocicleta</span>
                  <span>🚚 Camioneta</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-[50%]">
            <ScaleIn>
              <Image
                src="/vehiculo.jpg"
                alt="Vehículos"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      

      <FadeIn>
        <section className="flex justify-center w-full ">
          <PreguntasFrecuentes
            preguntasRespuestas={preguntasRespuestas}
          />
        </section>
      </FadeIn>*/}

    </main>

  );

}
