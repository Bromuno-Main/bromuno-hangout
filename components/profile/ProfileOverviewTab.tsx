"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LoadingHandler from '../LoadingHandler';
import { User } from '../../types/User';
import { LoadingState } from '../../types/LoadingState';

interface Stat {
    label: string;
    count: number;
}

interface UserProfile extends User {
    projects?: any[];
    posts?: any[];
    answers?: any[];
    score?: number;
    teams?: any[];
    products?: any[];
    bio?: string;
    titanProgress?: number;
    position?: string;
    privateProfile?: boolean;
}

export const ProfileOverviewTab: React.FC = () => {
    const { user, status } = useSelector((state: RootState) => state.auth);
    const userProfile = user as UserProfile | null;
    
    const stats: Stat[] = [
        { label: 'Projects', count: userProfile?.projects?.length || 0 },
        { label: 'Posts', count: userProfile?.posts?.length || 0 },
        { label: 'Answers', count: userProfile?.answers?.length || 0 },
        { label: 'Score', count: userProfile?.score || 0 },
        { label: 'Teams', count: userProfile?.teams?.length || 0 },
        { label: 'Products', count: userProfile?.products?.length || 0 }
    ];

    if (!userProfile || status === 'loading') {
        return <LoadingHandler 
            loading={status === 'loading' ? LoadingState.Pending : LoadingState.Idle} 
            successComponent={null} 
        />;
    }

    const defaultBio = "Hello! I am a valued member of the Bromuno community. I love collaborating and bringing value to organizations.";

    return (
        <div className="space-y-6">
            {/* Bio Section */}
            <div className="space-y-4">
                <h3 className="font-semibold text-lg">Overview</h3>
                <p className="text-gray-600">
                    {userProfile.bio || defaultBio}
                </p>
            </div>

            {/* Tithan Progress */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Tithan</span>
                    <span>{userProfile.titanProgress || 0}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div 
                        className="h-full bg-pink-500 rounded-full transition-all duration-300" 
                        style={{ width: `${userProfile.titanProgress || 0}%` }}
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-gray-600 text-sm">{stat.label}</h4>
                        <p className="font-semibold text-lg">{stat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
