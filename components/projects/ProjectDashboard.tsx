"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import ProjectTimeline from './ProjectTimeline';
import ProjectTasks from './ProjectTasks';
import TeamOverview from './TeamOverview';
import ProjectDiscovery from './ProjectDiscovery';

// Project status types
type ProjectStatus = 'All' | 'In Progress' | 'Completed' | 'On Hold';
type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'Design' | 'Full Stack';

interface ProjectStats {
  totalProjects: number;
  completedProjects: number;
  activeProjects: number;
  onHoldProjects: number;
}

interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  status: 'In Progress' | 'Completed' | 'On Hold';
  completion: number;
  collaborators: number;
  image: string;
  description: string;
  deadline: string;
  budget: string;
  priority: 'High' | 'Medium' | 'Low';
}

const projectData: Project[] = [
  {
    id: '1',
    title: "AI-Powered Analytics Dashboard",
    category: "Web Development",
    tech: ["React", "TypeScript", "TailwindCSS", "AI/ML"],
    status: "In Progress",
    completion: 80,
    collaborators: 4,
    image: "/minimalist-3d-composition.jpeg",
    description: "Modern analytics platform with AI-driven insights",
    deadline: "August 15, 2025",
    budget: "$75,000",
    priority: "High"
  },
  {
    id: '2',
    title: "Digital Workspace Platform",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Progress",
    completion: 65,
    collaborators: 3,
    image: "/collaborative-work-session.jpeg",
    description: "Collaborative workspace solution for remote teams",
    deadline: "September 1, 2025",
    budget: "$60,000",
    priority: "Medium"
  },
  {
    id: '3',
    title: "Mobile Health Tracker",
    category: "Mobile Development",
    tech: ["React Native", "Firebase", "GraphQL"],
    status: "Completed",
    completion: 100,
    collaborators: 2,
    image: "/geometric-shapes-red-bg.jpeg",
    description: "Health and wellness tracking mobile application",
    deadline: "Completed",
    budget: "$45,000",
    priority: "Medium"
  },
  {
    id: '4',
    title: "Creative Design System",
    category: "UI/UX Design",
    tech: ["Figma", "Storybook", "CSS Modules"],
    status: "On Hold",
    completion: 35,
    collaborators: 3,
    image: "/minimalist-geometric.jpeg",
    description: "Modern design system for enterprise applications",
    deadline: "TBD",
    budget: "$30,000",
    priority: "Low"
  }
];

const timelineEvents = [
  {
    date: "June 16, 2025",
    title: "AI Analytics Dashboard Beta Release",
    description: "Successfully launched beta version to test users",
    type: "milestone" as const
  },
  {
    date: "June 14, 2025",
    title: "Mobile App Development Delayed",
    description: "API integration taking longer than expected",
    type: "delay" as const
  },
  {
    date: "June 12, 2025",
    title: "New Team Members Onboarded",
    description: "Added 2 senior developers to the team",
    type: "update" as const
  }
];

const projectTasks = [
  {
    id: "1",
    title: "Implement AI Analytics Dashboard",
    status: "In Progress" as const,
    assignee: "Sarah Chen",
    dueDate: "June 20, 2025",
    priority: "High" as const,
    description: "Develop and integrate the AI-powered analytics dashboard for the web platform.",
    tags: ["AI", "Dashboard", "Frontend"]
  },
  {
    id: "2",
    title: "Mobile App UI Design",
    status: "Review" as const,
    assignee: "Mike Johnson",
    dueDate: "June 18, 2025",
    priority: "Medium" as const,
    description: "Design the user interface for the mobile health tracking application.",
    tags: ["UI", "Mobile", "Design"]
  },
  {
    id: "3",
    title: "API Integration",
    status: "To Do" as const,
    assignee: "Alex Kumar",
    dueDate: "June 25, 2025",
    priority: "High" as const,
    description: "Integrate third-party APIs for data synchronization and analytics.",
    tags: ["API", "Backend", "Integration"]
  },
  {
    id: "4",
    title: "User Testing",
    status: "Done" as const,
    assignee: "Emma Wilson",
    dueDate: "June 15, 2025",
    priority: "Medium" as const,
    description: "Conduct user testing sessions and gather feedback for improvements.",
    tags: ["Testing", "QA", "Feedback"]
  }
];

const teamMembers = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Lead Developer",
    avatar: "/casual-group-meeting.jpeg",
    activeProject: "AI Analytics Dashboard",
    availability: "Available" as const,
    team: "Development",
    status: "Active",
    age: "29",
    email: "sarah.chen@example.com"
  },
  {
    id: "2",
    name: "Mike Johnson",
    role: "UI/UX Designer",
    avatar: "/focused-group-work.jpeg",
    activeProject: "Mobile App UI",
    availability: "In Meeting" as const,
    team: "Design",
    status: "Active",
    age: "32",
    email: "mike.johnson@example.com"
  },
  {
    id: "3",
    name: "Alex Kumar",
    role: "Backend Developer",
    avatar: "/collaborative-work-session.jpeg",
    activeProject: "API Integration",
    availability: "Busy" as const,
    team: "Development",
    status: "Active",
    age: "27",
    email: "alex.kumar@example.com"
  }
];

const calculateProjectStats = (projects: Project[]): ProjectStats => {
  return {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === 'Completed').length,
    activeProjects: projects.filter(p => p.status === 'In Progress').length,
    onHoldProjects: projects.filter(p => p.status === 'On Hold').length,
  };
};

export default function ProjectDashboard() {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'discover'>('dashboard');
  const [activeDashTab, setActiveDashTab] = useState<'overview' | 'tasks' | 'team'>('overview');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus>('All');
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = calculateProjectStats(projectData);

  const filteredProjects = projectData.filter(project => {
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || project.category.includes(categoryFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const StatCard = ({ title, value, color }: { title: string; value: number; color: string }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );

  return (
    <div className="w-full h-full gap-6 flex flex-col">
      {/* Main Navigation */}
      <div className="flex gap-4 border-b">
        <button
          className={`px-6 py-3 font-medium text-lg ${
            activeSection === 'dashboard' 
              ? 'text-[#188268] border-b-2 border-[#188268] bg-[#E4FBEC]' 
              : 'text-gray-500 hover:text-[#188268]'
          }`}
          onClick={() => setActiveSection('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`px-6 py-3 font-medium text-lg ${
            activeSection === 'discover' 
              ? 'text-[#188268] border-b-2 border-[#188268] bg-[#E4FBEC]' 
              : 'text-gray-500 hover:text-[#188268]'
          }`}
          onClick={() => setActiveSection('discover')}
        >
          Discover Projects
        </button>
      </div>

      {activeSection === 'dashboard' && (
        <>
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Total Projects" value={stats.totalProjects} color="text-blue-600" />
            <StatCard title="Active Projects" value={stats.activeProjects} color="text-[#188268]" />
            <StatCard title="Completed" value={stats.completedProjects} color="text-green-600" />
            <StatCard title="On Hold" value={stats.onHoldProjects} color="text-yellow-600" />
          </div>

          {/* Dashboard Tabs */}
          <div className="flex gap-4 border-b">
            <button
              className={`px-4 py-2 font-medium ${
                activeDashTab === 'overview' 
                  ? 'text-[#188268] border-b-2 border-[#188268]' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveDashTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeDashTab === 'tasks' 
                  ? 'text-[#188268] border-b-2 border-[#188268]' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveDashTab('tasks')}
            >
              Tasks
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeDashTab === 'team' 
                  ? 'text-[#188268] border-b-2 border-[#188268]' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveDashTab('team')}
            >
              Team
            </button>
          </div>

          {/* Dashboard Content */}
          {activeDashTab === 'overview' && (
            <>
              {/* Filters and Search */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="flex-1 p-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="p-2 border rounded-lg"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as ProjectStatus)}
                >
                  <option value="All">All Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
                <select
                  className="p-2 border rounded-lg"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value as ProjectCategory)}
                >
                  <option value="All">All Categories</option>
                  <option value="Web">Web</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Design">Design</option>
                  <option value="Full Stack">Full Stack</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Recent Updates</h4>
                <ProjectTimeline events={timelineEvents} />
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full h-[200px] relative bg-[#E4FBEC]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          project.status === "Completed" 
                            ? "bg-green-100 text-green-800"
                            : project.status === "On Hold"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                          <p className="text-gray-600">{project.category}</p>
                          <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="w-8 h-8 bg-[#E4FBEC] rounded-full flex items-center justify-center">
                            <span className="text-sm">{project.collaborators}</span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded ${
                            project.priority === 'High' 
                              ? 'bg-red-100 text-red-800'
                              : project.priority === 'Medium'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.priority}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span>Deadline: {project.deadline}</span>
                        <span>Budget: {project.budget}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.completion}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full">
                          <div 
                            className="h-full bg-[#188268] rounded-full transition-all duration-500"
                            style={{ width: `${project.completion}%` }}
                          />
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-[#E4FBEC] text-[#188268] rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-[#188268] hover:bg-[#156B55]">
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Edit Project
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeDashTab === 'tasks' && (
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-semibold">Project Tasks</h4>
                <Button className="bg-[#188268] hover:bg-[#156B55]">
                  Add Task
                </Button>
              </div>
              <ProjectTasks 
                tasks={projectTasks}
                onStatusChange={(taskId, newStatus) => {
                  console.log(`Moving task ${taskId} to ${newStatus}`);
                  // Here you would typically update the task status in your state/backend
                }}
              />
            </div>
          )}

          {activeDashTab === 'team' && (
            <div className="space-y-6">
              <TeamOverview members={teamMembers} />
              
              {/* Team Activity Feed */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-4">Team Activity</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="min-w-0 flex-1">
                      <p>Sarah Chen completed the AI Analytics Dashboard beta release</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="min-w-0 flex-1">
                      <p>Mike Johnson requested review on Mobile App UI designs</p>
                      <p className="text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {activeSection === 'discover' && (
        <ProjectDiscovery />
      )}
    </div>
  );
}
