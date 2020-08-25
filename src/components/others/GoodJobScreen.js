import React, { useState, useEffect } from 'react'
import { Quote1 } from './quotes/Quote1'
import { Quote2 } from './quotes/Quote2'
import { Quote3 } from './quotes/Quote3'

export const GoodJobScreen = () => {

    const [quote, setQuote] = useState(1);

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
                            <li><a href="#!" className={quote === 1 && 'active'} onClick={ (e) => {e.preventDefault(); setQuote(1)} }>confiable</a></li>
                            <li><a href="#!" className={quote === 2 && 'active'} onClick={ (e) => {e.preventDefault(); setQuote(2)} }>inclusivo</a></li>
                            <li><a href="#!" className={quote === 3 && 'active'} onClick={ (e) => {e.preventDefault(); setQuote(3)} }>flexible</a></li>
                        </ul>

                        <div className="tabs-container">
                            {
                                quote === 1 &&
                                <Quote1/>
                            }
                            {
                                quote === 2 &&
                                <Quote2/>
                            }
                            {
                                quote === 3 &&
                                <Quote3/>
                            }

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
