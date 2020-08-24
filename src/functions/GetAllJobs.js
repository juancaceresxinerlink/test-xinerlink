import { useContext } from 'react';
import queryString from 'query-string';
import { jobs } from './data'
import { SearchContext } from '../components/search/SearchContext';
import { useLocation } from 'react-router-dom';

export const GetAllJobs = () => {

    // Obtengo todos los filtros
    const { filters } = useContext(SearchContext);

    // Obtenemos los parametros que vienen por la URL
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)

    // Filtramos por titulo o descripcion
    var filterJobs = jobs.filter(job => {
        if(job.title.toLowerCase().includes(q.toLowerCase()) || job.description.toLowerCase().includes(q.toLowerCase()) || job.brand.toLowerCase().includes(q.toLowerCase()) || job.min_requirements.toLowerCase().includes(q.toLowerCase())) return true;
        return false;
    });
    
    // Filtramos por el rubro
    filterJobs = filterJobs.filter(job => job.brand.includes(filters.brand));

    // Filtramos por el location
    if (filters.locations.length > 0) {

        filterJobs = filterJobs.filter(job => {

            const interLocations = job.locations.map(l => l.city.name);

            for(let i = 0; i<interLocations.length; i++)
            {
                for(let x = 0; x<filters.locations.length; x++)
                {
                    if(interLocations[i].includes(filters.locations[x])) return true;
                }
            }
            return false;

        });
    }

    // Filtramos sueldos
    filterJobs = filterJobs.filter( job => {

        if(job.max_salary >= filters.min_salary && job.max_salary <= filters.max_salary) return true;
        return false;

    });

    // Ordenamos por los parametros del formulario
    switch (filters.orderBy) {
        case 'recent': {
            filterJobs.sort((a, b) => {
                if (a.order_date < b.order_date) return 1
                else if (a.order_date > b.order_date) return -1
                else return 0
            });
            break
        }
        case 'oldest': {
            filterJobs.sort((a, b) => {
                if (a.order_date > b.order_date) return 1
                else if (a.order_date < b.order_date) return -1
                else return 0
            });
            break
        }
        case 'ratehigh': {
            filterJobs.sort((a, b) => {
                if (a.max_salary < b.max_salary) return 1
                else if (a.max_salary > b.max_salary) return -1
                else return 0
            });
            break
        }
        case 'ratelow': {
            filterJobs.sort((a, b) => {
                if (a.max_salary > b.max_salary) return 1
                else if (a.max_salary < b.max_salary) return -1
                else return 0
            });
            break
        }
        default: return
    }


    // Para obtener los valores del contador del home
    const count = jobs.length;
    const slots = jobs.map(item => item.slots).reduce((prev, next) => prev + next);


    // Obtener categorias
    const jobsBrands = jobs.map(job => job.brand);
    const brands = jobsBrands.filter((el, index) => jobsBrands.indexOf(el) === index);


    // Obtener locations
    const jobsLocations = jobs.map(job => job.locations);
    var result = jobsLocations[0]
    for (let i = 1; i < jobsLocations.length; i++) {
        result = result.concat(jobsLocations[i]);
    }
    const preformat = result.map(r => r.city.name);
    const locations = preformat.filter((el, index) => preformat.indexOf(el) === index);

    return { jobs, count, slots, filterJobs, brands, locations };

}




