import React, { useState } from 'react'
import { JobCard } from '../ui/JobCard'

export const SearchResult = ({ jobs }) => {


    const [page, setPage] = useState(0);

    // Detectamos la cantidad de páginas necesarias
    const pages = Math.ceil((jobs.length) / 10);

    var resultJobs = [];

    for (let i = 0; i < pages; i++) {
        resultJobs = resultJobs.concat([jobs.slice(i * 10, (i * 10) + 10)])
        console.log('hola')
    }

    console.log(resultJobs[page]);



    return (
        <div className="listings-container">

            {
                (jobs.length === 0) &&
                <h5 style={{ textAlign: 'center' }} className="animate__animated animate__fadeIn">No se encontró resultados con tus filtros seleccionados...</h5>
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
                            <button onClick={() => setPage(page - 1)}>←</button>
                        }
                        {
                            page < pages - 1 &&
                            <button style={{ float: 'right' }} onClick={() => setPage(page + 1)}>→</button>
                        }
                    </ul>
                </nav>
            </div>

        </div>
    )
}
