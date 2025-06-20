"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { X } from 'lucide-react';
import { TeamSelector } from './TeamSelector';

interface CreateProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProjectType = 'web' | 'mobile' | 'design' | 'analytics' | 'other';

interface ProjectFormData {
  title: string;
  description: string;
  type: ProjectType;
  deadline: string;
  team: string[];
  tech: string[];
}

const projectTypes = [
  {
    type: 'web',
    title: 'Web Development',
    icon: '/build.svg',
    description: 'Create websites, web applications, or web services'
  },
  {
    type: 'mobile',
    title: 'Mobile App',
    icon: '/mobileIcon.svg',
    description: 'Build iOS, Android, or cross-platform applications'
  },
  {
    type: 'design',
    title: 'Design Project',
    icon: '/designIcon.svg',
    description: 'UI/UX design, brand identity, or design systems'
  },
  {
    type: 'analytics',
    title: 'Analytics & Data',
    icon: '/analyticsIcon.svg',
    description: 'Data analysis, visualization, or business intelligence'
  }
];

export function CreateProject({ isOpen, onClose }: CreateProjectProps) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<ProjectFormData>({
    title: '',
    description: '',
    type: 'web',
    deadline: '',
    team: [],
    tech: []
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically save the project data
    console.log('Project data:', formData);
    onClose();
    setStep(1);
  };

  const handleTeamMemberSelect = (memberId: string) => {
    setFormData(prev => ({
      ...prev,
      team: [...prev.team, memberId]
    }));
  };

  const handleTeamMemberRemove = (memberId: string) => {
    setFormData(prev => ({
      ...prev,
      team: prev.team.filter(id => id !== memberId)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="mt-4">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-[#188268] text-white' : 'bg-gray-200'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-24 h-1 ${
                    step > stepNumber ? 'bg-[#188268]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Choose Project Type</h3>
              <div className="grid grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <div
                    key={type.type}
                    onClick={() => setFormData({ ...formData, type: type.type as ProjectType })}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.type === type.type 
                        ? 'border-[#188268] bg-[#E4FBEC]' 
                        : 'border-gray-200 hover:border-[#188268]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image src={type.icon} alt={type.title} width={24} height={24} />
                      <h4 className="font-medium">{type.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Project Name</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#188268]"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#188268]"
                    rows={4}
                    placeholder="Describe your project"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Deadline</label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#188268]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Team and Technologies */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Team & Technologies</h3>
              
              {/* Team Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Team Members</label>
                <TeamSelector
                  selectedMembers={formData.team}
                  onMemberSelect={handleTeamMemberSelect}
                  onMemberRemove={handleTeamMemberRemove}
                />
              </div>

              {/* Technologies */}
              <div>
                <label className="block text-sm font-medium mb-2">Technologies</label>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'Python', 'Figma', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'].map((tech) => (
                    <button
                      key={tech}
                      onClick={() => {
                        const newTech = formData.tech.includes(tech)
                          ? formData.tech.filter(t => t !== tech)
                          : [...formData.tech, tech];
                        setFormData({ ...formData, tech: newTech });
                      }}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        formData.tech.includes(tech)
                          ? 'bg-[#188268] text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <Button
                  className="bg-[#188268] hover:bg-[#156B55]"
                  onClick={handleNext}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  className="bg-[#188268] hover:bg-[#156B55]"
                  onClick={handleSubmit}
                >
                  Create Project
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
