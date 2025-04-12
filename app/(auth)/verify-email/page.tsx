"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "../../../components/ui/Button";
import {BASE_URL} from "../../../constants";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store";
import {resendEmailVerification} from "../../../redux/authSlice";

function Page() {
    const [code, setCode] = useState<string>(""); // State for the code input
    const [email, setEmail] = useState<string>(""); // State for the code input
    const [error, setError] = useState<string | null>(null); // State for error messages
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (searchParams.get("token")) {
            if (searchParams.get("token") !== null) {
                setCode(searchParams.get("token")!);
                handleVerify(searchParams.get("token")!);
            }
        }
        const emailParam = searchParams.get("email");
        if (emailParam) {
            setEmail(decodeURIComponent(emailParam)); // Decode email correctly
        }

// utils/urlHelper.js

    }, [searchParams]);

    const handleVerify = async (token: string) => {

        try {
            // Simulate API call to verify the code
            const response = await fetch(`${BASE_URL}/auth/verify-email/?token=${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Invalid code. Please try again.");
            }

            // Navigate to the next page upon successful verification
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        }
    };


    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setError(null);
        console.log(email);
        dispatch(resendEmailVerification({email: email.trim()}));
    };

    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#FFF9F0] z-50 flex items-center justify-start">
            <div className="w-[46%] h-full lg:flex bg-green hidden items-center justify-center">
                <Image
                    src={"/banner.svg"}
                    alt="banner"
                    height={200}
                    width={200}
                    className="lg:w-1/2 lg:h-full"
                />
            </div>
            <div className="bg-[#FFF9F0] lg:w-[54%] h-full flex items-center lg:pl-24 justify-start">
                <section className="px-6 lg:px-24 w-full max-w-screen-sm py-10">
                    <div className="pb-4">
                        <h3 className="text-black">Confirm email address</h3>
                        <p className="text-medium">
                            We sent a six-digit code to your email address. Please enter it
                            below to proceed.
                        </p>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-4 py-4">
                        <p>Enter code to proceed</p>
                        <span className="wire-pill w-full gap-3 items-center relative">
                            <input
                                type="number"
                                placeholder="Enter code here"
                                name="6 digit code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="!bg-transparent focus:!bg-transparent active:!bg-transparent focus:outline-none"
                            />
                        </span>
                    </div>

                    {/* Submit Button */}
                    <span className="flex justify-between w-full items-center">
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            variant="ghost"
                            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
                        >
                            Proceed
                        </Button>
                    </span>

                    {/* Error Message */}
                    <div className={`w-full flex flex-row items-center justify-center`}>
                        {error && <p className="error slide-in text-red-500">{error}</p>}
                    </div>

                    <div className="flex justify-center items-center py-4">
                        <span className="w-full h-[1px] bg-gray-400"></span>
                        <p className="px-4">or</p>
                        <span className="w-full h-[1px] bg-gray-400"></span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
