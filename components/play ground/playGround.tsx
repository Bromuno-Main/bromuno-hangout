"use client"

import Image from "next/image"
import Link from "next/link"

export default function PlayGround(){
    return (
        <section className="overflow-hidden overflow-x-scroll scrollbar-hide w-full mx-auto mt-10">
            <div className="flex lg:pl-[153px] pl-5 flex-col gap-14">
                <div className="lg:flex flex-row hidden  justify-between items-center pr-40">
                  <p className=" font-bold text-[24px] leading-[30px]">See some of our deliverables</p>
                  <button className="bg-[#FFD553] text-[18px] font-bold w-fit h-[49px] rounded-full">View Case studies</button>
                </div>
                <div className="w-fit  overflow-hidden h-full flex flex-row justify-center gap-10 items-center">
                    <Link href={"/groove"} className=" relative rounded-[24px] lg:rounded-[64px] overflow-hidden  lg:w-[668px] lg:h-[689px] h-[409px]  w-[277px]">
                        <Image src={"/groove1.svg"} alt="image" width={200} height={200} className="w-full object-cover  h-full hover:scale-125"/>
                        <button className="absolute lg:bottom-10 lg:left-10 left-5 bottom-5 bg-[#FFD553] text-[18px] font-bold w-[176px] h-[49px] rounded-full">Grooveup</button>
                    </Link>
                    <div className="relative rounded-[24px] lg:rounded-[64px] overflow-hidden lg:w-[668px] lg:h-[689px] h-[409px] w-[277px]">
                        <Image src={"/vote.svg"} alt="image" width={200} height={200} className="w-full hover:scale-125 object-cover h-full"/>
                        <button className="absolute lg:bottom-10 lg:left-10 left-5 bottom-5 bg-[#FFD553] text-[18px] font-bold w-[176px] h-[49px] rounded-full">Kedu Mobile</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}