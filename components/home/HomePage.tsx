import { ArrowBigLeft, ArrowBigRight, ArrowRightSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/Button";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-full border-5 flex flex-col ">
        <div className="w-full flex">
          <p>Daily</p>
          <p>Tasks</p>
        </div>
        <div className="w-full">
          <div className="w-full">
            <div className="w-full h-[100px] lg:max-w-[619px] flex justify-between gap-4 items-center rounded-[18px] lg:px-6 lg:py-[18px] bg-[#E4FBEC]">
              <div >
              <p>Community Growth</p>
              <p>Check out our journey so far and how you can help</p>
              </div>
              <div>
                <Image src={"/help.svg"} alt="help" width={100} height={100} className="object-cover" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/>
            </div>
          </div>
          <div className="w-full  h-[795px] ">
            <div className="w-full bg-white h-fit flex items-center justify-start gap-4">
              <div className=" bg-[#FFF0DA] rounded-[12px] w-[122px] h-[139px] flex flex-col justify-between items-center lg:pt-[22px] lg:pb-[16px] lg:px-[12px]">
                <p>Members</p>
                <p>97</p>
              </div>
            </div>
            <div className="w-full " >
              <div className="w-full flex justify-between items-center">
                <p>Updates</p> 
                <div className="flex gap-4">
                  <div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/><div className="w-10 h-1 bg-green"/>
                </div>
              </div>
              <div className="w-full h-[159px] pt-[8px] pb-4 flex gap-4">
                <div className="lg:w-[371px]  rounded-[12px] pt-[22px] pr-[22px] pl-[18px] pb-[16px] bg-[#FFF0DA] flex-col flex gap-2">
                  <p>
                  Verification required: Verify your account to unlock the full potential of our partner
                  </p>
                  <div className="flex gap-4 items-center">
                    <Image src={"/verify.svg"} alt="verify" width={30} height={30} className="object-cover border-2 border-white rounded-full" />
                    <p>Mila</p> <FaArrowRight color="#C0C0C0" size={20}/> <p>Mila</p>
                  </div>

                </div>
              </div>

            </div>
            <div className="w-full relative " >
              <div className="w-full ">
                <p>Insights</p> 
              </div>
              <div className="w-full h-[159px] flex gap-4">
                <div className="lg:w-[426px] p-4 rounded-[12px] bg-[#FFF0DA] flex gap-4">
                 <div className="flex gap-4 items-center">
                    <Image src={"/top.svg"} alt="verify" width={100} height={50} className="object-cover w-[137px] h-[120px] rounded-[18px]" />
                 </div>
                  <div className="w-[241px] h-[120px] py-[21px] px-3 gap-4 flex flex-col justify-between items-start">
                    <p>Top 5 most provocative AI Apps invading the mobile app market.</p>
                    <p className="gap-4 flex items-center justify-between"><span>Jenifer</span> <span>2 mins read</span></p>
                  </div>
                </div>
              </div>
              <Button  className="rounded-[64px] bg-[#FFDEAC] hover:bg-black hover:text-[#FFDEAC] absolute right-0 top-1/2 size-[42px]">
              <FaArrowRight size={20}  className=""/>
              </Button>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}