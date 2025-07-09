"use client";

import React from 'react';
import Image from 'next/image';
import CalendarView from '../../../components/calendar/CalendarView';
import { Button } from '../../../components/ui/Button';
import { Event } from '../../../types/calendar';

// Sample events data
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Meeting with brand',
    date: new Date(2025, 5, 20), // June 20, 2025
    time: '2:00pm - 3:00pm',
    type: 'meeting',
    color: 'bg-green-100 text-green-800',
    icon: '/img-1.png'
  },
  {
    id: '2',
    title: 'Draft submission',
    date: new Date(2025, 5, 21),
    time: '2:00pm - 2:30pm',
    type: 'submission',
    color: 'bg-blue-100 text-blue-800',
    icon: '/img-2.png'
  },
  {
    id: '3',
    title: 'Make Content live',
    date: new Date(2025, 5, 21),
    time: '10:00am - 11:00am',
    type: 'content',
    color: 'bg-red-100 text-red-800',
    icon: '/img-3.png'
  },
  {
    id: '4',
    title: 'Client Meeting',
    date: new Date(2025, 5, 22),
    time: '11:00am - 12:00pm',
    type: 'meeting',
    color: 'bg-blue-100 text-blue-800',
    icon: '/img-4.png'
  }
];

export default function Calendar() {
  return (
    <div className="flex flex-col h-full p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Calendar</h1>
          <p className="text-gray-500">Manage your schedule and collaborations</p>
        </div>
        <Button className="bg-[#188268] hover:bg-[#156B55] text-white">
          Add Event
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 h-full">
        {/* Calendar */}
        <div className="flex-1">
          <CalendarView events={sampleEvents} />
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="w-80 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
          <div className="space-y-4">
            {sampleEvents
              .filter(event => event.date >= new Date())
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map(event => (
                <div
                  key={event.id}
                  className={`p-3 rounded-lg ${event.color} flex items-center gap-3`}
                >
                  {event.icon && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={event.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm opacity-75">{event.time}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}