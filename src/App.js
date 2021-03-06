import React, { useEffect, useState } from 'react';
import './App.css'
import MyContext from './context/MyContext';
import Table from './components/Table';
import getPlanetsAPI, { columns, handleFilterByName, updateTable,
  orderedArray } from './services';
import FilterByNameInput from './components/FilterByNameInput';
import ColumnFilter from './components/ColumnFilter';
import ComparisonFilter from './components/ComparisonFilter';
import ValueFilter from './components/ValueFilter';
import ButtonFilter from './components/ButtonFilter';
import AllFilters from './components/AllFilters';
import ColumnSort from './components/ColumnSort';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [arrayOfColumns, setArrayOfColumns] = useState([...columns]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: arrayOfColumns[0],
    comparison: 'maior que',
    value: 0,
  });
  const [allFilters, setAllFilters] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: '' });

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await getPlanetsAPI();
      setFilteredData(apiResponse);
      setData(apiResponse);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const searchingByName = handleFilterByName(data, filterByName);
    const searchingByFilters = updateTable(allFilters, searchingByName);
    const orderingByColumn = orderedArray(searchingByFilters, order);
    setFilteredData(orderingByColumn);
  }, [data, filterByName, allFilters, order]);

  const objectWithStatesAndFunctions = {
    filteredData,
    arrayOfColumns,
    setArrayOfColumns,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    allFilters,
    setAllFilters,
    order,
    setOrder,
    columns,
  };

  return (
    <MyContext.Provider value={ objectWithStatesAndFunctions }>
      <section id="top-section">
        <FilterByNameInput />
        <div id="middle-filter-container">
          <h1>Star Wars</h1>
          <div>
            <ColumnFilter />
            <ComparisonFilter />
            <ValueFilter />
            <ButtonFilter />
          </div>
        </div>
        <ColumnSort />
      </section>
      <AllFilters />
      <Table />
    </MyContext.Provider>
  );
}

export default App;
