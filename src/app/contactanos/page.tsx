'use client';
import Image from "next/image";
import { useState } from "react";

function Page() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        appointmentDate: "",
        type: "",
        message: ""
    });

    // Estados para el modal de respuesta
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/guardar-formulario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error al guardar en la base de datos");
            }

            // Éxito para Demoya Group (ID 4)
            setModalMessage("¡Mensaje enviado correctamente! Demoya Group se pondrá en contacto contigo pronto.");
            setIsSuccess(true);
            setIsModalOpen(true);

            // Limpiar formulario
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                appointmentDate: "",
                type: "",
                message: ""
            });

        } catch (error: any) {
            setModalMessage("Error al enviar el formulario. Por favor, intenta de nuevo.\n" + (error.message || ""));
            setIsSuccess(false);
            setIsModalOpen(true);
        }
    };

    const formatPhoneNumber = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        const trimmed = numbers.slice(0, 10);
        if (trimmed.length < 4) return trimmed;
        if (trimmed.length < 7) return `(${trimmed.slice(0, 3)})-${trimmed.slice(3)}`;
        return `(${trimmed.slice(0, 3)})-${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, phone: formattedPhone });
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="flex flex-col items-center w-full mx-auto gap-8 bg-gray-100 min-h-screen">
            
            <div className="flex flex-col justify-center items-center w-full mx-auto gap-2 py-4 mt-12">
                <h1 className="font-bold text-[3rem] text-red-500">Contáctanos</h1>
                <p className="text-[2rem] md:text-[2rem] text-gray-700">
                    Completa el formulario y nos pondremos en contacto
                </p>
            </div>

            <div className="md:flex md:items-center md:justify-evenly w-full pb-16">
                
                {/* Formulario */}
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-4 w-[320px] mx-auto border md:mx-0 border-red-500 bg-white rounded-lg py-6 px-4 md:w-[600px] md:px-8 shadow-md"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="firstName">Nombre*</label>
                            <input 
                                required 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Jose"
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="lastName">Apellido*</label>
                            <input 
                                required 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Rodriguez"
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="phone">Teléfono*</label>
                            <input 
                                required 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="(809)-676-0000"
                                maxLength={14}
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="email">Email*</label>
                            <input 
                                required 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ejemplo@ejemplo.com"
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="type">Tipo de consulta*</label>
                            <select 
                                required
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] bg-white focus:outline-none focus:border-red-500"
                            >
                                <option value="" disabled hidden>--Seleccione una opción--</option>
                                <option value="compra">Prestamo</option>
                                <option value="alquiler">Asesoria</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem]">
                            <label htmlFor="appointmentDate">Fecha de consulta*</label>
                            <input 
                                required 
                                type="date" 
                                id="appointmentDate" 
                                name="appointmentDate" 
                                min={today}
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] focus:outline-none focus:border-red-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1 font-medium text-[1.6rem] md:col-span-2">
                            <label htmlFor="message">Mensaje*</label>
                            <textarea 
                                required
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 text-black font-normal text-[1.5rem] resize-none focus:outline-none focus:border-red-500"
                                rows={4}
                                placeholder="Escribe aquí los detalles..."
                            />
                        </div>

                    </div>

                    <button 
                        type="submit" 
                        className="bg-[#DE3933] text-white px-8 py-3 rounded-xl hover:bg-[#c32a2a] transition-colors duration-300 text-[1.6rem] font-medium shadow-md cursor-pointer my-4 mx-auto w-full md:w-auto"
                    >
                        Enviar Mensaje
                    </button>

                </form>

                <Image 
                    src="/DeMoyaGroupProfile.png" 
                    alt="Logo" 
                    width={200} 
                    height={100} 
                    className="mx-auto mt-8 w-[150px] md:w-[450px] md:mx-0 md:mt-0 object-contain"
                />
            </div>

            {/* Modal Nativo de Respuesta */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs px-4">
                    <div className="w-full max-w-md flex flex-col justify-center items-center bg-white rounded-2xl p-6 sm:p-8 gap-6 shadow-2xl">
                        <p className="text-center text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line text-gray-800">
                            {modalMessage}
                        </p>

                        <button
                            type="button"
                            className="bg-[#DE3933] text-white py-2.5 px-8 rounded-lg text-[1.5rem] sm:text-lg font-semibold hover:bg-[#c32a2a] transition-colors cursor-pointer"
                            onClick={() => {
                                setIsModalOpen(false);
                                if (isSuccess) {
                                    window.location.reload();
                                }
                            }}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page;