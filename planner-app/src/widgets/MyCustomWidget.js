import React, { useState } from 'react';

export default function MyCustomWidget() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Add a new note
  const addNote = () => {
    if (newNote.trim() === '') {
      return; // Don't add empty notes
    }
    setNotes([...notes, newNote]);
    setNewNote('');
  };

  // Edit a note
  const editNote = (index, editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter a new note"
      />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <input
              type="text"
              value={note}
              onChange={(e) => editNote(index, e.target.value)}
            />
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
