"use client"

// Update the import path below if the actual path is different
import { Profile } from '../../components/profile/Profile'

export default function ProfilePage() {
  return (
    <Profile isOpen={true} isPage={true} onClose={function (): void {
      throw new Error('Function not implemented.')
    } } />
  )
}
