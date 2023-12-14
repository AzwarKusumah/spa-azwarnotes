import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

function NotesCard({ id, title, body, createdAt }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body border-b-8 border-r-8 border-t-2 border-l-2 border-neutral-900">
        <h2 className="card-title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
        <p>{body}</p>
      </div>
    </div>
  );
}

NotesCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesCard;
