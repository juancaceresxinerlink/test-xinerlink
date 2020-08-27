import { useContext } from 'react';
import { SearchContext } from '../components/search/SearchContext';

export const GetRecentJobs = (from = 0, to = 5) => {

    const { data } = useContext(SearchContext);

    const jobs = data.body.jobs.map((job) => {
        return {
            "id": job.id,
            "title": job.title,
            "order_date": job.order_date,
            "workday": job.workday,
            "contract_type": job.contract_type,
            "slots": job.slots,
            "min_salary": job.min_salary,
            "max_salary": job.max_salary,
            "show_salary": job.show_salary,
            "status": job.status,
            "brand": job.brand.name.replace('Xinerlink - Unidad ', ''),
            "locations": job.locations,
            "description": job.description,
            "min_requirements": job.min_requirements
        }
    });

    return jobs.slice(from, to);

}
