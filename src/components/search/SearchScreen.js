import React, { useContext } from 'react'
import { HeaderForm } from './HeaderForm'
import { ContainResult } from './ContainResult'
import { Filter } from './Filter'
import { SearchContext } from './SearchContext'
import { Loading } from '../ui/Loading'

export const SearchScreen = ({ history, location }) => {

    const { loading } = useContext(SearchContext);

    return (
        <>
            {
                !loading ?
                (
                    <>
                    <HeaderForm history={history} location={location} />
                    <div className="container">
                        <ContainResult />
                        <Filter />
                    </div>
                    </>

                )
                :
                <Loading/>

            }
        </>
    )
}
