"use client";

import React from 'react';
import { Button } from '../ui/Button';

import { ProjectTask } from '../../data/projects';

interface ProjectTasksProps {
  tasks: ProjectTask[];
  onStatusChange?: (taskId: string | number, newStatus: ProjectTask['status']) => void;
}

export default function ProjectTasks({ tasks, onStatusChange }: ProjectTasksProps) {
  const columns: ProjectTask['status'][] = ['To Do', 'In Progress', 'Review', 'Done'];
  
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column) => (
        <div key={column} className="flex-1 min-w-[250px]">
          <h3 className="font-medium text-gray-900 mb-3">
            {column} ({tasks.filter(task => task.status === column).length})
          </h3>
          
          <div className="space-y-3">
            {tasks.filter(task => task.status === column).map((task) => (
              <div 
                key={task.id}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{task.description}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    task.priority === 'High' 
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'Medium'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 my-2">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    {task.attachments && (
                      <span className="flex items-center space-x-1">
                        <span>📎</span>
                        <span>{task.attachments}</span>
                      </span>
                    )}
                    {task.comments && (
                      <span className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{task.comments}</span>
                      </span>
                    )}
                  </div>
                  <span>{task.dueDate}</span>
                </div>
                
                {onStatusChange && column !== 'Done' && (
                  <Button 
                    variant="outline"
                    className="w-full mt-2 text-xs"
                    onClick={() => {
                      const nextStatus = columns[columns.indexOf(column) + 1];
                      onStatusChange(task.id, nextStatus);
                    }}
                  >
                    Move to {columns[columns.indexOf(column) + 1]}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
