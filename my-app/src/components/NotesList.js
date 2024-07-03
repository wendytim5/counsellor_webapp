import React, { useState } from 'react';
import '../styles/Notes.css';

function NoteList({ notes, editNote, deleteNote }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedNote, setEditedNote] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedNote(notes[index]);
  };

  const handleSaveEdit = (index) => {
    editNote(index, editedNote);
    setEditIndex(-1);
  };

  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          {editIndex === index ? (
            <>
              <textarea
                type="text"
                value={editedNote}
                onChange={(e) => setEditedNote(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
            </>
          ) : (
            <>
              <span>{note}</span>
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
