import React, { useState } from 'react';
import NoteInput from './NotesInput';
import NoteList from './NotesList';
import Header from './dashboard_header';
import Sidebar from './sidebar';
import '../styles/Notes.css';


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
      <h1>Counselling Session</h1>
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default Notes;
