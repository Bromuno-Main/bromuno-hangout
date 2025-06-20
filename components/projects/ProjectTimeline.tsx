"use client";

import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'update' | 'delay';
}

interface ProjectTimelineProps {
  events: TimelineEvent[];
}

export default function ProjectTimeline({ events }: ProjectTimelineProps) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                    event.type === 'milestone' ? 'bg-green-500'
                    : event.type === 'update' ? 'bg-blue-500'
                    : 'bg-yellow-500'
                  }`}>
                    {event.type === 'milestone' ? '🎯' : event.type === 'update' ? '📝' : '⚠️'}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">{event.title}</p>
                    <p className="text-xs text-gray-400">{event.description}</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.date}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
