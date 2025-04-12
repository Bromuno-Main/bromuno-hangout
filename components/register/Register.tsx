"use client";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useMemo, useState} from "react";
import {businessSectors, nameTitle} from "../../data";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {register} from "../../redux/authSlice";
import {hideLoading, showLoading} from "../../redux/loadingSlice";
import {Details} from "./Details";
import {Purpose} from "./Purpose";
import {Contacts} from "./Contacts";
import {Protect} from "./Protect";
import {RailNav} from "./RailNav";


// Define types for your form data and the individual components' props
export interface FormData {
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

export interface NavProps {
    stage: number;
    setStageAction: (stage: number) => void;
    canMove: Record<number, boolean>;
}

export interface StageProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setStage: React.Dispatch<React.SetStateAction<number>>;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    handleClick?: () => void;
    setCanMove: (stage: number, value: boolean) => void;
}


export function Register() {
    const dispatch = useDispatch<AppDispatch>();

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

    const [canMove, setCanMoveState] = useState<Record<number, boolean>>({
        0: false,  // Initially, the user can start at the first stage
        1: false, // Can't move to stage 1 initially
        2: false, // Can't move to stage 2 initially
        3: false, // Can't move to stage 3 initially
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // e.preventDefault();
        showLoading();
        dispatch(register(formData))
            .unwrap()
            .then(() => {
                router.replace("/verify-email?email=" + encodeURIComponent(formData.email));
            })
            .catch((err) => {
                // Handle error here
            })
            .finally(() => {
                // Any cleanup here if needed
                hideLoading();
            });
    };

    const [stage, setStage] = useState<number>(0);
    const [s, setS] = useState<string>("details");

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!searchParams.get("s")) {
            router.push("/register?s=details");
        } else {
            switch (stage) {
                case 0:
                    router.push("/register?s=details");
                    return setS("details");
                case 1:
                    router.push("/register?s=purpose");
                    return setS("purpose");
                case 2:
                    router.push("/register?s=contacts");
                    return setS("contacts");
                case 3:
                    router.push("/register?s=protect");
                    return setS("protect");
                default:
                    router.push("/register?s=details");
                    return setS('details');
            }
        }
    }, [router, searchParams, stage]);

    // Wrap the setCanMove to match the expected type (stage: number, value: boolean)
    const setCanMove = (stage: number, value: boolean) => {
        setCanMoveState((prevState) => ({
            ...prevState,
            [stage]: value,
        }));
    };

    const Body = useMemo(() => {
        switch (s) {
            case "details":
                return <Details setCanMove={setCanMove} setFormData={setFormData} formData={formData}
                                handleChange={handleChange}
                                setStage={setStage}/>;
            case "purpose":
                return <Purpose setCanMove={setCanMove} setFormData={setFormData} formData={formData}
                                handleChange={handleChange}
                                setStage={setStage}/>;
            case "contacts":
                return <Contacts setCanMove={setCanMove} setFormData={setFormData} formData={formData}
                                 handleChange={handleChange}
                                 setStage={setStage}/>;
            case "protect":
                return <Protect setCanMove={setCanMove} handleClick={handleSubmit} setFormData={setFormData}
                                formData={formData}
                                handleChange={handleChange} setStage={setStage}/>;
            default:
                return <div/>;
        }
    }, [stage, formData, handleChange]);

    return (
        <div className="w-full h-[100vh] fixed top-0 left-0  bg-[#FFF9F0] z-50 flex items-center justify-start">
            <div className="w-[46%] h-full lg:flex  bg-green hidden items-center justify-center">

                <Image
                    src={"/banner.svg"}
                    alt="banner"
                    height={200}
                    width={200}
                    className="lg:w-1/2 lg:h-full  "
                />
            </div>
            <div className="bg-[#FFF9F0] lg:w-[54%] h-full ">
                <RailNav canMove={canMove} stage={stage} setStageAction={setStage}/>
                {Body}

            </div>
        </div>
    );
}


