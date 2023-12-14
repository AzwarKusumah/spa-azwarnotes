import React, { Component } from "react";
import { getArchivedNotes } from "../utils/local-data";
import NotesItemBody from "../components/NotesItemBody";

import PropTypes from "prop-types";

class ArchivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };
  }
  render() {
    return (
      <>
        <h2 className="text-2xl font-bold mb-8 text-center">Catatan Arsip</h2>
        <NotesItemBody notes={this.state.notes} />
      </>
    );
  }
}

ArchivePage.propTypes = {};

export default ArchivePage;
