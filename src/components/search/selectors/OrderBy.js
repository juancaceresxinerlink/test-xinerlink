import React, { useContext } from 'react'
import Select from 'react-select'
import { SearchContext } from '../SearchContext';

export const OrderBy = () => {

    const { filters, setFilters } = useContext(SearchContext);

    const handleChange = ({ value }) => {
        setFilters({ ...filters, orderBy: value, page: 0 });
    }

    const options = [
        { value: 'recent', label: 'Más nuevas primero' },
        { value: 'oldest', label: 'Mas antiguas primero' },
        { value: 'ratehigh', label: 'Mayor salario primero' },
        { value: 'ratelow', label: 'Menor salario primero' }
    ]

    // Para controlar los valores por defectos
    let valueDef;
    for (let i = 0; i < options.length; i++) {
        if (filters.orderBy === options[i].value) {
            valueDef = options[i];
        }
    }


    return (
        <Select
            value={valueDef}
            options={options}
            onChange={handleChange}
            isSearchable={false}
            theme={theme => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    text: '#444444',
                    primary25: '#f0f0f0',
                    primary: '#389494',
                    primary50: '#e0e0e0'
                }
            })}
        />
    )
}
