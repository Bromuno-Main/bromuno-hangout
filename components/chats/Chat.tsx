"use client"

import Image from "next/image"
import React, { SetStateAction } from "react"
import { Input } from "../ui/input"

interface propType {
  openChat: boolean,
  setOpenChat: React.Dispatch<SetStateAction<boolean>>
}

function AiChat ({ setOpenChat, openChat}: propType) {
  return (
    <>
    <div className="lg:h-[678px] lg:w-[353px] rounded-[12px] fixed top-[25%]  right-[10%]  bg-white  flex-col flex justify-between items-center">
      <div className="w-full  lg:h-[61px] px-3 flex justify-between items-center">
        <p >Lami Ai</p>
        <div onClick={()=>{
          setOpenChat(false);
        }} className='w-[33px] h-[33px] justify-items-center  content-center bg-[#bdbdbd]'>
            <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px]'/>
        </div>
      </div>
      <div className="h-[80%] w-full bg-green"></div>
      <div className="px-3 w-full flex items-center justify-between">
        <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
          <Image src={"/addIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
        </div>
        <Input/>
        <div  className='w-[32px] h-[32px] justify-items-center content-center '>
          <Image src={"/voiceIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[19px] lg:h-[19px]'/>
        </div>
      </div>

    </div>
    </>
  )
}

function MentorChat ({openChat, setOpenChat}: propType){
return (
  <>
  <div className="lg:h-[678px] bg-white lg:w-[353px] rounded-[12px] fixed top-[30%] right-[10%]  ">
    <div className="w-full px-3  lg:h-[61px] flex justify-between items-center">
      <p >Mentor</p>
      <div onClick={()=>{
        setOpenChat(false);
      }} className='w-[33px] h-[33px] justify-items-center  content-center bg-[#bdbdbd]'>
          <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px]'/>
      </div>
    </div>
    <div className="h-[80%] w-full bg-green"></div>
    <div className="w-full px-3 flex items-center justify-between">
      <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
        <Image src={"/addIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
      </div>
      <Input/>
      <div  className='w-[32px] h-[32px] justify-items-center content-center '>
        <Image src={"/voiceIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[19px] lg:h-[19px]'/>
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