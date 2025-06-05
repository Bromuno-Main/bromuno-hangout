import React from 'react';

export const ProfileOverviewTab: React.FC = () => {
    return (        <div className="space-y-8 md:space-y-10">
            {/* Bio */}
            <div className="px-4 md:px-6">
                <p className="text-gray-700 text-sm md:text-base">
                    Hello, I am Young. I am a project manager and design enthusiast. I love managing product and I am hoping to collaborate with you
                </p>
            </div>

            {/* Progress Section */}
            <div className="px-4 md:px-6">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-base md:text-lg">Tithan</span>
                        <span className="text-xs md:text-sm text-gray-500">13%</span>
                    </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                    <div className="h-full w-[13%] bg-pink-500 rounded-full"></div>
                </div>
            </div>

            {/* Role */}
            <div className="px-4 md:px-6">
                <div className="flex items-center gap-1">
                    <span className="text-red-500">•</span>
                    <span className="text-xs md:text-sm">Verified</span>
                </div>
                <p className="text-base md:text-lg">Project Manager, Video Editor</p>
            </div>

            {/* Stats Section */}
            <div className="px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {[
                    { label: 'Projects', value: 153 },
                    { label: 'Posts', value: 153 },
                    { label: 'Answers', value: 153 },
                    { label: 'Score', value: 153 },
                    { label: 'Teams', value: 153 },
                    { label: 'Products', value: 153 }
                ].map(stat => (
                    <div key={stat.label} className="flex justify-between items-center p-3 md:p-4 rounded-md border hover:border-gray-400 transition-colors">
                        <span className="text-gray-600 text-sm md:text-base">{stat.label}</span>
                        <span className="font-semibold text-sm md:text-base">{stat.value}</span>
                    </div>
                ))}
            </div>

            <div className="px-4 md:px-6 text-center">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-500 rounded-full text-xs md:text-sm">
                    Your eyes only
                </span>
            </div>

            {/* Personal Information */}
            <div className="px-4 md:px-6 space-y-3 md:space-y-4">
                {[
                    { label: 'Date of Birth', value: '09, June. 1997' },
                    { label: 'Address', value: '11 Kings Estate' },
                    { label: 'City', value: 'Smallville' },
                    { label: 'State', value: 'Los Angelis' }
                ].map(info => (
                    <div key={info.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
                        <span className="text-gray-600 text-sm md:text-base mb-1 sm:mb-0">{info.label}</span>
                        <span className="font-semibold text-sm md:text-base">{info.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
