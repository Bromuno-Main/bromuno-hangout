"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/Button';

export default function Rumble() {
  const challenges = [
    {
      title: "Algorithm Battle",
      type: "Competition",
      startTime: "2 hours",
      participants: 128,
      prize: "500 XP",
      difficulty: "Hard",
      image: "/challenge1.svg"
    },
    {
      title: "Code Golf",
      type: "Challenge",
      startTime: "5 hours",
      participants: 64,
      prize: "300 XP",
      difficulty: "Medium",
      image: "/challenge2.svg"
    }
  ];

  return (
    <div className="w-full p-6 h-full gap-4 flex flex-col">
      {/* Header Section */}
      <div className="flex gap-3 items-center justify-start">
        <p className="text-lg font-bold text-[#188268] border-b-[2px] border-b-[#188268]">
          Live
        </p>
        <p className="text-lg font-bold">Rumble</p>
      </div>

      {/* Featured Challenge */}
      <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#188268] to-[#156B55]">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Weekly Code Battle</h1>
          <p className="text-lg mb-6 text-center max-w-2xl">
            Compete with developers worldwide in real-time coding challenges
          </p>
          <Button className="bg-white text-[#188268] hover:bg-gray-100">
            Join Now
          </Button>
        </div>
      </div>

      {/* Challenge Categories */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        <Button className="bg-[#188268] hover:bg-[#156B55] whitespace-nowrap">
          All Challenges
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          Algorithms
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          Data Structures
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          System Design
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          Frontend
        </Button>
      </div>

      {/* Active Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-[160px] relative bg-[#E4FBEC]">
              {challenge.image && (
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  challenge.difficulty === "Hard" 
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#188268] font-semibold">{challenge.prize}</p>
                  <p className="text-sm text-gray-600">Starts in {challenge.startTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>{challenge.participants} participants</span>
              </div>

              <Button className="w-full bg-[#188268] hover:bg-[#156B55]">
                Enter Challenge
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Past Winners Section */}
      <div className="mt-4">
        <h4 className="text-xl font-bold mb-4">Recent Winners</h4>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-4">
            {[1, 2, 3].map((position) => (
              <div key={position} className="flex items-center gap-4">
                <span className="font-bold text-lg w-8">{position}</span>
                <div className="w-10 h-10 bg-[#E4FBEC] rounded-full"></div>
                <div className="flex-1">
                  <p className="font-semibold">Champion {position}</p>
                  <p className="text-sm text-gray-600">Algorithm Battle #{position}</p>
                </div>
                <span className="text-[#188268] font-semibold">+500 XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
