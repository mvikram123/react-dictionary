import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchWord } from '../actions/WordActions';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      dispatch(searchWord(searchTerm));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
