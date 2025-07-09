'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import UserProfile from '../../../components/profile/UserProfile';

const ProfilePage = () => {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return <UserProfile onNavigateBack={handleNavigateBack} />
};

export default ProfilePage;
