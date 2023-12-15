import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import PropTypes from "prop-types";

import NotesItemBody from "../components/NotesItemBody";
import NotesSearch from "../components/NotesSearch";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage onSearch={changeSearchParams} defaultKeyword={title} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
        <h2 className="text-2xl font-bold mb-8 text-center">Catatan Aktif</h2>
        <NotesSearch onSearch={this.onSearchEventhandler} />
        <NotesItemBody notes={notes} />
      </>
    );
  }
}

export default HomePageWrapper;
