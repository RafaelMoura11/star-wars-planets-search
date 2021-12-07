const getPlanetsAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((json) => json.json())
    .then((responseJSON) => responseJSON.results);
  return response;
};

export default getPlanetsAPI;

export const columns = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

export const columnFilter = (data, column, comparison, value) => {
  if (comparison === 'maior que') {
    return data.filter((element) => (
      Number(element[column]) > Number(value)
    ));
  }

  if (comparison === 'menor que') {
    return data.filter((element) => (
      Number(element[column]) < Number(value)
    ));
  }

  if (comparison === 'igual a') {
    return data.filter((element) => (
      Number(element[column]) === Number(value)
    ));
  }
  return data;
};

export const removeElementFromArray = (array, element) => (
  array.filter((categoryToBeRemoved) => categoryToBeRemoved !== element)
);

export const handleFilterByName = (data, filterByName) => (
  data.filter(({ name }) => name.includes(filterByName))
);

export const updateTable = (allFilters, data) => {
  if (!allFilters.length) {
    return data;
  }
  let newTable = [...data];
  for (let index = 0; index <= allFilters.length - 1; index += 1) {
    const { column, comparison, value } = allFilters[index];
    newTable = columnFilter(newTable, column, comparison, value);
  }
  return newTable;
};
