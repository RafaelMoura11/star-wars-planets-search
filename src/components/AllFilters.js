import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Filter from './Filter';
import { columnFilter } from '../services';

function AllFilter() {
  const { objectWithStatesAndFunctions: { arrayOfColumns,
    setArrayOfColumns,
    allFilters,
    setAllFilters,
    data,
    setData } } = useContext(MyContext);

  const removeElementFromArray = (array, element) => (
    array.filter(({ column }) => column !== element)
  );

  const updateTable = (newArrayOfFilters) => {
    newArrayOfFilters.forEach(({ column, comparison, value }) => (
      setData(columnFilter(data, column, comparison, value))
    ));
  };

  const handleClick = ({ target: { name } }) => {
    setArrayOfColumns([...arrayOfColumns, name]);
    const newArrayOfFilters = removeElementFromArray(allFilters, name);
    setAllFilters(newArrayOfFilters);
    updateTable(newArrayOfFilters);
    console.log(newArrayOfFilters);
  };

  return (
    <div>
      { allFilters.map((filter, index) => (
        <Filter key={ index } filter={ filter } handleClick={ handleClick } />
      )) }
    </div>
  );
}

export default AllFilter;
