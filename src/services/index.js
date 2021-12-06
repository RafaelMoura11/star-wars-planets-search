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

  return data.filter((element) => (
    Number(element[column]) === Number(value)
  ));
};
