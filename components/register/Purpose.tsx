"use client"
import React, {useState} from "react";
import Image from "next/image";
import {Button} from "../ui/Button";
import {StageProps} from "./Register";

export const purpose = [
    {
        title: "Skill",
        aim: "Get or develop a tech skill.",
        image: "/skill.svg",
    },
    {
        title: "Work",
        aim: "Get jobs and work on projects.",
        image: "/work.svg",
    },
    {
        title: "Network",
        aim: "Discover new people and ideas.",
        image: "/connect.svg",
    },
    {
        title: "Build",
        aim: "Build and own a digital project.",
        image: "/build.svg",
    },
];

export const Purpose: React.FC<StageProps> = ({formData, handleChange, setStage, setFormData}) => {
    const [selectedPurposes, setSelectedPurposes] = useState<string[]>(formData.purposeOfJoining || []);

    const handlePurposeClick = (title: string) => {
        setSelectedPurposes((prevSelected) => {
            if (prevSelected.includes(title)) {
                return prevSelected.filter((item) => item !== title);
            } else {
                return [...prevSelected, title];
            }
        });
        setFormData((prevState) => ({
            ...prevState,
            purposeOfJoining: selectedPurposes,
        }));
    };

    return (
        <section className="px-24 w-full max-w-screen-md py-10">
            <div>
                <h3 className="text-black pb-2">Your purpose for joining</h3>
                <p className="text-medium">You can select more than one</p>
            </div>
            <div className="grid grid-cols-2 gap-[27px] w-[554px] py-12">
                {purpose.map((items, index) => {
                    return (
                        <div
                            onClick={() => handlePurposeClick(items.title)}
                            key={index}
                            className={`flex items-center justify-center w-[257px] h-[120px] rounded-[24px] py-6 px-4 gap-3 ${
                                selectedPurposes.includes(items.title) ? "bg-[#FECC82]" : "bg-white"
                            } cursor-pointer`}
                        >
                            <div className="rounded-full relative flex items-center justify-center bg-green">
                                <Image
                                    src={items.image}
                                    alt=""
                                    height={100}
                                    width={100}
                                    className={`w-[52px] h-[51px] fill-current invert object-center ${
                                        selectedPurposes.includes(items.title) ? "opacity-50" : "opacity-100"
                                    }`}
                                />
                                <Image
                                    src={"/check.svg"}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className={`size-6 duration-250 absolute m-auto ${
                                        selectedPurposes.includes(items.title) ? "block" : "hidden"
                                    }`}
                                />
                            </div>
                            <div className="w-[161px] h-[72px] gap-2 flex flex-col items-start justify-center">
                                <h4 className="text-medium text-bold">{items.title}</h4>
                                <p className="text-sm">{items.aim}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Submit ==========>>>>>>>>> */}
            <span className="flex justify-between w-full py-6 items-center">
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        setStage(2);
                    }}
                    type="submit"
                    variant={"ghost"}
                    className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
                    disabled={selectedPurposes.length === 0} // Disable button if no option is selected
                >
                    Proceed
                </Button>
                <p className="text-sm font-bold">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#188268]">
                        Log in
                    </a>
                </p>
            </span>
        </section>
    );
};
