import { useContext } from 'react';
import { FormContext } from '../context/formContext';

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        // Return default values instead of throwing error
        return {
            activeTab: 0,
            setActiveTab: () => { },
            activeService: 0,
            setActiveService: () => { },
            offer: null,
            setOffer: () => { },
            industry: { anchorKey: '', currentKey: '' },
            setIndustry: () => { },
            country: { anchorKey: '', currentKey: '' },
            setCountry: () => { },
            business: { anchorKey: '', currentKey: '' },
            setBusiness: () => { },
            brief: '',
            setBrief: () => { },
            work: '',
            setWork: () => { },
            phone: '',
            setPhone: () => { },
            email: '',
            setEmail: () => { },
            loading: false,
            setLoading: () => { },
            projectFor: '',
            setProjectFor: () => { },
            subcriptionType: null,
            setSubcriptionType: () => { },
            onSubmit: async () => { },
            prevClicked: () => { },
            handleSubmit: (() => { }) as any,
            control: {} as any,
            errors: {},
            register: (() => { }) as any,
            nextClicked: () => { },
            services:[],
        };
    }
    return context;
}
