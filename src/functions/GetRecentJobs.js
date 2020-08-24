import { jobs } from './data'

export const GetRecentJobs = (from = 0, to = 5) => {

    return jobs.slice(from, to);

}
