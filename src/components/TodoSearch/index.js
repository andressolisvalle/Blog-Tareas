import React from 'react';
import './TodoSearch.css';
import { TodoContex } from '../../TodoContex';
function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContex);

  return (
    <input
      placeholder="Cortar cebolla"
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };