"use client"

// Update the import path below if the actual path is different
import { Profile } from '../../components/profile/Profile'

export default function ProfilePage() {
  const handleClose = () => {
    // No-op for page mode
  };

  return (
    <Profile isOpen={true} isPage={true} onClose={handleClose} />
  )
}
