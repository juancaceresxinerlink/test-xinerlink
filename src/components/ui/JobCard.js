import React from 'react'
import moment from 'moment';
import 'moment/locale/es';

export const JobCard = ({ id, title, workday, locations, brand, show_salary, min_salary, max_salary, order_date }) => {

    // Funcion para obtener las clases y el topo de trabajo a partir de la prop Workday
    const getStyles = () => {
        switch (workday) {
            case 'full_time': return { classCard: 'full-time', workdayText: 'Horario Oficina' };
            case 'part_time_morning': return { classCard: 'part-time', workdayText: 'Turno Mañana' };
            case 'part_time_afternoon': return { classCard: 'part-time', workdayText: 'Turno Tarde' };
            case 'part_time_night': return { classCard: 'part-time', workdayText: 'Turno Noche' };
            case 'part_time': return { classCard: 'part-time', workdayText: 'Part Time' };
            case 'shift_work': return { classCard: 'internship', workdayText: 'Turnos' };
            default: return { classCard: 'freelance', workdayText: 'Freelance' };
        }
    }
    // Desestructuración para sacar los elementos de la función
    const { classCard, workdayText } = getStyles();

    // Funcion para obtener los iconos segun su brand-name
    const getIcon = () => {
        switch (brand) {
            case 'Selección': return 'Administrator';
            case 'TI': return 'Wifi';
            case 'Inclusión y Diversidad': return 'Wheelchair';
            case 'Administrativos': return 'Laptop-3';
            case 'Pausa Activa': return 'Eyebrow-3';
            case 'Seguridad': return 'Security-Block';
            case 'Higiene': return 'Rain-Drop';
            case 'Servicios Financieros': return 'Management';
            case 'Retail': return 'Shop';
            case 'Minería': return 'Worker-Clothes';
            case 'Logística': return 'Worker';
            case 'Salud': return 'Nurse';
            default: return '';
        }
    }

    // Seteamos el idioma español al MomentJS
    moment.locale('es');
    const date = moment(order_date).fromNow();


    return (
        <a href={`http://trabajo.xinerlink.cl/jobs/${id}`}
            className={`listing ${classCard} animate__animated animate__fadeIn`}>
            <div className="listing-title">
                <h4>{title} <span className="listing-type">{workdayText}</span></h4>
                <ul className="listing-icons">
                    <li><i className={`ln ln-icon-${getIcon()}`}></i> {brand}</li>
                    <li><i className="ln ln-icon-Map2"></i> {locations[0].city.name}</li>
                    {
                        show_salary &&
                        <li><i className="ln ln-icon-Money-2"></i>
                            {(min_salary > 0) && '$' + min_salary}
                            {((max_salary > 0) && (min_salary > 0) && (max_salary !== min_salary)) && ' - '}
                            {(max_salary > 0 && min_salary !== max_salary) && '$' + max_salary}
                        </li>
                    }
                    <li>
                        <div className={`listing-date ${ (date.includes('minuto') || date.includes('segundo') || date.includes('hora')) && 'new' }`}>{date}</div>
                    </li>
                </ul>
            </div>
        </a>
    )
}
