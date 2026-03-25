'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import CheckBoxComponent from "@/components/CheckBoxComponent";
import ScaleIn from "@/components/ScaleIn";

// --- INTERFACES PARA TYPESCRIPT ---
interface Appointment {
    nombre: string; apellidos: string; apodo: string; email: string; telefono: string;
    celular: string; monto: string; vivienda: string; ciudad: string;
    estadoCivil: string; cedula: string; profesion: string; inicioVivienda: string;
    tipoPrestamo: string; negocioPropio: string; tiempoNegocio: string;
    dependientes: string; esposoTrabajo: string; telefonos: string; banco: string; cuenta: string;
    status: string;
}

interface FamilyReference {
    firstName: string; lastName: string; phoneNumber: number; field1: string; relationshipClient: string;
}

interface PersonalReference {
    firstName: string; lastName: string; phoneNumber: number; relationshipClient: string;
}

interface ComercyReference {
    company: string; contact: string; positionRef: string; phoneNumber: number;
}

interface FullRequestDTO {
    appointment: Appointment;
    familiares: FamilyReference[];
    personales: PersonalReference[];
    comerciales: ComercyReference[];
}

function Page() {
    // --- ESTADO INICIAL CORREGIDO (Sin referencias compartidas) ---
    const [formData, setFormData] = useState<FullRequestDTO>({
        appointment: {
            nombre: "", apellidos: "", apodo: "", email: "", telefono: "",
            celular: "", monto: "", vivienda: "casa-propia", ciudad: "",
            estadoCivil: "soltero", cedula: "", profesion: "", inicioVivienda: "",
            tipoPrestamo: "personal", negocioPropio: "no", tiempoNegocio: "",
            dependientes: "", esposoTrabajo: "", telefonos: "", banco: "", cuenta: "",
            status: "PENDIENTE"
        },
        // Usamos Array.from para crear objetos únicos e independientes
        familiares: Array.from({ length: 3 }, () => ({ firstName: "", lastName: "", phoneNumber: 0, field1: "", relationshipClient: "" })),
        personales: Array.from({ length: 3 }, () => ({ firstName: "", lastName: "", phoneNumber: 0, relationshipClient: "Amigo" })),
        comerciales: Array.from({ length: 3 }, () => ({ company: "", contact: "", positionRef: "", phoneNumber: 0 }))
    });

    const handleAppointmentChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        
        const map: Record<string, keyof Appointment> = {
            'apellido': 'apellidos',
            'cell': 'celular',
            'Correo': 'email',
            'monto-solicitado': 'monto',
            'inicio-vivir': 'inicioVivienda',
            'profecion': 'profesion',
            'tiempo-negocio': 'tiempoNegocio',
            'dependiente': 'dependientes',
            'esposa-trabajo': 'esposoTrabajo',
            'numero-cuenta': 'cuenta'
        };

        const fieldName = (map[id] || id) as keyof Appointment;

        setFormData(prev => ({
            ...prev,
            appointment: { 
                ...prev.appointment, 
                [fieldName]: value 
            }
        }));
    };

    const handleRefChange = (type: 'familiares' | 'personales' | 'comerciales', index: number, field: string, value: string) => {
        const newRefs = [...formData[type]] as any[];
        // Si es número de teléfono, lo convertimos a número, sino queda como string
        const finalValue = field === 'phoneNumber' ? (parseInt(value) || 0) : value;
        
        newRefs[index] = { ...newRefs[index], [field]: finalValue };
        setFormData(prev => ({ ...prev, [type]: newRefs }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/appointments/full/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("¡Solicitud enviada con éxito!");
            } else {
                const error = await response.text();
                alert("Error del servidor: " + error);
            }
        } catch (err) {
            alert("No se pudo conectar con el servidor Spring Boot.");
        }
    };

    // --- OPCIONES PARA LOS CHECKBOXES ---
    const estadoCivil = [{ label: "Casado", value: "casado" }, { label: "Soltero", value: "soltero" }];
    const vivienda = [{ label: "Propia", value: "casa-propia" }, { label: "Alquilada", value: "casa-alquilada" }];
    const propietarioNegocio = [{ label: "Si", value: "si" }, { label: "No", value: "no" }];

    return (
        <div className="flex flex-col items-center bg-gray-100 z-10 min-h-screen w-full py-10">
            <div className="flex flex-col items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600">Formulario Para Solicitud de Préstamos</h1>
                <p className="text-xl mt-2 text-gray-700">Completa el formulario y nos pondremos en contacto</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 my-10 w-[90%] lg:w-[75%] bg-white shadow-xl rounded-xl p-8 border-t-4 border-red-500">
                <ScaleIn>
                    {/* SECCIÓN 1: Datos Personales */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="nombre">Nombre*:</label>
                            <input required id="nombre" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.nombre} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="apellido">Apellidos*:</label>
                            <input required id="apellido" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.apellidos} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="apodo">Apodo:</label>
                            <input id="apodo" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.apodo} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="cedula">Cédula*:</label>
                            <input required id="cedula" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.cedula} onChange={handleAppointmentChange}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
                        <p className="font-bold text-gray-700">Estado Civil:</p>
                        <CheckBoxComponent 
                            options={estadoCivil} 
                            onChange={(val) => setFormData(p => ({...p, appointment: {...p.appointment, estadoCivil: val}}))}
                        />
                    </div>

                    {/* SECCIÓN 2: Contacto y Préstamo */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="telefono">Teléfono</label>
                            <input required id="telefono" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.telefono} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="cell">Celular</label>
                            <input required id="cell" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.celular} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label className="font-semibold" htmlFor="Correo">E-Mail</label>
                            <input id="Correo" type="email" className="border rounded-lg px-3 py-2" value={formData.appointment.email} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="ciudad">Ciudad</label>
                            <input id="ciudad" type="text" className="border rounded-lg px-3 py-2" value={formData.appointment.ciudad} onChange={handleAppointmentChange}/>
                        </div>
                    </div>

                    {/* SECCIÓN 3: Detalles del Préstamo y Vivienda */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end mt-6">
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="tipo-prestamo">Tipo de Préstamo*</label>
                            <select required id="tipo-prestamo" className="border rounded-lg px-3 py-2 bg-white" value={formData.appointment.tipoPrestamo} onChange={handleAppointmentChange}>
                                <option value="personal">Personal</option>
                                <option value="negocios">Negocios</option>
                                <option value="vehiculo">Vehículo</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="monto-solicitado">Monto (DOP)*</label>
                            <input required type="number" id="monto-solicitado" className="border rounded-lg px-3 py-2" value={formData.appointment.monto} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col bg-gray-50 p-2 rounded-lg">
                            <p className="font-bold text-sm mb-1">Vivienda*</p>
                            <CheckBoxComponent options={vivienda} onChange={(val) => setFormData(p => ({...p, appointment: {...p.appointment, vivienda: val}}))}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="inicio-vivir">Inició a vivir*</label>
                            <input required type="date" id="inicio-vivir" className="border rounded-lg px-3 py-2" value={formData.appointment.inicioVivienda} onChange={handleAppointmentChange}/>
                        </div>
                    </div>

                    {/* SECCIÓN 4: Negocio y Cuentas */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 items-center">
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="profecion">Profesión*</label>  
                            <input required type="text" id="profecion" className="border rounded-lg px-3 py-2" value={formData.appointment.profesion} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col bg-gray-50 p-2 rounded-lg">
                            <p className="font-bold text-sm mb-1">Negocio propio*</p>
                            <CheckBoxComponent options={propietarioNegocio} onChange={(val) => setFormData(p => ({...p, appointment: {...p.appointment, negocioPropio: val}}))}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="tiempo-negocio">Tiempo Negocio</label>
                            <input type="text" id="tiempo-negocio" className="border rounded-lg px-3 py-2" value={formData.appointment.tiempoNegocio} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="dependiente">Dependientes*</label>
                            <input required type="number" id="dependiente" className="border rounded-lg px-3 py-2" value={formData.appointment.dependientes} onChange={handleAppointmentChange}/>
                        </div>
                    </div>

                    {/* SECCIÓN 5: Referencias (Ejemplo Familiares) */}
                    <div className="mt-10">
                        <h3 className="text-xl font-bold text-red-500 mb-4 border-b pb-2">3 Familiares que no vivan con usted*</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {formData.familiares.map((ref, i) => (
                                <div key={`fam-${i}`} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <p className="font-bold mb-2">Familiar {i+1}</p>
                                    <input required type="text" placeholder="Nombre" className="border rounded-lg px-3 py-2 w-full mb-2" value={ref.firstName} onChange={(e) => handleRefChange('familiares', i, 'firstName', e.target.value)}/>
                                    <input required type="text" placeholder="Apellido" className="border rounded-lg px-3 py-2 w-full mb-2" value={ref.lastName} onChange={(e) => handleRefChange('familiares', i, 'lastName', e.target.value)}/>
                                    <input required type="number" placeholder="Teléfono" className="border rounded-lg px-3 py-2 w-full mb-2" value={ref.phoneNumber || ''} onChange={(e) => handleRefChange('familiares', i, 'phoneNumber', e.target.value)}/>
                                    <input required type="text" placeholder="Dirección" className="border rounded-lg px-3 py-2 w-full mb-2" value={ref.field1} onChange={(e) => handleRefChange('familiares', i, 'field1', e.target.value)}/>
                                    <input required type="text" placeholder="Parentesco" className="border rounded-lg px-3 py-2 w-full" value={ref.relationshipClient} onChange={(e) => handleRefChange('familiares', i, 'relationshipClient', e.target.value)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTÓN SUBMIT */}
                    <div className="flex justify-center items-center w-full mt-10">
                        <button type="submit" className="bg-red-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 text-xl">
                            Enviar Solicitud
                        </button>
                    </div>
                </ScaleIn>
            </form>
        </div>
    );
}

export default Page;