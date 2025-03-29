"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/Button";

function Page() {
    const [code, setCode] = useState<string>(""); // State for the code input
    const [error, setError] = useState<string | null>(null); // State for error messages
    const router = useRouter();

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setError(null);

        if (!code || code.length !== 6) {
            setError("Please enter a valid 6-digit code.");
            return;
        }

        try {
            // Simulate API call to verify the code
            const response = await fetch("/api/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
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
