import Image from "next/image";

function Page() {

    return (
        <div className="flex flex-col items-center w-full mx-auto gap-8 bg-gray-100 min-h-screen">
            
            <div className="flex flex-col justify-center items-center w-full mx-auto gap-2 py-4 mt-12">
                <h1 className="font-bold text-[3rem] text-red-500">Contactanos</h1>
                <p className="text-[1.2rem] md:text-[2rem] text-gray-700">
                    Completa el formulario y nos pondremos en contacto
                </p>
            </div>
            <div className="md:flex md:items-center md:justify-evenly w-full">
                <form action={""} method="" className="flex flex-col gap-4 w-[320px] mx-auto border md:mx-0 border-red-500 bg-white rounded-lg py-4 px-4 md:w-[500px] md:px-8 shadow-md">
                    <div className="flex flex-col gap-2 font-medium text-[1.5rem]">
                        <label htmlFor="nombre">
                            Nombre:
                        </label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            className="border rounded-lg px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col gap-2 font-medium text-[1.5rem]">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="border rounded-lg px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col gap-2 font-medium text-[1.5rem]">
                        <label htmlFor="telefono">
                            Telefono:
                        </label>
                        <input 
                            type="text" 
                            id="telefono" 
                            name="telefono" 
                            className="border rounded-lg px-2 py-1"
                        />
                    </div>

                    <div className="flex flex-col gap-2 font-medium text-[1.5rem]">
                        <label htmlFor="mensaje">
                            Mensaje:
                        </label>
                        <textarea 
                            id="mensaje" 
                            name="mensaje" 
                            className="border rounded-lg px-2 py-1 resize-none"
                            rows={4}
                            cols={50}
                        />
                    </div>

                    <button type="submit" className="bg-[#DE3933] text-white px-8 py-3 rounded-xl hover:bg-[#c32a2a] transition-colors duration-300 text-[1.4rem] font-medium shadow-md cursor-pointer my-8">
                        Enviar Mensaje
                    </button>

                </form>
                {/* <div className="w-[2px] h-[450px] bg-red-500 ml-[40px]"/> */}
                <Image 
                    src="/DeMoyaGroupProfile.png" 
                    alt="Logo" 
                    width={200} 
                    height={100} 
                    className="mx-auto mt-8 w-[150px] md:w-[550px] md:mx-0 md:mt-0 object-contain"
                />
            </div>
        </div>
    )
}

export default Page;