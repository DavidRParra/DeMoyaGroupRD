import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

function Page() {
    return (
        <FadeIn delay={100}>
            <section className="flex justify-center items-center w-full mx-auto min-h-screen px-4 md:px-8 py-8 lg:py-12">
                
                {/* Contenedor principal adaptable */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1200px] gap-8 lg:gap-12">

                    {/* Bloque de Texto */}
                    <div className="flex flex-col items-start w-full lg:w-[50%]">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-gray-900 leading-tight">
                            De Moya Group & Asociados
                        </h1>

                        <p className="text-gray-700 mb-6 lg:mb-8 text-lg sm:text-xl leading-relaxed">
                            En De Moya Group & Asociados ofrecemos financiamiento confiable y transparente, adaptado a sus necesidades. Nuestro compromiso es brindarle soluciones seguras que le ayuden a alcanzar sus metas con la confianza de contar con un aliado responsable. 
                        </p>

                        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-start gap-4 text-[1.2rem] sm:text-[1.4rem] w-full">
                            <Link
                                href="/solicitar-prestamos"
                                className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition text-center shadow-md"
                            >
                                Pide tu prestamos →
                            </Link>

                            <Link
                                href="/quienes-somos"
                                className="border border-red-600 text-red-600 px-8 lg:px-12 py-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition text-center"
                            >
                                Quienes Somos →
                            </Link>
                        </div>
                    </div>

                    {/* Bloque de Imagen: Adaptable en móvil, y con tus medidas y cuadros exactos en PC */}
                    <div className="w-full lg:w-[50%] flex justify-center items-center mt-4 lg:mt-0">
                        <div className="relative w-full h-[320px] sm:h-[400px] lg:w-[60rem] lg:h-[50rem] flex items-center justify-center lg:mt-15 max-w-full">
                            
                            {/* Cuadros de fondo originales (visibles únicamente en PC con 'hidden lg:block') */}
                            <div className="absolute top-[5%] left-[35%] w-[40rem] h-[20rem] bg-red-500 z-0 hidden lg:block" />
                            <div className="absolute bottom-[5%] right-[35%] w-[40rem] h-[20rem] bg-red-500 z-0 hidden lg:block" />

                            {/* Contenedor de la imagen principal (ajustado en móvil y con tus medidas originales en PC) */}
                            <div className="relative z-10 w-full h-full sm:w-[80%] lg:w-[40rem] lg:h-[30rem] mx-auto">
                                <Image
                                    src="/inicio.jpg"
                                    alt="Inicio"
                                    width={1200}
                                    height={1200}
                                    className="rounded-lg shadow-lg w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </FadeIn>
    );
}

export default Page;