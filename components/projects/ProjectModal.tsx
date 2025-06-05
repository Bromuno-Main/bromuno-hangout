import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    teamMembers: {
      id: string;
      name: string;
      avatar: string;
      role: string;
    }[];
    tasks: {
      id: string;
      title: string;
      status: string;
    }[];
    files: {
      id: string;
      name: string;
      type: string;
    }[];
    announcements: {
      id: string;
      content: string;
      date: string;
    }[];
    events: {
      id: string;
      title: string;
      date: string;
    }[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[85vh] overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="h-full overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tasks</h3>
                <div className="space-y-2">
                  {project.tasks.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>{task.title}</span>
                      <span className="text-sm text-gray-500">{task.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Project Files</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.files.map(file => (
                    <div key={file.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Image src="/file.svg" alt="File" width={20} height={20} />
                      <span className="ml-2">{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Team Members</h3>
                <div className="space-y-3">
                  {project.teamMembers.map(member => (
                    <div key={member.id} className="flex items-center">
                      <Image 
                        src={member.avatar} 
                        alt={member.name} 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Announcements</h3>
                <div className="space-y-3">
                  {project.announcements.map(announcement => (
                    <div key={announcement.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm">{announcement.content}</p>
                      <span className="text-xs text-gray-500 mt-2 block">{announcement.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
                <div className="space-y-3">
                  {project.events.map(event => (
                    <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium">{event.title}</div>
                      <span className="text-xs text-gray-500">{event.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <Button className="w-full" variant="default">
            Join Project
          </Button>
        </div>
      </div>
    </div>
  );
}
