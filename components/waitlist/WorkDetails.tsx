"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { StageProps } from "./WaitlistForm";
import { ChangeEvent } from "react";

const WORK_AREAS = [
  "Software Development",
  "Design",
  "Marketing",
  "Business Strategy",
  "Project Management",
  "Other"
];

export function WorkDetails({ formData, setCanMove, handleChange, setStage, setFormData }: StageProps) {
  const [isFormValid, setIsFormValid] = useState(false);  const [errors, setErrors] = useState({
    portfolio: "",
    cv: ""
  });

  const validatePortfolioUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateFile = (file: File) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {
      return "File must be PDF, DOC, or DOCX format";
    }
    if (file.size > maxSize) {
      return "File size must be less than 5MB";
    }
    return "";
  };

  useEffect(() => {
    const portfolioError = formData.portfolio && !validatePortfolioUrl(formData.portfolio)
      ? "Please enter a valid URL"
      : "";
    
    const cvError = formData.cv 
      ? validateFile(formData.cv)
      : "CV is required";

    setErrors({
      portfolio: portfolioError,
      cv: cvError
    });

    const isValid = formData.workArea && 
                   formData.portfolio && 
                   validatePortfolioUrl(formData.portfolio) &&
                   formData.cv && 
                   !validateFile(formData.cv);

    setIsFormValid(!!isValid);
    setCanMove(1, !!isValid);
  }, [formData]);

  return (
    <section className=" w-full ">
      <div className="pb-4">
        <h1 className="text-black pb-2">Work Information</h1>
        <p className="text-medium">Tell us about your professional background</p>
      </div>
      
      <div className="flex flex-col w-full py-4 gap-4">
        <div>
          <p className="text-sm">Work Area <span className="text-red-500">*</span></p>
          <span className="wire-pill w-full  mt-2">
            <select
              name="workArea"
              value={formData.workArea}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
            >
              <option value="" disabled>Describe your work</option>
              {WORK_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </span>
        </div>        <div>
          <p className="text-sm">Description </p>
          <span className="wire-pill w-full mt-2">
            <textarea
              name="description"
              value={formData.description}
              placeholder="Tell us more about your work and experience"
              onChange={handleChange}
              className="focus:outline-none w-full bg-transparent p-2 min-h-[100px]"
            />
          </span>
        </div>        <div>
          <p className="text-sm">Portfolio Link <span className="text-red-500">*</span></p>
          <span className={`wire-pill w-full mt-2 ${errors.portfolio ? 'border-red-500' : ''}`}>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              placeholder="Your portfolio or personal website URL"
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </span>
          {errors.portfolio && (
            <p className="text-xs text-red-500 mt-1">{errors.portfolio}</p>
          )}
        </div>

        <div>
          <p className="text-sm">CV/Resume <span className="text-red-500">*</span></p>
          <span className={`wire-pill w-full mt-2 ${errors.cv ? 'border-red-500' : ''}`}>
            <input
              type="file"
              name="cv"              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] || null;
                setFormData(prev => ({
                  ...prev,
                  cv: file
                }));
              }}
              accept=".pdf,.doc,.docx"
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </span>
          <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          {errors.cv && (
            <p className="text-xs text-red-500 mt-1">{errors.cv}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <span className="flex justify-between w-full py-6 items-center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStage(2);
          }}
          type="submit"
          variant="default"
          className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          disabled={!isFormValid}
        >
          Next
        </Button>
      </span>
    </section>
  );
}
