import { useState } from 'react';
import './App.css';  // Import the CSS file

export default function App() {
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null); // State to track error

  // Function to download notes as a .txt file
  const downloadNotes = () => {
    if (notes.trim() === '') {
      setError('Cannot save an empty file. Please write something.');
      return;
    }

    const blob = new Blob([notes], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = `youtube_notes_${Date.now()}.txt`;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
    window.URL.revokeObjectURL(anchor.href);
    setNotes('');
    setError(null); // Clear error on successful save
  };

  return (
    <div className="app-container">
      <h1 className="app-title">YouTube Notes</h1>
      <div className="notes-container">
        <textarea
          className="notes-textarea"
          placeholder="Write important points..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="8"
        />
        {error && (
          <p className="error-message">{error}</p> // Show error message if there's an error
        )}
        <div className="buttons-container">
          <button
            className="notes-button save-button"
            onClick={downloadNotes}
          >
            Save as .txt
          </button>
          <button
            className="notes-button clear-button"
            onClick={() => setNotes('')}
          >
            Clear Notes
          </button>
        </div>
      </div>
    </div>
  );
}
