import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={props.toggleSort}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={props.sort === "Price"} onChange={props.toggleSort}/>
          Price
        </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name="filter" value={props.filter} onChange={props.handleFilter}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
