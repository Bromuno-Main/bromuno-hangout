"use client"

import Image from "next/image"
import React, { SetStateAction } from "react"

interface propType {
  openChat: boolean,
  setOpenChat: React.Dispatch<SetStateAction<boolean>>
}

function AiChat ({ setOpenChat, openChat}: propType) {
  return (
    <>
    <div className="lg:h-[678px] lg:w-[353px] rounded-[12px] absolute top-[35%] px-3 right-28 border-2 border-black">
      <div className="w-full lg:h-[61px] flex justify-between items-center">
        <p >Lami Ai</p>
        <div onClick={()=>{
          setOpenChat(false);
        }} className='w-[33px] h-[33px] justify-items-center  content-center bg-white'>
            <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px]'/>
        </div>
      </div>

    </div>
    </>
  )
}

function MentorChat ({openChat, setOpenChat}: propType){
return (
  <>
  <div className="lg:h-[678px] lg:w-[353px] rounded-[12px] absolute top-[20%] right-28 px-3  border-2 border-black">
  <div className="w-full lg:h-[61px] flex justify-between items-center">
        <p >Mentor</p>
        <div onClick={()=>{
          setOpenChat(false);
        }} className='w-[33px] h-[33px] justify-items-center  content-center bg-white'>
            <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px]'/>
        </div>
      </div>
  </div>
  </>
)
}

export{
  AiChat,
  MentorChat
}