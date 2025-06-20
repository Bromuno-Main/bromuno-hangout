"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Bell, Calendar, BarChart, FileText, Users, MessageSquare, Settings, Search, Plus } from 'lucide-react';
import Link from 'next/link';
import ProjectTimeline from './ProjectTimeline';
import ProjectTasks from './ProjectTasks';
import TeamOverview from './TeamOverview';
import { CreateProject } from './CreateProject';
import { ProjectDetails } from './ProjectDetails';
import { Project, sampleProject, sampleTeamMembers } from '../../data/projects';

const QuickStats = () => {
  const stats = [
    { label: 'Active Projects', value: '12', change: '+2', icon: '/file.svg' },
    { label: 'Team Members', value: '24', change: '+5', icon: '/profile.svg' },
    { label: 'Total Tasks', value: '164', change: '+18', icon: '/checkmark.svg' },
    { label: 'Hours Logged', value: '1,284', change: '+160', icon: '/calender.svg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <Image src={stat.icon} alt={stat.label} width={24} height={24} />
            <span className={`text-xs font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} this week
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

const RecentActivities = () => {
  const activities = [
    {
      user: 'Sarah Chen',
      action: 'completed task',
      target: 'API Integration',
      project: 'AI Analytics Dashboard',
      time: '2 hours ago',
      avatar: '/casual-group-meeting.jpeg'
    },
    {
      user: 'Alex Kumar',
      action: 'commented on',
      target: 'UI Design Review',
      project: 'Mobile Health App',
      time: '4 hours ago',
      avatar: '/collaborative-work-session.jpeg'
    },
    {
      user: 'Mike Johnson',
      action: 'created task',
      target: 'User Testing Plan',
      project: 'Creative Design System',
      time: '5 hours ago',
      avatar: '/focused-group-work.jpeg'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h4 className="text-lg font-semibold mb-4">Recent Activities</h4>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Image
              src={activity.avatar}
              alt={activity.user}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
                {' in '} 
                <span className="text-[#188268]">{activity.project}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navigation = ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'tasks', label: 'Tasks', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  return (
    <div className="flex space-x-1 border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 flex items-center space-x-2 transition-colors ${
            activeTab === tab.id
              ? 'border-b-2 border-[#188268] text-[#188268]'
              : 'text-gray-500 hover:text-[#188268]'
          }`}
        >
          <tab.icon size={18} />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

// Define TeamMember type here or import from a shared types file if available
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
};

interface ProjectDetailsProps {
  project: Project;
  teamMembers: TeamMember[];
}

export function MainDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      <div className="flex justify-end border-b  items-center mb-6">
        {/* <div>
          <h1 className="text-2xl font-bold">Welcome back, Martni! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsCreateProjectOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-[#188268] text-white rounded-lg hover:bg-[#156B55] transition-colors"
          >
            <Plus size={18} />
            <span>New Project</span>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#188268] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Create Project Dialog */}
      <CreateProject
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
      />

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <QuickStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Project Timeline</h4>
                <button className="text-sm text-[#188268] hover:text-[#156B55]">View All</button>
              </div>
              <ProjectTimeline events={[
                {
                  date: "June 17, 2025",
                  title: "Project Milestone Reached",
                  description: "Completed phase 1 of AI Analytics Dashboard",
                  type: "milestone"
                },
                {
                  date: "June 16, 2025",
                  title: "New Team Members",
                  description: "2 developers joined the Mobile Health project",
                  type: "update"
                }
              ]} />
            </div>
            
            <RecentActivities />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Active Tasks</h4>
                <button className="flex items-center space-x-2 text-[#188268] hover:text-[#156B55]">
                  <Plus size={18} />
                  <span>Add Task</span>
                </button>
              </div>
              <ProjectTasks tasks={[
                {
                  id: "1",
                  title: "Design System Documentation",
                  status: "In Progress",
                  assignee: "Mike Johnson",
                  dueDate: "June 20, 2025",
                  priority: "High",
                  description: '',
                  tags: []
                },
                {
                  id: "2",
                  title: "API Integration Testing",
                  status: "Review",
                  assignee: "Sarah Chen",
                  dueDate: "June 19, 2025",
                  priority: "Medium",
                  description: '',
                  tags: []
                }
              ]} />
            </div>
          </div>
        </div>
      )}      {activeTab === 'projects' && (
        <div className="space-y-6">
          <ProjectDetails project={sampleProject} teamMembers={[]}  />
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="space-y-6">
          {/* Tasks content */}
        </div>
      )}      {activeTab === 'team' && (
        <div className="space-y-6">
          <TeamOverview members={sampleTeamMembers} />
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="space-y-6">
          {/* Messages content */}
        </div>
      )}
    </div>
  );
}
