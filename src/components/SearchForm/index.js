import React, { useContext } from "react";
import TableContext from "../../utils/TableContext";
import "./style.css";

function SearchForm(props) {

  const context = useContext(TableContext);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          value={props.search}
          onChange={e => context.handleSearchChange(e)}
          type="text"
          className="form-control"
          placeholder="Type in a name to search"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
