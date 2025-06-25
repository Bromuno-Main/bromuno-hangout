"use client";

import { useState } from 'react';
import Image from 'next/image';
import { WaitlistForm } from '../../components/waitlist/WaitlistForm';

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <Image
            src="/checkmark.svg"
            alt="Success"
            width={64}
            height={64}
            className="mx-auto mb-6 object-cover"
          />
          <h4 className="text-2xl font-bold mb-4">You&apos;re on the list! 🎉</h4>
          <p className="text-gray-600 mb-6">
            Thank you for your interest! We&apos;ll notify you as soon as Bromuno Hangout is ready.
            We&apos;re working hard to create something amazing.
          </p>
        </div>
      </div>
    );
  }

  return <WaitlistForm setSubmitted={setSubmitted} />;
}
