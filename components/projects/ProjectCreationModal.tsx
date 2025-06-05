"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';

interface ProjectFormData {
    // Step 1: Project Info
    name: string;
    brief: string;
    tags: string[];

    // Step 2: Team Setup
    roles: {
        title: string;
        description: string;
        skills: string[];
    }[];

    // Step 3: Additional Info
    timeline: string;
    budget: string;
    visibility: 'public' | 'private';
}

interface ProjectCreationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectCreationModal({ isOpen, onClose }: ProjectCreationModalProps) {
    const [step, setStep] = useState(1);
    const [currentTag, setCurrentTag] = useState('');
    const [formData, setFormData] = useState<ProjectFormData>({
        name: '',
        brief: '',
        tags: [],
        roles: [],
        timeline: '',
        budget: '',
        visibility: 'public'
    });

    const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && currentTag.trim()) {
            e.preventDefault();
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, currentTag.trim()]
            }));
            setCurrentTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleAddRole = () => {
        setFormData(prev => ({
            ...prev,
            roles: [...prev.roles, { title: '', description: '', skills: [] }]
        }));
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white overflow-clip  rounded-lg w-full max-w-2xl h-[800px] my-6 flex flex-col p-6 relative">


                {/* Progress indicator */}
                <div className="flex w-full gap-3 items-center    border-b">
                    <h5>Create New Project</h5>
                    <div className="flex items-center justify-center   ">
                        {[1, 2, 3].map((i) => (
                            <React.Fragment key={i}>
                                <div
                                    className={`size-4 rounded-full flex items-center justify-center
                      ${step === i ? 'bg-emerald-500 text-white' :
                                            step > i ? 'bg-emerald-100 text-emerald-500' : 'bg-gray-100 text-gray-400'}`}
                                >
                                    {i}
                                </div>
                                {i < 3 && (
                                    <div className={`h-1 w-4 ${step > i ? 'bg-emerald-500' : 'bg-gray-200'}`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="h-full  w-full overflow-y-scroll max-w-[700px] border-b  p-4 flex flex-col space-y-6">

                    {/* Form steps */}
                    <div className="mb-8 relative flex-1 h-full ">
                        {step === 1 && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold mb-4">Project Info</h2>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Project Name</label>
                                    <Input
                                        placeholder="Full name"
                                        value={formData.name}
                                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Brief</label>
                                    <textarea
                                        placeholder="Provide a brief summary of your project"
                                        className="w-full p-2 border rounded-lg min-h-[100px]"
                                        value={formData.brief}
                                        onChange={e => setFormData(prev => ({ ...prev, brief: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Add tags</label>
                                    <Input
                                        placeholder="Type and press enter"
                                        value={currentTag}
                                        onChange={e => setCurrentTag(e.target.value)}
                                        onKeyDown={handleTagKeyDown}
                                    />
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {formData.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                                            >
                                                {tag}
                                                <button
                                                    onClick={() => removeTag(tag)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4 flex-1  ">
                                <h2 className="text-xl font-semibold mb-4">Team Setup</h2>
                                {formData.roles.map((role, index) => (
                                    <div key={index} className="p-4 border rounded-lg space-y-2">
                                        <Input
                                            placeholder="Role title"
                                            value={role.title}
                                            onChange={e => {
                                                const newRoles = [...formData.roles];
                                                newRoles[index].title = e.target.value;
                                                setFormData(prev => ({ ...prev, roles: newRoles }));
                                            }}
                                        />
                                        <textarea
                                            placeholder="Role description"
                                            className="w-full p-2 border rounded-lg"
                                            value={role.description}
                                            onChange={e => {
                                                const newRoles = [...formData.roles];
                                                newRoles[index].description = e.target.value;
                                                setFormData(prev => ({ ...prev, roles: newRoles }));
                                            }}
                                        />
                                    </div>
                                ))}
                                <Button onClick={handleAddRole} variant="outline" className="w-full bg-white sticky top-4">
                                    +
                                </Button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold mb-4">Additional Info</h2>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Timeline</label>
                                    <Input
                                        type="date"
                                        value={formData.timeline}
                                        onChange={e => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Budget</label>
                                    <Input
                                        placeholder="Project budget"
                                        value={formData.budget}
                                        onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Visibility</label>
                                    <select
                                        className="w-full p-2 border rounded-lg"
                                        value={formData.visibility}
                                        onChange={e => setFormData(prev => ({
                                            ...prev,
                                            visibility: e.target.value as 'public' | 'private'
                                        }))}
                                    >
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => step > 1 && setStep(step - 1)}
                        disabled={step === 1}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() => {
                            if (step < 3) setStep(step + 1);
                            else handleSubmit();
                        }}
                    >
                        {step === 3 ? 'Create Project' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
