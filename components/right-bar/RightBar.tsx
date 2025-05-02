"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { MobileChat } from "../chats/Chat";
import { Tools } from "../notification/Notify";
import { Profile } from "./profile";
import { ChevronDown, Menu, MessageCircleIcon } from "lucide-react";
import { Title } from "../title/Title";
import { Headers } from "../../data";
import { usePathname } from "next/navigation";
import Link from "next/link";

function RightBar() {
  const [menu, setMenu] = useState(true);
  // const [aiChat, setAiChat] = useState(false);
  // const [mentorChat, setMentorChat] = useState(false);
  const [tools, setTools] = useState(false);
  const [section, setSection] = useState("");
  const [chatSection, setChatSection] = useState("");
  const [mobileChat, setMobilechat] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const handleTools = (target: string) => {
    if (!tools) {
      setTools(true);
      setSection(target);
    } else if (tools && section === target) {
      setTools(false);
      setSection("");
    } else {
      setSection(target);
    }
  };

  return (
    <div className=" lg:h-full lg:relative absolute top-0 right-0 left-0 z-20">
      <Tools
        openTools={tools}
        setOpenTools={setTools}
        section={section}
        setSection={setSection}
      />
      {/* <MentorChat openChat={mentorChat} setOpenChat={setMentorChat} />
      <AiChat openChat={aiChat} setOpenChat={setAiChat} /> */}
      <MobileChat
        setMobileChat={setMobilechat}
        mobileChat={mobileChat}
        section={chatSection}
        setSection={setChatSection}
      />
      <PopUp popUp={popUp} setPopUp={setPopUp} />
      {menu ? (
        // Rightbar items 🗨️
        <div className="h-full w-full">
          <section className="sticky lg:min-w-[90px] lg:max-w-[90px] items-center  h-full hidden lg:flex flex-col top-0 bottom-0 right-0">
            <div className="flex flex-col items-center justify-between w-full h-full lg:pt-[22px] size-6 ">
              <div className=" w-full flex flex-col  items-center justify-center ">
                <div
                  onClick={() => {
                    setMenu(false);
                  }}
                  className=" m-2  overflow-hidden w-full p-3  hover hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer"
                >
                  <Image
                    src={"/profile.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit  size-12"
                  />
                </div>

                <div
                  onClick={() => {
                    setChatSection("mentor");
                    setMobilechat(true);
                  }}
                  className="w-full  p-3   overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer"
                >
                  <Image
                    src={"Ai.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit size-8 "
                  />
                </div>

                <div
                  onClick={() => {
                    setMobilechat(true);
                    setChatSection("chatAi");
                  }}
                  className="w-full  p-3   overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer"
                >
                  <Image
                    src={"/img-4.png"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit rounded-full  size-8  "
                  />
                </div>

                <div className="w-full p-3   overflow-clip hover:bg-stone-100  rounded-lg justify-center flex items-center cursor-pointer">
                  <Image
                    src={"/addIcon.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit lg:w-[24px] lg:h-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div
                  onClick={() => handleTools("notifications")}
                  className="lg:w-[80px] lg:h-[64px] justify-center flex items-center"
                >
                  <Image
                    src={"/tabler.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit lg:w-[30px] lg:h-[30px]"
                  />
                </div>
                <div
                  onClick={() => handleTools("schedule")}
                  className="lg:w-[80px] lg:h-[64px] justify-center flex items-center"
                >
                  <Image
                    src={"/calender.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit lg:w-[16px] lg:h-[18px]"
                  />
                </div>
                <div
                  onClick={() => handleTools("notes")}
                  className="lg:w-[80px] lg:h-[64px] justify-center flex items-center"
                >
                  <Image
                    src={"/file.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit lg:w-[18px] lg:h-[18px]"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* mobile right bar */}
          <section className="lg:hidden flex items-center justify-between bg-white px-3">
            <div
              onClick={() => {
                setPopUp(true);
              }}
              className="h-full gap-2 items-center justify-center flex"
            >
              <Title /> <ChevronDown />
            </div>
            <div className="flex items-center justify-between ">
              <div className="  flex   items-center justify-center ">
                <div
                  onClick={() => {
                    setMobilechat(true);
                  }}
                  className="flex items-center justify-center "
                >
                  <MessageCircleIcon />
                </div>
                <div
                  onClick={() => {
                    setMenu(false);
                  }}
                  className=" m-2  overflow-hidden w-full p-3  hover hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer"
                >
                  <Image
                    src={"/profile.svg"}
                    height={80}
                    width={80}
                    alt="image"
                    className="object-fit  size-12"
                  />
                </div>

                {/* <div onClick={()=>{
          setMentorChat(true);
          }} className='w-full  p-3   overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer'>
          <Image src={"Ai.svg"} height={80} width={80} alt="image" className='object-fit size-8 '/>
        </div>
        
        <div onClick={()=>{
          setAiChat(true)
          }} className='w-full  p-3   overflow-hidden hover:bg-stone-100   rounded-lg justify-center flex items-center  cursor-pointer'>
          <Image src={"/img-4.png"} height={80} width={80} alt="image" className='object-fit rounded-full  size-8  '/>
        </div>
        
        <div className='w-full p-3   overflow-clip hover:bg-stone-100  rounded-lg justify-center flex items-center cursor-pointer'>
          <Image src={"/addIcon.svg"} height={80} width={80} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
        </div> */}
                <div
                  className="flex items-center justify-center "
                  onClick={() => {
                    setTools(true);
                    setSection("notifications");
                  }}
                >
                  <Menu size={30} />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Your Profile 🧑‍🦲
        // destop profile
        <div>
          <section className="text-black absolute border-white border min-w-[446px] max-w-[446px]  hidden   shadow-[-5px_0_35px_rgba(0,0,0,0.25)]  lg:flex flex-col top-0 bottom-0 right-0 lg:pt-[22px] lg:pb-[16px] lg:px-[12px] bg-white">
            <div className="flex flex-col items-center justify-between w-full h-full ">
              <div className="w-full h-[33px]  justify-between items-center flex pr-2">
                <div
                  onClick={() => {
                    setMenu(true);
                  }}
                  className="size-6 justify-items-center  flex items-center bg-white"
                >
                  <Image
                    src={"/closeIcon.svg"}
                    alt="icon"
                    width={10}
                    height={10}
                    className="w-[14.14px] h-[14.14px] cursor-pointer "
                  />
                </div>
                <button className="h-full p-0 w-[49px] rounded-[24px]">
                  Edit
                </button>
              </div>
              <Profile />
              <p className="text-green-500">Hello</p>
            </div>
          </section>
          {/* mobile profile */}
          <section className="text-black w-full h-full fixed left-0 top-0 p-3 z-50  lg:hidden flex flex-col bg-white">
            <div className="flex flex-col items-center justify-between w-full h-full ">
              <div className="w-full h-[33px]  justify-between items-center flex pr-2">
                <div
                  onClick={() => {
                    setMenu(true);
                  }}
                  className="size-6 justify-items-center  flex items-center bg-white"
                >
                  <Image
                    src={"/closeIcon.svg"}
                    alt="icon"
                    width={10}
                    height={10}
                    className="w-[14.14px] h-[14.14px] cursor-pointer "
                  />
                </div>
                <button className="h-full p-0 w-[49px] rounded-[24px]">
                  Edit
                </button>
              </div>
              <Profile />
              <p className="text-green-500">Hello</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default RightBar;

interface popUpProp {
  popUp: boolean;
  setPopUp: React.Dispatch<SetStateAction<boolean>>;
}

const PopUp = ({ popUp, setPopUp }: popUpProp) => {
  const pathname = usePathname();
  return (
    <>
      {popUp && (
        <div className="grid grid-cols-2 fixed bg-white left-0 bottom-0 z-50 h-[60vh]  w-full py-[21px]">
          {Headers.map(({ label, route, image }, index) => {
            const isActive = pathname === route;
            return (
              <Link
                key={index}
                href={route}
                onClick={() => setPopUp(false)}
                className={`h-[55px] relative px-6 items-center group hover:text-black hover:bg-black/5 justify-center rounded-md w-full flex `}
              >
                <div
                  className={` transition-width delay-200 ease-linear duration-500 flex relative gap-3`}
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-3 ${
                      !isActive ? "saturate-0 " : " !text-[#F26869]"
                    }`}
                  >
                    <div className={`w-[18px] h-[20px]`}>
                      <Image src={image} alt="" width={20} height={20} />
                    </div>
                    <p
                      className={`duration-300 delay-200 ease-linear font-bold  text-neutral-400  text-[18px] leading-[22px] ${
                        !isActive ? " " : " !text-[#F26869] "
                      }`}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
