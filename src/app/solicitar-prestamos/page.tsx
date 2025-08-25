'use client';
import React from "react";
import CheckBoxComponent from "@/components/CheckBoxComponent";
import ScaleIn from "@/components/ScaleIn";

function Page() {

    const estadoCivil = [
        { label: "Casado", value: "casado" },
        { label: "Soltero", value: "soltero" }
    ];

    const vivienda = [
        { label: "Propia", value: "casa-propia" },
        { label: "Alquilada", value: "casa-alquilada" }
    ];

    const propietarioNegocio = [
        { label: "Si", value: "si" },
        { label: "No", value: "no" }
    ];

  return (
    <div className=" flex flex-col items-center bg-gray-100 z-10">
        <div className="flex flex-col items-center">
            <h1 className="text-[3.5rem] text-red-500">Formulario Para Solicitud de Prestamos</h1>
            <p className="text-[2rem]">Completa el formulario y nos pondremos en contacto</p>
        </div>

        
        <form action="" className="flex flex-col space-y-4 my-10 w-[70%] text-[1.4rem] border border-red-500 p-6">
            <ScaleIn>
                <div className="flex w-full justify-between items-end">

                    <div className="flex w-[75%] justify-between ">
                        <div className="flex flex-col w-[24%]">
                            <label htmlFor="nombre">Nombre*:</label>
                            <input required id="nombre" type="text"  placeholder="Diego" className="border rounded-lg px-2"/>
                        </div>

                        <div className="flex flex-col w-[24%]">
                            <label htmlFor="apellido">Apellidos*:</label>
                            <input required id="apellido" type="text" placeholder="Rodriguez" className="border rounded-lg px-2"/>
                        </div>

                        <div className="flex flex-col w-[24%]">
                            <label htmlFor="apodo">Apodo:</label>
                            <input id="apodo" type="text" placeholder="El Flaco" className="border rounded-lg px-2"/>
                        </div>

                        <div className="flex flex-col w-[24%]">
                            <label htmlFor="cedula">Cedula*:</label>
                            <input required id="cedula" type="number" placeholder="04300000000" className="border rounded-lg px-2"/>
                        </div>
                    </div>

                    
                    <div className="flex justify-center gap-6 items-center w-[25%]">
                        <p className="w-20%">Estado Civil:</p>
                        <CheckBoxComponent options={estadoCivil}/>
                    </div>

                </div>

                <div className="flex w-full justify-between">

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="telefono">Telefono</label>
                        <input required id="telefono" type="number" placeholder="8092420000" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="celular">Celular</label>
                        <input required id="cell" type="number" placeholder="8095553333" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="correo">E-Mail</label>
                        <input id="Correo" type="email" placeholder="diegoR@ejemplo.com" className="border rounded-lg px-2"/>
                    </div>
                    
                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input id="ciudad" type="text" placeholder="Santo Domingo" className="border rounded-lg px-2"/>
                    </div>
                    <div className="flex flex-col w-[20%]">
                        <label htmlFor="tipo-prestamo">Tipo de Prestamo*</label>
                        <select required name="tipo-prestamo" id="tipo-prestamo" className="border rounded-lg px-2" defaultValue={"default"}>
                            
                            <option value="personal">Personal</option>
                            <option value="negocios">Negocios</option>
                            <option value="vehiculo">Vehículo</option>
                            <option value="default" id="default" disabled hidden>--Seleccione una opcion--</option>
                        </select>
                    </div>

                </div>


                <div className="flex w-full justify-between items-end">

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="monto-solicitado w-[15%]">Monto Solicitado (DOP)*</label>
                        <input required type="number" id="monto-solicitado" placeholder="80,000" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex justify-center gap-6 items-center w-[25%]">
                        <p className="w-20%">Vivienda*</p>
                        <CheckBoxComponent options={vivienda}/>
                    </div>
                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="inicio-vivir">Inició a vivir en*</label>
                        <input required type="date" id="inicio-vivir" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="profecion">Profesión*</label>  
                        <input required type="number" id="profecion" placeholder="Contador" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex justify-center gap-6 items-center w-[25%]">
                        <p className="w-20%">Negocio propio*</p>
                        <CheckBoxComponent options={propietarioNegocio}/>
                    </div>

                </div>

                <div className="flex w-full justify-between items-end">
                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="tiempo-negocio">Tiempo operando el negocio (Si aplica)</label>
                        <input type="text" id="tiempo-negocio" placeholder="2 años" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="dependiente">No. Del dependientes*</label>
                        <input required type="number" id="dependiente" placeholder="2" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="esposa-trabajo">Nombre de Esposa o Trabajo*</label>
                        <input required type="text" id="esposa-trabajo" placeholder="Maria, Ejemplo Rent Car" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[15%]">
                        <label htmlFor="telefonos">Telefonos*</label>
                        <input required type="text" id="telefonos" placeholder="8095554444, 8095553333" className="border rounded-lg px-2"/>
                    </div>

                    <div className="flex flex-col w-[35%]">
                        <label htmlFor="cuentas-bancarias">Cuenta Bancaria*</label>
                        <div className="flex gap-2 w-full">
                            <input required type="text" id="banco" placeholder="Banco Popular, Banco BHD" className="border rounded-lg px-2 w-[50%]"/>
                            <input required type="number" id="numero-cuenta" placeholder="111222333444" className="border rounded-lg px-2 w-[50%]" />
                        </div>
                    </div>

                </div>

                {/* Referencias Familiares */}
                <div className="flex flex-col w-full justify-between items-center border-red-500 border my-4 p-3 rounded-lg">
                    <label htmlFor="referencias-personales" className="text-red-500">3 Familiares que no vivan con usted*</label>
                    <div className="flex gap-[2%] w-full">

                        <div className="w-[32%]">
                            <label htmlFor="familiar1">Familiar 1*</label>
                            <div className="flex gap-2">
                                <label htmlFor="nombre-familiar1">Nombre*</label>
                                <input required type="text" id="familiar1-nombre" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="apellido-familiar1">Apellido*</label>
                                <input required type="text" id="familiar1-apellido" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="telefono-familiar1">Telefono*</label>
                                <input required type="number" id="familiar1-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/> 
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="direccion-familiar1">Direccion*</label>
                                <input required type="text" id="familiar1-direccion" placeholder="Calle Ejemplo #123" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="parentesco-familiar1">Parentesco*</label>
                                <input required type="text" id="familiar1-parentesco" placeholder="Hermano, Padre, Madre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>


                        </div>

                        <div className="w-[32%]">
                            <label htmlFor="familiar2">Familiar 2*</label>
                            <div className="flex gap-2">
                                <label htmlFor="nombre-familiar2">Nombre*</label>
                                <input required type="text" id="familiar2-nombre" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="apellido-familiar2">Apellido*</label>
                                <input required type="text" id="familiar2-apellido" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="telefono-familiar2">Telefono*</label>
                                <input required type="number" id="familiar2-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/> 
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="direccion-familiar2">Direccion*</label>
                                <input required type="text" id="familiar2-direccion" placeholder="Calle Ejemplo #123" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="parentesco-familiar2">Parentesco*</label>
                                <input required type="text" id="familiar2-parentesco" placeholder="Hermano, Padre, Madre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>


                        </div>

                        <div className="w-[32%]">
                            <label htmlFor="familiar3">Familiar 3*</label>
                            <div className="flex gap-2">
                                <label htmlFor="nombre-familiar3">Nombre*</label>
                                <input required type="text" id="familiar3-nombre" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="apellido-familiar3">Apellido*</label>
                                <input required type="text" id="familiar3-apellido" placeholder="Nombre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="telefono-familiar3">Telefono*</label>
                                <input required type="number" id="familiar3-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/> 
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="direccion-familiar3">Direccion*</label>
                                <input required type="text" id="familiar3-direccion" placeholder="Calle Ejemplo #123" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2">
                                <label htmlFor="parentesco-familiar3">Parentesco*</label>
                                <input required type="text" id="familiar3-parentesco" placeholder="Hermano, Padre, Madre" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>


                        </div>
                    </div>
                

                </div>

                {/* Referencias Personales */}
                <div className="flex flex-col w-full justify-between items-center border-red-500 border my-4 p-3 rounded-lg">
                    <label htmlFor="referencias-personales" className="text-red-500">3 referencias personales*</label>

                    <div className="flex gap-[2%] w-full">

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia1">Referencia 1*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-nombre">Nombre*</label>
                                <input required type="text" id="referencia1-nombre" placeholder="Raul" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-apellido">Apellido*</label>
                                <input required type="text" id="referencia1-apellido" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-telefono">Telefono*</label>
                                <input required type="text" id="referencia1-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia2">Referencia 2*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-nombre">Nombre*</label>
                                <input required type="text" id="referencia2-nombre" placeholder="Raul" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-apellido">Apellido*</label>
                                <input required type="text" id="referencia2-apellido" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-telefono">Telefono*</label>
                                <input required type="text" id="referencia2-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia3">Referencia 3*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-nombre">Nombre*</label>
                                <input required type="text" id="referencia3-nombre" placeholder="Raul" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-apellido">Apellido*</label>
                                <input required type="text" id="referencia3-apellido" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-telefono">Telefono*</label>
                                <input required type="text" id="referencia3-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Referencias Comerciales */}
                <div className="flex flex-col w-full justify-between items-center border-red-500 border my-4 p-3 rounded-lg">
                    <label htmlFor="referencias-personales" className="text-red-500">3 referencias Comerciales*</label>

                    <div className="flex gap-[2%] w-full">

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia1">Referencia 1*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-empresa">Empresa*</label>
                                <input required type="text" id="referencia1-empresa" placeholder="Distribuidora Ejemp." className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-contacto">Contacto*</label>
                                <input required type="text" id="referencia1-contacto" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-cargo">Cargo*</label>
                                <input required type="text" id="referencia1-cargo" placeholder="Director de Ventas" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia1-telefono">Telefono*</label>
                                <input required type="text" id="referencia1-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia2">Referencia 2*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-empresa">Empresa*</label>
                                <input required type="text" id="referencia2-empresa" placeholder="Distribuidora Ejemp." className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-contacto">Contacto*</label>
                                <input required type="text" id="referencia2-contacto" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-cargo">Cargo*</label>
                                <input required type="text" id="referencia2-cargo" placeholder="Director de Ventas" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia2-telefono">Telefono*</label>
                                <input required type="text" id="referencia2-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                        <div className="flex flex-col w-[32%]">
                            <label htmlFor="referencia3">Referencia 3*</label>
                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-empresa">Empresa*</label>
                                <input required type="text" id="referencia3-empresa" placeholder="Distribuidora Ejemp." className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-contacto">Contacto*</label>
                                <input required type="text" id="referencia3-contacto" placeholder="Perez" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-cargo">Cargo*</label>
                                <input required type="text" id="referencia3-cargo" placeholder="Director de Ventas" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>

                            <div className="flex gap-2 w-full">
                                <label htmlFor="referencia3-telefono">Telefono*</label>
                                <input required type="text" id="referencia3-telefono" placeholder="8095554444" className="border rounded-lg px-2 w-full mb-2"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center w-full">
                    <button type="submit" className="bg-[#DE3933] text-white px-4 py-2 rounded-lg hover:bg-[#c32a2a] transition-colors duration-300">
                        Enviar Solicitud
                    </button>
                </div>
            </ScaleIn>
        </form>
        
    </div>
  );
}

export default Page;