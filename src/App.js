import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { SearchContext } from './components/search/SearchContext';


export const App = () => {

	const initialFilter = {
		orderBy: 'recent',
		brand: '',
		locations: [],
		min_salary: 0,
		max_salary: 999999999
	};

	const [filters, setFilters] = useState(initialFilter);

	return (
		<SearchContext.Provider value={{filters, setFilters}}>
			<AppRouter />
		</SearchContext.Provider>
	);
}

