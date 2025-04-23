"use client"
import { Menu, MessageCircleIcon, User } from "lucide-react";
import { usePathname } from "next/navigation"
import { FaHamburger } from "react-icons/fa";


function Title(){
  const route = usePathname();

  const title = () => {
    switch (route) {
      case "/":
        return  "Home"
      case "/discover":
        return "Learn"
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
      <h3 className="text-black  !font-extrabold  pt-12 w-full lg:block hidden">{title()}</h3>
      <div className="flex justify-between items-center lg:hidden h-[52px]  w-full p-2.5">
        <h4>{title()}</h4>
        <div className="flex gap-2.5 items-center justify-center">
          <MessageCircleIcon size={23}/> <User size={23}/> <Menu size={23}/>
        </div>
      </div>
    </>
  )


}

export {
  Title
}