import React from 'react'
import { GetAllJobs } from '../../functions/GetAllJobs';

export const Cifras = () => {

	
	const {count, slots} = GetAllJobs();
	
    return (
        <div id="cifras" className="container">
		<div className="four columns">
			<div className="counter-box">
				<span id="jobsCounter" className="counter">{count}</span><i></i>
				<p style={{color: "black"}} >Ofertas de Empleo</p>
			</div>
		</div>

		<div className="four columns">
			<div className="counter-box">
				<span id="vacanciesCounter" className="counter">{slots}</span>
				<p style={{color: "black"}} >Vacantes</p>
			</div>
		</div>

		<div className="four columns">
			<div className="counter-box">
				<span className="counter">8600</span>
				<p style={{color: "black"}} >Personas tienen un buen trabajo con XinerLink</p>
			</div>
		</div>

		<div className="four columns">
			<div className="counter-box">
				<span className="counter">22</span>
				<p style={{color: "black"}} >Sucursales en todo Chile</p>
			</div>
		</div>
	</div>
    )
}
