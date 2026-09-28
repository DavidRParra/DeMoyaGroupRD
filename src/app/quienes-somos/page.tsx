import Image from "next/image";

function Page() {
    // Puedes actualizar los nombres y cargos de tu personal aquí mismo
    const personal = [
        { nombre: "Juan de Moya", cargo: "CEO & Fundador", imagen: "/Quienes_Somos.jpg" },
        { nombre: "María Pérez", cargo: "Directora Financiera", imagen: "/Quienes_Somos.jpg" },
        { nombre: "Carlos Gómez", cargo: "Gerente de Operaciones", imagen: "/Quienes_Somos.jpg" },
        { nombre: "Ana Fernández", cargo: "Asesora de Crédito", imagen: "/Quienes_Somos.jpg" },
    ];

    return (
        <section className="flex flex-col justify-center items-center w-full mx-auto gap-8 min-h-screen px-4 md:px-8 py-12">
            <h3 className="text-red-500 text-[2.5rem] md:text-[3rem] font-bold text-center mb-4">
                Nuestro Personal
            </h3>

            {/* Contenedor adaptativo: Columna en móvil, 2 columnas en tablets, 4 en escritorio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1300px] justify-items-center">
                {personal.map((persona, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center gap-4 bg-white p-4 rounded-xl shadow-md w-full max-w-[280px]"
                    >
                        <div className="w-full h-[250px] relative overflow-hidden rounded-lg shadow-inner">
                            <Image
                                src={persona.imagen}
                                alt={persona.nombre}
                                width={800}
                                height={800}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h4 className="text-[1.2rem] font-bold text-gray-800">{persona.nombre}</h4>
                            <p className="text-[1rem] text-gray-600 font-medium">{persona.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Page;