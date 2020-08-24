import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <div className="margin-top-15"></div>
            <div id="footer">
                <div className="container">
                    <div className="seven columns">
                        <h4>Sobre Nosotros</h4>
                        <p>Somos XinerLink, una empresa con más de 25 años de experiencia dedicada a la externalización de Recursos Humanos. Hoy contamos con más de 8.600 trabajadores a lo largo de todo el país, somos la puerta de entrada para las empresas más importantes del país!</p>
                        <Link to="/oportunidades" className="button">Ver oportunidades laborales</Link>
                    </div>
                    <div className="four columns">
                        <h4>Secciones</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/oportunidades">Oportunidades laborales</Link></li>
                            <li><a href="https://trabajo.xinerlink.cl/jobs/1029494">Déjanos tu CV</a></li>
                            <li><Link to="/un-buen-trabajo">¿Qué es un buen trabajo?</Link></li>
                            <li><a href="http://www.xinerlink.cl">Sitio Clientes</a></li>
                            <li><a href="https://www.xinerlink.cl/contacto/">Contáctanos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom">
                        <div className="sixteen columns">
                            <h4>Síguenos</h4>
                            <ul className="social-icons">
                                <li><a className="facebook" target="_blank" rel="noopener noreferrer" href="http://fb.com/xinerlink"><i
                                    className="icon-facebook"></i></a></li>
                                <li><a className="twitter" target="_blank" rel="noopener noreferrer" href="http://twitter.com/xinerlink"><i
                                    className="icon-twitter"></i></a></li>
                                <li><a className="instagram" target="_blank" rel="noopener noreferrer" href="http://instagram.com/xinerlink"><i
                                    className="icon-instagram"></i></a></li>
                                <li><a className="linkedin" target="_blank" rel="noopener noreferrer" href="http://linkedin.com/company/xinerlink"><i
                                    className="icon-linkedin"></i></a></li>
                            </ul>
                            <div className="copyrights">© <b>Xinerlink</b>. Todos los derechos Reservados.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="backtotop"><a href="/"><span style={{display: 'none'}}>Go Top</span></a></div>
        </>
    )
}
