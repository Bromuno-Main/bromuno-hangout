"use client";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { WhyUsData } from "../../data";
import Image from "next/image";
import { BroArow } from "../../data/icons";

export default function Testimony() {
  const [active, setActive] = useState<number>(0);

  const handleNext = () => {
    setActive((prev) => (prev === WhyUsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <>

      <section className="lg:mt-[100px] bg-[#179379] duration-500 w-full lg:min-h-[798px]   mx-auto lg:py-[100px] h-full flex justify-center items-center  px-[22px] py-5 lg:px-[160px] ">


        <div className="w-full h-fit  justify-center   max-w-[1512px] lg:px-[67px] lg:py-[67px] lg:gap-10 items-center flex flex-col lg:flex-row   ">
            <div className="lg:w-[552px] w-full duration-250   bg-[#1FA886] p-[40px] justify-between lg:max-w-[700px] max-w-[369px]  min-h-[422px] lg:min-h-[504px] py-[49px] rounded-[20px] flex-col !outline-white items-start gap-[30px] flex">
              <p className="w-full lg:-tracking-[1px] big-shoulder text-white text-[42px] leading-[50px] lg:text-[64px] lg:leading-[83px] font-semibold ">
                {WhyUsData[active].description}
              </p>
              <div className="flex gap-5 items-end justify-between w-full">
                <div className="flex text-white flex-col gap-2">
                  <p className="font-semibold leading-[32px] text-[23px]">Title</p>
                  <p className="font-normal lg:text-[23px] text-[16px] leading-[22px] lg:leading-[32px]">
                    {WhyUsData[active].title}
                  </p>
                </div>
                <div className="lg:w-[195px] lg:h-[48px]">
                  <Image src={WhyUsData[active].stars} height={50} width={50} alt="rating" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          
          <div onClick={handleNext} className="size-[150px] justify-center items-center flex cursor-pointer">
            <div  className=" bg-[#1FA886] rounded-full p-2 size-15 hover:size-16 flex items-center  hover:scale-105 justify-center duration-700 ease-in " >
              <BroArow/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


