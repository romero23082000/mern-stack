import React, { useEffect, useRef, useState } from "react";
import Note from "./Note";
import noteService from "../../services/notes";
import NoteForm from "./NoteForm";
import Togglable from "../Togglable";

const Notes = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [showAll, setShowAll] = useState(true);
  const [user, setUser] = useState(null);
  const noteFormRef = useRef();

  useEffect(() => {
    // noteService.getAll().then((response) => {
    //   setNotes(response);
    // });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    console.log(changedNote);
    noteService
      .update(id, changedNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility();
    noteService.create(noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response));
    });
  };

  return (
    <div>
      <h1>Notes app</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      {props.user && (
        <div>
          <Togglable buttonLabel="new note" ref={noteFormRef}>
            <NoteForm createNote={addNote} />
          </Togglable>
        </div>
      )}
      <ul>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
      </ul>

      {/* <Footer /> */}
    </div>
  );
};

export default Notes;
