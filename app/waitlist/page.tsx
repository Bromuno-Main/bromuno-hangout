"use client";

import { useState } from 'react';
import Image from 'next/image';
// Update the import path below to the correct relative path if needed, for example:
import { Button } from '../../components/ui/Button';
// Or create the file at 'components/ui/Button.tsx' if it does not exist.

interface FormData {
  name: string;
  email: string;
  workArea: string;
  cv: File | null;
  portfolio?: string;
}

export default function WaitlistPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    workArea: '',
    cv: null,
    portfolio: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        cv: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Here you would typically send this data to your backend
    // For now, we'll simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <Image
            src="/checkmark.svg"
            alt="Success"
            width={64}
            height={64}
            className="mx-auto mb-6"
          />
          <h4 className="text-2xl font-bold mb-4">You're on the list! 🎉</h4>
          <p className="text-gray-600 mb-6">
            Thank you for your interest! We'll notify you as soon as Bromuno Hangout is ready.
            We're working hard to create something amazing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
          <p className="text-gray-600">
            Bromuno Hangout is coming soon! Join our waitlist to be among the first to
            experience the future of professional networking.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="wire-pill w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] focus:border-transparent"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="wire-pill w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] focus:border-transparent"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="workArea" className="block text-sm font-medium text-gray-700 mb-1">
              Area of Work
            </label>
            <select
              id="workArea"
              required
              className="wire-pill w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] focus:border-transparent"
              value={formData.workArea}
              onChange={e => setFormData(prev => ({ ...prev, workArea: e.target.value }))}
            >
              <option value="">Select your area</option>
              <option value="software">Software Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="product">Product Management</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
              Upload your CV (PDF, DOC, DOCX)
            </label>
            <input
              type="file"
              id="cv"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className="wire-pill w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
              Portfolio URL (Optional)
            </label>
            <input
              type="url"
              id="portfolio"
              className="wire-pill w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] focus:border-transparent"
              value={formData.portfolio}
              onChange={e => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
              placeholder="https://your-portfolio.com"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-[32px] bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black transition-all duration-300"
          >
            {loading ? 'Submitting...' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </div>
  );
}
