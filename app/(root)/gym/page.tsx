"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/Button';

export default function Gym() {
  const workoutPrograms = [
    {
      title: "Brain Training",
      category: "Mental Fitness",
      duration: "30 mins",
      level: "Beginner",
      description: "Improve your mental agility and problem-solving skills",
      image: "/brain-training.svg"
    },
    {
      title: "Coding Kata",
      category: "Skill Building",
      duration: "45 mins",
      level: "Intermediate",
      description: "Daily coding exercises to sharpen your programming skills",
      image: "/coding-kata.svg"
    }
  ];

  const achievements = [
    { title: "Problems Solved", count: 150 },
    { title: "Daily Streak", count: 7 },
    { title: "Total XP", count: 2500 }
  ];

  return (
    <div className="w-full h-full gap-4 flex flex-col">
      {/* Header Section */}
      <div className="flex gap-3 items-center justify-start">
        <p className="text-lg font-bold text-[#188268] border-b-[2px] border-b-[#188268]">
          Developer
        </p>
        <p className="text-lg font-bold">Gym</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-[#E4FBEC] rounded-[18px] p-6 text-center">
            <h3 className="text-3xl font-bold text-[#188268]">{achievement.count}</h3>
            <p className="text-gray-600">{achievement.title}</p>
          </div>
        ))}
      </div>

      {/* Workout Programs */}
      <h4 className="text-xl font-bold mt-4">Today&apos;s Training</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workoutPrograms.map((program, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-[200px] relative bg-[#E4FBEC]">
              {program.image && (
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{program.title}</h3>
                <span className="bg-[#E4FBEC] text-[#188268] px-2 py-1 rounded text-sm">
                  {program.level}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <span>{program.category}</span>
                <span>•</span>
                <span>{program.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Button className="w-full bg-[#188268] hover:bg-[#156B55]">
                Start Training
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Preview */}
      <div className="mt-4">
        <h4 className="text-xl font-bold mb-4">Leaderboard</h4>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-4">
            {[1, 2, 3].map((position) => (
              <div key={position} className="flex items-center gap-4">
                <span className="font-bold text-lg w-8">{position}</span>
                <div className="w-10 h-10 bg-[#E4FBEC] rounded-full"></div>
                <div className="flex-1">
                  <p className="font-semibold">User {position}</p>
                  <p className="text-sm text-gray-600">{3000 - position * 500} XP</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-transparent text-[#188268] hover:bg-[#E4FBEC]">
            View Full Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
}
