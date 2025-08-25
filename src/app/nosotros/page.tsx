import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";


function Page(){

    return (

        <FadeIn delay={100}>
        <section className="flex justify-center  w-full mx-auto h-[100vh]">
          
          <div className="flex justify-evenly  items-center w-[70%]">

            <div className="flex flex-col items-start w-[50%]">
              <h1 className="text-6xl text-5x1 font-bold mb-6">
                De Moya Group & Asociados
              </h1>

              <p className="text-gray-900 mb-9 text-2xl">
                En De Moya Group & Asociados ofrecemos financiamiento confiable y transparente, adaptado a sus necesidades. Nuestro compromiso es brindarle soluciones seguras que le ayuden a alcanzar sus metas con la confianza de contar con un aliado responsable. 
              </p>

              <div className="flex flex-col items-start gap-4 text-[1.4rem]">
              
                <Link
                  href="/solicitar-prestamos"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition"
                >
                  Pide tu prestamos →
                </Link>

                <Link
                  href="/quienes-somos"
                  className="border border-red-600 text-red-600 px-12 py-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition"
                >
                  Quienes Somos →
                </Link>

              </div>

            </div>


            <div className="w-[50%]">
              
                
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
              
            </div>
            

          </div>

            

        </section>
      </FadeIn>
    )
}

export default Page;