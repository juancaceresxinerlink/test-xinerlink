import React, { useContext } from 'react'
import { JobCard } from '../ui/JobCard'
import { SearchContext } from './SearchContext';

export const SearchResult = ({ jobs }) => {

    const { filters, setFilters } = useContext(SearchContext);

    const { page } = filters;

    // Detectamos la cantidad de páginas necesarias
    const pages = Math.ceil((jobs.length) / 10);

    var resultJobs = [];

    for (let i = 0; i < pages; i++) {
        resultJobs = resultJobs.concat([jobs.slice(i * 10, (i * 10) + 10)])
    }

    return (
        <div className="listings-container">

            {
                (jobs.length === 0) &&
                <h5 style={{ textAlign: 'center' }} className="animate__animated animate__fadeIn">No tenemos resultados que coincidan con tu búsqueda. Pero recuerda que puedes dejarnos tu CV <a href="https://trabajo.xinerlink.cl/jobs/1029494">aquí</a> y te consideraremos en futuras búsquedas.</h5>
            }
            {
                (jobs.length > 0) &&
                resultJobs[page].map(job => {
                    return <JobCard key={job.id} {...job} />
                })
            }

            <div className="pagination-container">
                <nav className="pagination">
                    <ul>
                        {
                            (jobs.length > 0) &&
                            <li className="actualPage">Página {page + 1} de {pages}</li>
                        }
                    </ul>
                </nav>

                <nav className="pagination-next-prev">
                    <ul>
                        {
                            page > 0 &&
                            <button onClick={() => setFilters({...filters, page: page-1})}>←</button>
                        }
                        {
                            page < pages - 1 &&
                            <button style={{ float: 'right' }} onClick={() => setFilters({...filters, page: page+1})}>→</button>
                        }
                    </ul>
                </nav>
            </div>

        </div>
    )
}
