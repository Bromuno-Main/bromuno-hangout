"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { businessSectors, nameTitle } from "../../data";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { register } from "../../redux/authSlice";
import { Link } from "lucide-react";




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

export function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "+2349059429987",
    purposeOfJoining: ["Fun"],
  }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(formData));
  };  

  const [stage, setStage] = useState<number>(1);

  const router = useRouter();
  const body = () => {
    switch (stage) {
      case 1:
        return <Details />;

      case 2:
        return <Purpose />;
      case 3:
        return <Contacts />;
      case 4:
        return <Protect />;

      default:
        return "";
    }
  };
  const Details = () => {
    return (
      <section className="px-24 w-full max-w-screen-md py-10">
        <div >
          <h3 className="text-black pb-2 ">Let&apos;s get to know you</h3>
          <p className="text-medium">
            Please provide basic details about yourself
          </p>
        </div>

        <div className="flex flex-col w-full py-4  gap-2">
          <p className="text-sm">Your name</p>

          {/* Name and title */}

          <div className="flex gap-2 w-full   ">
            <span className="wire-pill cursor-pointer ">
              <select
                name="title"
                id=""
                className="bg-transparent cursor-pointer !font-[Livvic]"
              >
                <option value="" selected>
                  Title
                </option>
                {nameTitle.map((title) => {
                  return <option key={title.id} value={title.sector} className="!font-[Livvic]">{title.sector} </option>
                })}
              </select>
            </span>
            <span className="wire-pill w-full ">
              <Input
                type="text"
                name="fullname"
                value={formData.fullName}
                placeholder="Full name"
                className=" focus:outline-none"
              /></span>
          </div>


          {/* Occupation */}
          <div className="flex gap-2 flex-col pb-4 ">
            <p className="text-sm">Occupation</p>
            <span className="wire-pill w-full ">
              <select name="title" id="" >

                <option value="" selected className="font-bold !text-gray-500">
                  Select Occupation
                </option>
                {businessSectors.map((sector) => {
                  return <option key={sector.id} value={sector.sector}>{sector.sector}</option>
                })}
              </select></span>
          </div>
          <div className="flex gap-2 flex-col  pb-4">
            <p className="text-sm">Date of Birth</p>
            <span className="wire-pill">
              <Input type="date" className="focus:outline-none cursor-text " />
            </span>
          </div>
          <div className="flex gap-2 flex-col  pb-4">
            <p>Your country</p>
            <span className="wire-pill">
              <Input
                type="text"
                placeholder="Select your country"
                className=" w-3/5 focus:outline-none"
              /></span>
          </div>
          <div className="flex gap-2 flex-col  pb-4 ">
            <p>Your address</p>
            <span className="wire-pill">
              <Input
                type="text"
                placeholder="Add a address"
                className=" w-3/5 focus:outline-none"
              /></span>
          </div>

        </div>    {/* Submit ==========>>>>>>>>> */}
        <span className="flex justify-between w-full  py-6 items-center ">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setStage(2);
            }}
            type="submit"
            variant={"ghost"}
            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>
          <p className="text-sm font-bold">
            Already have an account?{" "}
            <a href="/login" className="text-[#188268]">Log in</a>
          </p>
        </span>
      </section>
    );
  };

  const Purpose = () => {
    return (
      <section className="px-24 w-full max-w-screen-md py-10">
        <div>
          <h3 className="text-black   pb-2 ">Your purpose for joining</h3>
          <p className="text-medium ">You can select more than one</p>
        </div>
        <div className="grid grid-cols-2 gap-[27px] w-[554px] py-12 ">
          {purpose.map((items, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-center w-[257px] h-[120px] bg-white  rounded-[24px] py-6 px-4 gap-3 ${index === 0 ? "bg-[#FECC82]" : ""
                  }`}
              >
                <div>
                  <Image
                    src={items.image}
                    alt=""
                    height={10}
                    width={10}
                    className="w-[52px] h-[51px] rounded-full bg-green"
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
        <span className="flex justify-between w-full  py-6 items-center ">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setStage(3);
            }}
            type="submit"
            variant={"ghost"}
            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>
          <p className="text-sm font-bold">
            Already have an account?{" "}
            <a href="/login" className="text-[#188268]">Log in</a>
          </p>
        </span>
      </section>
    );
  };

  const Contacts = () => {
    return (
      <section className="px-6 lg:px-24 w-full max-w-screen-sm py-10">
        <div className="pb-4 ">
          <h3 className="text-black pb-2 ">Contact details</h3>
          <p className="text-medium">
            Please provide your contact info
          </p>
        </div>
        <div className="w-full flex gap-2 flex-col pb-4">
          <p>Phone Number</p>
          <div className="flex gap-2 w-full  items-center  ">
            <span className="wire-pill cursor-pointer">
              <select name="" id="">
                <option value="+234" selected>
                  +234
                </option>
              </select>
            </span>

            <span className="wire-pill w-full ">
              <Input
                type="number"
                placeholder="Enter phone number"
                className="focus:outline-none"
              /></span>

          </div>
        </div>
        <div className="w-full flex gap-2 flex-col pb-4">

          <p>Email address</p>
          <span className='wire-pill w-full '>
            <Input
              type="email"
              placeholder="Enter email address"
              className=" w-3/5 focus:outline-none"
            /></span>
        </div>
        {/* Submit ==========>>>>>>>>> */}
        <span className="flex justify-between w-full py-6   items-center ">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setStage(4);
            }}
            type="submit"
            variant={"ghost"}
            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>
          <span className="text-sm font-bold">
            Already have an account?{" "}
            <a href="/login" className="text-[#188268]  cursor:pointer"> Log in </a>
          </span>
        </span>
      </section >
    );
  };

  const Protect = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <section className="px-6  lg:px-24 w-full max-w-screen-sm py-10">
        <div className="pb-4 " >
          <h3 className="text-black">Protect your account</h3>
          <p className="text-medium">Create a strong password</p>
        </div>

        <div className="flex flex-col gap-4 py-4 ">
          <p>Create password</p>
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
              setStage(3);
            }}
            type="submit"
            variant={"ghost"}
            className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>
          <p className="text-sm font-bold">
            Already have an account?{" "}
            <a href="/login" className="text-[#188268] cursor:pointer ">Log in</a>
          </p>
        </span>
      </section>
    );
  };

  function setCase(value: number): void {
    setStage(value);
  }

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
        <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed">


          {(
            <div className={`flex items-center gap-3 justify-between h-full px-6 w-full`}>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <span
                    key={step}
                    className={`w-3 h-3 rounded-full ${stage >= step ? 'bg-green' : 'bg-gray-300'}`}
                  ></span>
                ))}
              </div>
              <div className="flex gap-3 items-center">
                <span
                  onClick={() => setCase(stage - 1)}
                  className={`p-2 bg-gray-200 rounded-full ${stage > 1 && stage < 5 ? 'bg-green' : ''}`}
                >
                  <Image src={'/forwardArrow.svg'} alt={'arrow'} className="rounded-full rotate-180 size-6" width={24} height={24} />
                </span>
                <span
                  onClick={() => setCase(stage + 1)}
                  className={`p-2 bg-gray-200 rounded-full ${stage > 1 && stage < 4 ? 'bg-green' : ''}`}
                >
                  <Image src={'/forwardArrow.svg'} alt={'arrow'} className="rounded-full size-6" width={24} height={24} />
                </span>
              </div>

            </div>
          )}

        </div>
        {body()}

      </div>
    </div>
  );
};


