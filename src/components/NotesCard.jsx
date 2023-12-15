import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function NotesCard({ id, title, body, createdAt }) {
  return (
    <div className="card card-compact w-96 bg-neutral-900 border-neutral-900 border-b-8 border-r-8  border-t-2 border-l-2 shadow-xl clip ">
      <div className="card-body border-neutral-900 bg-base-100 clip">
        <h2 className="card-title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
        <p>{parser(body)}</p>
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
