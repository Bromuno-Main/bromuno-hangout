import React from 'react';

export const ProfileWorkTab: React.FC = () => {
    return (
        <div className="px-6 space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Work Experience</h3>
                <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                        <div className="flex justify-between">
                            <h4 className="font-medium">Senior Project Manager</h4>
                            <span className="text-sm text-gray-500">2020 - Present</span>
                        </div>
                        <p className="text-gray-600 mt-2">Leading multiple teams across various projects</p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <div className="flex justify-between">
                            <h4 className="font-medium">Video Editor</h4>
                            <span className="text-sm text-gray-500">2018 - 2020</span>
                        </div>
                        <p className="text-gray-600 mt-2">Produced and edited content for various clients</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Project Management</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Video Editing</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Team Leadership</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Content Creation</span>
                </div>
            </div>
        </div>
    );
};
