import { useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  // Function to download notes as a .txt file
  const downloadNotes = () => {
    const blob = new Blob([notes], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = `youtube_notes_${Date.now()}.txt`;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
    window.URL.revokeObjectURL(anchor.href);
    setNotes('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center">YouTube Notes</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-4 border rounded-lg shadow-lg text-gray-800"
          placeholder="Write important points..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="10"
        />
      </div>
      <div className="flex gap-12">
      <button
        className="flex-1 p-8 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        onClick={downloadNotes}
      >
        Save as .txt
      </button>
      <button
        className="flex-1 p-8 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        onClick={() => setNotes('')}
      >
        Clear Notes
      </button>
    </div>
    </div>
  );
}
