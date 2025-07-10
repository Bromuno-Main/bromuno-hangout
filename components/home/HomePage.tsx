import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import { Calendar, BarChart2, Plus, Download, 
         Dumbbell, Briefcase, Radio, Trophy, ArrowUp, Star } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from 'lucide-react';

// Type definitions
interface Stat {
  label: string;
  value: string;
  change?: string;
  period?: string;
  status?: string;
}

interface ActivityStat {
  label: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  change: string;
  route: string;
}

interface RumbleChallenge {
  title: string;
  type: string;
  prize: string;
  difficulty: 'Hard' | 'Medium';
}

interface GymWorkout {
  title: string;
  type: string;
  duration: string;
  completed: number;
}

interface JobPosting {
  role: string;
  company: string;
  salary: string;
  posted: string;
}

interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  type: string;
}

export default function HomePage() {
  // Stats data
  const stats: Stat[] = [
    { label: 'Total Projects', value: '24', change: '+3', period: 'from last month' },
    { label: 'Ended Projects', value: '10', change: '-2', period: 'from last month' },
    { label: 'Running Projects', value: '12', change: '+4', period: 'from last month' },
    { label: 'Pending Projects', value: '2', status: 'On Review' },
  ];

  // Activity data
  const activityStats: ActivityStat[] = [
    { 
      label: 'GYM Streak', 
      value: '15 days', 
      icon: Dumbbell, 
      bgColor: 'bg-purple-100', 
      textColor: 'text-purple-600', 
      change: '+2 days',
      route: '/gym'
    },
    { 
      label: 'Rumble Score', 
      value: '850', 
      icon: Radio, 
      bgColor: 'bg-orange-100', 
      textColor: 'text-orange-600', 
      change: '+120 pts',
      route: '/rumble'
    },
    { 
      label: 'Job Apps', 
      value: '8', 
      icon: Briefcase, 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-600', 
      change: '3 interviews',
      route: '/jobs'
    },
    { 
      label: 'Events', 
      value: '5', 
      icon: Calendar, 
      bgColor: 'bg-pink-100', 
      textColor: 'text-pink-600', 
      change: '2 upcoming',
      route: '/events'
    },
  ];

  // Rumble challenges
  const rumbleEvents: RumbleChallenge[] = [
    { title: 'Algorithm Challenge', type: 'Competition', prize: '500 XP', difficulty: 'Hard' },
    { title: 'Code Golf Challenge', type: 'Weekly', prize: '300 XP', difficulty: 'Medium' },
  ];

  // GYM workouts
  const gymWorkouts: GymWorkout[] = [
    { title: 'Brain Training', type: 'Mental Fitness', duration: '30 mins', completed: 3 },
    { title: 'Coding Kata', type: 'Skill Building', duration: '45 mins', completed: 5 },
  ];

  // Recent job postings
  const recentJobs: JobPosting[] = [
    { role: 'Senior Frontend Developer', company: 'TechCorp', salary: '$120k-150k', posted: '2h ago' },
    { role: 'Full Stack Engineer', company: 'StartupX', salary: '$100k-130k', posted: '5h ago' },
    { role: 'Backend Developer', company: 'DataSys', salary: '$110k-140k', posted: '6h ago' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
          <p className="text-gray-500 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={18} />
            Import Data
          </Button>
          <Button className="flex items-center gap-2 bg-[#188268] text-white hover:bg-[#156B55]">
            <Plus size={18} />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">{stat.label}</span>
              <BarChart2 size={20} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <div className="flex flex-col items-end">
                {stat.period && <span className="text-xs text-gray-500">{stat.period}</span>}
                {stat.status && <span className="text-xs text-[#188268]">{stat.status}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {activityStats.map((stat, index) => (
          <Link href={stat.route} key={index}>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${stat.bgColor} ${stat.textColor} flex items-center justify-center`}>
                  <stat.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">{stat.label}</h3>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ArrowUp size={14} className="text-green-500" />
                <span className="text-green-500">{stat.change}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Rumbles */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Radio size={20} className="text-orange-600" />
              Live Rumbles
            </h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {rumbleEvents.map((event, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium flex-wrap">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.type}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    event.difficulty === 'Hard' 
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {event.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star size={14} className="text-yellow-500" />
                  <span className="text-[#188268] font-medium">{event.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GYM Progress */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Dumbbell size={20} className="text-purple-600" />
              GYM Progress
            </h3>
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-yellow-500" />
              <span className="text-sm font-medium">Level 5</span>
            </div>
          </div>
          <div className="space-y-4">
            {gymWorkouts.map((workout, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium  text-wrap">{workout.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{workout.type}</span>
                      <span>•</span>
                      <span>{workout.duration}</span>
                    </div>
                  </div>
                  <span className="text-sm text-purple-600 font-medium">
                    {workout.completed} completed
                  </span>
                </div>
                <div className="relative h-2 bg-gray-100 rounded-full mt-3">
                  <div 
                    className="absolute left-0 top-0 h-full bg-purple-500 rounded-full" 
                    style={{ width: `${(workout.completed / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Job Postings */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600" />
              Recent Jobs
            </h3>
            <Button variant="outline" size="sm">Browse All</Button>
          </div>
          <div className="space-y-3">
            {recentJobs.map((job, index) => (
              <div key={index} className="w-full border rounded-lg p-3 hover:bg-gray-50 cursor-pointer text-left">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium text-wrap">{job.role}</h4>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 ">{job.posted}</span>
                </div>
                <p className="text-sm text-[#188268] mt-1">{job.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
