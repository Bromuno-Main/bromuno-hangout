"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { StageProps } from "./WaitlistForm";

export function Credentials({ formData, setCanMove, handleChange, setStage, setFormData }: StageProps) {
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const isValid = formData.firstName && formData.lastName && formData.country && formData.city;
    setIsFormValid(!!isValid);
    setCanMove(0, !!isValid);
  }, [formData]);

  return (
    <section className=" w-full ">
      <div className="pb-4">
        <h1 className="text-black pb-2">Join the waitlist!</h1>
        <p className="text-medium">
Join a bold generation of young entrepreneurs reimagining Africa`s tech frontier. This is where your ideas meet momentum.<br /><br />
      <strong className="text-green-700">Fuel your vision. Shape the continent. Joing Bromuno`s Hangout!.</strong>

        </p>

      </div>

      <div className="flex flex-col w-full py-4 gap-4">
        <div className="space-y-4 ">
          <div>
            <p className="text-sm">First Name</p>
            <span className="wire-pill mt-2 w-full">
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter your first name"
                onChange={handleChange}
                className="focus:outline-none"
              />
            </span>
          </div>

          <div>
            <p className="text-sm">Last Name</p>
            <span className="wire-pill  mt-2 w-full">
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Enter your last name"
                onChange={handleChange}
                className="focus:outline-none"
              />
            </span>
          </div>
        </div>

          <div>
            <p className="text-sm">Country</p>
            <span className="wire-pill mt-2 w-full">
              <Input
                type="text"
                name="country"
                value={formData.country}
                placeholder="Your country"
                onChange={handleChange}
                className="focus:outline-none"
              />
            </span>
          </div>

          <div>
            <p className="text-sm">City</p>
            <span className="wire-pill mt-2 w-full">
              <Input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Your city"
                onChange={handleChange}
                className="focus:outline-none"
              />
            </span>
          </div>
      </div>

      {/* Submit */}
      <span className="flex justify-between w-full py-6 items-center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setStage(1);
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
