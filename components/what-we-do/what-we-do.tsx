// 3
"use client";
import { Link } from "lucide-react";
import CtaB from "../barners/cta-b";
import Content from "./MoreInfo";
import Image from "next/image";

function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className=" h-fit flex pt-20 w-full min-h-screen  bg-gradient-to-b from-white to-[#ffffff00] section-margin lg:py-20  flex-col"
    >
      <div className="max-w-screen-2xl relative mx-auto  pb-24">
        <div className=" flex lg:justify-between flex-col lg:flex-row items-start px-10 gap-24  pb-24 lg:items-center ">
          <span className=" max-w-screen-sm">
            <h2 className=" display  !leading-snug pb-5  lg:!text-[4rem]">Ship Digital Products: <br /> All in one place</h2>
            <h4>We offer a wide range of services that cuts across all stages of development.</h4>
          </span>
          <div className="rounded-[5rem] overflow-hidden max-w-screen-sm  flex items">
            <Image src="/twist.png" alt="Hi" className="  " width={1200} height={500} />
          </div>
        </div>
        <Content />
      </div>
      <span className=" relative mx-auto max-sm:flex-col-reverse text-large  items-center flex gap-8 font-bold "> 
      <button
        className="bg-yellow !bg-background px-4 py-2  min-w-[12rem] rounded-full ">
        Learn More
      </button>
      <button
        className="bg-yellow px-8 py-2 rounded-full">
       Get 50% Discount on your first month
      </button>
      </span>
      {/* <CtaB copy={"Design and ship amazing products"} /> */}

    </section>
  );
}
export default WhatWeDo;
