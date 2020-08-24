import React from 'react'
import { Redirect } from 'react-router-dom'

export const redirect = (searchText) => {

    console.log('hola')
    return (
        <Redirect
            to={{
                pathname: "/oportunidades",
                search: `?q=${searchText}`
            }}
        />
    )
}
