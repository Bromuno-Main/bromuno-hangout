"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/Button';

export default function Uncover() {
  const resources = [
    {
      title: "Getting Started with Next.js 13",
      type: "Tutorial Series",
      author: "Sarah Developer",
      duration: "45 mins",
      level: "Beginner",
      topics: ["Next.js", "React", "TypeScript"],
      image: "/tutorial1.svg"
    },
    {
      title: "Advanced TypeScript Patterns",
      type: "Deep Dive",
      author: "Tech Master",
      duration: "60 mins",
      level: "Advanced",
      topics: ["TypeScript", "Design Patterns"],
      image: "/tutorial2.svg"
    }
  ];

  const popularTopics = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python",
    "AWS", "Docker", "Kubernetes", "Machine Learning"
  ];

  return (
    <div className="w-full h-full gap-4 flex flex-col p-6">
      {/* Header Section */}
      <div className="flex gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <p className="text-lg font-bold text-[#188268] border-b-[2px] border-b-[#188268]">
            Discover
          </p>
          <p className="text-lg font-bold">Resources</p>
        </div>
        <Button className="bg-[#188268] hover:bg-[#156B55]">
          Submit Resource
        </Button>
      </div>

      {/* Search Section */}
      <div className="relative">
        <input 
          type="text"
          placeholder="Search resources, topics, or authors..."
          className="w-full p-4 rounded-lg border bg-white pr-12"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          🔍
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-3">Popular Topics</h4>
        <div className="flex flex-wrap gap-2">
          {popularTopics.map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              className="hover:bg-[#E4FBEC] hover:text-[#188268]"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Resources */}
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-3">Featured Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-[200px] relative bg-[#E4FBEC]">
                {resource.image && (
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-white text-[#188268]">
                    {resource.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{resource.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${
                    resource.level === "Advanced"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {resource.level}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <span>{resource.author}</span>
                  <span>•</span>
                  <span>{resource.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.topics.map((topic, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-[#E4FBEC] text-[#188268] rounded text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-[#188268] hover:bg-[#156B55]">
                    Start Learning
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-3">Learning Paths</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Frontend", "Backend", "DevOps"].map((path, index) => (
            <div key={index} className="bg-gradient-to-r from-[#188268] to-[#156B55] text-white rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">{path} Development</h3>
              <p className="mb-4 text-white/80">Master {path.toLowerCase()} technologies step by step</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">12 Courses</span>
                <Button variant="outline" className="bg-white/20 hover:bg-white/30">
                  View Path
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
