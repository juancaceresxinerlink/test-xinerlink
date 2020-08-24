import React from 'react';
import { Link } from 'react-router-dom';

export const CargosScreen = () => {

    return (
        <>
            <div id="titlebar">
                <div className="container">
                    <div className="sixteen columns">
                        <h2>Nuestros cargos</h2>
                        <span>Contamos con un importante catálogo de cargos donde somos especialistas.</span>
                    </div>
                </div>
            </div>

            <div id="categories">
                <div className="categories-group">
                    <div className="container">
                        <div className="four columns">
                            <h4><i className="ln ln-icon-Worker"></i> <br />Logística</h4>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Administrativo">Administrativo</Link></li>
                                <li><Link to="/oportunidades?q=Apilador Eléctrico">Apilador Eléctrico</Link></li>
                                <li><Link to="/oportunidades?q=Auxiliar De Apoyo">Auxiliar De Apoyo</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Conductor">Conductor</Link></li>
                                <li><Link to="/oportunidades?q=Despachador">Despachador</Link></li>
                                <li><Link to="/oportunidades?q=Movilizador">Movilizador</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Operario">Operario</Link></li>
                                <li><Link to="/oportunidades?q=Peoneta">Peoneta</Link></li>
                                <li><Link to="/oportunidades?q=Técnico">Técnico</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="categories-group">
                    <div className="container">
                        <div className="four columns">
                            <h4><i className="ln ln-icon-Computer"></i> <br />Web, Software y TI</h4>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Administrador De Sistema">Administrador De Sistema</Link></li>
                                <li><Link to="/oportunidades?q=Analista">Analista</Link></li>
                                <li><Link to="/oportunidades?q=QA">QA</Link></li>
                                <li><Link to="/oportunidades?q=Ciberseguridad">Ciberseguridad</Link></li>

                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=DBA">DBA</Link></li>
                                <li><Link to="/oportunidades?q=Desarrollador">Desarrollador</Link></li>
                                <li><Link to="/oportunidades?q=Full">Full</Link></li>
                                <li><Link to="/oportunidades?q=Ingenieros">Ingenieros</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Networking">Networking</Link></li>
                                <li><Link to="/oportunidades?q=Manager">Manager</Link></li>
                                <li><Link to="/oportunidades?q=Programador">Programador</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="categories-group">
                    <div className="container">
                        <div className="four columns">
                            <h4><i className="ln ln-icon-Management"></i> <br />Servicios Financieros</h4>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Asesor">Asesor</Link></li>
                                <li><Link to="/oportunidades?q=Asistente">Asistente</Link></li>
                                <li><Link to="/oportunidades?q=Asistente De Riesgo">Asistente De Riesgo</Link></li>
                                <li><Link to="/oportunidades?q=Atención Meson Cliente">Atención Meson Cliente</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Atención Cliente">Atención Cliente</Link></li>
                                <li><Link to="/oportunidades?q=Cajero">Cajero</Link></li>
                                <li><Link to="/oportunidades?q=Ejecutivo Call Center">Ejecutivo Call Center</Link></li>
                                <li><Link to="/oportunidades?q=Ejecutivo Contact Center">Ejecutivo Contact Center</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="categories-group">
                    <div className="container">
                        <div className="four columns">
                            <h4><i className="ln ln-icon-Administrator"></i> <br />Profesionales</h4>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Acreditador">Acreditador</Link></li>
                                <li><Link to="/oportunidades?q=Administrativo">Administrativo</Link></li>
                                <li><Link to="/oportunidades?q=Analista">Analista</Link></li>
                                <li><Link to="/oportunidades?q=Asistente">Asistente</Link></li>

                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Back office">Back office</Link></li>
                                <li><Link to="/oportunidades?q=Digitador">Digitador</Link></li>
                                <li><Link to="/oportunidades?q=Ejecutivo">Ejecutivo</Link></li>
                                <li><Link to="/oportunidades?q=Gestor">Gestor</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Junior">Junior</Link></li>
                                <li><Link to="/oportunidades?q=Matriculador">Matriculador</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="categories-group">
                    <div className="container">
                        <div className="four columns">
                            <h4><i className="ln ln-icon-Shop"></i> <br />Retail / Trade Marketing</h4>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Asistente de venta">Asistente de venta</Link></li>
                                <li><Link to="/oportunidades?q=Ejecutivo de Venta">Ejecutivo de Venta</Link></li>
                                <li><Link to="/oportunidades?q=Promovendedor">Promovendedor</Link></li>
                                <li><Link to="/oportunidades?q=Promocaptador">Promocaptador</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Reponedor">Reponedor</Link></li>
                                <li><Link to="/oportunidades?q=Supervisor">Supervisor</Link></li>
                                <li><Link to="/oportunidades?q=Vendedor En Terreno">Vendedor En Terreno</Link></li>
                                <li><Link to="/oportunidades?q=Rutero">Rutero</Link></li>
                            </ul>
                        </div>
                        <div className="four columns">
                            <ul>
                                <li><Link to="/oportunidades?q=Promotor">Promotor</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Worker-Clothes"></i> <br />Minería</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=SSOMA">SSOMA</Link></li>
                            <li><Link to="/oportunidades?q=Jefe De Proyecto">Jefe De Proyecto</Link></li>
                            <li><Link to="/oportunidades?q=Ingeniero De Soporte">Ingeniero De Soporte</Link></li>
                            <li><Link to="/oportunidades?q=Ingeniero Eléctrico">Ingeniero Eléctrico</Link></li>

                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Ingeniero PMO">Ingeniero PMO</Link></li>
                            <li><Link to="/oportunidades?q=Operador De Combustible">Operador De Combustible</Link></li>
                            <li><Link to="/oportunidades?q=Operario Minera">Operario Minera</Link></li>
                            <li><Link to="/oportunidades?q=Operario Equipos Quimicos">Operario Equipos Quimicos</Link></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Técnico Refrigeración">Técnico Refrigeración</Link></li>
                            <li><Link to="/oportunidades?q=Asistente Administrativo">Asistente Administrativo</Link></li>
                            <li><Link to="/oportunidades?q=Ingeniero Civil Mecánico">Ingeniero Civil Mecánico</Link></li>
                            <li><Link to="/oportunidades?q=Ingeniero Civil Eléctrico">Ingeniero Civil Eléctrico</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Nurse"></i> <br />Salud</h4>
                    </div>

                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Auxiliar">Auxiliar</Link></li>
                            <li><Link to="/oportunidades?q=Conductor Clínico">Conductor Clínico</Link></li>
                            <li><Link to="/oportunidades?q=Conductor Paramédico">Conductor Paramédico</Link></li>
                            <li><Link to="/oportunidades?q=Cuidador">Cuidador</Link></li>
                            <li><Link to="/oportunidades?q=Enfermero/a">Enfermero/a</Link></li>
                            <li><Link to="/oportunidades?q=Estafeta">Estafeta</Link></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Kinesiologo">Kinesiologo</Link></li>
                            <li><Link to="/oportunidades?q=Manipupalor De Alimentos">Manipupalor De Alimentos</Link></li>
                            <li><Link to="/oportunidades?q=Sedile">Sedile</Link></li>
                            <li><Link to="/oportunidades?q=Matrona">Matrona</Link></li>
                            <li><Link to="/oportunidades?q=Médico">Médico</Link></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Nutricionista">Nutricionista</Link></li>
                            <li><Link to="/oportunidades?q=Operador Caldera">Operador Caldera</Link></li>
                            <li><Link to="/oportunidades?q=Operador REAS">Operador REAS</Link></li>
                            <li><Link to="/oportunidades?q=Secretaria">Secretaria</Link></li>
                            <li><Link to="/oportunidades?q=Anfitriona">Anfitriona</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Worker"></i> <br />Producción</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario Embalador">Operario Embalador</Link></li>
                            <li><Link to="/oportunidades?q=Operario Picking">Operario Picking</Link></li>
                            <li><Link to="/oportunidades?q=Operario Polifuncional">Operario Polifuncional</Link></li>
                            <li><Link to="/oportunidades?q=Tecnicos e Ingenieros en Calidad">Tecnicos e Ingenieros en Calidad</Link></li>

                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Planner">Planner</Link></li>
                            <li><Link to="/oportunidades?q=Embaladores">Embaladores</Link></li>
                            <li><Link to="/oportunidades?q=Operario Makila">Operario Makila</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Cow"></i> <br />Agropecuario</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario Cosecheros">Operario Cosecheros</Link></li>
                            <li><Link to="/oportunidades?q=Operario Seleccionadores">Operario Seleccionadores</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Podas">Operario De Podas</Link></li>
                            <li><Link to="/oportunidades?q=Técnico Agricola">Técnico Agricola</Link></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Tecnico Agropecuario">Tecnico Agropecuario</Link></li>
                            <li><Link to="/oportunidades?q=Tecnicos Refrigeracion">Tecnicos Refrigeracion</Link></li>
                            <li><Link to="/oportunidades?q=Agrónomo">Agrónomo</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Calibrado">Operario De Calibrado</Link></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario De Empaque">Operario De Empaque</Link></li>
                            <li><Link to="/oportunidades?q=Embalador">Embalador</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Grúa">Operario De Grúa</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Fish"></i> <br />Salmonera</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario De Recepción De Materias Primas">Operario De Recepción De Materias Primas</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Eviscerado">Operario De Eviscerado</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Limpieza Del Salmón">Operario De Limpieza Del Salmón</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Clasificación">Operario De Clasificación</Link></li>

                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario De Calibrado">Operario De Calibrado</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Fileteado">Operario De Fileteado</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Corte Y Extracción De Espinas Y Piel">Operario De Corte Y Extracción De Espinas Y Piel</Link></li>
                            <li><Link to="/oportunidades?q=>Operario De Empaque">Operario De Empaque</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Drop"></i> <br />Acuicola</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Operario De Recepción De Materias Primas">Operario De Recepción De Materias Primas</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Clasificación">Operario De Clasificación</Link></li>
                            <li><Link to="/oportunidades?q=Operario De Calibrado">Operario De Calibrado</Link></li>
                            <li><Link to="/oportunidades?q=Operarios De Empaque">Operarios De Empaque</Link></li>
                            <li><Link to="/oportunidades?q=Embalador">Embalador</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="categories-group">
                <div className="container">
                    <div className="four columns">
                        <h4><i className="ln ln-icon-Diamond"></i> <br />Aseo , Vigilancia Y Mantención</h4>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Guardia">Guardia</Link></li>
                            <li><Link to="/oportunidades?q=Operador">Operador Cctv</Link></li>
                            <li><Link to="/oportunidades?q=Jardinero">Jardinero</Link></li>
                            <li><Link to="/oportunidades?q=Técnico En Mantención">Técnico En Mantención</Link></li>
                            <li><Link to="/oportunidades?q=Ayudante De Cocina">Ayudante De Cocina</Link></li>

                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><Link to="/oportunidades?q=Aseo">Aseo</Link></li>
                            <li><Link to="/oportunidades?q=Mucama">Mucama</Link></li>
                            <li><Link to="/oportunidades?q=Copero">Copero</Link></li>
                            <li><Link to="/oportunidades?q=Garzón">Garzón</Link></li>
                            <li><Link to="/oportunidades?q=Portero">Portero</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
