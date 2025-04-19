import React from 'react'
import { useState } from 'react'
import './styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Keyword or Youtube URL here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        <i className="search-icon">🔍</i>
        Search
      </button>
    </form>
  );
};

export default SearchBar
