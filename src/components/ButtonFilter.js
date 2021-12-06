import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { columnFilter } from '../services';

function ButtonFilter() {
  const { objectWithStatesAndFunctions: { arrayOfColumns,
    setArrayOfColumns,
    filterByNumericValues,
    setFilterByNumericValues,
    allFilters,
    setAllFilters,
    data,
    setData } } = useContext(MyContext);

  const removeElementFromArray = (array, element) => (
    array.filter((categoryToBeRemoved) => categoryToBeRemoved !== element)
  );

  const updateTable = (newArrayOfFilters) => {
    newArrayOfFilters.forEach(({ column, comparison, value }) => (
      setData(columnFilter(data, column, comparison, value))
    ));
  };

  const handleClick = () => {
    const newArrayOfCategories = removeElementFromArray(arrayOfColumns,
      filterByNumericValues.column);
    setArrayOfColumns(newArrayOfCategories);
    const newArrayOfFilters = [...allFilters, filterByNumericValues];
    setAllFilters(newArrayOfFilters);
    updateTable(newArrayOfFilters);
    setFilterByNumericValues({
      column: newArrayOfCategories[0],
      comparison: 'maior que',
      value: 0 });
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid="button-filter"
    >
      Filtrar

    </button>
  );
}

export default ButtonFilter;
