"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/Button';

export default function Events() {
  const upcomingEvents = [
    {
      title: "Tech Innovation Summit 2025",
      date: "July 15, 2025",
      time: "2:00 PM",
      location: "Virtual",
      description: "Join industry leaders for an exciting discussion on emerging technologies and future trends",
      image: "/collaborative-work-session.jpeg"
    },
    {
      title: "Developer Workshop Series",
      date: "July 20, 2025", 
      time: "3:00 PM",
      location: "Virtual",
      description: "Hands-on workshop focusing on modern development practices and tools",
      image: "/focused-group-work.jpeg"
    },
    {
      title: "Future of Tech Conference",
      date: "August 5, 2025",
      time: "10:00 AM",
      location: "Hybrid Event",
      description: "Explore the intersection of AI, blockchain, and sustainable technology",
      image: "/futuristic-urban-scene.jpeg"
    }
  ];

  return (
    <div className="w-full h-full gap-4 flex flex-col">
      {/* Header Section */}
      <div className="flex gap-3 items-center justify-start">
        <p className="text-lg font-bold text-[#188268] border-b-[2px] border-b-[#188268]">
          Upcoming
        </p>
        <p className="text-lg font-bold">Events</p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-[200px] relative bg-[#E4FBEC]">
              {event.image && (
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.time}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <p className="mb-4">{event.description}</p>
              <Button className="w-full bg-[#188268] hover:bg-[#156B55]">
                Register Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Event Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="rounded-full size-14 bg-[#188268] hover:bg-[#156B55]">
          <span className="text-2xl">+</span>
        </Button>
      </div>
    </div>
  );
}
