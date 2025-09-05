import React from 'react';

// --- UI COMPONENT ---
// Screen displayed when the user masters all vocabulary.

export default function CompletionScreen({ onRestart }) {
  return (
    <div className="completion-screen">
      <h2>���߂łƂ��������܂��I</h2>
      <p>You have mastered all the N4 vocabulary!</p>
      <button onClick={onRestart} className="restart-button">
        Start Over
      </button>
    </div>
  );
}
