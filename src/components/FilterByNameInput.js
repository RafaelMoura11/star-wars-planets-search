import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { columnFilter } from '../services';

function FilterByPlanet() {
  const { objectWithStatesAndFunctions: { data,
    setData,
    apiResponse,
    allFilters } } = useContext(MyContext);

  const updateTable = (newArrayOfFilters) => {
    newArrayOfFilters.forEach(({ column, comparison, value }) => (
      setData(columnFilter(apiResponse, column, comparison, value))
    ));
  };

  const filterByName = ({ target: { value } }) => {
    if (value === '') {
      setData([...apiResponse]);
      return updateTable(allFilters);
    }
    const newArrayOfPlanets = data.filter(({ name }) => name.includes(value));
    setData(newArrayOfPlanets);
  };

  return (
    <input
      placeholder="Filtrar por Planeta..."
      onChange={ filterByName }
      data-testid="name-filter"
    />
  );
}

export default FilterByPlanet;
