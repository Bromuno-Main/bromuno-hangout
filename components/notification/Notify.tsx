"use client"

import Image from "next/image"
import { Button } from "../ui/Button"
import React, { SetStateAction } from "react";

interface propType {
openNotice: boolean;
setOpenNotice: React.Dispatch<SetStateAction<boolean>>;
}

export function Notify({openNotice, setOpenNotice}:propType) {
  return (
    <div className="lg:w-[465px] w-[1224] absolute right-0 top-[20%] bg-gray-400 ">
      <div className="flex items-center justify-between">
        <div>
          <Button variant={"ghost"} size={"lg"} className="w-fit">Notifications</Button>
          <Button variant={"ghost"} size={"lg"} className="w-fit">Schedule</Button>
          <Button variant={"ghost"} size={"lg"} className="w-fit">Notes</Button>
        </div>
        <Image src={"/closeIcon"} alt="close" width={20} height={20}/>
      </div>
      <div className="w-full lg:h-[126px] bg-[#E4FBEC] py-3 rounded-[16px]">

      </div>
    </div>
  )
}