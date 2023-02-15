import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";
  const [showData, setShowData] = useState(false);
  const textButton = showData ? "hidden data" : "show data";

  return (
    <li>
      <Link to={`/notes/${note.id}`}>{note.content}</Link>
      <button onClick={toggleImportance}>{label}</button>
      {showData && (
        <>
          {note.id}
          {note.date}
        </>
      )}
      <button onClick={() => setShowData(!showData)}>{textButton}</button>
    </li>
  );
};

export default Note;
