import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import NotesInput from '../components/NotesInput';
import NotesList from '../components/NotesList';
import axios from 'axios';
import '../styles/Notes.css';

const Notes = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/student/${id}/notes`);
        setNotes(response.data);
      } catch (err) {
        console.error('Error fetching notes:', err);
      }
    };

    fetchNotes();
  }, [id]);

  const addNote = async (studentId, content) => {
    try {
      const response = await axios.post(`https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/student/${studentId}/notes`, { content });
      setNotes(prevNotes => [...prevNotes, response.data]);
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  return (
    <div className="Notes">
      <Header />
      <Sidebar />
      <h1>Counselling Session</h1>
      <NotesList studentId={id} notes={notes} setNotes={setNotes} />
      <NotesInput studentId={id} addNote={addNote} />
    </div>
  );
};

export default Notes;
