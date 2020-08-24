import React, { useEffect } from 'react'
import { GetAllJobs } from '../../functions/GetAllJobs'
import { SearchResult } from './SearchResult'

export const ContainResult = () => {

    const { filterJobs } = GetAllJobs();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="eleven columns">
            <div className="padding-right">
                <SearchResult jobs={filterJobs} />
            </div>
        </div>
    )
}
