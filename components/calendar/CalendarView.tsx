"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

import { Event } from '../../types/calendar';

interface CalendarViewProps {
  events: Event[];
  onDateSelect?: (date: Date) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({ events, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateDates = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getMonthYear = () => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const getEventsForDate = (day: number) => {
    if (!day) return [];
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === date.getMonth() && 
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{getMonthYear()}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Weekday headers */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {generateDates().map((day, index) => {
          const eventsForDay = day !== null ? getEventsForDate(day) : [];
          return (
            <div
              key={index}
              className={`
                min-h-[80px] p-1 border border-gray-100 
                ${day ? 'cursor-pointer hover:bg-gray-50' : ''}
                ${eventsForDay.length > 0 ? 'bg-gray-50' : ''}
              `}
              onClick={() => day && onDateSelect?.(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
            >
              {day && (
                <>
                  <span className="text-sm font-medium">{day}</span>
                  <div className="mt-1 space-y-1">
                    {eventsForDay.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`text-xs p-1 rounded-sm ${event.color} truncate`}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
