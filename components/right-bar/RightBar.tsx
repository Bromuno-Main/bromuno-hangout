"use client"
import Image from 'next/image'
import { useState } from 'react'
import { AiChat, MentorChat } from '../chats/Chat';
import { Tools } from '../notification/Notify';
import { set } from 'react-hook-form';
import { Profile } from './profile';



function RightBar() {
  const [menu, setMenu] = useState(true);
  const [aiChat, setAiChat] = useState(false);
  const [mentorChat, setMentorChat] = useState(false);
  const [tools, setTools] = useState(false);
  const [section, setSection] = useState("");

  const handleNotification = ()=>{
    if (tools === false) {
      setTools(true);
      setSection("notifications");
    } else if(tools === true && section === "notifications") {
      setTools(false);
      setSection("");
    } else {
      setSection("notifications");
    }
  }

  const handleSchedule = ()=>{
    if (tools === false) {
      setTools(true);
      setSection("schedule");
    } else if(tools === true && section === "schedule") {
      setTools(false);
      setSection("");
    } else {
      setSection("schedule");
    }
  } 
  
  const handleNotes = ()=>{
    if (tools === false) {
      setTools(true);
      setSection("notes");
    } else if(tools === true && section === "notes") {
      setTools(false);
      setSection("");
    } else {
      setSection("notes");
    }
  }

  return ( 
  <>
    {tools && <Tools openTools={tools} setOpenTools={setTools} section={section} setSection={setSection} />}
    {mentorChat&& <MentorChat openChat={mentorChat} setOpenChat={setMentorChat} />}
    {aiChat&& <AiChat openChat={aiChat} setOpenChat={setAiChat} />}
    {menu ?

    // Rightbar items 🗨️
    <section className='sticky min-w-[90px] max-w-[90px] items-center  h-full flex flex-col top-0 bottom-0 right-0'>
      <div className='flex flex-col items-center justify-between w-full h-full lg:pt-[22px] size-6 '>
        <div className=' w-full flex flex-col  items-center justify-center '>
          <div onClick={()=>{
            setMenu(false) 
            }} className='size-12 m-2  overflow-hidden  hover hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer'>
            <Image src={"/profile.svg"}  height={80} width={80} alt="image" className='object-fit h-full w-full '/>
          </div>
          
          <div onClick={()=>{
            setMentorChat(true);
            }} className='w-full  p-2  m-2 overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointerr'>
            <Image src={"Ai.svg"} height={80} width={80} alt="image" className='object-fit size-8 '/>
          </div>
          
          <div onClick={()=>{
            setAiChat(true)
            }} className='w-full  p-2  m-2 overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointerrr'>
            <Image src={"/img-4.png"} height={80} width={80} alt="image" className='object-fit rounded-full  size-8  '/>
          </div>
          
          <div className='size-12  overflow-clip hover:bg-stone-100   justify-center flex items-center cursor-pointer'>
            <Image src={"/addIcon.svg"} height={80} width={80} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div onClick={handleNotification} className='lg:w-[80px] lg:h-[64px] justify-center flex items-center'>
           <Image src={"/tabler.svg"} height={80} width={80} alt="image" className='object-fit lg:w-[30px] lg:h-[30px]'/>
          </div>
          <div onClick={handleSchedule} className='lg:w-[80px] lg:h-[64px] justify-center flex items-center'>
           <Image src={"/calender.svg"} height={80} width={80} alt="image" className='object-fit lg:w-[16px] lg:h-[18px]'/>
          </div>
          <div onClick={handleNotes} className='lg:w-[80px] lg:h-[64px] justify-center flex items-center'>
           <Image src={"/file.svg"} height={80} width={80} alt="image" className='object-fit lg:w-[18px] lg:h-[18px]'/>
          </div>
        </div>
      </div>
    </section> : 
    // Your Profile 🧑‍🦲
    <section className='text-black absolute border-white border min-w-[446px] max-w-[446px]   shadow-[-5px_0_35px_rgba(0,0,0,0.25)]  flex flex-col top-0 bottom-0 right-0 lg:pt-[22px] lg:pb-[16px] lg:px-[12px] bg-white'>
      <div className='flex flex-col items-center justify-between w-full h-full '>

        <div  className='w-full h-[33px]  justify-between items-center flex pr-2'>
          <div onClick={()=>{
          setMenu(true);
        }} className='size-6 justify-items-center  flex items-center bg-white'>
            <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px] cursor-pointer '/>
          </div>
          <button className='h-full p-0 w-[49px] rounded-[24px]'>Edit</button>
        </div>
        <Profile/>
        <p className='text-green-500'>Hello</p>
      </div>
    </section>}
  </>
  )
}

export default RightBar
