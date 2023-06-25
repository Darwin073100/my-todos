import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = useState('');
  console.log('Los usuarios buscan todo de : ' + searchValue);
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(e)=>{
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch }; 