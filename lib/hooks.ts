import { useContext } from 'react';
import { FormContext } from '../context/formContext';

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormContextProvider');
    }
    return context;
}
