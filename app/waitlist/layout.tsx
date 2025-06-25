import { Metadata } from 'next'
import LoadingOverlay from "../../components/LoadingOverlay";
import React from "react";

export const metadata: Metadata = {
  title: 'Join the Waitlist | Bromuno Hangout',
  description: 'Join the waitlist for Bromuno Hangout - The next generation professional networking platform. Be among the first to experience it.',
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>

    <LoadingOverlay/>
  {children}
  </>
}
