import React from "react"
import Image from "next/image"
import { Posts } from "../../data"
import { Button } from "../ui/Button"
import { Input } from "../ui/input"
export function Answer(){
  return (
    <div className="absolute left-10">
      
            <div className="border rounded-xl  bg-white lg:h-[871px] lg:w-[661px]" >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={Posts[0].image} alt='icon' width={10} height={10} className='bg-gray-500 w-[14.14px] h-[14.14px]'/>
                  <p>{Posts[0].username}</p>
                  <p>3 hours ago</p>
                </div>
                <div className="flex gap-2">
                  <div  ><Image src={"/uploadIcon.svg"} width={16} height={20} alt="upload" />
                  </div>
                  <div ><Image src={"/closeIcon.svg"} width={20} height={20} alt="close"/>
                  </div>  
                </div>
              </div>
              <div>
                <p>{Posts[0].title}</p>
                <p>{Posts[0].description}</p>
                <div>
                <Button variant={"dsn"} size={"sm"} >Dsn</Button>
                <Button variant={"dev"} size={"sm"}>Dev</Button>
                </div>
                <div className="flex gap-2 items-center justify-start">
                  <Button variant={"ghost"} size={"lg"}>234</Button>
                  <p>Leave an upvote if you found this helpful</p>

                </div>
                <Input/>
              </div>

            </div>
          

    </div>
  )
}

