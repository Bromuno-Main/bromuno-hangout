"use client"
import React, { createContext, useState } from 'react';
import { businessSectors, Offer, Subscription,nameTitle } from '../data';
import { Country } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller, UseFormRegister, UseFormHandleSubmit, FieldErrors, Control } from 'react-hook-form';

interface FormContextProp {
    children: React.ReactNode;
}

interface SelectedProp {
    onSelected?: () => void;
}



const page0Schema = yup.object().shape({
});

const page1Schema = yup.object().shape({
    industry: yup.string().required('Industry is required'),
    brief: yup.string().required('Brief description is required'),
});

const page2Schema = yup.object().shape({
    yourName: yup.string().required('Your name is required'),
    businessInto: yup.string().required('Industry is required'),
    yourWork: yup.string().required('Work is required'),
    yourCountry: yup.string().required('Country is required'),
});

const page3Schema = yup.object().shape({
    yourEmail: yup.string().required('Email is required'),
    yourPhone: yup.string().required('Phone is required'),
});

const page4Schema = yup.object().shape({
});

const defaultSchema = yup.object().shape({
});


type FormValues = {
    industry?: string;
    brief?: string;
    projectFor?: string;
    car?: string;
    businessInto?: string;
    yourName?: string;
    yourWork?: string;
    yourCountry?: string;
    yourPhone?: string;
    yourEmail?: string;
    your?: string;
    yourTitle?: string;
    // Add other fields as necessary
};

type SchemaType = yup.ObjectSchema<FormValues, yup.AnyObject, FormValues>;

const returnCurrentSchema = (activeTab: number): SchemaType => {
    switch (activeTab) {
        case 0:
            return page0Schema as SchemaType;
        case 1:
            return page1Schema as SchemaType;
        case 2:
            return page2Schema as SchemaType;
        case 3:
            return page3Schema as SchemaType;
        case 4:
            return page4Schema as SchemaType;
        default:
            return defaultSchema as SchemaType;
    }
};



interface FormType {
    title: Selection | any;
    setTitle:  React.Dispatch<React.SetStateAction<Selection | any>>;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    services: { title: string; index: number }[];
    activeService: number;
    setActiveService: React.Dispatch<React.SetStateAction<number>>;
    offer: Offer | undefined;
    setOffer: React.Dispatch<React.SetStateAction<Offer | undefined>>;
    industry: Selection | any;
    setIndustry: React.Dispatch<React.SetStateAction<Selection | any>>;
    country: Selection | any;
    setCountry: React.Dispatch<React.SetStateAction<Selection | any>>;
    business: Selection | any;
    setBusiness: React.Dispatch<React.SetStateAction<Selection | any>>;
    brief: string;
    setBrief: React.Dispatch<React.SetStateAction<string>>;
    work: string;
    setWork: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    projectFor: string;
    name: string;
    setName:  React.Dispatch<React.SetStateAction<string>>;
    setProjectFor: React.Dispatch<React.SetStateAction<string>>;
    nextClicked: ({ onSelected }?: SelectedProp) => void;
    prevClicked: ({ onSelected }?: SelectedProp) => void;
    onSubmit: (data: any) => void;
    onFinalSubmit: () => Promise<void>;
    // Add form-related methods here
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    control: Control<FormValues>;
    errors: FieldErrors<FormValues>;
    paymentType: string;
    setPaymentType: React.Dispatch<React.SetStateAction<string>>;
    subcriptionType: Subscription | null;
    setSubscriptionType: React.Dispatch<React.SetStateAction<Subscription|null>>;
}

export const FormContext = createContext<FormType | null>(null);

export default function FormContextProvider({ children }: FormContextProp) {
    const [title, setTitle] = useState<Selection | any>(new Set([]));
    const [activeTab, setActiveTab] = useState<number>(0);
    const services = [{ title: "Service Package", index: 0 }, { title: "Subscription", index: 1 }];
    const [activeService, setActiveService] = useState<number>(0);
    const [offer, setOffer] = useState<Offer>();
    const [industry, setIndustry] = useState<Selection | any>(new Set([]));
    const [country, setCountry] = useState<Selection | any>(new Set([]));
    const [business, setBusiness] = useState<Selection | any>(new Set([]));
    const [brief, setBrief] = useState<string>("");
    const [work, setWork] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [projectFor, setProjectFor] = useState<string>("");
    const [paymentType, setPaymentType] = useState<string>("Service Package");
    const [subcriptionType, setSubscriptionType] = useState<Subscription | null>(null);

    


    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(returnCurrentSchema(activeTab)),
    });


    const nextClicked = ({ onSelected }: SelectedProp = {}) => {
        switch (activeTab) {
            case 0:
                if (onSelected) {
                    onSelected();
                }

                return setActiveTab(1);
            case 1:
                if (projectFor === "") {
                    return;
                }

                return setActiveTab(2);

            case 2:
                return setActiveTab(3);

            case 3:
                return setActiveTab(4);
            case 4:

                return setActiveTab(4);

            default:
                return setActiveTab(4);

        }
    }
    const prevClicked = () => {
        switch (activeTab) {
            case 0:

                return setActiveTab(0);
            case 1:

                return setActiveTab(0);

            case 2:

                return setActiveTab(1);

            case 3:

                return setActiveTab(2);
            case 4:

                return setActiveTab(3);

            default:
                return setActiveTab(0);

        }
    }

    const onSubmit = (data: any) => {
        if (activeTab === 4) {
            // onFinalSubmit(data);
        } else {
            nextClicked(data);
        }
    };

    const onFinalSubmit = async () => {



        const selectedIndustry = businessSectors.find(sector => sector.id.toString() === industry.anchorKey);
        console.log(selectedIndustry?.sector);
        const selectedBusiness = businessSectors.find(sector => sector.id.toString() === business.anchorKey);
        console.log(selectedBusiness?.sector);
        const selectedCountry = Country.getAllCountries().find(sector => sector.isoCode.toString() === country.anchorKey);
        console.log(selectedCountry?.name);
        const selectedTitle = nameTitle.find(sector => sector.id.toString() === title.anchorKey);
        console.log(selectedTitle?.sector);
        // return;
        setLoading(true);
        try {
            const payload = {
                industry: selectedIndustry?.sector,
                brief,
                businessInto: selectedBusiness?.sector,
                yourWork: work,
                yourTitle: selectedTitle?.sector,
                yourName: name,
                yourCountry: selectedCountry?.name,
                yourPhone: phone,
                businessType: offer?.title,
                yourEmail: email,
                projectFor,
                paymentType: services[activeService],
                subscriptionType: subcriptionType,
                // Add other fields as necessary
            };

            // Using fetch
            const response = await fetch('https://email.bromuno.com/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // If you prefer axios
            /*
            const response = await axios.post('https://your-api-endpoint.com/submit-form', payload);
            */

            if (response.ok) {
                const result = await response.json();
                console.log('Form submitted successfully:', result);
                // Handle success, maybe navigate to a success page or close the modal
            } else {
                console.error('Error submitting form:', response.statusText);
                // Handle the error, show a notification or alert
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle the error, show a notification or alert
        } finally {
            setLoading(false);
            setActiveTab(5);
        }
    };



    return (
        <FormContext.Provider value={{
            title,
            setTitle,
            activeTab,
            setActiveTab,
            services,
            activeService,
            setActiveService,
            offer,
            setOffer,
            industry,
            setIndustry,
            country,
            setCountry,
            business,
            setBusiness,
            brief,
            setBrief,
            work,
            setWork,
            phone,
            setPhone,
            email,
            setEmail,
            loading,
            setLoading,
            projectFor,
            setProjectFor,
            nextClicked,
            prevClicked,
            onSubmit,
            onFinalSubmit,
            // Provide form-related methods
            register,
            handleSubmit,
            control,
            errors,
            paymentType,
            setPaymentType,
            subcriptionType,
            setSubscriptionType,
            name,
            setName,
        }}>
            {children}
        </FormContext.Provider>
    );
}
