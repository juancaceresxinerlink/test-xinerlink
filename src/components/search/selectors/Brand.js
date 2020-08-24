import React, { useContext } from 'react'
import Select from 'react-select';
import { SearchContext } from '../SearchContext';
import { GetAllJobs } from '../../../functions/GetAllJobs';

export const Brand = () => {

    const { filters, setFilters } = useContext(SearchContext);

    const handleChange = ({ value }) => {
        setFilters({ ...filters, brand: value, page: 0 });
    }

    const { brands } = GetAllJobs();


    let options = brands.map(element => {
        return { value: element, label: element }
    });
    options.push({ value: '', label: 'Todos' });

    options = options.reverse()

    // Para controlar los valores por defectos
    
    let valueDef;
    if(filters.brand === '')
    {
        valueDef = options[0];
    }
    else{
        for(let i=0; i<options.length; i++)
        {
            if(filters.brand === options[i])
            {
                valueDef = options[i];
            }
        }
    }

    return (
        <Select
            value={valueDef}
            clearValue
            options={options}
            onChange={handleChange}
            isSearchable={true}
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
