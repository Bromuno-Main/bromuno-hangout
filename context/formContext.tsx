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




// Create a context with a default value
const FormContext = createContext({
  activeTab: 0,
  setActiveTab: (tab: number) => {},
  activeService: 0,
  setActiveService: (service: number) => {},
  offer: null as Offer | null,
  setOffer: (offer: Offer | null) => {},
  industry: { anchorKey: '', currentKey: '' },
  setIndustry: (industry: any) => {},
  country: { anchorKey: '', currentKey: '' },
  setCountry: (country: any) => {},
  business: { anchorKey: '', currentKey: '' },
  setBusiness: (business: any) => {},
  brief: '',
  setBrief: (brief: string) => {},
  work: '',
  setWork: (work: string) => {},
  phone: '',
  setPhone: (phone: string) => {},
  email: '',
  setEmail: (email: string) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
  projectFor: '',
  setProjectFor: (projectFor: string) => {},
  subcriptionType: null,
  setSubcriptionType: (type: any) => {},
  onSubmit: async (data: any) => {},
  prevClicked: () => {},
  handleSubmit: (() => {}) as any,
  control: {} as any,
  errors: {} as any,
  register: (() => {}) as any,
  nextClicked: (props?: SelectedProp) => {},

});

export default function FormContextProvider({ children }: FormContextProp) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [offer, setOffer] = useState<Offer | null>(null);
  const [industry, setIndustry] = useState<{ anchorKey: string, currentKey: string }>({ anchorKey: '', currentKey: '' });
  const [country, setCountry] = useState<{ anchorKey: string, currentKey: string }>({ anchorKey: '', currentKey: '' });
  const [business, setBusiness] = useState<{ anchorKey: string, currentKey: string }>({ anchorKey: '', currentKey: '' });
  const [brief, setBrief] = useState('');
  const [work, setWork] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [projectFor, setProjectFor] = useState('');
  const [subcriptionType, setSubcriptionType] = useState(null);


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(returnCurrentSchema(activeTab))
  });

  const nextClicked = ({ onSelected }: SelectedProp = {}) => {
    if (activeTab === 4) return;
    if (onSelected) {
      onSelected();
    }
    setActiveTab(prev => prev + 1);
  };

  const prevClicked = () => {
    if (activeTab === 0) return;
    setActiveTab(prev => prev - 1);
  };

  const onSubmit = async (data: any) => {
    if (activeTab === 4) {
      // Handle final submission
      return;
    }
    nextClicked();
  };

  const value = {
    activeTab,
    setActiveTab,
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
    subcriptionType,
    setSubcriptionType,
    onSubmit,
    prevClicked,
    handleSubmit,
    control,
    errors,
    register,
    nextClicked,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext };
