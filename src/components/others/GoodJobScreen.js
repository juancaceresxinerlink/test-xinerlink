import React from 'react'

export const GoodJobScreen = () => {
    return (
        <div>
            <div id="titlebar" style={{ background: 'linear-gradient(0deg, rgba(42, 46, 50, 0.70), rgba(42, 46, 50, 0.70)), url(images/fondo-xl2.png)' }}>
                <div className="container">
                    <br />
                    <div className="sixteen columns">
                        <h1 style={{ color: 'white' }}>¿Qué es un buen trabajo?</h1>
                        <span style={{ color: 'white' }}>En XinerLink, nuestra esencia es siempre ofrecer nuevas y mejores oportunidades laborales para nuestros postulantes y trabajadores. Aquí podrás conocer los pilares en los que se sustenta nuestra oferta de valor. <br /><br />¡Déjanos ayudarte a encontrar un buen trabajo para ti!</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="sixteen columns blog">
                    <p>XinerLink es una empresa con más de 25 años de experiencia dedicada a la externalización de Recursos Humanos. Hoy contamos con más de 8.600 trabajadores a lo largo de todo el país y somos la puerta de entrada para las empresas más importantes del país!</p>
                    <p><i className="fa fa-check"></i> Somos tu empleador</p>
                    <p><i className="fa fa-check"></i> Tendras un contrato formal cumpliendo con toda la normativa legal</p>
                    <p><i className="fa fa-check"></i> Cuentas con un equipo humano y profesional dedicado a mejorar la experiencia de nuestros trabajadores día a día</p>
                    <p><i className="fa fa-check"></i> 25 años respaldan nuestra labor</p>
                    <p><i className="fa fa-check"></i> Más de 100 empresas en todo el país contratan a través de nosotros</p>
                    <p><i className="fa fa-check"></i> Ofrecemos trabajo todo el año!</p>

                    <h1>Los pilares de un buen trabajo en XinerLink.</h1>

                    <div className="widget">

                        <ul className="tabs-nav blog">
                            <li className="active"><a href="#tab1">confiable</a></li>
                            <li><a href="#tab2">inclusivo</a></li>
                            <li><a href="#tab3">flexible</a></li>

                        </ul>

                        <div className="tabs-container">

                            <div className="tab-content" id="tab1">

                                <ul className="widget-tabs">

                                    <li>
                                        <div className="widget">
                                            <div className="post-quote">
                                                <span className="icon"></span>
                                                <blockquote>
                                                    Un buen trabajo es confiable y te da seguridad.
                                <br /><br />
                                Nuestro compromiso está siempre basado en la honestidad y capacidad técnica, tanto en nuestro comportamiento individual como colectivo.
                                <br /><br />
                                Nuestros procesos están certificados, lo que nos permite cumplir nuestras obligaciones con reponsabilidad y puntualidad hacia nuestros colaboradores.
                            </blockquote>
                                            </div>
                                        </div>
                                    </li>


                                </ul>

                            </div>

                            <div className="tab-content" id="tab2">
                                <ul className="widget-tabs">

                                    <div className="widget">



                                        <div className="post-quote">
                                            <span className="icon"></span>
                                            <blockquote>
                                                La diversidad forma parte de la cultura de XinerLink.
                            <br /><br />Sabemos por experiencia que una discapacidad, preferencia sexual o nacionalidad no están asociados a un mejor o peor desempeño laboral.
                            <br /><br />Es por esto que desde el año 2017 tenemos un programa especial de Inclusión y Diversidad, trabajando y capacitándonos día a día para ser un referente en la industria de RRHH.
						</blockquote>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            <div className="tab-content" id="tab3">

                                <ul className="widget-tabs">

                                    <div className="widget">
                                        <div className="post-quote">
                                            <span className="icon"></span>
                                            <blockquote>
                                                Un buen trabajo es flexible.
                                <br /><br />
                                Tenemos la capacidad de adaptabilidad suficiente para ser flexibles a cambios, desafíos y necesidades
                            </blockquote>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="widget">
                        <h4>Síguenos</h4>
                        <ul className="social-icons">
                            <li><a className="facebook" target="_blank" rel="noopener noreferrer" href="http://fb.com/xinerlink"><i className="icon-facebook"></i></a></li>
                            <li><a className="twitter" target="_blank" rel="noopener noreferrer" href="http://twitter.com/xinerlink"><i className="icon-twitter"></i></a></li>
                            <li><a className="instagram" target="_blank" rel="noopener noreferrer" href="http://instagram.com/xinerlink"><i className="icon-instagram"></i></a></li>
                            <li><a className="linkedin" target="_blank" rel="noopener noreferrer" href="http://linkedin.com/company/xinerlink"><i className="icon-linkedin"></i></a></li>
                        </ul>
                    </div>

                    <div className="clearfix"></div>
                    <div className="margin-bottom-40"></div>

                </div>
            </div>
        </div>
    )
}
