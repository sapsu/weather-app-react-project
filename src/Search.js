import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <form className="input-group mb-3 shadow-sm rounded" id="city-search-form">
      <input
        type="search"
        className="form-control"
        placeholder="Search for a city"
        aria-label="Search for a city"
        aria-describedby="button-addon2"
        id="city-search-input"
      />
      <input
        type="submit"
        className="btn btn-outline-secondary"
        id="button-addon2"
        value="Search"
      />
    </form>
  );
}
