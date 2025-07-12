import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'openai_api_key';

const APIKeyInput: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedKey) setApiKey(storedKey);
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="flex flex-col items-center mb-6 p-4 bg-white bg-opacity-70 rounded shadow w-full max-w-md">
      <label className="font-semibold mb-2">OpenAI API Key</label>
      <div className="flex w-full mb-2">
        <input
          type={show ? 'text' : 'password'}
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
          placeholder="sk-..."
        />
        <button
          type="button"
          className="bg-yellow-200 px-3 rounded-r border-l"
          onClick={() => setShow(s => !s)}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-600 transition"
        onClick={handleSave}
        disabled={!apiKey}
      >
        Save
      </button>
      {saved && <span className="text-green-600 mt-2">Saved!</span>}
      <p className="text-xs text-gray-500 mt-2">Your API key is stored only in your browser and never sent to any server.</p>
    </div>
  );
};

export default APIKeyInput; 