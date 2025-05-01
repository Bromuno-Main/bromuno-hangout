"use client";

import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { InputField } from "./input";
import { Maximize, Minimize, X } from "lucide-react";

interface propType {
  openChat?: boolean;
  setOpenChat: React.Dispatch<SetStateAction<boolean>>;
}

interface MobileChatProps {
  setMobileChat: React.Dispatch<SetStateAction<boolean>>;
  mobileChat: boolean;
  section: string;
  setSection: React.Dispatch<SetStateAction<string>>;
}

function MobileChat({
  setMobileChat,
  mobileChat,
  section = "",
  setSection,
}: MobileChatProps) {
  const [expandChat, setExpandChat] = useState(false);
  const currentChat = () => {
    switch (section) {
      case "mentor":
        return <MentorChat setOpenChat={setMobileChat} openChat={mobileChat} />;
      case "chatAi":
        return <AiChat setOpenChat={setMobileChat} openChat={mobileChat} />;
      default:
        return <AiChat setOpenChat={setMobileChat} openChat={mobileChat} />;
    }
  };

  return (
    <>
      {mobileChat && (
        <div
          className={`${
            expandChat
              ? "lg:w-[748px] lg:h-[80vh] lg:absolute lg:-left-[880%] lg:top-[10%]"
              : "lg:h-[678px] lg:w-[353px] w-full h-full lg:absolute lg:-left-[450%] lg:top-[15%] "
          } lg:rounded-[32px] overflow-hidden  bg-white flex flex-col gap-3 fixed right-0 left-0 top-0 p-2 lg:p-1 shadow-lg shadow-gray-400 z-50 `}
        >
          <div className="flex justify-between items-center px-3 lg:hidden">
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
          <div className="w-full flex-1 relative">
            {expandChat ? (
              <div
                onClick={() => {
                  setExpandChat(false);
                }}
                className="absolute hidden lg:block top-[19px] right-[16%]"
              >
                <Minimize color="black" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setExpandChat(true);
                }}
                className="absolute hidden lg:block top-[19px] right-[16%]"
              >
                <Maximize color="black" />
              </div>
            )}
            {currentChat()}
          </div>
        </div>
      )}
    </>
  );
}
function AiChat({ setOpenChat, openChat }: propType) {
  return (
    <>
      {openChat && (
        <div className="w-full h-full bg-white flex-col flex justify-between items-center">
          <div className="w-full  lg:h-[61px] px-3 flex justify-between items-center">
            <p>Lami Ai</p>
            <div
              onClick={() => {
                setOpenChat(false);
              }}
              className="w-[33px] h-[33px] lg:flex justify-center items-center hidden"
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
        <div className="bg-white w-full h-full rounded-[12px] flex-col flex ">
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
