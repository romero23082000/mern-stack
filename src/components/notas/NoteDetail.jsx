import {
  // ...
  useParams,
} from "react-router-dom";
import React from "react";

const NoteDetail = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
    </div>
  );
};

export default NoteDetail;
