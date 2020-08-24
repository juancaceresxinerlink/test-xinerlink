import React, { useContext } from 'react'
import Select from 'react-select'
import { SearchContext } from '../SearchContext';

export const Salary = () => {

    const { filters, setFilters } = useContext(SearchContext);

    const handleChange = ({ value }) => {
        setFilters({ ...filters, min_salary: value.min, max_salary: value.max, page: 0 });
    }

    // Aqui definimos las opciones para los Salarios, como se puede apreciar el Value representa al valor que sera
    // almacenado en el context, y el label es el texto que se ve en el select.
    // el value es un objeto con dos valores: el salario minimo y el salario máximo que hace referencia al rango de salarios
    const options = [
        { value: {min: 0, max: 999999999}, label: 'Todos' },
        { value: {min: 0, max: 200000}, label: '$0 - $200.000' },
        { value: {min: 200000, max: 500000}, label: '$200.000 - $500.000' },
        { value: {min: 500000, max: 1000000}, label: '$500.000 - $1.000.000' },
        { value: {min: 1000000, max: 999999999}, label: '$1.000.000 +' }
    ]
    // Para agregar un campo nuevo solo es necesario copiar uno de los valores del Array y modificar sus valores

    // Para controlar los valores por defectos
    let valueDef;
    if(filters.min_salary === 0 && filters.max_salary === 999999999 )
    {
        valueDef = options[0];
    }
    else{
        for(let i=0; i<options.length; i++)
        {
            if(filters.min_salary === options[i].value.min && filters.max_salary === options[i].value.max)
            {
                valueDef = options[i];
            }
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
