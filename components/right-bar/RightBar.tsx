"use client"
import Image from 'next/image'
import { useState } from 'react'
import { AiChat, MentorChat } from '../chats/Chat';
import { Notify } from '../notification/Notify';


function RightBar() {
  const [menu, setMenu] = useState(true);
  const [aiChat, setAiChat] = useState(false);
  const [mentorChat, setMentorChat] = useState(false);
  const [notify, setNotify] = useState(false);

  return ( 
  <>
    {notify && <Notify openNotice={notify} setOpenNotice={setNotify} />}
    {mentorChat&& <MentorChat openChat={mentorChat} setOpenChat={setMentorChat} />}
    {aiChat&& <AiChat openChat={aiChat} setOpenChat={setAiChat} />}
    {menu ? <section className='sticky min-w-[90px] max-w-[90px]  h-full flex flex-col top-0 bottom-0 right-0'>
      <div className='flex flex-col items-center justify-between w-full h-full lg:pt-[22px] lg:pb-[16px] lg:px-[15px]'>
        <div className=' w-full flex flex-col items-center justify-center gap-4'>
          <div onClick={()=>{setMenu(false)}} className='lg:w-[64px] lg:h-[64px] justify-items-center content-center '>
            <Image src={"/profile.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[52px] lg:h-[52px]'/>
          </div>
          
          <div onClick={()=>{
            setMentorChat(true);
            }} className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
            <Image src={"Ai.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[34px] lg:h-[34px]'/>
          </div>
          
          <div onClick={()=>{
            setAiChat(true)
            }} className='lg:w-[60px] lg:h-[64px] justify-items-center content-center '>
            <Image src={"/Ai.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[34px] lg:h-[34px]'/>
          </div>
          
          <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
            <Image src={"/addIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div onClick={()=>{
            setNotify(!notify);
          }} className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/tabler.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[30px] lg:h-[30px]'/>
          </div>
          <div className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/calender.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[16px] lg:h-[18px]'/>
          </div>
          <div className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/file.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[18px] lg:h-[18px]'/>
          </div>
        </div>
      </div>
    </section> : <section className='text-black absolute border-white border min-w-[446px] max-w-[446px]  h-[200vh] shadow-[-5px_0_35px_rgba(0,0,0,0.25)]  flex flex-col top-0 bottom-0 right-0 lg:pt-[22px] lg:pb-[16px] lg:px-[12px] bg-white'>
      <div className='flex flex-col items-center justify-between w-full h-full '>

        <div  className='w-full h-[33px]  justify-between items-center flex pr-2'>
          <div onClick={()=>{
          setMenu(true);
        }} className='w-[33px] h-[33px] justify-items-center  content-center bg-white'>
            <Image src={"/closeIcon.svg"} alt='icon' width={10} height={10} className='w-[14.14px] h-[14.14px]'/>
          </div>
          <button className='h-full p-0 w-[49px] rounded-[24px]'>Edit</button>
        </div>
        <p className='text-green-500'>Hello</p>

        
      </div>
    </section>}
  </>
  )
}

export default RightBar
