"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LoadingHandler from '../LoadingHandler';
import { User } from '../../types/User';
import { LoadingState } from '../../types/LoadingState';
import { LucideVerified } from 'lucide-react';

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

     const userDetails = [
    
    { label: 'Date of Birth', value: '09, June. 1997' },
    { label: 'Address', value: '11 Kings Estate' },
    { label: 'City', value: 'Smallville' },
    { label: 'State', value: 'Los Angelis' },
  ]

    // if (!userProfile || status === 'loading') {
    //     return <LoadingHandler 
    //         loading={status === 'loading' ? LoadingState.Pending : LoadingState.Idle} 
    //         successComponent={null} 
    //     />;
    // }

     if ( status === 'loading') {
        return <LoadingHandler 
            loading={status === 'loading' ? LoadingState.Pending : LoadingState.Idle} 
            successComponent={null} 
        />;
    }

    const defaultBio = "Hello! I am a valued member of the Bromuno community. I love collaborating and bringing value to organizations.";

    return (
        <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="font-semibold">
                {userProfile?.bio || defaultBio}
              </p>
            </div>

            <div className="space-y-2 border bg-white p-4 rounded-lg shadow-sm">
                 <div className="flex justify-between items-center">
                     <span className="font-semibold">Tithan</span>
                     <span>{userProfile?.titanProgress || 0}%</span>
                 </div>
                 <div className="w-full h-2 bg-gray-100 rounded-full">
                     <div 
                        className="h-full bg-pink-500 rounded-full transition-all duration-300" 
                        style={{ width: `${userProfile?.titanProgress || 0}%` }}
                    />
                </div>
            </div>

            <div className="space-y-2 border bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-medium mb-4 flex items-center  gap-1">
                Verified <LucideVerified size={14} color='red' />
              </h5>
              <p className=" font-bold text-[18px] leading-[100%] tracking-normal">Project Manager, Video Editor,</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border bg-white p-4 rounded-lg shadow-sm">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="font-semibold">{stat.count}</span>
                </div>
              ))}
            </div>

            <div className='flex items-center justify-center w-full'>
              <div className=" py-[2px] px-2.5 w-fit bg-[#FEC8C8] rounded-full text-sm text-center text-red-600">
              Your eyes only
            </div>
            </div>
            <div className="grid grid-cols-1 gap-4  border bg-white p-4 rounded-lg shadow-sm">
              {userDetails.map((stat, index) => (
                <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        // <div className="space-y-6">
        //     {/* Bio Section */}
        //     <div className="space-y-4">
        //         <h3 className="font-semibold text-lg">Overview</h3>
        //         <p className="text-gray-600">
        //             {userProfile?.bio || defaultBio}
        //         </p>
        //     </div>

        //     {/* Tithan Progress */}
        //     <div className="space-y-2">
        //         <div className="flex justify-between items-center">
        //             <span className="font-semibold">Tithan</span>
        //             <span>{userProfile?.titanProgress || 0}%</span>
        //         </div>
        //         <div className="w-full h-2 bg-gray-100 rounded-full">
        //             <div 
        //                 className="h-full bg-pink-500 rounded-full transition-all duration-300" 
        //                 style={{ width: `${userProfile?.titanProgress || 0}%` }}
        //             />
        //         </div>
        //     </div>

        //     {/* Stats Grid */}
        //     <div className="grid grid-cols-2 gap-4">
        //         {stats.map((stat, index) => (
        //             <div key={index} className="bg-gray-50 p-4 rounded-lg">
        //                 <h4 className="text-gray-600 text-sm">{stat.label}</h4>
        //                 <p className="font-semibold text-lg">{stat.count}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};
