"use client"
import Image from "next/image";
import { create } from "../../data";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function WhatWeCreate(){

  const proRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the element is in view
    );

    if (proRef.current) {
      observer.observe(proRef.current);
    }

    return () => {
      if (proRef.current) {
        observer.unobserve(proRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      gsap.to(
            ".create", { opacity: 1, duration:3, stagger:0.5, ease:'power2.in' }
          );
    }
  }, [isInView]);


    return (
        <section className="lg:p-20 max-w-[1512px] w-full mx-auto p-5 mt-10 flex-col flex lg:gap-28">
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold hidden lg:block big-shoulder pb-5 lg:leading-[56px] text-[56px]">We create digital products.</h3>
                <h3 className="font-bold lg:hidden block big-shoulder leading-[48px] text-[48px]">What we create.</h3>
                <p className="font-500 hidden lg:block text-[18px] leading-[18px] ">Bromuno works is a part of Bromuno that is dedicated and invested in the design</p>
                <p className="font-500 hidden lg:block text-[18px] leading-[18px]">and development of digital products such as the following:</p>
            </div>
            <div ref={proRef} className="lg:grid  lg:grid-cols-2 gap-4 flex flex-col">
                {create.map((product)=>(
                    <div key={product.index} >
                      {/* desktop view */}
                      <div className="lg:flex lg:flex-row items-center hidden opacity-0 create bg-[#F5F5F5] rounded-[64px] py-[19px] pr-[32px] pl-[16px] gap-4" >
                        <div className="w-[189px] h-[196px]">
                            <Image src={product.image} alt="apps" height={500} width={500} className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col gap-6  w-[315px] h-full">
                            <h4 className="font-bold text-[24px] leading-[24px]" >{product.title}</h4>
                            <p className="font-medium text-[18px] leading-[18px]">{product.description}</p>
                            <div className="flex gap-4 justify-start items-center">
                            <button
                                className=" bg-[#FFD553] text-[18px] font-bold w-[176px] h-[49px] rounded-full"
                            >
                              Get this
                            </button>
                            <span className="text-[18px] font-bold w-[100px] leading-[22px] rounded-full">learn more</span>
                            </div>
                        </div>
                      </div>
                      {/* mobile view */}
                      <div className="lg:hidden flex  flex-col create opacity-0 bg-[#F5F5F5] rounded-[64px] py-[22px] pr-[32px] pl-[24px] pb-[28px] gap-6" >
                        
                        <div className="flex flex-row gap-4 items-center  w-full h-fit">
                          <div className="w-[110px] h-[113px] rounded-[42px]">
                            <Image src={product.image} alt="apps" height={100} width={100} className="w-full h-full object-cover"/>
                          </div>
                          <h4 className="font-bold text-[18px] leading-[18px]">{product.title}</h4>
                        </div>
                        <div className="flex flex-col gap-6 w-full h-full">
                            <p className="font-medium text-[18px] leading-[18px]">{product.description}</p>
                            <div className="flex gap-4 justify-start items-center">
                            <button
                                className=" bg-[#FFD553] text-[18px] font-bold w-[176px] h-[49px] rounded-full"
                            >
                              Get this!
                            </button>
                            <span className="text-[16px] font-bold w-[100px] leading-[20px] rounded-full">learn more</span>
                            </div>
                        </div>
                      </div> 
                    </div>
                ))}
            </div>
        </section>
    )
}