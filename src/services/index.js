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
  const comparator = {
    'maior que': (element) => Number(element[column]) > Number(value),
    'menor que': (element) => Number(element[column]) < Number(value),
    'igual a': (element) => Number(element[column]) === Number(value),
  }
    return data.filter((element) => comparator[comparison](element));
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
  allFilters.forEach(({ column, comparison, value }) => {
    newTable = columnFilter(newTable, column, comparison, value);
  })

  return newTable;
};

const orderByName = (data) => (
  [...data].sort((a, b) => {
    const menosUm = -1;
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return menosUm;
    }
    return 0;
  })
);

export const orderedArray = (data, { column, sort }) => {
  const seila = orderByName(data);
  if (column === 'name') {
    return seila;
  }

  seila.sort((a, b) => b[column] - a[column]);
  if (sort === 'ASC') {
    seila.reverse();
  }

  return seila;
};
