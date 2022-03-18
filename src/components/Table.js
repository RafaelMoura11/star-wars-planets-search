import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table() {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}

export default Table;
