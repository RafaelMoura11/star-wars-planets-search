import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByPlanet() {
  const { setFilterByName } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
  };

  return (
    <input
      placeholder="Filtrar por Planeta..."
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}

export default FilterByPlanet;
