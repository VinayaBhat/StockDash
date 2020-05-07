import React from "react";
import "./SearchBar.css";


const SearchBar = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the organization name"
              aria-label="Company Name"
            />
            <span className="input-group-btn">
              <button className="btn block" type="button">
                Load Quote
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
