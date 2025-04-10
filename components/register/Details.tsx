import React, {useEffect, useState} from "react";
import {businessSectors, nameTitle} from "../../data";
import {Input} from "../ui/input";
import {Button} from "../ui/Button";
import {StageProps} from "./Register";
import {useRouter} from "next/navigation";

export const Details: React.FC<StageProps> = ({formData, handleChange, setStage, setFormData}) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const isValid =
            formData.fullName &&
            formData.dateOfBirth &&
            formData.country &&
            formData.address &&
            formData.title &&
            formData.occupation;
        setIsFormValid(!!isValid);
    }, [formData]);

    return (
        <section className="px-24 w-full max-w-screen-md py-10">
            <div>
                <h3 className="text-black pb-2 ">Let&apos;s get to know you</h3>
                <p className="text-medium">
                    Please provide basic details about yourself
                </p>
            </div>

            <div className="flex flex-col w-full py-4 gap-2">
                <p className="text-sm">Your name</p>

                {/* Name and title */}
                <div className="flex gap-2 w-full">
          <span className="wire-pill cursor-pointer">
            <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-transparent cursor-pointer !font-[Livvic]"
            >
              <option value="" disabled>
                Title
              </option>
                {nameTitle.map((title) => (
                    <option key={title.id} value={title.sector} className="!font-[Livvic]">
                        {title.sector}
                    </option>
                ))}
            </select>
          </span>
                    <span className="wire-pill w-full">
            <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Full name"
                onChange={handleChange}
                className="focus:outline-none"
            />
          </span>
                </div>

                {/* Occupation */}
                <div className="flex gap-2 flex-col pb-4">
                    <p className="text-sm">Occupation</p>
                    <span className="wire-pill w-full">
            <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
            >
              <option value="" disabled className="font-bold !text-gray-500">
                Select Occupation
              </option>
                {businessSectors.map((sector) => (
                    <option key={sector.id} value={sector.sector}>
                        {sector.sector}
                    </option>
                ))}
            </select>
          </span>
                </div>

                <div className="flex gap-2 flex-col pb-4">
                    <p className="text-sm">Date of Birth</p>
                    <span className="wire-pill">
            <Input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="focus:outline-none cursor-text"
            />
          </span>
                </div>

                <div className="flex gap-2 flex-col pb-4">
                    <p>Your country</p>
                    <span className="wire-pill">
            <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Select your country"
                className="w-3/5 focus:outline-none"
            />
          </span>
                </div>

                <div className="flex gap-2 flex-col pb-4">
                    <p>Your address</p>
                    <span className="wire-pill">
            <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Add an address"
                className="w-3/5 focus:outline-none"
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
                router.push("/register?s=purpose");
            }}
            type="submit"
            variant={"default"}
            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
            disabled={!isFormValid}
        >
          Proceed
        </Button>
        <p className="text-medium font-semibold">
          Already have an account?{" "}
            <a href="/login" className="text-[#188268] ml-3">
            Log in
          </a>
        </p>
      </span>
        </section>
    );
};
