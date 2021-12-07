import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ValueFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, value });
  };

  return (
    <input
      data-testid="value-filter"
      onChange={ handleChange }
      value={ filterByNumericValues.value }
      type="number"
    />
  );
}

export default ValueFilter;
