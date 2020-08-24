import React from 'react'
import { OrderBy } from './selectors/OrderBy'
import { Brand } from './selectors/Brand'
import { Location } from './selectors/Location'
import { Salary } from './selectors/Salary'

export const Filter = () => {


    return (
        <div className="five columns">

            <div className="widget">
                <h4>Ordenar Por</h4>
                <OrderBy/>
            </div>

            <div className="widget">
                <h4>Rubro</h4>
                <Brand/>

            </div>

            <div className="widget">
                <h4>Ubicación</h4>

                <Location/>

            </div>

            <div className="widget">
                <h4>Sueldo</h4>

                <Salary/>

            </div>



        </div >
    )
}
