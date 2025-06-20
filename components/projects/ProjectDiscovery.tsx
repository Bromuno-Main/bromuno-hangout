"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface DiscoverProject {
  id: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
  };
  description: string;
  category: string;
  tech: string[];
  thumbnailImage: string;
  teamSize: number;
  openRoles: string[];
  postedDate: string;
}

const sampleProjects: DiscoverProject[] = [
  {
    id: "1",
    title: "Sustainable Smart City Platform",
    creator: {
      name: "Emma Wilson",
      avatar: "/casual-group-meeting.jpeg"
    },
    description: "Building a platform to monitor and optimize city resources using IoT and AI. Looking for passionate developers to join our mission.",
    category: "Full Stack",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    thumbnailImage: "/futuristic-urban-scene.jpeg",
    teamSize: 5,
    openRoles: ["Frontend Developer", "ML Engineer", "IoT Specialist"],
    postedDate: "2 days ago"
  },
  {
    id: "2",
    title: "AR Learning Experience",
    creator: {
      name: "David Chen",
      avatar: "/focused-group-work.jpeg"
    },
    description: "Creating an augmented reality platform for interactive learning experiences. Join us in revolutionizing education!",
    category: "Mobile Development",
    tech: ["Unity", "ARKit", "React Native", "Node.js"],
    thumbnailImage: "/minimalist-3d-composition.jpeg",
    teamSize: 4,
    openRoles: ["3D Artist", "AR Developer", "Backend Developer"],
    postedDate: "1 week ago"
  },
  {
    id: "3",
    title: "Blockchain Marketplace",
    creator: {
      name: "Sarah Kumar",
      avatar: "/collaborative-work-session.jpeg"
    },
    description: "Developing a decentralized marketplace for digital artists. Looking for blockchain enthusiasts and creative minds.",
    category: "Web3",
    tech: ["Solidity", "Next.js", "GraphQL", "IPFS"],
    thumbnailImage: "/geometric-shapes-red-bg.jpeg",
    teamSize: 3,
    openRoles: ["Smart Contract Developer", "Frontend Developer"],
    postedDate: "3 days ago"
  }
];

export default function ProjectDiscovery() {
  const categories = ["All", "Web", "Mobile", "AI/ML", "Web3", "Design"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for projects..."
            className="w-full p-3 pr-10 border rounded-lg"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-[#188268]" : "hover:bg-[#E4FBEC]"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-[200px] relative bg-[#E4FBEC]">
              <Image
                src={project.thumbnailImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Image
                      src={project.creator.avatar}
                      alt={project.creator.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">by {project.creator.name}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{project.postedDate}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

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

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Open Roles ({project.openRoles.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {project.openRoles.map((role, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                  Team Size: {project.teamSize} members
                </div>
                <Button className="bg-[#188268] hover:bg-[#156B55]">
                  Apply to Join
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
