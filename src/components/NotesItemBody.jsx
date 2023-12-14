import React from "react";
import NotesItemList from "./NotesItemList";

function NotesItemBody({ notes }) {
  return (
    <>
      <div className="h-screen px-5 sm:px-24 py-10 md:py-20">
        <main className="flex justify-center">
          <NotesItemList notes={notes} />
        </main>
      </div>
    </>
  );
}

export default NotesItemBody;
