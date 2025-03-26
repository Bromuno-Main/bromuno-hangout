'use client';

import {useSelector} from 'react-redux';
import {RootState} from "../redux/store";

const LoadingOverlay = () => {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="loader">
                
            </div>
        </div>
    );
};

export default LoadingOverlay;
