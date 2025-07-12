import React from 'react';

type MessageProps = {
  sender: 'user' | 'bot';
  text: string;
};

const Message: React.FC<MessageProps> = ({ sender, text }) => {
  return (
    <div className={`my-2 p-2 rounded ${sender === 'user' ? 'bg-blue-200 text-right' : 'bg-yellow-100 text-left'}`}>
      <span>{text}</span>
    </div>
  );
};

export default Message; 