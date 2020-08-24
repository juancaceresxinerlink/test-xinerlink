import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <header className="sticky-header">
                <div className="container">
                    <div className="sixteen columns">

                        <div id="logo">
                            <h1>
                                <Link to="/">
                                    <img src="images/logo.png" alt="XinerLink" />
                                </Link>
                            </h1>
                        </div>

                        <nav id="navigation" className="menu">
                            <ul id="responsive">
                                <li>
                                    <NavLink activeClassName="active-link" exact to="/">Inicio</NavLink>
                                </li>


                                <li>
                                    <NavLink activeClassName="active-link" exact to="/oportunidades">Oportunidades laborales</NavLink>
                                    <ul>
                                        <li>
                                            <Link to="/oportunidades">Ofertas</Link>
                                        </li>
                                        <li>
                                            <Link to="/cargos">Cargos</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact to="/un-buen-trabajo">¿Qué es un buen trabajo?</NavLink>
                                </li>
                                <li><a href="https://www.xinerlink.cl/contacto/">Contacto</a></li>
                            </ul>
                        </nav>

                        <div id="mobile-navigation">
                            <a href="#menu" className="menu-trigger"><i className="fa fa-reorder"></i></a>
                        </div>

                    </div>
                </div>
            </header>
            <div className="clearfix"></div>
        </>
    )
}
