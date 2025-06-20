import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Waitlist | Bromuno Hangout',
  description: 'Join the waitlist for Bromuno Hangout - The next generation professional networking platform. Be among the first to experience it.',
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
