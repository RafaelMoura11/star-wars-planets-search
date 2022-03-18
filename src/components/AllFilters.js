import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Filter from './Filter';

function AllFilter() {
  const { arrayOfColumns,
    setArrayOfColumns,
    allFilters,
    setAllFilters,
    filterByNumericValues,
    setFilterByNumericValues } = useContext(MyContext);

  const removeElementFromArray = (array, element) => (
    array.filter(({ column }) => column !== element)
  );

  const handleClick = ({ target: { name } }) => {
    setArrayOfColumns([...arrayOfColumns, name]);
    const newArrayOfFilters = removeElementFromArray(allFilters, name);
    setAllFilters(newArrayOfFilters);
    setFilterByNumericValues({ ...filterByNumericValues, column: name })
  };

  return (
    <div id="filters">
      { allFilters.map((filter, index) => (
        <Filter key={ index } filter={ filter } handleClick={ handleClick } />
      )) }
    </div>
  );
}

export default AllFilter;
