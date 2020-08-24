import React from 'react'
import { BannerHome } from './BannerHome'
import { Cifras } from './Cifras'
import { Offers } from './Offers'

export const HomeScreen = ({ history, location }) => {


    return (
        <>
            <BannerHome history={history} location={location} />
            <Cifras />
            <Offers />
        </>
    )
}
