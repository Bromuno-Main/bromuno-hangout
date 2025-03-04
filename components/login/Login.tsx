"use client"
import Image from "next/image"
import React, { useState } from "react"
import { SetStateAction } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/Button"
import { useRouter } from "next/navigation"

interface propType {
  login: boolean,
  setLogin: React.Dispatch<SetStateAction<boolean>>
}

const purpose = [
  {
    title: "Skill",
    aim: "Get or develop a tech skill.",
    image: "/purpose.svg"
  },
  {
    title: "Work",
    aim: "Get jobs and work on projects.",
    image: "/purpose.svg"
  },
  {
    title: "Network",
    aim: "Discover new people and ideas.",
    image: "/purpose.svg"
  },
  {
    title: "Build",
    aim: "Build and own a digital project.",
    image: "/purpose.svg"
  },
]

export function Login({login, setLogin}:propType){
  const [stage, setStage] = useState<number>(1)

  const router = useRouter()
  const body = () => {
    switch (stage) {
      case 1:
        return <Details/>;
      
      case 2:
        return  <Purpose/>;
      case 3:
        return <Contacts/>;
      case 4:
        return <Protect/>      
    
      default:
        return "";
    }
  }
      const Details = () => {
        return (
          <>
            <div>
              <h4 className="text-black">Let's get to know you</h4>
              <p className="text-sm">Please provide basic details about yourself</p>
            </div>
            <form action="">
              <div>
                <p className="text-sm">Your name</p>
                <select name="title" id="" className="text-black w-[50px] border">
                  <option value="" selected>Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mr">Mrs</option>
                </select>
                <Input placeholder="Full name" type="text"/>
              </div>
              <div>
                <p className="text-sm">Occupation</p>
                <select name="title" id="" className=" text-black  border ">
                  <option value="" selected className=" ">Select industry</option>
                  <option value="Mr">Mr</option>
                  <option value="Mr">Mrs</option>
                </select>
              </div>
              <div>
                <p className="text-sm">Date of Birth</p>
                <Input placeholder="" type="date"/>
              </div>
              <div>
                <p>Your country</p>
                <Input placeholder="Your country"/>
              </div>
              <div>
                <p>Your address</p>
                <Input placeholder="Provide your address"/>
              </div>

              <Button onClick={
                (e)=>{
                  e.preventDefault();
                  setStage(2);
                }
              } type="submit" variant={"ghost"} className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black">Proceed</Button>
            </form>
            <div className="flex items-center justify-end">
              <p className="text-sm font-bold">Already have an account? <span className="text-[#188268]">Log in</span></p> 
            </div>
          </>
        )
      }


      const Purpose = () => {
        return (
          <div>
            <div>
              <h4 className="text-black">Your purpose for joining</h4>
              <p className="text-sm">You can select more than one</p>
            </div>
            <div className="grid grid-cols-2 gap-[27px] w-[554px]">
              {
                purpose.map((items, index) => {
                return( 
                  <div className={`flex items-center justify-center w-[257px] h-[120px] rounded-[24px] py-6 px-4 gap-3 ${index===0 ? "bg-[#FECC82]":""}`}>
                    <div >
                      <Image src={items.image} alt="" height={10} width={10} className="w-[52px] h-[51px] rounded-full bg-green" />
                    </div>
                    <div className="w-[161px] h-[72px] gap-2 flex flex-col items-start justify-center">
                      <h4 className="text-sm text-black">{items.title}</h4>
                      <p className="text-sm">{items.aim}</p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <Button onClick={
                (e)=>{
                  e.preventDefault();
                  setStage(3)
                }
              }  type="submit" variant={"ghost"} className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black">Proceed</Button>
            <div className="flex items-center justify-end">
              <p className="text-sm font-bold">Already have an account? <span className="text-[#188268]">Log in</span></p> 
            </div>
          </div>
        )
      }

      const Contacts = () => {
        return (
          <div>
            <div>
              <h4 className="text-black">Contact details</h4>
              <p className="text-sm">Please provide basic details about yourself</p>
            </div>
            <div>
              <div>
                <p>Phone Number</p>
                <select name="" id="">
                  <option value="+234" selected>+234</option>
                </select>
                <Input type="text" placeholder="Full name"/>
              </div>
              <div>
                <p>Email address</p>
                <Input type="email" placeholder="Enter email"/>
              </div>
            </div>
            <Button onClick={
                (e)=>{
                  e.preventDefault();
                  setStage(4);
                }
              }  type="submit" variant={"ghost"} className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black">Proceed</Button>
            <div className="flex items-center justify-end">
              <p className="text-sm font-bold">Already have an account? <span className="text-[#188268]">Log in</span></p> 
            </div>
          </div>
        )
      }

      const Protect = () => {
        return (
          <div>
            <div>
              <h4 className="text-black">Protect your account</h4>
              <p className="text-sm">Create a strong password</p>
            </div>
            <div>
              <p>Create password</p>
              <Input type="password" placeholder="Enter your password"/>
            </div>
            <Button onClick={
                (e)=>{
                  e.preventDefault();
                  setLogin(false);
                  router.push("/");
                }
              }  type="submit" variant={"ghost"} className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black">Proceed</Button>
            <div className="flex items-center justify-end">
              <p className="text-sm font-bold">Already have an account? <span className="text-[#188268]">Log in</span></p> 
            </div>
          </div>
        )
      }

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0  bg-white z-50 flex items-center justify-start">
      <div className="w-[46%] h-full bg-green flex items-center justify-center">
        <Image src={"/banner.svg"} alt="banner" height={10} width={10} className="w-[331px] h-[541px]"/>
      </div>
      <div className="bg-white w-[54%] h-full ">
        <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed bg-white"></div>
        {body()}
        
      </div>
    </div>
  )
}

