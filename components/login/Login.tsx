"use client";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { login } from "../../redux/authSlice";
import { hideLoading, showLoading } from "../../redux/loadingSlice";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.auth);

  const route = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    const validation = loginSchema.safeParse(formData);

    if (!validation.success) {
      // Map errors
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({}); // Clear errors if valid
    dispatch(showLoading());
    dispatch(login(formData))
      .unwrap()
      .then(() => {
        route.replace("/");
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#FFF9F0] z-50 flex items-center justify-start">
      <div className="w-[46%] h-full lg:flex bg-green hidden items-center justify-center">
        <Image src={"/banner.svg"} alt="banner" height={200} width={200} className="lg:w-1/2 lg:h-full" />
      </div>
      <div className="bg-[#FFF9F0] lg:w-[54%] h-full flex items-center lg:pl-24 justify-start">
        <section className="px-6 lg:px-24 w-full max-w-screen-sm py-10">
          <div className="pb-4">
            <h3 className="text-black">Welcome back</h3>
            <p className="text-medium">Please enter your details to sign in</p>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-4 py-4">
            <p>Email address</p>
            <span className="wire-pill w-full gap-3 items-center relative">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!bg-transparent focus:!bg-transparent active:!bg-transparent focus:outline-none"
              />
            </span>
            {errors.email && 
            <p className="error sline-in">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-4 py-4">
            <p>Password</p>
            <span className="wire-pill w-full gap-3 items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent focus:bg-transparent focus:outline-none"
              />
              <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2">
                {showPassword ? "Hide" : "Show"}
              </span>
            </span>
            {errors.password && (
              <p
              className="error slide-in"
              >
              {errors.password}
              </p>
            )}
         
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

            <p className="text-sm font-bold">
              Don&apos;t have an account? <a href="/register" className="text-[#188268] cursor-pointer">Sign up</a>
            </p>
          </span>

          <div className={`w-full flex flex-row items-center justify-center`}>
            {error && <p className="error slide-in">{error}</p>}
          </div>
          <div className="flex justify-center items-center py-4">
            <span className="w-full h-[1px] bg-gray-400"></span>
            <p className="px-4">or</p>
            <span className="w-full h-[1px] bg-gray-400"></span>
          </div>

          {/* Google Login */}
          <div className="flex flex-col gap-4">
            <Button
              onClick={(e) => e.preventDefault()}
              type="submit"
              variant="ghost"
              className="h-[39px] w-full rounded-[32px] py-2 px-8 border border-gray-400 text-black hover:text-black hover:bg-yellow-200 hover:border-yellow-200"
            >
              <div className="flex gap-2 items-center justify-center">
                <Image src={"/google-icon.webp"} alt="google" height={20} width={20} className="size-8 " />
                Continue with Google
              </div>
            </Button>
          </div>

          <div className="flex justify-center items-center py-4">
            <a href="/forgot-password" className="text-[#188268] cursor-pointer">
              Forgot password?
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
