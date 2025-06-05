export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  teamMembers: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  }[];
  tasks: {
    id: string;
    title: string;
    status: string;
  }[];
  files: {
    id: string;
    name: string;
    type: string;
  }[];
  announcements: {
    id: string;
    content: string;
    date: string;
  }[];
  events: {
    id: string;
    title: string;
    date: string;
  }[];
}

export const mockProjects: Project[] = [
  {    id: '1',
    name: 'Word Champs',    description: 'A bible quiz games to unite Christians all over the world',
    thumbnail: '/thumbnail-wordchamps.jpg',
    tags: ['bible', 'online game', 'open source'],
    teamMembers: [
      { id: '1', name: 'Theodore T.C. Calvin', avatar: '/profile.svg', role: 'Project Lead' },
      { id: '2', name: 'Rick Wright', avatar: '/profile.svg', role: 'Developer' },
      { id: '3', name: 'April Curtis', avatar: '/profile.svg', role: 'Designer' },
      { id: '4', name: 'Lynn Tanner', avatar: '/profile.svg', role: 'Content Writer' },
    ],
    tasks: [
      { id: '1', title: 'Design UI/UX', status: 'In Progress' },
      { id: '2', title: 'Develop Backend', status: 'Todo' },
      { id: '3', title: 'Content Creation', status: 'In Progress' },
    ],
    files: [
      { id: '1', name: 'UI Design.fig', type: 'figma' },
      { id: '2', name: 'Documentation.doc', type: 'document' },
    ],
    announcements: [
      { id: '1', content: 'New team member joined!', date: '2024-06-01' },
      { id: '2', content: 'Project milestone achieved', date: '2024-05-28' },
    ],
    events: [
      { id: '1', title: 'Team Meeting', date: '2024-06-05 10:00 AM' },
      { id: '2', title: 'Beta Launch', date: '2024-06-15' },
    ],
  },
  {    id: '2',
    name: 'HealthHub',    description: 'AI-powered health monitoring and wellness recommendation platform',
    thumbnail: '/abstract-geometric-composition.jpeg',
    tags: ['healthcare', 'AI', 'machine learning', 'mobile'],
    teamMembers: [
      { id: '1', name: 'Sarah Chen', avatar: '/profile.svg', role: 'ML Engineer' },
      { id: '2', name: 'Dr. James Wilson', avatar: '/profile.svg', role: 'Health Advisor' },
      { id: '3', name: 'Maria Garcia', avatar: '/profile.svg', role: 'Mobile Developer' },
      { id: '4', name: 'Alex Kim', avatar: '/profile.svg', role: 'UI/UX Designer' },
    ],
    tasks: [
      { id: '1', title: 'Implement ML Models', status: 'In Progress' },
      { id: '2', title: 'Mobile App Development', status: 'In Progress' },
      { id: '3', title: 'Health Data Integration', status: 'Todo' },
    ],
    files: [
      { id: '1', name: 'ML Architecture.pdf', type: 'document' },
      { id: '2', name: 'App Wireframes.fig', type: 'figma' },
    ],
    announcements: [
      { id: '1', content: 'Beta testing starts next week', date: '2024-06-10' },
      { id: '2', content: 'New health partners onboarded', date: '2024-06-05' },
    ],
    events: [
      { id: '1', title: 'Algorithm Review', date: '2024-06-08 2:00 PM' },
      { id: '2', title: 'Partner Meeting', date: '2024-06-12 11:00 AM' },
    ],
  },
  {
    id: '3',
    name: 'EcoTrack',
    description: 'Community-driven environmental monitoring and sustainability platform',
    tags: ['environment', 'sustainability', 'IoT', 'community'],
    teamMembers: [
      { id: '1', name: 'Emma Roberts', avatar: '/profile.svg', role: 'Project Manager' },
      { id: '2', name: 'Carlos Martinez', avatar: '/profile.svg', role: 'IoT Engineer' },
      { id: '3', name: 'Lisa Chen', avatar: '/profile.svg', role: 'Frontend Developer' },
      { id: '4', name: 'Tom Brown', avatar: '/profile.svg', role: 'Environmental Scientist' },
    ],
    tasks: [
      { id: '1', title: 'Sensor Network Setup', status: 'In Progress' },
      { id: '2', title: 'Data Visualization', status: 'Todo' },
      { id: '3', title: 'Community Features', status: 'Planning' },
    ],
    files: [
      { id: '1', name: 'Sensor Specs.pdf', type: 'document' },
      { id: '2', name: 'Platform Design.sketch', type: 'sketch' },
    ],
    announcements: [
      { id: '1', content: 'First sensor network deployed!', date: '2024-06-03' },
      { id: '2', content: 'Community feedback session scheduled', date: '2024-06-01' },
    ],
    events: [
      { id: '1', title: 'Community Workshop', date: '2024-06-20 3:00 PM' },
      { id: '2', title: 'Sensor Installation', date: '2024-06-25 9:00 AM' },
    ],
  },
  {
    id: '4',
    name: 'EdTech Revolution',
    description: 'Personalized learning platform using AI and gamification',
    tags: ['education', 'AI', 'gamification', 'e-learning'],
    teamMembers: [
      { id: '1', name: 'Dr. Emily White', avatar: '/profile.svg', role: 'Education Lead' },
      { id: '2', name: 'Kevin Park', avatar: '/profile.svg', role: 'Game Developer' },
      { id: '3', name: 'Rachel Turner', avatar: '/profile.svg', role: 'Content Creator' },
      { id: '4', name: 'David Lee', avatar: '/profile.svg', role: 'AI Engineer' },
    ],
    tasks: [
      { id: '1', title: 'Learning Algorithm Development', status: 'In Progress' },
      { id: '2', title: 'Game Mechanics Implementation', status: 'In Progress' },
      { id: '3', title: 'Content Creation Pipeline', status: 'Planning' },
    ],
    files: [
      { id: '1', name: 'Learning Paths.xlsx', type: 'spreadsheet' },
      { id: '2', name: 'Game Assets.zip', type: 'archive' },
    ],
    announcements: [
      { id: '1', content: 'Alpha testing with selected schools', date: '2024-06-02' },
      { id: '2', content: 'New learning modules added', date: '2024-05-30' },
    ],
    events: [
      { id: '1', title: 'Teacher Training', date: '2024-06-15 1:00 PM' },
      { id: '2', title: 'Parent Demo Day', date: '2024-06-22 10:00 AM' },
    ],
  },
  {
    id: '5',
    name: 'Urban Farmers',
    description: 'Smart urban farming solution with IoT and community marketplace',
    tags: ['agriculture', 'IoT', 'community', 'sustainability'],
    teamMembers: [
      { id: '1', name: 'Michael Chang', avatar: '/profile.svg', role: 'Agriculture Expert' },
      { id: '2', name: 'Sophie Anderson', avatar: '/profile.svg', role: 'IoT Developer' },
      { id: '3', name: 'Juan Rodriguez', avatar: '/profile.svg', role: 'Community Manager' },
      { id: '4', name: 'Amanda Foster', avatar: '/profile.svg', role: 'UI Designer' },
    ],
    tasks: [
      { id: '1', title: 'Sensor Integration', status: 'In Progress' },
      { id: '2', title: 'Marketplace Development', status: 'Todo' },
      { id: '3', title: 'Community Guidelines', status: 'Complete' },
    ],
    files: [
      { id: '1', name: 'Farm Layouts.pdf', type: 'document' },
      { id: '2', name: 'Market UI.fig', type: 'figma' },
    ],
    announcements: [
      { id: '1', content: 'First harvest celebration!', date: '2024-06-04' },
      { id: '2', content: 'New sensor types available', date: '2024-06-01' },
    ],
    events: [
      { id: '1', title: 'Farming Workshop', date: '2024-06-18 9:00 AM' },
      { id: '2', title: 'Market Launch', date: '2024-06-30 10:00 AM' },
    ],
  }
];
