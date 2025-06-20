'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { InputField } from '../chats/input';
import { Conversation } from './types';

interface ChatViewProps {
  activeChat: string | null;
  conversations: Conversation[];
  onBack?: () => void;
}

export function ChatView({ activeChat, conversations, onBack }: ChatViewProps) {
  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 lg:block ">
        Select a conversation to start chatting
      </div>
    );
  }

  const currentChat = conversations.find(c => c.id === activeChat);
  if (!currentChat) return null;

  return (
    <>      <div className="p-4 border-b bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button 
              onClick={onBack}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <Image
            src={currentChat.image}
            alt="Chat"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{currentChat.name}</h3>
            <p className="text-sm text-gray-500">
              {currentChat.type === 'team' ? 'Team Chat' : 'Personal Chat'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages will go here */}
      </div>
      <div className="p-4 border-t bg-white">
        <InputField 
          placeholder="Type a message..."
          className="bg-gray-100"
        />
      </div>
    </>
  );
}
