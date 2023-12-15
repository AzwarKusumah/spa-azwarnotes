import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import PropTypes from "prop-types";

import NotesDetailPage from "../components/NotesDetailPage";
import NotesDetailAction from "../components/NotesDetailAction";
import Page404 from "./Page404";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onArchiveEventHandler(id) {
    const { notes } = this.state;
    const shouldUnarchive = notes && notes.archived;

    shouldUnarchive ? unarchiveNote(id) : archiveNote(id);
    this.props.navigate("/");
  }

  onDeleteEventHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  render() {
    const { notes } = this.state;
    return !notes ? (
      <Page404 />
    ) : (
      <>
        <NotesDetailPage notes={notes} />
        <NotesDetailAction
          id={this.props.id}
          archived={notes.archived}
          onArchived={this.onArchiveEventHandler}
          onDelete={this.onDeleteEventHandler}
        />
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
