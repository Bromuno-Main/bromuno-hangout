"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {useEffect, useMemo, useState } from "react";
import { businessSectors, nameTitle } from "../../data";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { register } from "../../redux/authSlice";
import {FlowerIcon, LeftNavIcon, RightNavIcon} from "../../data/icons";
import Link from "next/link";

// Define types for your form data and the individual components' props
interface FormData {
    fullName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    country: string;
    address: string;
    occupation: string;
    title: string;
    phoneNumber: string;
    purposeOfJoining: string[];
}

interface StageProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setStage: React.Dispatch<React.SetStateAction<number>>;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    handleClick?: () => void;
}

const purpose = [
    {
        title: "Skill",
        aim: "Get or develop a tech skill.",
        image: "/purpose.svg",
    },
    {
        title: "Work",
        aim: "Get jobs and work on projects.",
        image: "/purpose.svg",
    },
    {
        title: "Network",
        aim: "Discover new people and ideas.",
        image: "/purpose.svg",
    },
    {
        title: "Build",
        aim: "Build and own a digital project.",
        image: "/purpose.svg",
    },
];

// Components for each stage
const Details: React.FC<StageProps> = ({ formData, handleChange, setStage, setFormData }) => {
    return (
        <>
            <div>
                <h4 className="text-black">Let&apos;s get to know you</h4>
                <p className="text-sm">Please provide basic details about yourself</p>
            </div>
            <div>
                <label>Your name</label>
                <select
                    value={formData.title}
                    name="title"
                    onChange={handleChange}
                    className="text-black w-[50px] border"
                >
                    <option value="title">Title</option>
                    {nameTitle.map((title) => (
                        <option key={title.id} value={title.sector}>
                            {title.sector}
                        </option>
                    ))}
                </select>

                <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="input-primary w-3/5"
                />
            </div>
            <div>
                <label>Occupation</label>
                <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="text-black border"
                >
                    <option value="">Select industry</option>
                    {businessSectors.map((sector) => (
                        <option key={sector.id} value={sector.sector}>
                            {sector.sector}
                        </option>
                    ))}
                </select>
            </div>
            <div className={`w-full`}>
                <label>Date of Birth</label>
                <Input
                    className={`text-black w-full`}
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    type="date"
                />
            </div>
            <div>
                <label>Your country</label>
                <Input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Select your country"
                    className="input-primary w-3/5"
                />
            </div>
            <div>
                <label>Your address</label>
                <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Add an address"
                    className="input-primary w-3/5"
                />
            </div>

            <Button onClick={() => setStage(2)} variant={"ghost"}>
                Proceed
            </Button>
        </>
    );
};

const Purpose: React.FC<StageProps> = ({ formData, handleChange, setStage,setFormData }) => {
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
        <div>
            <div>
                <h4 className="text-black">Your purpose for joining</h4>
                <p className="text-sm">You can select more than one</p>
            </div>
            <div className="grid grid-cols-2 gap-[27px] w-[554px]">
                {purpose.map((item, index) => (
                    <div
                        onClick={() => handlePurposeClick(item.title)}
                        key={index}
                        className={`flex items-center justify-center w-[257px] h-[120px] rounded-[24px] py-6 px-4 gap-3 ${selectedPurposes.includes(item.title) ? "bg-[#FECC82]" : ""
                        } cursor-pointer`}
                    >
                        <div>
                            <Image
                                src={item.image}
                                alt=""
                                height={10}
                                width={10}
                                className="w-[52px] h-[51px] rounded-full bg-green"
                            />
                        </div>
                        <div className="w-[161px] h-[72px] gap-2 flex flex-col items-start justify-center">
                            <h4 className="text-sm text-black">{item.title}</h4>
                            <p className="text-sm">{item.aim}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button onClick={() => setStage(3)} variant={"ghost"}>
                Proceed
            </Button>
        </div>
    );
};

const Contacts: React.FC<StageProps> = ({ formData, handleChange, setStage,setFormData }) => {
    return (
        <div>
            <div>
                <label>Phone Number</label>
                <select name="phoneCountry" defaultValue="+234" className="w-[80px]">
                    <option value="+234">+234</option>
                    {/* Add more country options here */}
                </select>
                <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="input-primary w-3/5"
                />
            </div>
            <div>
                <label>Email address</label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="input-primary w-3/5"
                />
            </div>

            <Button onClick={() => setStage(4)} variant={"ghost"}>
                Proceed
            </Button>
        </div>
    );
};

const Protect: React.FC<StageProps> = ({ formData, handleChange, setStage,setFormData,handleClick }) => {
    return (
        <div>
            <div>
                <label>Create password</label>
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="input-primary w-3/5"
                />
            </div>

            <Button onClick={() => {
                if (handleClick) {
                    handleClick()
                }
            }} variant={"ghost"}>
                Proceed
            </Button>
        </div>
    );
};

const WelcomeBack: React.FC<StageProps> = ({ formData, handleChange, setStage }) => {
    return (
        <div>
            <div>
                <label>Email address</label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    className="input-primary w-3/5"
                />
            </div>
            <div>
                <label>Create password</label>
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="input-primary w-3/5"
                />
            </div>

            <Button onClick={() => setStage(6)} variant={"ghost"}>
                Proceed
            </Button>
        </div>
    );
};

const ResetPassword: React.FC<StageProps> = ({ formData, handleChange, setStage }) => {
    return (
        <div>
            <div>
                <h4>Reset Password</h4>
                <p>Enter your new password here</p>
            </div>
            <div>
                <label>Enter New Password</label>
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                />
            </div>

            <Button onClick={() => setStage(1)} variant={"ghost"}>
                Proceed
            </Button>
        </div>
    );
};

// Main Register component
export function Register() {
    const [stage, setStage] = useState<number>(1);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        country: '',
        address: '',
        occupation: businessSectors[0].sector,
        title: nameTitle[0].sector,
        phoneNumber: '',
        purposeOfJoining: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // e.preventDefault();
        dispatch(register(formData))
            .unwrap()
            .then(() => {
                router.push("/verify-email");
            })
            .catch((err) => {
                // Handle error here
            })
            .finally(() => {
                // Any cleanup here if needed
            });
    };

    const Body = useMemo(() => {
        switch (stage) {
            case 1:
                return <Details setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
            case 2:
                return <Purpose setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
            case 3:
                return <Contacts setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
            case 4:
                return <Protect handleClick={handleSubmit} setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
            default:
                return "";
        }
    }, [stage, formData, handleChange]);

    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 bg-white z-50 flex items-center justify-start">
            <div className="w-[46%] h-full bg-green flex items-center justify-center">
                <Image
                    src={"/banner.svg"}
                    alt="banner"
                    height={10}
                    width={10}
                    className="w-[331px] h-[541px]"
                />
            </div>
            <div className="bg-white w-[54%] h-full text-white px-2">
                <div className={`w-full flex-row flex justify-between`}>
                    <div className={`flex-row flex items-center gap-3`}>
                        {
                            Array.from({ length: 4 }, (_, i) => i + 1).map((value, i) => {
                                const isFilled = i + 1 <= stage;
                                return (
                                    <div
                                        key={i}
                                        className={`size-5 rounded-full ${isFilled ? "bg-[#FFCD83]" : "border"}`}
                                    >
                                        { isFilled&& <FlowerIcon/>}
                                    </div>
                                );
                            })
                        }
                    </div>



                    <div className={`flex flex-row`}>
                        <button disabled={stage===1} onClick={()=>{
                            if (stage===1) {
                                setStage(1);
                            }else  if (stage===2) {
                                setStage(1);
                            }else if(stage===3){
                                setStage(2);
                            }else if(stage===4){
                                setStage(3);
                            }
                        }} className={`bg-transparent hover:bg-transparent size-fit`} >
                        <LeftNavIcon svgColor={stage===1?undefined:'#24BE98'}/>

                        </button>
                        <button disabled={stage===4} onClick={()=>{
                            if (stage===1) {
                                setStage(2);
                            }else  if (stage===2) {
                                setStage(3);
                            }else if(stage===3){
                                setStage(4);
                            }else if(stage===4){
                                setStage(4);
                            }
                        }}  className={`bg-transparent hover:bg-transparent size-fit`} >

                        <RightNavIcon svgColor={stage===4?undefined:'#24BE98'}/>
                        </button>
                    </div>

                </div>
                <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed bg-white"></div>
                {Body}
                {error && <p>{error}</p>}
                <div className={`w-full flex flex-row mt-4 items-center justify-end`}>
                    <p>Already have an account? </p>
                    <Link href={`/login`} className={`text-[#188268]`}>Log in</Link>
                </div>
            </div>
        </div>
    );
}
