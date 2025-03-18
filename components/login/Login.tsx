"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {useEffect, useMemo, useState } from "react";
import { businessSectors, nameTitle } from "../../data";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {login, register} from "../../redux/authSlice";
import {FlowerIcon, LeftNavIcon, RightNavIcon} from "../../data/icons";
import Link from "next/link";

// Define types for your form data and the individual components' props
interface FormData {
    email: string;
    password: string;
}

interface StageProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setStage: React.Dispatch<React.SetStateAction<number>>;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    handleClick?: () => void;
}


const WelcomeBack: React.FC<StageProps> = ({ formData, handleChange, setStage, handleClick }) => {
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
export function Login() {
    const [stage, setStage] = useState<number>(1);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState<FormData>({

        email: '',
        password: '',
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
        dispatch(login(formData))
            .unwrap()
            .then(() => {
                router.push("/");
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
                return <WelcomeBack handleClick={handleSubmit} setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
            case 2:
                return <ResetPassword setFormData={setFormData} formData={formData} handleChange={handleChange} setStage={setStage} />;
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

                <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed bg-white"></div>
                {Body}
                {error && <p>{error}</p>}
                <div className={`w-full flex flex-row mt-4 items-center justify-end`}>
                    <p>Already have an account? </p>
                    <Link href={`/register`} className={`text-[#188268]`}>Register</Link>
                </div>
            </div>
        </div>
    );
}
