import React, { useState, useRef } from 'react';
import Message from './Message';
import { sendMessageToOpenAI } from '../utils/api';

const LOCAL_STORAGE_KEY = 'openai_api_key';

type ChatMessage = {
  sender: 'user' | 'bot';
  text: string;
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    setError('');
    const apiKey = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
    if (!apiKey) {
      setError('Please enter your OpenAI API key above.');
      return;
    }
    if (!input.trim()) return;
    const userMsg = { sender: 'user' as const, text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const botReply = await sendMessageToOpenAI(input, apiKey);
      setMessages(msgs => [...msgs, { sender: 'bot', text: botReply }]);
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      setError('Failed to get a response from the AI.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="w-full max-w-md bg-white bg-opacity-80 rounded shadow p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4" style={{ minHeight: 200, maxHeight: 350 }}>
        {messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <div className="flex">
        <input
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type yer message, matey..."
          disabled={loading}
        />
        <button
          className="bg-yellow-400 px-4 py-2 rounded-r font-bold hover:bg-yellow-500 transition disabled:opacity-50"
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          {loading ? 'Sailin…' : 'Send'}
        </button>
      </div>
      {loading && <div className="text-blue-700 mt-2 animate-pulse">The AI be thinkin'…</div>}
    </div>
  );
};

export default ChatInterface; 