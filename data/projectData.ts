export interface ProjectMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  availability: 'available' | 'busy' | 'offline';
  currentProjects: string[];
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  status: 'active' | 'completed' | 'onHold';
  category: string;
  techStack: string[];
  teamSize: number;
  startDate: string;
  endDate: string;
  budget: number;
  tasks: ProjectTask[];
  team: ProjectMember[];
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI Analytics Dashboard',
    description: 'Modern analytics platform with AI-powered insights',
    image: '/minimalist-3d-composition.jpeg',
    progress: 75,
    status: 'active',
    category: 'Web Development',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Python'],
    teamSize: 5,
    startDate: '2025-06-01',
    endDate: '2025-09-30',
    budget: 50000,
    tasks: [
      {
        id: 't1',
        title: 'Implement AI Models',
        description: 'Integration of machine learning models',
        status: 'inProgress',
        priority: 'high',
        assignee: 'John Doe',
        dueDate: '2025-07-15',
        tags: ['AI', 'Backend']
      }
      // ... more tasks
    ],
    team: [
      {
        id: 'm1',
        name: 'John Doe',
        role: 'Lead Developer',
        avatar: '/avatars/john.jpg',
        skills: ['React', 'TypeScript', 'Python'],
        availability: 'available',
        currentProjects: ['1']
      }
      // ... more team members
    ]
  }
  // ... more projects
];