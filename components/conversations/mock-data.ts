import { Conversation } from './types';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    name: 'Design Team',
    lastMessage: 'Alex: Can we review the new mockups?',
    timestamp: '2 min ago',
    image: '/Ai.svg',
    type: 'team' as const,
    unread: 3,
  },
  {
    id: '2',
    name: 'Development Team',
    lastMessage: 'Sarah: The latest build is ready for testing',
    timestamp: '10 min ago',
    image: '/Ai.svg',
    type: 'team' as const,
    unread: 1,
  },
  {
    id: '3',
    name: 'John Doe',
    lastMessage: 'Thanks for the update!',
    timestamp: '1 hour ago',
    image: '/profile.svg',
    type: 'individual' as const,
    unread: 0,
  },
];
