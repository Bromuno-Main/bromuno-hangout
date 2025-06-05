"use client"
import { Menu, MessageCircleIcon, User, X } from "lucide-react";
import { usePathname } from "next/navigation"
import { FaHamburger } from "react-icons/fa";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState } from "react";
import { Profile } from "../profile/Profile";
import { Tools } from "../notification/Notify";
import RightBar from "../right-bar/RightBar";

interface proptype {
  className?: string 
}

function Title({className}:proptype){
  const route = usePathname();

  const title = () => {
    switch (route) {
      case "/":
        return  "Home"
      case "/discover":
        return "Discover"
      case "/events":
        return "Events"
      case "/projects": 
        return "Projects" 
      case "/jobs": 
       return "Jobs" 
      case "/gym": 
       return "GYM"
      case "/rumble":
        return "Rumble" 
      case "/uncover":
        return "Uncover"   
      default:
        return ""
    }
  }

  

  return (
    <>
      
      <h3 className={`${className} text-black  !font-extrabold  lg:pt-10`}>{title()}</h3>
    </>
  )


}

export {
  Title
}