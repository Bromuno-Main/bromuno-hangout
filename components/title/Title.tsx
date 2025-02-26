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
    <h1>{title()}</h1>
  )


}

export {
  Title
}