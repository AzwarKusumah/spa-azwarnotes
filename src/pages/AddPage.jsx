import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NotesInput from "../components/NotesInput";

function AddPage() {
  const navigate = useNavigate();

  function addNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return <NotesInput addNote={addNoteHandler} />;
}

export default AddPage;
