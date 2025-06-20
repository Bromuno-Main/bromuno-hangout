'use client';

import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  onNavigateBack: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigateBack }) => {
  const [activeTab, setActiveTab] = React.useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'work', label: 'Work' },
    { id: 'payment', label: 'Payment & Subscription' }
  ];

  const stats = [
    { label: 'Projects', value: '153' },
    { label: 'Posts', value: '153' },
    { label: 'Answers', value: '153' },
    { label: 'Score', value: '153' },
    { label: 'Teams', value: '153' },
    { label: 'Products', value: '153' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with close and edit buttons */}      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onNavigateBack} 
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
          <h4 className="text-xl font-semibold">Account</h4>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-800">Edit</button>
          <button className="text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </div>

      {/* Profile Banner */}
      <div className="relative h-48 bg-gradient-to-r from-red-100 to-pink-100">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <Image
              src="/casual-group-meeting.jpeg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-2xl font-bold">Yungbld</h1>
        <p className="text-gray-600">@ynbld</p>
        <p className="mt-2">Nairobi, Kenya</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 ${
              activeTab === tab.id
                ? 'border-b-2 border-red-500 text-red-500'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Hello, I am Young. I am a project manager and design enthusiast. I love
                managing product and I am hoping to collaborate with your
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tithan</h3>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="w-[13%] h-full bg-red-300 rounded" />
              </div>
              <p className="text-right text-sm text-gray-600">13%</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                Verified <span className="text-red-500">●</span>
              </h3>
              <p className="text-gray-600">Project Manager, Video Editor,</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-2 bg-red-50 rounded text-sm text-center text-red-600">
              Your eyes only
            </div>
          </div>
        )}
      </div>
    </div>  );
};

export default UserProfile;
