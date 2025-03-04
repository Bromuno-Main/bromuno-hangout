"use client"
import { usePathname } from "next/navigation"


function Title(){
  const route = usePathname();

  const title = () => {
    switch (route) {
      case "/":
        return  "Home"
      case "/learn":
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
    <h3 className="text-black  !font-extrabold  pt-12 w-full ">{title()}</h3>
  )


}

export {
  Title
}