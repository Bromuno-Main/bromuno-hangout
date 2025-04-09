import React from 'react';
import {LoadingState} from '../types/LoadingState'; // adjust path as needed

interface LoadingHandlerProps {
    loading: LoadingState;
    idleComponent?: React.ReactNode;
    loadingComponent?: React.ReactNode;
    successComponent: React.ReactNode;
    errorComponent?: React.ReactNode;
}

const LoadingHandler: React.FC<LoadingHandlerProps> = ({
                                                           loading,
                                                           idleComponent = null,
                                                           loadingComponent = <div>Loading...</div>,
                                                           successComponent,
                                                           errorComponent = <div>Something went wrong.</div>,
                                                       }) => {
    switch (loading) {
        case LoadingState.Pending:
            return <>{loadingComponent}</>;
        case LoadingState.Succeeded:
            return <>{successComponent}</>;
        case LoadingState.Failed:
            return <>{errorComponent}</>;
        case LoadingState.Idle:
        default:
            return <>{idleComponent}</>;
    }
};

export default LoadingHandler;
