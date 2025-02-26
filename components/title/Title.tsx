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
    
      default:
        return ""
    }
  }

  return (
    <h3 className="text-black  flex px-10 py-6 w-full ">{title()}</h3>
  )


}

export {
  Title
}