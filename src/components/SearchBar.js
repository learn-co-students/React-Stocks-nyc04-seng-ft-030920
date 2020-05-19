import React from 'react';

const SearchBar = (props) => {

  let handleSort = (evt) => {
    console.log(evt.target.value)
    props.handleSortTerm(evt.target.value)
  }

  let handleFilter = (evt) => {
    // console.log(evt.target.value)
    props.handleFilterTerm(evt.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.sortTerm === "Alphabetically"} 
          onChange={handleSort}/>
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={props.sortTerm === "Price"} 
          onChange={handleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filterTerm} onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
