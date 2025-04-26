"use client";

import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { InputField } from "./input";
import { X } from "lucide-react";

interface propType {
  openChat?: boolean;
  setOpenChat: React.Dispatch<SetStateAction<boolean>>;
}

interface MobileChatProps {
  setMobileChat: React.Dispatch<SetStateAction<boolean>>;
  mobileChat: boolean;
}

function MobileChat({ setMobileChat, mobileChat }: MobileChatProps) {
  const [section, setSection] = useState("");
  const currentChat = () => {
    switch (section) {
      case "mentor":
        return <MentorChat setOpenChat={() => {}} openChat={mobileChat} />;
      case "chatAi":
        return <AiChat setOpenChat={() => {}} openChat={mobileChat} />;
      default:
        return <AiChat setOpenChat={() => {}} openChat={mobileChat} />;
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col gap-3 fixed lg:hidden right-0 left-0 top-0 p-3">
      <div className="flex justify-between items-center border px-3">
        <div className="flex justify-center gap-3 items-center">
          <div
            onClick={() => {
              setSection("mentor");
            }}
            className=" lg:p-3   overflow-hidden hover:bg-stone-100   lg:rounded-lg justify-center flex items-center  cursor-pointer"
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
              setSection("chatAi");
            }}
            className="  lg:p-3   overflow-hidden hover:bg-stone-100   lg:rounded-lg justify-center flex items-center  cursor-pointer"
          >
            <Image
              src={"/img-4.png"}
              height={80}
              width={80}
              alt="image"
              className="object-fit rounded-full  size-8  "
            />
          </div>

          <div className="lg:p-3 border rounded-full  overflow-clip hover:bg-stone-100  lg:rounded-lg justify-center flex items-center cursor-pointer">
            <Image
              src={"/addIcon.svg"}
              height={80}
              width={80}
              alt="image"
              className="object-fit w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div
          onClick={() => {
            setSection("");
            setMobileChat(false);
          }}
        >
          <X />
        </div>
      </div>
      <div className="border flex-1">{currentChat()}</div>
    </div>
  );
}
function AiChat({ setOpenChat, openChat }: propType) {
  return (
    <>
      {openChat && (
        <div className="lg:h-[678px] lg:w-[353px] w-full h-full rounded-[12px] lg:absolute top-[25%]  right-[120%]  bg-white z-50 flex-col flex justify-between items-center">
          <div className="w-full  lg:h-[61px] px-3 flex justify-between items-center">
            <p>Lami Ai</p>
            <div
              onClick={() => {
                setOpenChat(false);
              }}
              className="w-[33px] h-[33px] lg:flex justify-center items-center hidden bg-[#bdbdbd]"
            >
              <X />
            </div>
          </div>
          <div className=" flex-1 w-full bg-green"></div>
          <div className="w-full border-t-1 border-gray-100 pt-2   px-3 flex items-center">
            <InputField />
          </div>
        </div>
      )}
    </>
  );
}

function MentorChat({ openChat, setOpenChat }: propType) {
  return (
    <>
      {openChat && (
        <div className="lg:h-[678px] bg-white lg:w-[353px] w-full h-full rounded-[12px] flex-col flex shadow-medium shadow-gray-800/5  lg:absolute bottom-[5%] right-[120%] z-50 ">
          <div className="w-full px-3 border-b-1 border-gray-100 lg:h-[61px] flex justify-between items-center">
            <p>Mentor</p>
            <div
              onClick={() => {
                setOpenChat(false);
              }}
              className="size-8  hidden  justify-center  items-center lg:flex "
            >
              <X />
            </div>
          </div>
          <div className="flex-1 bg-pink-500 w-full "></div>

          <div className="w-full border-t-1 border-gray-100 pt-2   px-3 flex items-center ">
            <InputField />
          </div>
        </div>
      )}
    </>
  );
}

export { AiChat, MentorChat, MobileChat };
