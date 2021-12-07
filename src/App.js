import React, { useEffect, useState } from 'react';
import MyContext from './context/MyContext';
import Table from './components/Table';
import getPlanetsAPI, { columns, handleFilterByName, updateTable } from './services';
import FilterByNameInput from './components/FilterByNameInput';
import ColumnFilter from './components/ColumnFilter';
import ComparisonFilter from './components/ComparisonFilter';
import ValueFilter from './components/ValueFilter';
import ButtonFilter from './components/ButtonFilter';
import AllFilters from './components/AllFilters';

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
    const newTable = updateTable(allFilters, searchingByName);
    setFilteredData(newTable);
  }, [data, filterByName, allFilters]);

  const objectWithStatesAndFunctions = {
    filteredData,
    arrayOfColumns, // Usar no select
    setArrayOfColumns, // Usar no button filtrar
    filterByName,
    setFilterByName,
    filterByNumericValues, // Usar nos 2 selects e no input
    setFilterByNumericValues, // Usar no button para resetar os valores
    allFilters,
    setAllFilters,
  };

  return (
    <MyContext.Provider value={ objectWithStatesAndFunctions }>
      <FilterByNameInput />
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <ButtonFilter />
      <AllFilters />
      <table>
        <Table />
      </table>
    </MyContext.Provider>
  );
}

export default App;
