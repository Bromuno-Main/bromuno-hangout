"use client"

import React, {useEffect} from 'react';
import Image from 'next/image';
import { ProfileOverviewTab } from './ProfileOverviewTab';
import { ProfileWorkTab } from './ProfileWorkTab';
import { ProfilePaymentTab } from './ProfilePaymentTab';
// import { LoadingState } from '../ui/LoadingState';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface ProfileProps {
    isOpen: boolean;
    onClose: () => void;
    isPage?: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ isOpen, isPage = false }) => {
    const [activeTab, setActiveTab] = React.useState('overview');
    const [isLoading, setIsLoading] = React.useState(true);
    // const [error, setError] = React.useState<Error | null>(null);    const { user, status, error } = useSelector((state: RootState) => state.auth);

    React.useEffect(() => {
        const loadProfileData = async () => {
            try {
                // Simulate profile data loading
                await new Promise(resolve => setTimeout(resolve, 1000));
                setIsLoading(false);
            } catch (err) {
                // setError(err instanceof Error ? err : new Error('Failed to load profile'));
                setIsLoading(false);
            }
        };
        loadProfileData();
    }, []);

    if (!isOpen && !isPage) return null;
    // if (error) {
    //     return (
    //         <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
    //             <p className="text-red-600">Error loading profile: {error}</p>
    //         </div>
    //     );
    // }

    const content = (
        <div className="bg-[#f9f9f9] flex flex-col w-screen  rounded-2xl min-h-screen h-screen  items-center relative ">
            {/* Header Toolbar */}
            <div className="flex justify-between items-center px-14  min-h-14  w-full  top-0  ">
                <span className="font-semibold">Account</span>
                <div className="flex gap-4 items-center">
                    <button className="text-gray-700 hover:text-gray-900">Edit</button>
                    <button className="text-gray-700 hover:text-gray-900">Logout</button>

                </div>
            </div>

            <div className="flex flex-col flex-1 overflow-y-scroll  py-14   w-full px-24 max-w-screen-xl min-w-md  ">
                {/* Cover Image Section */}
                <div className="relative text-white py-14 bg-gray-200 rounded-2xl  gap-6  flex flex-col items-center justify-center bg-[url('/red-noise-bg.png')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute top-4 left-4 bg-emerald-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-sm">Available</span>
                    </div>

                    {/* Profile Image */}
                    <div className="">
                        <div className="relative">
                            <Image
                                src="/profile.svg"
                                width={120}
                                height={120}
                                alt="profile"
                                className="bg-gray-200 rounded-full border-4 border-white"
                            />
                        </div>
                    </div>
                {/* Profile Info */}
                {/* <div className=" text-white text-center">
                    <h4 className="text-2xl text-inherit font-bold">{user?.fullName}</h4>
                    <p className=" text-inherit">@{user?.fullName}</p>
                    <p className="text-sm text-inherit mt-1">{user?.country}, Kenya</p>
                </div> */}
                </div>


                {/* Navigation and Tabs */}
                <div className="mt-6">                    <nav className="flex gap-2   border-b">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'work', label: 'Work' },
                            { id: 'payment', label: 'Payment & Subscription' }
                        ].map(tab => (
                            <span
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-2 py-1 border-b-2 transition-colors hover:bg-transparent rounded-none bg-transparent ${
                                    activeTab === tab.id 
                                    ? 'border-[#f26869] font-bold border-b  text-black' 
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab.label}
                            </span>
                        ))}
                    </nav>{/* Tab Content */}
                    <div className="mt-6">
                        {activeTab === 'overview' && <ProfileOverviewTab />}
                        {activeTab === 'work' && <ProfileWorkTab />}
                        {activeTab === 'payment' && <ProfilePaymentTab />}                        </div>
                </div>
            </div>
        </div>
    );

    if (isPage) {
        return (
            <div className="w-full min-h-screen py-8 px-4 flex justify-center">
                {content}
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            {content}
        </div>
    );
};
