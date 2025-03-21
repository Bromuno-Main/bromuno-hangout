"use client";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import Image from "next/image";

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
      <div className="bg-[#FFF9F0] lg:w-[54%] h-full flex items-center justify-center">
        <section className="px-6  lg:px-24 w-full max-w-screen-sm py-10">
          <div className="pb-4 ">
            <h3 className="text-black">Welcome back</h3>
            <p className="text-medium">
              Please enter your details to sign in
            </p>
          </div>

          <div className="flex flex-col gap-4 py-4 ">
            <p>Email address</p>
            <span className="wire-pill w-full gap-3 items-center relative">
              <Input
                type={"email"}
                placeholder="Enter email"
                className="!bg-transparent focus:!bg-transparent focus:outline-none"
              />
            </span>
          </div>
          <div className="flex flex-col gap-4 py-4 ">
            <p>Password</p>
            <span className="wire-pill w-full gap-3 items-center relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="!bg-transparent focus:!bg-transparent focus:outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </span>
          </div>
          {/* Submit ==========>>>>>>>>> */}
          <span className="flex justify-between w-full items-center ">
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              variant={"ghost"}
              className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
            >
              Proceed
            </Button>
            <p className="text-sm font-bold">
              Don't have an account?{" "}
              <a href="/register" className="text-[#188268] cursor:pointer ">
                Sign up
              </a>
            </p>
          </span>
          <div className="flex justify-center items-center py-4">
            <span className="w-full h-[1px] bg-gray-400"></span>
            <p className="px-4">or</p>
            <span className="w-full h-[1px] bg-gray-400"></span>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              variant={"ghost"}
              className="h-[39px] w-full rounded-[32px] py-2 px-8 border border-gray-400 text-black hover:text-black hover:bg-gray-200"
            >
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  height={20}
                  width={20}
                  className="w-5 h-5"
                />
                Continue with Google
              </div>
            </Button>
          </div>
          <div className="flex justify-center items-center py-4">
            <a
              href="/forgot-password"
              className="text-[#188268] cursor:pointer "
            >
              Forgot password?
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
