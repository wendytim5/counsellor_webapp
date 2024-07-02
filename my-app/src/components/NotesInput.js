import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteInput;
