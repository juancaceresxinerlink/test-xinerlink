import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../components/search/SearchContext';

export const resetContext = () => {

    const { setFilters } = useContext(SearchContext);

    useEffect(() => {

        setFilters({
            orderBy: 'recent',
            brand: '',
            locations: [],
            min_salary: 0,
            max_salary: 999999999
        });

    }, []);
    
    return;
}
