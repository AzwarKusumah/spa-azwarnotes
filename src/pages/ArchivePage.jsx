import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import PropTypes from "prop-types";

import NotesSearch from "../components/NotesSearch";
import NotesItemBody from "../components/NotesItemBody";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <ArchivePage onSearch={changeSearchParams} defaultKeyword={title} />;
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onSearchEventhandler = this.onSearchEventhandler.bind(this);
  }

  onSearchEventhandler(keyword) {
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <>
        <h2 className="text-2xl font-bold mb-8 text-center">Catatan Arsip</h2>
        <NotesSearch onSearch={this.onSearchEventhandler} />
        <NotesItemBody notes={notes} />
      </>
    );
  }
}

ArchivePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
};

export default ArchivePageWrapper;
