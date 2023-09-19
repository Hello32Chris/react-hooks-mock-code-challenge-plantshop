import React from "react";

function Search( { setFilter } ) {


function filterSearch(e) {
  return setFilter(e.target.value)
  console.log(setFilter)
}


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search plants..."
        onChange={filterSearch}
      />
    </div>
  );
}

export default Search;
