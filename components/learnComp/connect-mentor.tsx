import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";

interface ConnectMentorProps {
  className?: string;
}

export const ConnectMentor: React.FC<ConnectMentorProps> = ({ className }) => {
  return (
    <div
      className={`bg-white outline-stone-200 outline-1 outline text-black [&>h4]:capitalize px-6 rounded-2xl flex flex-col py-6 gap-4 ${className}`}
    >
      <Image src={"/img-mentors.png"} width={200} height={150} alt="mentors" />
      <h4>connect with mentors</h4>
      <p>Start a One-on-One Conversation with any mentor of your choice.</p>
      <Button className="uppercase">connect</Button>
    </div>
  );
};
