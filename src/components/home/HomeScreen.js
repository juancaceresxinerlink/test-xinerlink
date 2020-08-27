import React, { useContext } from 'react'
import { BannerHome } from './BannerHome'
import { Cifras } from './Cifras'
import { Offers } from './Offers'
import { SearchContext } from '../search/SearchContext'
import { Loading } from '../ui/Loading'

export const HomeScreen = ({ history, location }) => {

    const { loading } = useContext(SearchContext);

    return (
        <>
            {
                !loading ?
                    (
                        <>
                            <BannerHome history={history} location={location} />
                            <Cifras />
                            <Offers />
                        </>

                    )
                    :
                    <Loading />
            }
        </>
    )
}
