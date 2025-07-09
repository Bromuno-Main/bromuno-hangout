'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, LucideVerified, Target, X } from 'lucide-react';
import { ProfileOverviewTab } from './ProfileOverviewTab';
import { ProfileWorkTab } from './ProfileWorkTab';
import { ProfilePaymentTab } from './ProfilePaymentTab';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogTitle } from '../ui/dialog';
import { set } from 'react-hook-form';
import EditProfileOverview from './EditProfileOverview';

interface UserProfileProps {
  onNavigateBack: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigateBack }) => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [sectionToEdit, setSectionToEdit] = React.useState('');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'work', label: 'Work' },
    { id: 'payment', label: 'Payment & Subscription' }
  ];

  const stats = [
    { label: 'Projects', value: '153' },
    { label: 'Posts', value: '153' },
    { label: 'Answers', value: '153' },
    { label: 'Score', value: '153' },
    { label: 'Teams', value: '153' },
    { label: 'Products', value: '153' }
  ];

 

  const dropDown = [
    { label: 'Photo', value: '153' },
    { label: 'Account Details', value: '153' },
    { label: 'Work', value: '153' },
    { label: 'Payment', value: '153' },
    { label: 'Security', value: '153' },
  ]

  const handleEditProfile = (option: string) => {
    setIsDialogOpen(true);
    setSectionToEdit(option);
  }

  return (
    <div className="w-full h-[100dvh]  lg:mx-auto bg-gray-50 overflow-hidden flex-col flex items-center overflow-y-scroll scrollbar-hide gap-5 mt-5">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/5" />
        <DialogHeader className='hidden'/>
        <DialogTitle className='hidden'/>
        <DialogContent className='max-w-[846px] w-full h-[100vh] lg:h-full lg:max-h-[600px] overflow-y-scroll scrollbar-hide p-0 border-none lg:rounded-2xl'>
          <EditProfileOverview section={sectionToEdit} />
          <DialogClose className='absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-gray-200'>
            <X/>
          </DialogClose>
        </DialogContent>
        <DialogFooter className='hidden'/>
        
      </Dialog>
      {/* Header with close and edit buttons */}      <div className="flex justify-between items-center bg-inherit p-4 w-full shrink-0 sticky top-0 z-10 ">
        <div className="flex items-center gap-4 ">
          <button 
            onClick={onNavigateBack} 
            className="rounded-full p-0 h-10 w-10 hover:bg-gray-300 bg-white flex items-center justify-center"
          >
            <X/>
          </button>
          <h4 className="text-xl font-semibold">Account</h4>
        </div>
        <div className="flex gap-2">
          
          <div className='relative'>
            <button onClick={()=>setIsEditProfileOpen(true)} className="text-gray-600  hover:text-[16px] hover:bg-gray-50 flex items-center justify-center gap-1 group ">
            Edit 
            <ChevronDown color='gray' className='group-hover:font-black size-[18px] group-hover:size-5'/>
            
          </button>
            {/* Edit profile dropdown */}
      
            {isEditProfileOpen && (
             <>
              <span className='fixed w-full h-full inset-0  bg-transparent cursor-pointer transition-all duration-500' onClick={()=>setIsEditProfileOpen(false)}/>
              <span  className="absolute top-10 z-10 right-10 w-[208px] h-[222px] py-[14px] border-[1px]  bg-white shadow-lg rounded-[18px]">
                {dropDown.map((item, index) => (
                  
                    <span key={index} onClick={()=>handleEditProfile(item.label)} className="flex h-[38px] p-2 justify-start gap-3 items-center hover:bg-gray-100  border-b rounded cursor-pointer ">
                    <span className='h-5 w-5 bg-black rounded-full'/>
                    <span className="text-sm font-semibold">{item.label}</span>
                  
                  </span>
                ))}
            </span>
             </>
            )}
          </div>
          <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded-full">Logout</button>
        </div>
      </div>

      
      

     <div className=' overflow-hidden rounded-2xl h-[259px] w-full max-w-4xl relative shrink-0'>
      <Image src={"/profileBg.jpg"} width={673} height={1200} alt='bggradient' className='inset-0 h-full w-full absolute object-cover'/>
       {/* Profile Banner */}
      <div className="relative flex flex-col gap-2 items-center justify-center h-full bg-red-700/70">
        
        <div className='absolute top-5 left-5 bg-[#146C57]  text-sm  py-[6px] px-3 gap-2.5 flex items-center justify-center rounded-full'>
          <Target size={18} color='#aff4c6' className='text-[#aff4c6]'/>
          <span className="text-white text-xs" >Available</span>
        </div>
        <div className="relative  w-fit">
          <div className="relative">
            <Image
              src="/casual-group-meeting.jpeg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            
          </div>
        </div>
        {/* Profile Info */}
      <div className=" text-center ">
        <h1 className="text-2xl font-bold text-white">Yungbld</h1>
        <p className=" text-white">@ynbld</p>
        <p className="mt-2 text-white">Nairobi, Kenya</p>
      </div>
      </div>

      
     </div>

      <div className=' max-w-[534px] w-full mb-[22px] shrink-0'>
        {/* Navigation Tabs */}
      <div className="flex gap-4 w-fit">
        {tabs.map(tab => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer p-3 ${
              activeTab === tab.id
                ? 'border-b-2 border-red-500 font-black text-red-500'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <ProfileOverviewTab />
        )}
        {activeTab === 'work' && (
          <ProfileWorkTab/>
        )}
        {activeTab === 'payment' && (
          <ProfilePaymentTab/>
        )}
      </div>
      </div>
    </div>  );
};

export default UserProfile;
