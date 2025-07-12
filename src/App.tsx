import React from 'react';
import ChatInterface from './components/ChatInterface';
import APIKeyInput from './components/APIKeyInput';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">🏴‍☠️ Olivia Vibe Pirate Chatbot</h1>
      <APIKeyInput />
      <ChatInterface />
    </div>
  );
}

export default App; 