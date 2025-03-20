import React from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import "./SearchBar.css"; // Importing the CSS for styling

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <FaSearch className="search-icon" /> {/* Search icon inside the input */}
        <input
          type="text"
          placeholder="Search placements"
          onChange={(e) => onSearch(e.target.value)} // Handle input change
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar; // Exporting the component