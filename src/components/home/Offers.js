import React from 'react'
import { RecentJobs } from './RecentJobs'
import { BannerCV } from './BannerCV'
import { Categories } from './Categories'

export const Offers = () => {
    return (
        <div id="job-offers" className="container">

		<div className="sixteen columns">
            <RecentJobs/>
            <BannerCV/>
            <Categories/>
		</div>
	</div>
    )
}
