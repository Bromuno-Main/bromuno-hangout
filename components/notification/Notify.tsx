"use client"

import Image from "next/image"
import { Button } from "../ui/Button"
import React, { SetStateAction } from "react";
import { useState } from "react";

const postArray = [
  {
    title: "Friday meeting",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
  {
    title: "New Note",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
  {
    title: "Friday meeting",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
  {
    title: "Friday meeting",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
  {
    title: "Friday meeting",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
  {
    title: "Friday meeting",
    description: "Meeting with the team to discuss the new project",
    date: "12th October 2021",
    time: "10:00 AM",
    color: "bg-[#E4FBEC]",
  },
]





interface propType {
openTools: boolean;
setSection: React.Dispatch<SetStateAction<string>>;
section: string;
setOpenTools: React.Dispatch<SetStateAction<boolean>>;
}

export function Tools({openTools, setOpenTools, section, setSection}:propType) {
  

  const body = () => {
    switch (section) {
      case "notifications":
        return <Notifications/>;
      case "schedule":
        return <Schedule/>;
      case "notes":
        return <Notes/>;
      default:
        return <Notifications/>;
    }
  };

  return (
    <div className="lg:w-[465px] w-[1224] h-[80vh] absolute right-28 top-[20%] bg-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Button onClick={
            ()=>setSection("notifications")
          } variant={"ghost"} size={"lg"} className={`${section === "notifications"? "bg-black text-white":""} w-fit border-none `}>Notifications</Button>

          <Button onClick={
            ()=>setSection("schedule")
          } variant={"ghost"} size={"lg"} className={`${section === "schedule"? "bg-black text-white":""} w-fit border-none `}>Schedule</Button>

          <Button onClick={
            ()=>setSection("notes")
          } variant={"ghost"} size={"lg"} className={`${section === "notes"? "bg-black text-white":""} w-fit border-none `}>Notes</Button>
        </div>
        <div onClick={()=>setOpenTools(false)} className="cursor-pointer">
         <Image src={"/closeIcon.svg"} alt="close" width={20} height={20}/>
        </div>
      </div>
      <div>
        {body()}
      </div>
      
    </div>
  )
}

function Notifications() {
  return (
    <div className="w-full lg:h-[126px] bg-[#E4FBEC] py-3 rounded-[16px]">

      </div>
  )
}

function Schedule() {
  return (
    <div className="w-full lg:h-[126px] bg-[#E4FBEC] py-3 rounded-[16px]">

      </div>
  )
}

function Notes() {
  return (
    <div className="w-full lg:h-[410px] gap-4 overflow-hidden overflow-y-scroll scrollbar-hide">
    {
      postArray.map((post, index) => {
        return (
          <div key={index} className="w-full lg:h-[126px] rounded-2xl p-4 gap-2 flex flex-col ">
            <div className="flex justify-between">
              <h4 className="text-[25px] text-black">{post.title}</h4>
              <div>
                <Image src={"/dotIcon.svg"} alt="edit" width={20} height={20}/>
              </div>
            </div>  
            <p className="text-sm">{post.description}</p>
            <div className="flex gap-2 justify-start items-center">
              <span className="text-gray-300 text-sm">{post.date}</span>
              <span className="text-sm text-black">{post.time}</span>
            </div>
          </div>
        )
      })
    }
  </div>
  )
}