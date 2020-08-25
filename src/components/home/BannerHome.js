import React, { useContext } from 'react';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom'
import { GetAllJobs } from '../../functions/GetAllJobs'
import { useForm } from '../../hooks/useForm';
import { SearchContext } from '../search/SearchContext';

export const BannerHome = ({ history }) => {

    const {filters, setFilters} = useContext(SearchContext);

    const { count } = GetAllJobs();

    // Obtenemos parametros de la URL
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)

    // activamos el buscador del formulario
    const [values, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = values;

    // ejecutamos el buscador
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/oportunidades?q=${searchText}`);
        setFilters({...filters, page: 0});
    }

    return (
        <div id="banner" style={{ background: "url(images/fondo-xl1.png)" }}>
            <div className="container">
                <div className="sixteen columns">

                    <div className="search-container">
                        <h2>Encuentra un buen trabajo</h2>
                        <div className="announce">
                            ¡Tenemos más de <strong>{count}</strong> oportunidades laborales para ti!
                        </div>
                        <br />
                        <form onSubmit={handleSearch}>
                            <input type="text" className="ico-01" placeholder="Cargo o Especialidad" name="searchText" onChange={handleInputChange} />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>

                        <div className="browse-jobs">
                            o busca trabajos por
                            <a href="#rubros">Rubro</a>
                            <Link to="/cargos">Cargo</Link>
                            <Link to="/oportunidades">Ver todos</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
