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
    // --- ESTADO INICIAL TIPADO ---
    const [formData, setFormData] = useState<FullRequestDTO>({
        appointment: {
            nombre: "", apellidos: "", apodo: "", email: "", telefono: "",
            celular: "", monto: "", vivienda: "casa-propia", ciudad: "",
            estadoCivil: "soltero", cedula: "", profesion: "", inicioVivienda: "",
            tipoPrestamo: "personal", negocioPropio: "no", tiempoNegocio: "",
            dependientes: "", esposoTrabajo: "", telefonos: "", banco: "", cuenta: "",
            status: "PENDIENTE"
        },
        familiares: Array(3).fill({ firstName: "", lastName: "", phoneNumber: 0, field1: "", relationshipClient: "" }),
        personales: Array(3).fill({ firstName: "", lastName: "", phoneNumber: 0, relationshipClient: "Amigo" }),
        comerciales: Array(3).fill({ company: "", contact: "", positionRef: "", phoneNumber: 0 })
    });

    const handleAppointmentChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const map: { [key: string]: keyof Appointment } = {
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
        const fieldName = map[id] || (id as keyof Appointment);

        setFormData(prev => ({
            ...prev,
            appointment: { ...prev.appointment, [fieldName]: value }
        }));
    };

    const handleRefChange = (type: 'familiares' | 'personales' | 'comerciales', index: number, field: string, value: string) => {
        const newRefs = [...formData[type]] as any[];
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
                alert("Error: " + error);
            }
        } catch (err) {
            alert("Error de conexión con el servidor");
        }
    };

    // --- OPCIONES ---
    const estadoCivil = [{ label: "Casado", value: "casado" }, { label: "Soltero", value: "soltero" }];
    const vivienda = [{ label: "Propia", value: "casa-propia" }, { label: "Alquilada", value: "casa-alquilada" }];
    const propietarioNegocio = [{ label: "Si", value: "si" }, { label: "No", value: "no" }];

    return (
        <div className="flex flex-col items-center bg-gray-100 z-10 min-h-screen w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-[3.5rem] text-red-500">Formulario Para Solicitud de Prestamos</h1>
                <p className="text-[2rem]">Completa el formulario y nos pondremos en contacto</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 my-10 w-[70%] text-[1.4rem] border border-red-500 p-6">
                <ScaleIn>
                    {/* SECCION 1 */}
                    <div className="flex w-full justify-between items-end">
                        <div className="flex w-[75%] justify-between ">
                            <div className="flex flex-col w-[24%]">
                                <label htmlFor="nombre">Nombre*:</label>
                                <input required id="nombre" type="text" className="border rounded-lg px-2" value={formData.appointment.nombre} onChange={handleAppointmentChange}/>
                            </div>
                            <div className="flex flex-col w-[24%]">
                                <label htmlFor="apellido">Apellidos*:</label>
                                <input required id="apellido" type="text" className="border rounded-lg px-2" value={formData.appointment.apellidos} onChange={handleAppointmentChange}/>
                            </div>
                            <div className="flex flex-col w-[24%]">
                                <label htmlFor="apodo">Apodo:</label>
                                <input id="apodo" type="text" className="border rounded-lg px-2" value={formData.appointment.apodo} onChange={handleAppointmentChange}/>
                            </div>
                            <div className="flex flex-col w-[24%]">
                                <label htmlFor="cedula">Cedula*:</label>
                                <input required id="cedula" type="text" className="border rounded-lg px-2" value={formData.appointment.cedula} onChange={handleAppointmentChange}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 items-center w-[25%]">
                            <p>Estado Civil:</p>
                            <CheckBoxComponent options={estadoCivil} onChange={(val: string) => setFormData(p => ({...p, appointment: {...p.appointment, estadoCivil: val}}))}/>
                        </div>
                    </div>

                    {/* SECCION 2 */}
                    <div className="flex w-full justify-between mt-4">
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="telefono">Telefono</label>
                            <input required id="telefono" type="text" className="border rounded-lg px-2" value={formData.appointment.telefono} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="cell">Celular</label>
                            <input required id="cell" type="text" className="border rounded-lg px-2" value={formData.appointment.celular} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[30%]">
                            <label htmlFor="Correo">E-Mail</label>
                            <input id="Correo" type="email" className="border rounded-lg px-2" value={formData.appointment.email} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input id="ciudad" type="text" className="border rounded-lg px-2" value={formData.appointment.ciudad} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[20%]">
                            <label htmlFor="tipo-prestamo">Tipo de Prestamo*</label>
                            <select required id="tipo-prestamo" className="border rounded-lg px-2" value={formData.appointment.tipoPrestamo} onChange={handleAppointmentChange}>
                                <option value="personal">Personal</option>
                                <option value="negocios">Negocios</option>
                                <option value="vehiculo">Vehículo</option>
                            </select>
                        </div>
                    </div>

                    {/* SECCION 3: Vivienda y Profesión */}
                    <div className="flex w-full justify-between items-end mt-4">
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="monto-solicitado">Monto (DOP)*</label>
                            <input required type="number" id="monto-solicitado" className="border rounded-lg px-2" value={formData.appointment.monto} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex justify-center gap-6 items-center w-[25%]">
                            <p>Vivienda*</p>
                            <CheckBoxComponent options={vivienda} onChange={(val: string) => setFormData(p => ({...p, appointment: {...p.appointment, vivienda: val}}))}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="inicio-vivir">Inició a vivir*</label>
                            <input required type="date" id="inicio-vivir" className="border rounded-lg px-2" value={formData.appointment.inicioVivienda} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="profecion">Profesión*</label>  
                            <input required type="text" id="profecion" className="border rounded-lg px-2" value={formData.appointment.profesion} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex justify-center gap-6 items-center w-[25%]">
                            <p>Negocio propio*</p>
                            <CheckBoxComponent options={propietarioNegocio} onChange={(val: string) => setFormData(p => ({...p, appointment: {...p.appointment, negocioPropio: val}}))}/>
                        </div>
                    </div>

                    {/* SECCION 4: Cuentas y Trabajo */}
                    <div className="flex w-full justify-between items-end mt-4">
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="tiempo-negocio">Tiempo Negocio</label>
                            <input type="text" id="tiempo-negocio" className="border rounded-lg px-2" value={formData.appointment.tiempoNegocio} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="dependiente">Dependientes*</label>
                            <input required type="number" id="dependiente" className="border rounded-lg px-2" value={formData.appointment.dependientes} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="esposa-trabajo">Esposa o Trabajo*</label>
                            <input required type="text" id="esposa-trabajo" className="border rounded-lg px-2" value={formData.appointment.esposoTrabajo} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[15%]">
                            <label htmlFor="telefonos">Teléfonos*</label>
                            <input required type="text" id="telefonos" className="border rounded-lg px-2" value={formData.appointment.telefonos} onChange={handleAppointmentChange}/>
                        </div>
                        <div className="flex flex-col w-[35%]">
                            <label>Cuenta Bancaria*</label>
                            <div className="flex gap-2 w-full">
                                <input required type="text" id="banco" placeholder="Banco" className="border rounded-lg px-2 w-[50%]" value={formData.appointment.banco} onChange={handleAppointmentChange}/>
                                <input required type="text" id="numero-cuenta" placeholder="Cuenta" className="border rounded-lg px-2 w-[50%]" value={formData.appointment.cuenta} onChange={handleAppointmentChange}/>
                            </div>
                        </div>
                    </div>

                    {/* REFERENCIAS FAMILIARES */}
                    <div className="flex flex-col w-full border-red-500 border my-4 p-3 rounded-lg">
                        <label className="text-red-500 self-center">3 Familiares que no vivan con usted*</label>
                        <div className="flex gap-[2%] w-full">
                            {formData.familiares.map((ref, i) => (
                                <div key={i} className="w-[32%]">
                                    <label>Familiar {i+1}*</label>
                                    <input required type="text" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-1" value={ref.firstName} onChange={(e) => handleRefChange('familiares', i, 'firstName', e.target.value)}/>
                                    <input required type="text" placeholder="Apellido" className="border rounded-lg px-2 w-full mb-1" value={ref.lastName} onChange={(e) => handleRefChange('familiares', i, 'lastName', e.target.value)}/>
                                    <input required type="number" placeholder="Telefono" className="border rounded-lg px-2 w-full mb-1" value={ref.phoneNumber || ''} onChange={(e) => handleRefChange('familiares', i, 'phoneNumber', e.target.value)}/>
                                    <input required type="text" placeholder="Direccion" className="border rounded-lg px-2 w-full mb-1" value={ref.field1} onChange={(e) => handleRefChange('familiares', i, 'field1', e.target.value)}/>
                                    <input required type="text" placeholder="Parentesco" className="border rounded-lg px-2 w-full" value={ref.relationshipClient} onChange={(e) => handleRefChange('familiares', i, 'relationshipClient', e.target.value)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* REFERENCIAS PERSONALES */}
                    <div className="flex flex-col w-full border-red-500 border my-4 p-3 rounded-lg">
                        <label className="text-red-500 self-center">3 Referencias Personales*</label>
                        <div className="flex gap-[2%] w-full">
                            {formData.personales.map((ref, i) => (
                                <div key={i} className="w-[32%]">
                                    <label>Referencia {i+1}*</label>
                                    <input required type="text" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-1" value={ref.firstName} onChange={(e) => handleRefChange('personales', i, 'firstName', e.target.value)}/>
                                    <input required type="text" placeholder="Apellido" className="border rounded-lg px-2 w-full mb-1" value={ref.lastName} onChange={(e) => handleRefChange('personales', i, 'lastName', e.target.value)}/>
                                    <input required type="number" placeholder="Telefono" className="border rounded-lg px-2 w-full" value={ref.phoneNumber || ''} onChange={(e) => handleRefChange('personales', i, 'phoneNumber', e.target.value)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* REFERENCIAS COMERCIALES */}
                    <div className="flex flex-col w-full border-red-500 border my-4 p-3 rounded-lg">
                        <label className="text-red-500 self-center">3 Referencias Comerciales*</label>
                        <div className="flex gap-[2%] w-full">
                            {formData.comerciales.map((ref, i) => (
                                <div key={i} className="w-[32%]">
                                    <label>Referencia {i+1}*</label>
                                    <input required type="text" placeholder="Empresa" className="border rounded-lg px-2 w-full mb-1" value={ref.company} onChange={(e) => handleRefChange('comerciales', i, 'company', e.target.value)}/>
                                    <input required type="text" placeholder="Contacto" className="border rounded-lg px-2 w-full mb-1" value={ref.contact} onChange={(e) => handleRefChange('comerciales', i, 'contact', e.target.value)}/>
                                    <input required type="text" placeholder="Cargo" className="border rounded-lg px-2 w-full mb-1" value={ref.positionRef} onChange={(e) => handleRefChange('comerciales', i, 'positionRef', e.target.value)}/>
                                    <input required type="number" placeholder="Telefono" className="border rounded-lg px-2 w-full" value={ref.phoneNumber || ''} onChange={(e) => handleRefChange('comerciales', i, 'phoneNumber', e.target.value)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full mt-6">
                        <button type="submit" className="bg-[#DE3933] text-white px-8 py-3 rounded-lg hover:bg-[#c32a2a] transition-colors duration-300 text-[1.6rem]">
                            Enviar Solicitud
                        </button>
                    </div>
                </ScaleIn>
            </form>
        </div>
    );
}

export default Page;