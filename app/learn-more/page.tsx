import { Suspense } from 'react';
import { generateMetadata } from './server';
import LearnMore from './client';

export { generateMetadata };

export default function Page({ params }: { params: { id: string } }) {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`w-full h-full`}>
        <LearnMore />
      </div>
    </Suspense>
  );
}


