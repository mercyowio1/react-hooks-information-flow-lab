import React from "react";

function Filter({ onCategoryChange }) {
  function handleFilterChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Filter by category:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
