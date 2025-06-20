"use client";

import Image from 'next/image';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface CommunityProject {
  id: string;
  title: string;
  description: string;
  image: string;
  owner: string;
  ownerAvatar: string;
  tags: string[];
  likes: number;
}

const mockCommunityProjects: CommunityProject[] = [
  {
    id: '1',
    title: 'AI-Powered Content Generation Platform',
    description: 'An advanced content generation platform using GPT models to help creators produce high-quality content efficiently.',
    image: '/geometric-shapes-red-bg.jpeg',
    owner: 'Sarah Chen',
    ownerAvatar: '/casual-group-meeting.jpeg',
    tags: ['AI/ML', 'Web Development', 'NLP'],
    likes: 124
  },
  {
    id: '2',
    title: 'Decentralized Learning Platform',
    description: 'A blockchain-based platform for sharing knowledge and earning credentials through peer-to-peer learning.',
    image: '/minimalist-3d-composition.jpeg',
    owner: 'Alex Kumar',
    ownerAvatar: '/collaborative-work-session.jpeg',
    tags: ['Blockchain', 'EdTech', 'Web3'],
    likes: 89
  },
  {
    id: '3',
    title: 'Sustainable Smart City Dashboard',
    description: 'Real-time monitoring and analytics dashboard for smart city infrastructure and sustainability metrics.',
    image: '/futuristic-urban-scene.jpeg',
    owner: 'Mike Johnson',
    ownerAvatar: '/focused-group-work.jpeg',
    tags: ['IoT', 'Analytics', 'Sustainability'],
    likes: 156
  }
];

export function DiscoverProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = Array.from(new Set(mockCommunityProjects.flatMap(project => project.tags)));

  const filteredProjects = mockCommunityProjects.filter(project => {
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input 
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#188268]"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTags(prev => 
                prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
              )}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-[#188268] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Image
                  src={project.ownerAvatar}
                  alt={project.owner}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-600">{project.owner}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <button className="text-[#188268] text-sm hover:underline">Learn more</button>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">❤️</span>
                  <span className="text-sm text-gray-600">{project.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
