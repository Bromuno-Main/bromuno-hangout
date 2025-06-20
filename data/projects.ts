import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { User } from '../types/User';

export interface TeamMember {
    id: string | number;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
    availability: 'Available' | 'Busy' | 'In Meeting' | 'Away';
}

export interface ProjectTask {
    id: string | number;
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'Review' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
    assignee: string | number; // TeamMember ID
    dueDate: string;
    attachments?: number; // Number of attachments
    comments?: number; // Number of comments
    tags: string[];
}

export interface ProjectFile {
  id: string;
  name: string;
  size: string;
  url: string;
}

export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
}

export interface Project {
  image: string | StaticImport;
  techStack: any;
  id: string | number;
  title: string;
  description: string;
  client?: string;
  budget?: number;
  startDate?: string;
  deadline?: string;
  status: 'Not Started' | 'In Progress' | 'On Hold' | 'Completed';
  progress: number; // 0-100
  team: (string | number)[]; // Array of TeamMember IDs
  tasks: ProjectTask[];
  activities: Activity[];
  files?: ProjectFile[];
}

// Sample data
export const sampleTeamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "Project Manager",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
        email: "tony.reichert@example.com",
        availability: "Available"
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "UI/UX Designer",
        team: "Design",
        status: "active",
        age: "25",
        avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        email: "zoey.lang@example.com",
        availability: "Busy"
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Frontend Developer",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        email: "jane.fisher@example.com",
        availability: "In Meeting"
    }
];

export const sampleProject: Project = {
    image: "https://i.pinimg.com/236x/06/10/7e/06107eaff63aaca0e44e6592e222d287.jpg", // Added image property
    techStack: ["React", "Next.js", "TypeScript"], // Added techStack property
    id: "PRJ-001",
    title: "Website Redesign",
    description: "Modernize the company website with a fresh design and improved user experience while maintaining brand consistency and enhancing performance.",
    status: "In Progress",
    client: "Acme Corporation",
    budget: 25000,
    startDate: "2024-02-01",
    deadline: "2024-04-30",
    progress: 45,
    team: [1, 2, 3],
    tasks: [
        {
            id: 1,
            title: "Design System Creation",
            description: "Create a comprehensive design system including color palette, typography, and component library",
            status: "In Progress",
            priority: "High",
            assignee: 2,
            dueDate: "2024-02-28",
            attachments: 3,
            comments: 5,
            tags: ["Design", "UI/UX"]
        },
        {
            id: 2,
            title: "Homepage Implementation",
            description: "Develop the new homepage based on approved designs",
            status: "To Do",
            priority: "Medium",
            assignee: 3,
            dueDate: "2024-03-15",
            attachments: 2,
            comments: 3,
            tags: ["Development", "Frontend"]
        }
    ],
    activities: [
        {
            id: "1",
            user: "Zoey Lang",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
            action: "uploaded",
            target: "design mockups for review",
            time: "2 hours ago"
        },
        {
            id: "2",
            user: "Tony Reichert",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
            action: "created",
            target: "new task: Homepage Implementation",
            time: "1 day ago"
        }
    ]
};