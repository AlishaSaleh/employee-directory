import React, { useContext } from "react";
import TableContext from "../../utils/TableContext";
import "./style.css";

function SearchForm() {

  const context = useContext(TableContext);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={e => context.handleSearchChange(e)}
          type="text"
          className="form-control"
          placeholder="Type in a name to search"
        />
        {/* <button type="submit" className="btn btn-success">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
