"use client";

import { useState } from 'react';
import { MainDashboard } from '../../../components/projects/MainDashboard';
import { DiscoverProjects } from '../../../components/projects/DiscoverProjects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'discover'>('dashboard');

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Tab Navigation */}
      <div className="mb-6 border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === 'dashboard'
                ? 'text-[#188268] border-b-2 border-[#188268]'
                : 'text-gray-500 hover:text-[#188268]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('discover')}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === 'discover'
                ? 'text-[#188268] border-b-2 border-[#188268]'
                : 'text-gray-500 hover:text-[#188268]'
            }`}
          >
            Discover
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'dashboard' ? (
        <MainDashboard />
      ) : (
        <DiscoverProjects />
      )}
    </div>
  );
}
