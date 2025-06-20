export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  image: string;
  type: 'team' | 'individual';
  unread: number;
}
