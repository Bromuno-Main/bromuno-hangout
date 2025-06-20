'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import UserProfile from '../../../components/profile/UserProfile';

const ProfilePage = () => {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <UserProfile onNavigateBack={handleNavigateBack} />
    </div>
  );
};

export default ProfilePage;
