import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Notes.css';

function NotesList({ studentId, notes, setNotes }) {
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editText, setEditText] = useState('');
  const [noteResponses, setNoteResponses] = useState({});



  useEffect(() => {
    // Function to fetch model responses for each note
    const fetchNoteResponses = async () => {
      try {
        const responses = {};
        await Promise.all(
          notes.map(async (note) => {
            const response = await axios.post('https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/assess', {
              student_id: studentId,
              notes: note.content // Send each note content for assessment
            });
            responses[note._id] = response.data.assessment;
          })
        );
        setNoteResponses(responses);
      } catch (err) {
        console.error('Error fetching note responses:', err);
      }
    };

    fetchNoteResponses();
  }, [studentId, notes]); // Fetch responses whenever studentId or notes change



  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/student/${studentId}/notes/${noteId}`);
      setNotes(notes.filter(note => note._id !== noteId));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };



  const handleEdit = (noteId, content) => {
    setEditingNoteId(noteId);
    setEditText(content);
  };



  const handleSave = async (noteId) => {
    try {
      const response = await axios.put(`https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/student/${studentId}/notes/${noteId}`, { content: editText });
      const updatedNote = response.data;

      setNotes(notes.map(note => (note._id === noteId ? updatedNote : note)));
      setEditingNoteId(null);
      setEditText('');
    } catch (err) {
      console.error('Error saving note:', err);
    }
  };


  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map(note => (
          <><div key={note._id} className="note">
            <div className="note-content">
              {editingNoteId === note._id ? (
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)} />
              ) : (

                <span>{note.content}</span>
                
              )}
              <div className="note-actions">
                {editingNoteId === note._id ? (
                  <button onClick={() => handleSave(note._id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(note._id, note.content)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                )}
                <button onClick={() => handleDelete(note._id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
              </div>
            </div>

          </div><div className="model-response" background-color="white" >
              {noteResponses[note._id] && ( // Display model response if available
                <div background-color="white">
                 
                  <p>{noteResponses[note._id]}</p>
                </div>

              )}
            </div></>

        ))

      ) : (
        <div>No notes to display.</div>
      )}
    </div>
  );
}

export default NotesList;