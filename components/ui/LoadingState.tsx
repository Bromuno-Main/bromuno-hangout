import React from 'react';

export const LoadingSpinner = () => (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#f26869]"></div>
    </div>
);

export const LoadingState: React.FC<{ isLoading: boolean; children: React.ReactNode }> = ({ 
    isLoading, 
    children 
}) => {
    if (isLoading) {
        return <LoadingSpinner />;
    }
    return <>{children}</>;
};
