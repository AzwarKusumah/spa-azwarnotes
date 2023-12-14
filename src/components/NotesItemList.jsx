import React from "react";
import NotesCard from "./NotesCard";
import PropType from "prop-types";

function NotesItemList({ notes }) {
  return (
    <>
      {notes.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {notes.map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
            />
          ))}
        </div>
      ) : (
        <p>Notes nya gaada ngabss</p>
      )}
    </>
  );
}

NotesItemList.propType = {
  notes: PropType.arrayOf(PropType.object).isRequired,
};

export default NotesItemList;
