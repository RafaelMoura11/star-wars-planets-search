import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ComparisonFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, comparison: value });
  };

  return (
    <select
      data-testid="comparison-filter"
      onChange={ handleChange }
      value={ filterByNumericValues.comparison }
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );
}

export default ComparisonFilter;
