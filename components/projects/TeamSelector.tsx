"use client";

import React from 'react';
import Image from 'next/image';
import { Search, Plus, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  availability: 'Available' | 'Busy' | 'In Meeting' | 'Off';
  activeProject?: string;
  email: string;
}

interface TeamSelectorProps {
  selectedMembers: string[];
  onMemberSelect: (memberId: string) => void;
  onMemberRemove: (memberId: string) => void;
}

const dummyTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    avatar: '/casual-group-meeting.jpeg',
    skills: ['React', 'Node.js', 'TypeScript'],
    availability: 'Available',
    activeProject: 'AI Analytics Dashboard',
    email: 'sarah.chen@example.com'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    avatar: '/focused-group-work.jpeg',
    skills: ['Figma', 'UI Design', 'User Research'],
    availability: 'In Meeting',
    activeProject: 'Mobile Health App',
    email: 'mike.j@example.com'
  },
  {
    id: '3',
    name: 'Alex Kumar',
    role: 'Backend Developer',
    avatar: '/collaborative-work-session.jpeg',
    skills: ['Python', 'Django', 'AWS'],
    availability: 'Busy',
    activeProject: 'API Integration',
    email: 'alex.k@example.com'
  },
];

export function TeamSelector({ selectedMembers, onMemberSelect, onMemberRemove }: TeamSelectorProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showInviteForm, setShowInviteForm] = React.useState(false);
  const [inviteEmail, setInviteEmail] = React.useState('');

  const filteredMembers = dummyTeamMembers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getAvailabilityColor = (status: TeamMember['availability']) => {
    switch (status) {
      case 'Available': return 'bg-green-500';
      case 'Busy': return 'bg-yellow-500';
      case 'In Meeting': return 'bg-red-500';
      case 'Off': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Invite */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#188268]"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
        <Button 
          variant="outline"
          onClick={() => setShowInviteForm(true)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Invite
        </Button>
      </div>

      {/* Invite Form */}
      {showInviteForm && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Invite Team Member</h4>
            <button onClick={() => setShowInviteForm(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="flex-1 p-2 border rounded-lg"
            />
            <Button 
              className="bg-[#188268] hover:bg-[#156B55]"
              onClick={() => {
                // Handle invite logic here
                setShowInviteForm(false);
                setInviteEmail('');
              }}
            >
              Send Invite
            </Button>
          </div>
        </div>
      )}

      {/* Selected Members */}
      {selectedMembers.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedMembers.map(memberId => {
            const member = dummyTeamMembers.find(m => m.id === memberId);
            if (!member) return null;
            return (
              <div
                key={member.id}
                className="flex items-center gap-2 px-3 py-1 bg-[#E4FBEC] rounded-full"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-sm">{member.name}</span>
                <button
                  onClick={() => onMemberRemove(member.id)}
                  className="hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Team Members List */}
      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {filteredMembers.map(member => (
          <div
            key={member.id}
            className={`p-3 border rounded-lg flex items-center justify-between hover:border-[#188268] cursor-pointer transition-colors ${
              selectedMembers.includes(member.id) ? 'border-[#188268] bg-[#E4FBEC]' : ''
            }`}
            onClick={() => {
              if (selectedMembers.includes(member.id)) {
                onMemberRemove(member.id);
              } else {
                onMemberSelect(member.id);
              }
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span 
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    getAvailabilityColor(member.availability)
                  }`}
                />
              </div>
              <div>
                <h4 className="font-medium">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-1">
                {member.skills.slice(0, 2).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    +{member.skills.length - 2}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {member.activeProject ? `Working on: ${member.activeProject}` : 'Available'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
