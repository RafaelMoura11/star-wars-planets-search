import PropTypes from 'prop-types';
import React from 'react';

function Filter({ filter, handleClick }) {
  return (
    <div className="filter-card">
      <p>{ filter.column }</p>
      <p>{ filter.comparison }</p>
      <p>{ filter.value }</p>
      <button
        type="button"
        name={ filter.column }
        onClick={ handleClick }
      >
        X
      </button>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Filter;
