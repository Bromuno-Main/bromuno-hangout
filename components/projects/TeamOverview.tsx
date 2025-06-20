"use client";

import React from 'react';
import Image from 'next/image';

import { TeamMember } from '../../data/projects';

interface TeamOverviewProps {
  members: TeamMember[];
}

export default function TeamOverview({ members }: TeamOverviewProps) {  const getAvailabilityColor = (status: TeamMember['availability']) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500';
      case 'Busy':
        return 'bg-yellow-500';
      case 'Away':
        return 'bg-gray-500';
      case 'In Meeting':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-4">Team Overview</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center space-x-4 p-3 rounded-lg border border-gray-100">
            <div className="relative">
              <Image
                src={member.avatar}
                alt={member.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span 
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getAvailabilityColor(member.availability)}`}
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">{member.name}</h3>              <p className="text-xs text-gray-500">{member.role}</p>
              <p className="text-xs text-gray-400 mt-1">Team: {member.team}</p>
              <p className="text-xs text-gray-400">Status: {member.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
