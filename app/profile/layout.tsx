import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile | Bromuno Hangout',
  description: 'View and manage your profile on Bromuno Hangout',
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {children}
    </div>
  )
}