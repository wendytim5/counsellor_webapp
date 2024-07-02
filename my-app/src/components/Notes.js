import React, { useState } from 'react';
import NoteInput from './NotesInput';
import NoteList from './NotesList';
import Header from './dashboard_header';
import Sidebar from './sidebar';

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (index, editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="Notes">
    <Header/>
    <Sidebar/>
      <h1>Note Taking App</h1>
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
}

export default Notes;
