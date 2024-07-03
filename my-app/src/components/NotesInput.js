import React, { useState } from 'react';
import '../styles/Notes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function NoteInput({ addNote }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addNote(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Notesform">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message Falcon..."
        
      />
      <button type="submit" >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

    </form>
  );
}

export default NoteInput;
