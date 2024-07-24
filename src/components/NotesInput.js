import React, { useState } from 'react';
import '../styles/Notes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function NoteInput({ studentId, addNote }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      try {
        await addNote(studentId, input);
        setInput('');
      } catch (err) {
        console.error('Error adding note:', err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Notesform">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button type="submit">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </form>
  );
}

export default NoteInput;
