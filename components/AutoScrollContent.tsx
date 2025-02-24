"use client";

import { AutoScroll } from "./AutoScroll";

export function AutoScrollContent() {
  return (
    <div className=" relative mt-[30px] overflow-hidden w-full flex justify-center  ">
      <AutoScroll items={servicesLists} direction="left" speed="slow" />
    </div>
  );
}

const servicesLists = [
  {
    item: (
      <div className="text-[#222020] text-[5rem] font-extrabold display ">
        Websites
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#222020] text-[5rem] font-extrabold display ">
        ✨
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#a0a0a0] text-[5rem] font-extrabold display ">
        Mobile Apps
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#222020] text-[5rem] font-extrabold display ">
        ✨
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#222020] text-[5rem] font-extrabold display ">
        Web Graphics
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#a0a0a0] text-[5rem] font-extrabold display ">
        ✨
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#a0a0a0] text-[5rem] font-extrabold display ">
        Branding
      </div>
    ),
  },
  {
    item: (
      <div className="text-[#a0a0a0] text-[5rem] font-extrabold display ">
        ✨
      </div>
    ),
  },
];
