import { BiSolidCommentDots, BiSolidUpvote } from "react-icons/bi";
import { X } from "lucide-react";

import React, { SetStateAction } from "react"
import Image from "next/image"
import { Posts } from "../../data"
import { Button } from "../ui/Button"
import { Input } from "../ui/input"
import { Textarea } from "@nextui-org/react";



interface propType {
  answer: boolean,
  setAnswer: React.Dispatch<SetStateAction<boolean>>
}


export function Answer({ answer, setAnswer }: propType) {
  return (
    <div className="fixed z-20   left-[15vw] top-[7vh] rounded-lg  flex flex-col bg-white shadow-lg lg:h-[85vh] lg:w-[661px] overflow-hidden my-auto   overflow-y-scroll scrollbar-hide">
      <div className="flex items-center border-gray-300 pl-5 border-b-1 sticky top-0 z-30 bg-white   justify-between">
        <div className="flex items-center gap-2">
          <Image src={Posts[0].image} alt='😊' width={10} height={10} className='bg-gray-200 size-6 flex items-center justify-center rounded-full ' />
          <p className="text-sm">{Posts[0].username}</p>
          <p className="text-sm text-gray-500">3 hours ago</p>
        </div>
        <div className="flex gap-6 p-3 items-center justify-center">
          <div  >
            <Image src={"/uploadIcon.svg"} width={16} height={20} alt="upload" />
          </div>
          {/* close icon */}
          <div onClick={() => {
            setAnswer(false);
          }}
            className="rounded-full bg-stone-100/80 cursor-pointer p-2 [&>img]:opacity-70 [&>img]:size-[16px]"
          >
            <X size={20} />
          </div>
        </div>
      </div>
      <div className="border-stone-300 border-b-1 py-6 " >





        <div className="px-5 flex flex-col  gap-3">
          <p className="font-semibold">{Posts[0].title}</p>
          <p className="text-sm ">{Posts[0].description}</p>
          <div>
            <Button variant={"dsn"} size={"sm"} >Dsn</Button>
            <Button variant={"dev"} size={"sm"}>Dev</Button>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <Button variant={"ghost"} size={"lg"}>
              <BiSolidUpvote size={20} />
              234</Button>
            <p className="text-sm group-focus">Leave an upvote if you found this helpful</p>

          </div>
          {/* input----- */}
          <div
              contentEditable
              className="input-primary w-full min-h-[40px] items-end group max-h-[120px] max-w-[350px] flex flex-col mb-6  p-2 focus:outline-1 outline-0 outline overflow-y-auto"
            >
              <p className="group-focus:text-pink-600 w-full text-sm">  Leave a comment </p>
              
              <button className=" max-w-40 group-focus:block hidden"> submit</button>
             
            </div>

        </div>
        <div className="border-t-1 p-4 flex flex-col gap-4">
          <h4 className="text-sm">Answers 12</h4>
          {
            Posts.map((post, index) => {
              return (
                <div key={index} className={`${index === 0 ? "border border-[#6AC5AE]" : "border"} w-full flex flex-col gap-2 rounded-[24px] p-4`}>
                  <div className="flex justify-between items-center  ">
                    <div className="flex items-center gap-2">
                      <Image src={post.image} alt='😊' width={30} height={30} className='bg-gray-200 size-7 flex items-center justify-center rounded-full ' />
                      <p className="text-sm">{post.username}</p>
                      <p className="text-sm">Data scientist</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-sm date">3 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm">Let me help with that</p>

                  <div className="flex justify-between items-center py-2 ">

                    <div className="flex gap-2 items-center justify-center">
                      <Button variant={"ghost"} size={"lg"}>
                        <BiSolidCommentDots size={20} />
                        23</Button>
                      <Button variant={"ghost"} size={"lg"}>
                        <BiSolidUpvote size={20} />

                        234</Button>
                      <Button variant={"ghost"} size={"lg"}>Gift</Button>

                    </div>
                    <div>
                      <Button variant={"ghost"} size={"lg"} className="w-fit">Open chat</Button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>


      </div>
    </div>
  )
}