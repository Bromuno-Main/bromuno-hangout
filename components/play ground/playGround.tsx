"use client"

import Image from "next/image"
import Link from "next/link"

export default function PlayGround(){
    return (
        <section className="overflow-hidden overflow-x-scroll scrollbar-hide w-full mx-auto mt-10">
            <Link href={"/learn"} className=" relative rounded-[24px] lg:rounded-[64px] overflow-hidden  lg:w-[668px] lg:h-[689px] h-[409px] text-[68px] font-bold w-[277px]">
            Go to learn more
            </Link>
            
        </section>
    )
}