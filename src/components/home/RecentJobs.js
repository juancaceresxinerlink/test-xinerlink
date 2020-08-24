import React from 'react'
import { Link } from 'react-router-dom'
import { GetRecentJobs } from '../../functions/GetRecentJobs'
import { JobCard } from '../ui/JobCard';

export const RecentJobs = () => {

    // Obtengo los trabajos recientes para mostrarlos en el componente
    const jobs = GetRecentJobs();

    return (
        <div className="padding-right">
            <h3 className="margin-bottom-25 centered-headline">
                <a href="#job-offers">↓ Trabajos publicados recientemente ↓</a>
            </h3>
            <div className="listings-container">

                {
                    jobs.map(job => {
                        return <JobCard key={job.id} {...job} />
                    })
                }

            </div>

            <Link to="/oportunidades" className="button centered">
                <i className="fa fa-plus-circle"></i> Ver más oportunidades laborales
            </Link>
            <div className="margin-bottom-55"></div>
        </div>
    )
}
