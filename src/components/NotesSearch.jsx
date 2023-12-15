import React from "react";
import PropTypes from "prop-types";

function NotesSearch({ onSearch }) {
  return (
    <div className="container m-auto px-1">
      <div className="label">
        <span className="label-text">Nyari note?</span>
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="input input-bordered input-neutral w-full max-w-xs m-auto"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

NotesSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NotesSearch;
