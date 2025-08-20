import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-16 w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg mb-10 md:mb-0">
          <h1 className="text-6xl text-5x1 font-bold mb-6">
         De Moya Group & Asociados
           </h1>
          <p className="text-gray-900 mb-9 text-2xl">
            nose que va aqui 
          </p>
          <div className="flex flex-col items-center gap-4">
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

  <div className="relative w-[320px] h-[310px] flex items-center justify-center mt-30 mt-0">
    <div className="absolute -top-4 -right-20 w-[320px] h-[180px] bg-red-500 rounded-sm animate-[float_6s_ease-in-out_infinite] z-0" />
    <div className="absolute -bottom-4 -left-20 w-[320px] h-[180px] bg-red-500 rounded-sm animate-[float-rev_6s_ease-in-out_infinite] z-0" />
    <div className="relative z-10">
      
        <Image
            src="/inicio.jpg"
            alt="Inicio"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
        />
    </div>
</div>

      </section>

      <section className="flex flex-col items-center gap-8 px-8  py-16 space-y-6 w-full">
         <div className="text-center max-w-2xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué hacemos?</h2>
            
          </div>
      
        <div className="grid md:grid-cols-2 gap-8 items-center w-[70%]">
          <div>
            <h2 className="text-xl font-bold text-red-600">Préstamos Personales</h2>
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
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center w-[70%]">
          <Image
            src="/negocio.jpg"
            alt="Negocios"
            width={400}
            height={300}
            className="rounded-lg shadow-md order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-xl font-bold text-red-600">Préstamos para Negocios</h2>
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

        <div className="grid md:grid-cols-2 gap-8 items-center w-[70%]">
          <div>
            <h2 className="text-xl font-bold text-red-600">Préstamos para Vehículos</h2>
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
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
<section className="relative overflow-hidden bg-gray-50 py-12">
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

    </main>
  );
}
