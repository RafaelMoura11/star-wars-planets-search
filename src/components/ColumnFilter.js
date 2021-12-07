import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ColumnFilter() {
  const { arrayOfColumns,
    filterByNumericValues,
    setFilterByNumericValues } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, column: value });
  };

  return (
    <select
      data-testid="column-filter"
      onChange={ handleChange }
    >
      { arrayOfColumns.map((category) => <option key={ category }>{ category }</option>) }
    </select>
  );
}

export default ColumnFilter;
