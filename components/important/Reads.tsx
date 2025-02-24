"use client"

import Image from "next/image"
import {FaArrowRightLong } from "react-icons/fa6"
import { read } from "../../data";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function Reads(){

  const readRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (readRef.current) {
      observer.observe(readRef.current);
    }

    return () => {
      if (readRef.current) {
        observer.unobserve(readRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
            ".read",{opacity:0}, { opacity: 1, duration:1, stagger:0.5, ease:'power2.in' }
          );
    }
  }, [isInView]);

    return (
    <section ref={readRef} className="flex max-w-[1512px] w-full mx-auto justify-center items-center pt-10 lg:p-[100px]">
        <div  className="flex justify-center flex-col items-center gap-[53px]">
            <h4 className="font-bold big-shoulder hidden opacity-0 read lg:block lg:text-[64px] lg:leading-[77px]">Important Reads</h4>
            <div className="flex lg:flex-row flex-col p-4 gap-7">
                <div className="flex flex-col py-[24px] px-[16px] bg-[#AFF4C6] opacity-0 read rounded-[46px] max-w-[654px] xl:w-[654px] gap-4 items-start w-full overflow-hidden">
                    <div className="max-w-[168px] w-full lg:h-[232px] ml-[50px]"><Image src={'/important1.svg'} alt="" width={200} height={200} className="w-full h-full boject-cover"/></div>
                    <div className="w-full max-w-[496px] lg:h-[211px] py-[24px] px-[30px] flex flex-col gap-4">
                        <h4 className="font-bold lg:text-[24px] lg:leading-[30px] text-[20px] leading-[25px]">Featured articles</h4>
                        <p className="font-medium lg:text-[20px] lg:leading-[25px] text-[16px] leading-[20px]">Find out the dos and don’ts for launching your product.</p>
                        <button className="py-[14px] font-bold text-[18px] px-[72px] rounded-full">Learn more</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <p className="w-full max-w-[436px] lg:h-[46px] read opacity-0 font-bold lg:text-[18px] lg:leading-[22px] text-[16px]leading-[20px]">Product Design Journey: How to get started on your Product Design journey</p>
                    <div className="flex gap-2 justify-center read opacity-0 items-center"><a href="#" className="text-[#FF9900] font-bold text-[16px] leading-[20px]"> view blog</a><FaArrowRightLong className="text-[#FF9900]"/>
                    </div>
                    {read.map((item)=> (
                        <div key={item.index} className="flex read opacity-0 flex-col lg:flex-row rounded-[54px] py-[18px] px-[16px] bg-white">
                            <div className=" w-[179px] lg:h[190px] h-[167px] overflow-hidden rounded-[30px]">
                                <Image src={item.image} alt="" width={200} height={200} className={"w-full h-full"}/>
                            </div>
                            <div className="lg:py-[24px] lg:px-[30px] py-4 flex flex-col gap-4 w-full">
                                <h4 className="font-bold lg:w-[315px] lg:text-[24px] lg:leading-[30px] text-[16px] leading-[20px]">{item.title}</h4>
                                <p className=" lg:w-[315px] text-[18px] leading-[20px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>)
}