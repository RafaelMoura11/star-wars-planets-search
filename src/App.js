import React, { useEffect, useState } from 'react';
import MyContext from './context/MyContext';
import Table from './components/Table';
import getPlanetsAPI, { columns } from './services';
import FilterByNameInput from './components/FilterByNameInput';
import ColumnFilter from './components/ColumnFilter';
import ComparisonFilter from './components/ComparisonFilter';
import ValueFilter from './components/ValueFilter';
import ButtonFilter from './components/ButtonFilter';
import AllFilters from './components/AllFilters';

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [data, setData] = useState([]);
  const [arrayOfColumns, setArrayOfColumns] = useState([...columns]);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: arrayOfColumns[0],
    comparison: 'maior que',
    value: 0,
  });
  const [allFilters, setAllFilters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setApiResponse(await getPlanetsAPI());
      setData(await getPlanetsAPI());
    }
    fetchData();
  }, []);

  const objectWithStatesAndFunctions = {
    apiResponse,
    setData,
    data,
    arrayOfColumns, // Usar no select
    setArrayOfColumns, // Usar no button filtrar
    filterByNumericValues, // Usar nos 2 selects e no input
    setFilterByNumericValues, // Usar no button para resetar os valores
    allFilters,
    setAllFilters,
  };

  return (
    <MyContext.Provider value={ { data, objectWithStatesAndFunctions } }>
      <FilterByNameInput />
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <ButtonFilter />
      <AllFilters />
      <Table />
    </MyContext.Provider>
  );
}

export default App;
