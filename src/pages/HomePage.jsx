import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import PropTypes from "prop-types";

import NotesItemBody from "../components/NotesItemBody";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }
  render() {
    return (
      <>
        <h2 className="text-2xl font-bold mb-8 text-center">Catatan Aktif</h2>
        <NotesItemBody notes={this.state.notes} />
      </>
    );
  }
}

export default HomePage;
