"use client";
import { useRouter } from 'next/navigation';

import { useState } from "react";
import { faqsList } from '../../data';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    router.push('/faq'); // Navigate to the FAQ page
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl big-shoulder font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-1 flex-col flex gap-[22px]">
        {faqsList.slice(0, 3).map((faq, index) => (
          <div
            key={index}
            className=""
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-bold  lg:text-[24px] lg:leading-[30px] bg-gray-100 hover:bg-gray-200 rounded-2xl  lg:h-[84px] transition-colors duration-200"
            >
              <span className='truncate text-wrap'>{faq.title}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 lg:w-[400px] ">{faq.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default FAQ;
