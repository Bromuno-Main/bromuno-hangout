import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Input } from '../../ui/input';

interface ChatProps {
  openChat: boolean;
  setOpenChat: (open: boolean) => void;
}

export const MentorChat: React.FC<ChatProps> = ({ openChat, setOpenChat }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className={`fixed z-50 top-0 right-0 h-screen w-full max-w-[400px] bg-white shadow-lg transition-transform duration-300 ${openChat ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold">Mentor Chat</h3>
        <button onClick={() => setOpenChat(false)} className="p-2 rounded-full hover:bg-gray-100">
          <X size={20} />
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100vh-100px)]">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="bg-gray-100 p-2 rounded-lg max-w-[80%]">
              {message}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <Input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 mr-2"
        />
        <button onClick={handleSendMessage}>

          Send
        </button>
      </div>
    </div>
  );
};