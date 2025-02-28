"use client"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/Button"
import { Posts } from "../../data"

 

export function Learn() {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="w-full border border-red-500 lg:h-[78px] flex justify-between items-start lg:pt-2">
        <div className="h-full lg:w-[430px] flex items-end justify-start lg:pl-3 lg:pb-[7px]">
          <p className="lg:w-[340px] lg:h-[20px] font-semibold text-[16px] text-[#A0A0A0] leading-[20px]">Ask Questions, Get Expert Answers</p>
        </div>
        <button className="bg-black">Beginner</button>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p>Crypto</p> <p>Web Design</p> <p>Coding</p> <p>Business</p>
      </div>
      <div className="lg:w-[582px] lg:h-[1168px] text-black">
        <Post/>
      </div>
    </div>
  )
}

export function Post(){
  return (
    <div className="w-full flex-col flex gap-4  p-2">
      {
        Posts.map((items,index) => {
          return (
            <div key={index} className="flex flex-col justify-start items-start w-full border rounded-2xl p-3">
              <div className="flex text-black text-sm items-center justify-between w-full">
                <div className="flex justify-center items-center gap-2"><Image src={items.image} alt='icon' width={10} height={10} className='bg-gray-500 w-[14.14px] h-[14.14px]'/> <p className="text-sm">{items.username}</p> <p className="text-sm">3 hours ago</p> </div>
                <div>
                  <Button className="bg-purple-300 w-[50px] p-0 text-black text-sm">Dsn</Button>
                  <Button className="w-[50px] p-0 bg-orange-200 text-black text-sm">Dev</Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 text-black text-sm">
                <p className="text-sm">{items.title}</p>
                <p className="text-sm">{items.description}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Button className="border bg-white text-black hover:bg-black hover:text-white">23</Button>
                <Button className="border bg-white text-black hover:bg-black hover:text-white">234</Button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}