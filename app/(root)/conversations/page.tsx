'use client';

import { useState, useEffect } from 'react';
import { ConversationList } from '../../../components/conversations/ConversationList';
import { ChatView } from '../../../components/conversations/ChatView';
import { mockConversations } from '../../../components/conversations/mock-data';
import { Conversation } from '../../../components/conversations/types';

export default function ConversationsPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [filter, setFilter] = useState<'all' | 'teams' | 'individual'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="flex h-full w-full">
      {(!isMobile || !activeChat) && (
        <ConversationList
          conversations={conversations}
          activeChat={activeChat}
          filter={filter}
          searchQuery={searchQuery}
          setActiveChat={setActiveChat}
          setFilter={setFilter}
          setSearchQuery={setSearchQuery}
        />
      )}
      {(!isMobile || activeChat) && (
        <div className="flex-1 flex flex-col h-full bg-gray-50">
          <ChatView 
            activeChat={activeChat}
            conversations={conversations}
            onBack={isMobile ? () => setActiveChat(null) : undefined}
          />
        </div>
      )}
    </div>
  );
}

