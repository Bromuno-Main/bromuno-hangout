'use client';

import { Search, Users, User, X } from 'lucide-react';
import Image from 'next/image';

export interface Conversation {
  id: string;
  name: string;
  image: string;
  type: 'team' | 'individual';
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeChat: string | null;
  filter: 'all' | 'teams' | 'individual';
  searchQuery: string;
  setActiveChat: (id: string) => void;
  setFilter: (filter: 'all' | 'teams' | 'individual') => void;
  setSearchQuery: (query: string) => void;
}

export function ConversationList({
  conversations,
  activeChat,
  filter,
  searchQuery,
  setActiveChat,
  setFilter,
  setSearchQuery,
}: ConversationListProps) {
  const filteredConversations = conversations.filter(conv => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'teams' && conv.type === 'team') ||
      (filter === 'individual' && conv.type === 'individual');
    
    const matchesSearch = 
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  return (
    <div className="w-full lg:w-1/3 border-r bg-white h-full lg:static fixed inset-0 z-30">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold mb-4">Messages</h4>
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setActiveChat('null')}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="bg-transparent border-none focus:outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all' 
                ? 'bg-[#188268] text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('teams')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              filter === 'teams' 
                ? 'bg-[#188268] text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Users size={16} />
            Teams
          </button>
          <button
            onClick={() => setFilter('individual')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${
              filter === 'individual' 
                ? 'bg-[#188268] text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <User size={16} />
            People
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setActiveChat(conv.id)}
            className={`p-4 hover:bg-gray-50 cursor-pointer ${
              activeChat === conv.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={conv.image}
                  alt={conv.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                {conv.type === 'team' && (
                  <div className="absolute -top-1 -right-1 bg-[#188268] rounded-full p-1">
                    <Users size={12} className="text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{conv.name}</h4>
                  <span className="text-xs text-gray-500">{conv.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <div className="bg-[#188268] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {conv.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
