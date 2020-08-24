import React, { useContext } from 'react'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { GetAllJobs } from '../../functions/GetAllJobs';
import { useLocation } from 'react-router-dom';
import { SearchContext } from './SearchContext';

export const HeaderForm = ({ history }) => {

    // Para contar los resultados y procesar las vacantes
    const { filterJobs } = GetAllJobs();

    // Obtengo todos los filtros
    const { filters, setFilters } = useContext(SearchContext);

    let slots = 0;
    if (filterJobs.length > 0) {
        slots = filterJobs.map(item => item.slots).reduce((prev, next) => prev + next);
    }
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
    }

    const resetContext = () => {
        setFilters({
            page: 0,
            orderBy: 'recent',
            brand: '',
            locations: [],
            min_salary: 0,
            max_salary: 999999999
        });
    }

    return (
        <div id="titlebar">
            <div className="container">
                <h2>Oportunidades Laborales</h2>
                <span> <span style={{ fontWeight: 1000 }}>{filterJobs.length}</span> trabajos y <span style={{ fontWeight: 1000 }}>{slots}</span> vacantes
			coinciden con tu búsqueda.</span>
                <form onSubmit={handleSearch}>
                    <input type="text" className="ico-01" placeholder="Cargo o Especialidad" name="searchText" value={searchText} onChange={handleInputChange} />
                </form>
                <h2>
                    {
                        filters.brand &&
                        <span className="tag" onClick={() => setFilters({ ...filters, brand: '' })}>Rubro: {filters.brand} <i className="fa fa-close"></i></span>
                    }
                    {
                        !(filters.min_salary === 0 && filters.max_salary === 999999999) &&
                        <span className="tag" onClick={() => setFilters({ ...filters, min_salary: 0, max_salary: 999999999 })}>Salario: ${filters.min_salary} - ${filters.max_salary} <i className="fa fa-close"></i></span>
                    }
                    <span className="tag-clean" onClick={resetContext}>limpiar búsqueda <i className="fa fa-close"></i></span>
                </h2>
            </div>
        </div >
    )
}
