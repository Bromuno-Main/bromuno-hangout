"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { RailNav } from "./RailNav";
import { Credentials } from "./Credentials";
import { WorkDetails } from "./WorkDetails";
import { ContactInfo } from "./ContactInfo";

import { AppDispatch } from "../../redux/store";
import { uploadImage } from "../../redux/uploadSlice";
import { joinWaitlist } from "../../redux/waitlistSlice";
import { showLoading, hideLoading } from "../../redux/loadingSlice";

// === Schema Definitions ===

const personalInfoSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

const workDetailsSchema = yup.object().shape({
  workArea: yup.string().required("Work area is required"),
  description: yup.string().optional(),
  portfolio: yup
      .string()
      .url("Portfolio must be a valid URL")
      .required("Portfolio URL is required"),
  cv: yup
      .mixed()
      .required("CV is required")
      .test("fileType", "CV must be a PDF, DOC, or DOCX file", (value) => {
        const acceptedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return value instanceof File && acceptedTypes.includes(value.type);
      })
      .test("fileSize", "CV must be less than 5MB", (value) => {
        return value instanceof File && value.size <= 5 * 1024 * 1024;
      }),
});

const contactInfoSchema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
});

// === Types ===

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

export interface StageProps {
  formData: WaitlistUserData;
  handleChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<React.SetStateAction<WaitlistUserData>>;
  handleClick?: () => void;
  setCanMove: (stage: number, value: boolean) => void;
}

export interface NavProps {
  stage: number;
  setStageAction: (stage: number) => void;
  canMove: Record<number, boolean>;
}

interface Prop {
  setSubmitted: (submitted: boolean) => void;
}

// === Component ===

export function WaitlistForm({ setSubmitted }: Prop) {
  const [formData, setFormData] = useState<WaitlistUserData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    workArea: "",
    description: "",
    portfolio: "",
    cv: null,
  });

  const [stage, setStage] = useState(0);
  const [view, setView] = useState("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [canMove, setCanMoveState] = useState<boolean[]>([false, false, false]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const value =
        e.target instanceof HTMLInputElement && e.target.type === "file"
            ? e.target.files?.[0] || null
            : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateStage = async (stage: number): Promise<boolean> => {
    try {
      switch (stage) {
        case 0:
          await personalInfoSchema.validate(formData);
          break;
        case 1:
          await workDetailsSchema.validate(formData);
          break;
        case 2:
          await contactInfoSchema.validate(formData);
          break;
        default:
          return false;
      }
      return true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
      return false;
    }
  };

  const setCanMove = async (stage: number, value: boolean) => {
    const isValid = value ? await validateStage(stage) : false;
    setCanMoveState((prev) => {
      const updated = [...prev];
      updated[stage] = isValid;
      return updated;
    });
  };

  const handleSubmit = async () => {
    const requiredFields: (keyof WaitlistUserData)[] = [
      "firstName",
      "lastName",
      "workArea",
      "email",
      "phoneNumber",
      "country",
      "city",
    ];

    const missing = requiredFields.filter((field) => !formData[field]);
    if (missing.length > 0) {
      setError(`Missing required fields: ${missing.join(", ")}`);
      return;
    }

    setLoading(true);
    setError(null);
    dispatch(showLoading());

    try {
      const uploadedCV = formData.cv
          ? await dispatch(uploadImage({ image: formData.cv })).unwrap()
          : "";

      await dispatch(
          joinWaitlist({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            workArea: formData.workArea,
            description: formData.description,
            portfolioLink: uploadedCV,
          })
      ).unwrap();

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setLoading(false);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    const current = searchParams.get("s");
    if (!current) {
      router.push("/waitlist?s=credentials");
    } else {
      const stageMap = ["personal", "work", "contact"];
      setView(stageMap[stage] || "personal");
      router.push(`/waitlist?s=${stageMap[stage] || "personal"}`);
    }
  }, [router, searchParams, stage]);

  const Body = useMemo(() => {
    const commonProps = {
      formData,
      handleChange,
      setFormData,
      setStage,
      setCanMove,
    };

    switch (view) {
      case "personal":
        return <Credentials {...commonProps} />;
      case "work":
        return <WorkDetails {...commonProps} />;
      case "contact":
        return <ContactInfo {...commonProps} loading={loading} handleClick={handleSubmit} />;
      default:
        return <div />;
    }
  }, [view, formData, handleChange, loading]);

  return (
      <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#FFF9F0] z-50 flex flex-col lg:flex-row items-center justify-start">
        {/* Banner section */}
        <div className="lg:w-[46%] lg:h-full h-1/4 overflow-hidden relative lg:flex bg-green w-full items-center justify-center">
          <Image src="/waitlistbg.png" alt="banner" width={2200} height={2200} className="lg:h-full object-cover" />
          <Image src="/hangoutbyb.svg" alt="logo" width={200} height={200} className="absolute lg:bottom-16 mix-blend-difference opacity-80" />
          <Image src="/logo-icon.svg" alt="icon" width={150} height={150} className="absolute" />
        </div>

        {/* Form Section */}
        <div className="bg-[#FFF9F0] lg:w-[54%] flex-1 flex flex-col w-full lg:h-full">
          <RailNav canMove={canMove} stage={stage} setStageAction={setStage} />
          <div className="px-6 lg:px-24 w-full max-w-screen-md py-10 flex-1">
            {Body}
          </div>
        </div>
      </div>
  );
}
