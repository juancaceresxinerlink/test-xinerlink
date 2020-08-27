import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { SearchContext } from './components/search/SearchContext';
import { useFetch } from './hooks/useFetch';


export const App = () => {

	const initialFilter = {
		page: 0,
		orderBy: 'recent',
		brand: '',
		locations: [],
		min_salary: 0,
		max_salary: 999999999
	};

	const [filters, setFilters] = useState(initialFilter);

	const { data, loading } = useFetch('https://cors-anywhere.herokuapp.com/https://okkfgfozi0.execute-api.us-east-2.amazonaws.com/beta');

	return (
		<SearchContext.Provider value={{filters, setFilters, data, loading}}>
			<AppRouter />
		</SearchContext.Provider>
	);
}

