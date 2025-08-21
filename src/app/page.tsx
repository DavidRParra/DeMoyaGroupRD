import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">

      <section className="flex justify-center items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg mb-10 md:mb-0">

          <h1 className="text-6xl text-5x1 font-bold mb-6">
            De Moya Group & Asociados
          </h1>

          <p className="text-gray-900 mb-9 text-2xl">
            En De Moya Group & Asociados ofrecemos financiamiento confiable y transparente, adaptado a sus necesidades. Nuestro compromiso es brindarle soluciones seguras que le ayuden a alcanzar sus metas con la confianza de contar con un aliado responsable. 
          </p>

          <div className="flex flex-col items-start gap-4">
            
            <Link
              href="#"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition text-lg"
            >
              Pide un prestamos →
            </Link>

            <Link
              href="#"
              className="border border-red-600 text-red-600 px-12 py-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition text-lg"
            >
              Conocenos →
            </Link>

          </div>

        </div>

          <div className="relative w-[60rem] h-[50rem] flex items-center justify-center mt-15">
            <div className="absolute top-[5%] left-[35%] w-[40rem] h-[20rem] bg-red-500 z-0" />
            <div className="absolute bottom-[5%]  right-[35%] w-[40rem] h-[20rem] bg-red-500 z-0" />
            <div className="relative z-10 w-[40rem] h-[30rem] mx-auto">
              
                <Image
                    src="/inicio.jpg"
                    alt="Inicio"
                    width={1200}
                    height={1200}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                />
            </div>
        </div>

      </section>

      <section className="flex flex-col items-center gap-8 px-8  py-16 space-y-6 w-full">
         <div className="text-center max-w-2xl mx-auto mb-12">
             <h2 className="text-[3rem] font-bold text-gray-900 mb-4">¿Qué hacemos?</h2>
            
          </div>
      
        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">
          <div className="flex flex-col w-[50%]">
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
          <Image
            src="/personale.png"
            alt="Personales"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-[50%]"
          />
        </div>



        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">
          <Image
            src="/negocio.jpg"
            alt="Negocios"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-[50%]"
          />
          <div className=" w-[50%] flex flex-col">
            <h2 className="font-bold text-red-600">Préstamos para Negocios</h2>
            <p className="text-gray-600 mt-2">
              Impulsa tu negocio con financiamiento flexible diseñado para hacer crecer tus proyectos.
            </p>
            <p className="mt-3 font-medium">Ideales para:</p>
            <div className="flex gap-4 mt-2 text-gray-700">
              <span>📈 Potenciar Ventas</span>
              <span>🏗️ Expansión</span>
            </div>
          </div>
        </div>



        <div className="flex text-[1.8rem] gap-8 items-center w-[70%]">
          <div className="flex flex-col w-[50%]">
            <h2 className="font-bold text-red-600">Préstamos para Vehículos</h2>
            <p className="text-gray-600 mt-2">
              Conduce el vehículo que sueñas con planes de financiamiento cómodos y accesibles.
            </p>
            <p className="mt-3 font-medium">Ideales para:</p>
            <div className="flex gap-4 mt-2 text-gray-700">
              <span>🏠 Casa</span>
              <span>❤️ Salud</span>
              <span>📚 Estudios</span>
            </div>
          </div>
          <Image
            src="/vehiculo.jpg"
            alt="Vehículos"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-[50%]"
          />
        </div>
      </section>


      <section className="relative overflow-hidden text-[1.5rem] bg-gray-50 py-12">
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

      <section className="flex flex-col items-center justify-center text-[1.8rem] w-full">

        <h2 className="font-bold text-center text-gray-900 text-[2rem] mb-12 my-10">
          Haz crecer tu negocio con nuestros préstamos a bajo interés
        </h2>

        <div className="flex w-[70%] gap-[2%] justify-center items-center mb-12">

          <div className="w-[30%]">

            <h3 className=" font-semibold mb-3 text-red-600">
              Tasas de interés bajas:
            </h3>

            <p className="text-gray-600">
              Te ofrecemos las mejores condiciones del mercado para que puedas acceder
              al capital que necesitas sin pagar de más.
            </p>
            
          </div>

          <div className=" w-[30%]">

            <h3 className="font-semibold mb-3 text-red-600">
              Requisitos flexibles:
            </h3>

            <p className="text-gray-600">
              No te pedimos avales ni trámites complicados, solo lo necesario para evaluar tu solicitud.
            </p>
            
          </div>

          <div className="w-[30%]">

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

    </main>

  );

}
