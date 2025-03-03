import React, { SetStateAction } from "react"
import Image from "next/image"
import { Posts } from "../../data"
import { Button } from "../ui/Button"
import { Input } from "../ui/input"


interface propType {
  answer: boolean,
  setAnswer: React.Dispatch<SetStateAction<boolean>>
}


export function Answer({answer,setAnswer}:propType){
  return (
    <div className="absolute left-10 p-3 border flex flex-col bg-white lg:h-[871px] lg:w-[661px] overflow-hidden overflow-y-scroll scrollbar-hide">
      
            <div className="border rounded-xl p-3" >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={Posts[0].image} alt='icon' width={10} height={10} className='bg-gray-500 w-[14.14px] h-[14.14px]'/>
                  <p className="text-sm">{Posts[0].username}</p>
                  <p className="text-sm">3 hours ago</p>
                </div>
                <div className="flex gap-2 p-3 items-center justify-center">
                  <div  ><Image src={"/uploadIcon.svg"} width={16} height={20} alt="upload" />
                  </div>
                  <div onClick={()=>{
                    setAnswer(false);
                  }}><Image src={"/closeIcon.svg"} width={20} height={20} alt="close"/>
                  </div>  
                </div>
              </div>
              <div>
                <p>{Posts[0].title}</p>
                <p className="text-sm">{Posts[0].description}</p>
                <div>
                <Button variant={"dsn"} size={"sm"} >Dsn</Button>
                <Button variant={"dev"} size={"sm"}>Dev</Button>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <Button variant={"ghost"} size={"lg"}>234</Button>
                  <p className="text-sm">Leave an upvote if you found this helpful</p>

                </div>
                <Input/>
              </div>

            </div>
            <div className="border-t-1 rounded-xl p-3 flex flex-col gap-4">
              <h4 className="text-sm">Answers 12</h4>
              {
                Posts.map((post, index) => {
                  return (
                    <div key={index} className={`${ index === 0 ? "border border-[#6AC5AE]" :"border"} w-full lg:h-[134px] rounded-[24px] p-4`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Image src={post.image} alt='icon' width={10} height={10} className='bg-gray-500 w-[14.14px] h-[14.14px]'/>
                          <p className="text-sm">{post.username}</p>
                          <p className="text-sm">Data scientist</p>
                        </div>
                        <div className="flex gap-2">
                         <p className="text-sm">3 hours ago</p>
                        </div>
                      </div>
                      <p className="text-sm">Let me help with that</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Button variant={"ghost"} size={"lg"}>23</Button>
                          <Button variant={"ghost"} size={"lg"}>234</Button>
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
  )
}

