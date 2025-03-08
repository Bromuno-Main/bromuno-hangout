"use client"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/Button"
import { Posts } from "../../data"
import { Answer } from "./Answer"
import { useState } from "react"
import { BiSolidCommentDots, BiSolidUpvote } from "react-icons/bi"
import { UnlimitedBanner } from "./go-ulimited"
import { ConnectMentor } from "./connect-mentor"



export function Learn() {
  return (
    <div className=" flex justify-start items-start h-full  relative">
      <div className="w-full  ">
        <div className="flex-1  lg:h-[78px] flex justify-between items-start lg:pt-2">
          <div className="h-full lg:w-[430px] flex items-end justify-start lg:pl-3 lg:pb-[7px]">
            <p className="lg:w-[340px] lg:h-[20px] font-semibold text-[16px] text-[#A0A0A0] leading-[20px]">Ask Questions, Get Expert Answers</p>
          </div>
          <Button>Beginner</Button>
        </div>
        <div className="flex text-black justify-start items-center gap-4 [&>p]:p-2  [&>p]:text-sm  [&>p]:font-medium">
          <p>Crypto</p> <p>Web Design</p> <p>Coding</p> <p>Business</p>
        </div>
        <div className=" lg:w-[582px] lg:h-[1168px] text-black">
          <div>
            <Post />  </div>
        </div>
      </div>
      <div className="lg:w-1/2 max-w-screen-sm md:pl-[2rem] pb-10 justify-end min-w-[340px]  min-h-[80vh] sticky right-3 top-[4vh] flex flex-col gap-4  ">
        <ConnectMentor />
        <UnlimitedBanner />
      </div>
      </div>
  )
}

export function Post() {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      {showAnswer && <Answer answer={showAnswer} setAnswer={setShowAnswer} />}
      <div className="w-full flex-col flex gap-4  py-4" onClick={() => setShowAnswer(!showAnswer)}>

        {
          Posts.map((items, index) => {
            return (
              <div key={index} className="bg-white flex flex-col  cursor-pointer justify-start hover:shadow-md duration-400 shadow-[#f3f3f3] items-start w-full  rounded-3xl p-5">
                <div className="flex text-black text-sm items-center justify-between w-full">
                  <div className="flex justify-center  items-center gap-2">
                    <Image src={items.image} alt='icon' width={15} height={15} className='bg-gray-200 size-6 rounded-full ' />
                    <p className="text-sm">{items.username}</p>
                    <p className="text-sm">3 hours ago</p> </div>
                  <div className="flex gap-[-20px] hover:gap-1 duration-300 ">
                    <Button variant={"dsn"} size={"sm"} >Dsn</Button>
                    <Button variant={"dev"} size={"sm"}>Dev</Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-3  gap-2 text-black text-sm">
                  <p className="text-md mb-[.2rem] font-bold ">{items.title}</p>
                  <p className="text-sm mb-[1rem] w-full line-clamp-2">{items.description}</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <Button variant={"ghost"} size={"lg"}>
                    <BiSolidCommentDots size={20} />
                    23</Button>
                  <Button variant={"ghost"} size={"lg"}>
                    <BiSolidUpvote size={20} />

                    234</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

