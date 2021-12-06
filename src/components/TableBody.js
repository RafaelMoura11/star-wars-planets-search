import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function TableBody() {
  const { data } = useContext(MyContext);
  return (
    <div>
      { data.length ? data.map((element) => (
        <tr key={ element.name }>
          <td>{element.name}</td>
          <td>{element.rotation_period}</td>
          <td>{element.orbital_period}</td>
          <td>{element.diameter}</td>
          <td>{element.climate}</td>
          <td>{element.gravity}</td>
          <td>{element.terrain}</td>
          <td>{element.surface_water}</td>
          <td>{element.population}</td>
          <td>
            {element.films.map((film) => (
              <a key={ film } href={ film }>{ film }</a>
            ))}
          </td>
          <td>{element.created}</td>
          <td>{element.edited}</td>
          <td>{element.url}</td>
        </tr>
      )) : 'Loading..' }

    </div>
  );
}

export default TableBody;
