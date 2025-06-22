export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: 'meeting' | 'submission' | 'content' | 'other';
  color: string;
  icon?: string;
}
