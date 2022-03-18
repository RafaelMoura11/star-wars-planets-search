import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { removeElementFromArray } from '../services';

function ButtonFilter() {
  const { arrayOfColumns,
    setArrayOfColumns,
    filterByNumericValues,
    setFilterByNumericValues,
    allFilters,
    setAllFilters } = useContext(MyContext);

  const handleClick = () => {
    const newArrayOfCategories = removeElementFromArray(arrayOfColumns,
      filterByNumericValues.column);
    setArrayOfColumns(newArrayOfCategories);
    const newArrayOfFilters = [...allFilters, filterByNumericValues];
    setAllFilters(newArrayOfFilters);
    setFilterByNumericValues({
      column: newArrayOfCategories[0],
      comparison: 'maior que',
      value: 0 });
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
      disabled={ !arrayOfColumns.length }
    >
      Filtrar

    </button>
  );
}

export default ButtonFilter;
