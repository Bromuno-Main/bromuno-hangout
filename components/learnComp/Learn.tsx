"use client"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/Button"
import { Posts } from "../../data"
import { Answer } from "./Answer"
import { useState } from "react"

 

export function Learn() {
  return (
    <div className="flex flex-col justify-start items-start relative">
      <div className="w-full  lg:h-[78px] flex justify-between items-start lg:pt-2">
        <div className="h-full lg:w-[430px] flex items-end justify-start lg:pl-3 lg:pb-[7px]">
          <p className="lg:w-[340px] lg:h-[20px] font-semibold text-[16px] text-[#A0A0A0] leading-[20px]">Ask Questions, Get Expert Answers</p>
        </div>
        <Button>Beginner</Button>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p>Crypto</p> <p>Web Design</p> <p>Coding</p> <p>Business</p>
      </div>
      <div className=" lg:w-[582px] lg:h-[1168px] text-black">
        <Post/>
      </div>

      <div className="fixed right-[190px] bottom-20 bg-white rounded-[18px]">
        <div className="w-full lg:h-[251px] rounded-[16px] px-[14px] py-[24px] border border-[#D9D9D9] ">
          <div className="flex justify-start items-center w-full">
            <Image src={"/mentorIcon1.svg"} alt="ask" width={62} height={62} className="border-2 border-white rounded-full"/>
            <Image src={"/mentorIcon2.svg"} alt="ask" width={62} height={62} className="ml-[-10px] border-2 rounded-full border-white"/>
            <Image src={"/mentorIcon3.svg"} alt="ask" width={62} height={62} className="ml-[-10px] border-2 rounded-full border-white "/>
          </div>
          <div>
            <h4 className="text-black">Connect with mentors</h4>
            <p className="text-sm">Start a One-On-One Conversation with any mentor of your choice</p>
          </div>
          <Button>Connect</Button>
        </div>
        <div className="bg-green lg:h-[124px] w-full rounded-[16px] mt-4 p-6 flex justify-center items-center gap-[14px]">
          <div></div>
          <p className="text-sm">Become Someone New In 90 Days</p>
        </div>
      </div>
    </div>
  )
}

export function Post(){

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
    {showAnswer && <Answer answer={showAnswer} setAnswer={setShowAnswer}/>}
    <div className="w-full flex-col flex gap-4  p-2" onClick={()=>setShowAnswer(!showAnswer)}>
      
      {
        Posts.map((items,index) => {
          return (
            <div key={index} className="bg-white flex flex-col justify-start items-start w-full border rounded-2xl p-3">
              <div className="flex text-black text-sm items-center justify-between w-full">
                <div className="flex justify-center items-center gap-2"><Image src={items.image} alt='icon' width={10} height={10} className='bg-gray-500 w-[14.14px] h-[14.14px]'/> <p className="text-sm">{items.username}</p> <p className="text-sm">3 hours ago</p> </div>
                <div>
                  <Button variant={"dsn"} size={"sm"} >Dsn</Button>
                  <Button variant={"dev"} size={"sm"}>Dev</Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 text-black text-sm">
                <p className="text-sm">{items.title}</p>
                <p className="text-sm">{items.description}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Button variant={"ghost"} size={"lg"}>23</Button>
                <Button variant={"ghost"} size={"lg"}>234</Button>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

