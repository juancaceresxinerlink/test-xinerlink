import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetAllJobs } from '../../functions/GetAllJobs';
import { SearchContext } from '../search/SearchContext';

export const Categories = () => {

    const { filters, setFilters} = useContext(SearchContext)


    const { jobs } = GetAllJobs();

    const getSlots = (brand) => {
        let filtred = jobs.filter(job => job.brand.toLowerCase().includes(brand.toLowerCase()));
        if (filtred.length > 0) {
            return filtred.map(item => item.slots).reduce((prev, next) => prev + next);
        }
        else return 0;
    }

    // console.log(.map(item => item.slots).reduce((prev, next) => prev + next));

    return (
        <div id="rubros" className="sixteen columns">
            <h3 className="margin-bottom-20 margin-top-10">Rubros donde ofrecemos trabajo</h3>

            <div className="categories-boxes-container">

                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Administrativos', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Laptop-3"></i>
                    <h4>Administrativos</h4>
                    <span>{getSlots('Administrativos')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Higiene', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Rain-Drop"></i>
                    <h4>Higiene</h4>
                    <span>{getSlots('Higiene')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Inclusión y Diversidad', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Wheelchair"></i>
                    <h4>Inclusión y Diversidad</h4>
                    <span>{getSlots('Inclusión y Diversidad')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Logística', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Worker"></i>
                    <h4>Logística</h4>
                    <span>{getSlots('Logística')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Minería', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Worker-Clothes"></i>
                    <h4>Minería</h4>
                    <span>{getSlots('Minería')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Pausa Activa', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Eyebrow-3"></i>
                    <h4>Pausa Activa</h4>
                    <span>{getSlots('Pausa Activa')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Retail', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Shop"></i>
                    <h4>Retail</h4>
                    <span>{getSlots('Retail')}</span>
                </Link>

                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Salud', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Nurse"></i>
                    <h4>Salud</h4>
                    <span>{getSlots('Salud')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Servicios Financieros', page: 0})} className="category-small-box">
                    <i className="ln  ln-icon-Management"></i>
                    <h4>Servicios Financieros</h4>
                    <span>{getSlots('Servicios Financieros')}</span>
                </Link>

                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Seguridad', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Security-Block"></i>
                    <h4>Seguridad</h4>
                    <span>{getSlots('Seguridad')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'Selección', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Administrator"></i>
                    <h4>Selección</h4>
                    <span>{getSlots('Selección')}</span>
                </Link>
                <Link to="/oportunidades" onClick={() => setFilters({...filters, brand: 'TI', page: 0})} className="category-small-box">
                    <i className="ln ln-icon-Wifi"></i>
                    <h4>Tecnologías de Información</h4>
                    <span>{getSlots('TI')}</span>
                </Link>

            </div>

            <div className="clearfix"></div>
            <div className="margin-top-30"></div>
            <div className="margin-bottom-55"></div>
        </div>
    )
}
