"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, Users, CheckSquare } from 'lucide-react';
import { Project, ProjectTask, TeamMember } from '../../data/projects';
import ProjectTasks from './ProjectTasks';
import TeamOverview from './TeamOverview';
import { Button } from '../ui/Button';
import  LoadingSpinner  from '../ui/LoadingSpinner';

interface ProjectDetailsProps {
  project: Project;
  teamMembers: Project['team'];
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, teamMembers }) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'tasks' | 'team'>('overview');
  const [isLoading, setIsLoading] = React.useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: CheckSquare },
    { id: 'tasks', label: 'Tasks', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users }
  ];

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No project data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-6 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={120}
          height={120}
          className="rounded-lg"
        />
        <div>
          <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>

      <nav className="flex gap-4 border-b mb-6">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as typeof activeTab)}
            className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${
              activeTab === id
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Project Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Status</div>
              <div className="font-medium">{project.status || 'Not set'}</div>
              <div>Progress</div>
              <div className="font-medium">{project.progress ?? 0}%</div>
              <div>Budget</div>
              <div className="font-medium">
                {project.budget ? `$${project.budget.toLocaleString()}` : 'Not set'}
              </div>
              <div>Team Size</div>              <div className="font-medium">
                {teamMembers?.length || 0} members
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tasks' && (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <ProjectTasks tasks={project.tasks} />
        )
      )}      {activeTab === 'team' && (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <TeamOverview members={teamMembers as unknown as TeamMember[]} />
        )
      )}
    </div>  );
};
