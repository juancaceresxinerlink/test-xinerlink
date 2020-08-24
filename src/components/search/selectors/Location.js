import React, { useContext } from 'react'
import Select from 'react-select';
import { SearchContext } from '../SearchContext';
import { GetAllJobs } from '../../../functions/GetAllJobs';

export const Location = () => {

    const { filters, setFilters } = useContext(SearchContext);

    const handleChange = (result) => {

        if (!result) {
            setFilters({ ...filters, locations: [], page: 0 });
        }
        else {
            setFilters({ ...filters, locations: result.map(r => r.value), page: 0 });
        }

    }

    const { locations } = GetAllJobs();

    const options = locations.map(element => {
        return { value: element, label: element }
    });

    // Para controlar los valores por defectos

    let valueDef = [];
    if (filters.locations === []) {
        valueDef = [];
    }
    else {
        for (let i = 0; i < options.length; i++) {
            for (let x = 0; x < filters.locations.length; x++) {
                if (filters.locations[x] === options[i].value) {
                    valueDef = valueDef.concat(options[i]);
                }
            }
        }
    }


    return (
        <Select
            value={valueDef}
            clearValue
            placeholder={'Todos'}
            options={options}
            onChange={handleChange}
            isMulti
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

