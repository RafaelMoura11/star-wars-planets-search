import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function ColumnSort() {
  const { setOrder, columns } = useContext(MyContext);
  const [actualOrder, setActualOrder] = useState({ column: 'population', sort: 'ASC' });

  const handleChange = ({ target: { value, name } }) => {
    setActualOrder({ ...actualOrder, [name]: value });
  };

  const handleClick = () => {
    setOrder(actualOrder);
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ handleChange }
        name="column"
      >
        { columns.map((category) => <option key={ category }>{ category }</option>) }
      </select>
      <div onChange={ handleChange }>
        <input
          type="radio"
          value="ASC"
          name="sort"
          data-testid="column-sort-input-asc"
        />
        {' '}
        ASC
        <input
          type="radio"
          value="DESC"
          name="sort"
          data-testid="column-sort-input-desc"
        />
        {' '}
        DESC
      </div>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Ordenar

      </button>
    </div>
  );
}

export default ColumnSort;
