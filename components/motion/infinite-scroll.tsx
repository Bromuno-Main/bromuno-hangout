"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingstuff } from "../ui/infinite-moving-cards";
import { TabletSmartphoneIcon } from "lucide-react";

export function Featured() {
  return (
    <div className=" relative overflow-hidden w-full flex justify-center  ">
      <InfiniteMovingstuff
        items={servicesLists}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const servicesLists = [

  {
    quote:
      "Mobile Apps",
 
    icon: "/tablet-smartphone.svg",
  },
  {
    quote:
      "E-commerce",
 
    icon: "/shopping-bag.svg",
  },
  {
    quote:
      "Graphics",
 
    icon: "/pen-tool.svg",
  },

];
