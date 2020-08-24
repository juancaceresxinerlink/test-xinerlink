import React from 'react'
import { HeaderForm } from './HeaderForm'
import { ContainResult } from './ContainResult'
import { Filter } from './Filter'

export const SearchScreen = ({ history, location }) => {

    return (
        <>
            <HeaderForm history={history} location={location} />
            <div className="container">
                <ContainResult />
                <Filter />
            </div>
        </>
    )
}
