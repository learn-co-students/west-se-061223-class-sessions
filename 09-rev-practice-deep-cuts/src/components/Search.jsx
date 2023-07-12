import React from 'react'

function Search({ onSearchChange, searchTerm }) {
  return (
    <div className="search">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search