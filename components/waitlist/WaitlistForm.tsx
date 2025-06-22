"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { RailNav } from "./RailNav";
import { Credentials } from "./Credentials";
import { WorkDetails } from "./WorkDetails";
import { ContactInfo } from "./ContactInfo";
import * as yup from 'yup';

// Form validation schemas
const personalInfoSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const workDetailsSchema = yup.object().shape({
  workArea: yup.string().required('Work area is required'),
  description: yup.string().optional(),
  portfolio: yup.string().url('Portfolio must be a valid URL').required('Portfolio URL is required'),
  cv: yup.mixed().required('CV is required')
    .test('fileType', 'CV must be a PDF, DOC, or DOCX file', (value) => {
      if (!value) return false;
      const acceptedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return value instanceof File && acceptedTypes.includes(value.type);
    })
    .test('fileSize', 'CV must be less than 5MB', (value) => {
      return value instanceof File && value.size <= 5 * 1024 * 1024;
    }),
});

const contactInfoSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
});

// Form data interface
export interface WaitlistUserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  workArea: string;
  description?: string;
  portfolio: string;
  cv: File | null;
}

// Props for each stage component
export interface StageProps {
  formData: WaitlistUserData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<WaitlistUserData>>;
  handleClick?: () => void;
  setCanMove: (stage: number, value: boolean) => void;
}

// Props for navigation component
export interface NavProps {
  stage: number;
  setStageAction: (stage: number) => void;
  canMove: Record<number, boolean>;
}

export function WaitlistForm() {  const [formData, setFormData] = useState<WaitlistUserData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    workArea: '',
    description: '',
    portfolio: '',
    cv: null,
  });

  const [stage, setStage] = useState(0);
  const [s, setS] = useState("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);    const [canMove, setCanMoveState] = useState<boolean[]>([false, false, false]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const value = e.target instanceof HTMLInputElement && e.target.type === 'file' 
      ? e.target.files?.[0] || null
      : e.target.value;
    setFormData((prevState: WaitlistUserData) => ({
      ...prevState,
      [name]: value
    }));
    setError(null); // Clear error when user makes changes
  };
  const validateStage = async (stage: number): Promise<boolean> => {
    try {
      switch (stage) {
        case 0:
          await personalInfoSchema.validate({
            firstName: formData.firstName,
            lastName: formData.lastName,
          });
          return true;
        case 1:
          await workDetailsSchema.validate({
            workArea: formData.workArea,
            description: formData.description,
          });
          return true;
        case 2:
          await contactInfoSchema.validate({
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            country: formData.country,
            city: formData.city,
          });
          return true;
        default:
          return false;
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.message);
      }
      return false;
    }
  };
  const handleSubmit = async () => {
    // Validate final stage first
    const isValid = await validateStage(3);
    if (!isValid) return;

    setLoading(true);
    setError(null);

    try {
      const formDataToSubmit = new FormData();
        // Validate required fields before submission
      const requiredFields = ['firstName', 'lastName', 'workArea', 'description', 'email', 'phoneNumber', 'country', 'city'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof WaitlistUserData]);
      
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSubmit.append(key, value);
        } else if (value) {
          formDataToSubmit.append(key, value.toString());
        }
      });

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to submit form. Please try again.');
      }

      // Redirect to success page
      window.location.href = '/waitlist?submitted=true';
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      // Reset loading state only on error, success will redirect
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchParams.get("s")) {
      router.push("/waitlist?s=credentials");
    } else {      switch (stage) {
        case 0:
          router.push("/waitlist?s=personal");
          return setS("personal");
        case 1:
          router.push("/waitlist?s=work");
          return setS("work");
        case 2:
          router.push("/waitlist?s=contact");
          return setS("contact");
        default:
          router.push("/waitlist?s=personal");
          return setS('personal');
      }
    }
  }, [router, searchParams, stage]);  const setCanMove = async (stage: number, value: boolean) => {
    // Only set canMove to true if validation passes
    if (value) {
      const isValid = await validateStage(stage);
      setCanMoveState(prevState => {
        const newState = [...prevState];
        newState[stage] = isValid;
        return newState;
      });
    } else {
      setCanMoveState(prevState => {
        const newState = [...prevState];
        newState[stage] = false;
        return newState;
      });
    }
  };

  // Render the correct component based on the current stage
  const Body = useMemo(() => {
    switch (s) {
      case "personal":
        return <Credentials 
          setCanMove={setCanMove} 
          setFormData={setFormData} 
          formData={formData}
          handleChange={handleChange}
          setStage={setStage}
        />;
      case "work":
        return <WorkDetails 
          setCanMove={setCanMove} 
          setFormData={setFormData} 
          formData={formData}
          handleChange={handleChange}
          setStage={setStage}
        />;
      case "contact":        return <ContactInfo 
          setCanMove={setCanMove} 
          setFormData={setFormData} 
          formData={formData}
          handleChange={handleChange}
          setStage={setStage}
          handleClick={handleSubmit}
        />;
      default:
        return <div/>;
    }
  }, [s, formData, handleChange, error, loading]);

  return (
    <div className="w-full  h-[100vh] fixed top-0 left-0 bg-[#FFF9F0] z-50 flex flex-col lg:flex-row  items-center justify-start">
      <div className="lg:w-[46%] lg:h-full h-1/4 overflow-hidden relative lg:flex bg-green w-full  items-center justify-center">
        <Image
          src="/waitlistbg.png"
          alt="banner"
          height={2200}
          width={2200}
          className=" lg:h-full object-cover"
        />
        <Image
          src="/hangoutbyb.svg"
          alt="hangout_logo"
          height={200}
          width={200}
          className="  absolute top-4 right-4 "
        />
      </div>
      <div className="bg-[#FFF9F0] lg:w-[54%] flex-1 flex flex-col  w-full  lg:h-full">
        <RailNav canMove={canMove} stage={stage} setStageAction={setStage} />
        <div className="px-6 lg:px-24 w-full max-w-screen-md py-10 h-flex-1">
          
          {Body}
        </div>
      </div>
    </div>
  );
}
