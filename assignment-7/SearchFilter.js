// src/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [items] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew'
  ]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-filter-container">
      <h1>Search Filter</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
