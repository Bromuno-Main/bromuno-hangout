"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { MobileChat } from "../chats/Chat";
import { Tools } from "../notification/Notify";
import { ChevronDown, Menu, MessageCircleIcon, Calendar, Bookmark, Award, Store } from "lucide-react";
import { Title } from "../title/Title";
import { Headers } from "../../data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  route: string;
  color: string;
}

function RightBar() {
  const [menu, setMenu] = useState(true);
  const [tools, setTools] = useState(false);
  const [section, setSection] = useState("");
  const [chatSection, setChatSection] = useState("");
  const [mobileChat, setMobilechat] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const navItems: NavItem[] = [
    { icon: MessageCircleIcon, route: '/conversations', color: 'text-gray-600' },
    { icon: Calendar, route: '/calendar', color: 'text-gray-600' },
    { icon: Bookmark, route: '/bookmarks', color: 'text-gray-600' },
    { icon: Award, route: '/awards', color: 'text-gray-600' },
    { icon: Store, route: '/store', color: 'text-gray-600' },
  ];

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

  const usePathName = usePathname();
  const isProfile = usePathName === "/profile"

  return (
    <>
      {
        !isProfile && <div className="lg:h-full lg:relative absolute top-0 right-0 left-0 z-20">
          <Tools
            openTools={tools}
            setOpenTools={setTools}
            section={section}
            setSection={setSection}
          />
          <MobileChat
            setMobileChat={setMobilechat}
            mobileChat={mobileChat}
            section={chatSection}
            setSection={setChatSection}
          />
          <PopUp popUp={popUp} setPopUp={setPopUp} />
          {menu ? (
            <div className="h-full w-full border-l bg-white rlative">
              {/* Desktop right bar */}
              <nav className="sticky lg:min-w-[80px] lg:max-w-[80px] items-center h-full hidden lg:flex flex-col top-0 bottom-0 right-0">

                <div className="flex flex-col items-center justify-between w-full h-full py-6">
                  <div className="space-y-4">
                    <Link href="/profile" className="mb-8">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src="/profile.svg"
                          alt="Profile"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col items-center space-y-4">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.route}
                            className={`p-3 rounded-xl transition-colors ${usePathName === item.route ? "bg-black" : "hover:bg-gray-100"}`}
                          >
                            <Icon className={`w-6 h-6 ${usePathName === item.route ? "invert" : "text-black"}`} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleTools("notifications")}
                    className="p-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Menu className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </nav>

              {/* Mobile right bar */}
              <section className="lg:hidden flex items-center justify-between bg-white px-3">
                <div
                  onClick={() => setPopUp(true)}
                  className="h-full gap-2 items-center justify-center flex"
                >
                  <Title /> <ChevronDown />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Link href="/chat" className="flex items-center justify-center">
                    <MessageCircleIcon />
                  </Link>
                  <button onClick={() => setMenu(false)}>
                    <Menu />
                  </button>
                </div>
              </section>
            </div>
          ) : (
            // Profile section when menu is closed
            <div>
              <section className="text-black w-full h-full fixed left-0 top-0 p-3 z-50 lg:hidden flex flex-col bg-white">
                <div className="flex flex-col items-center justify-between w-full h-full ">
                  <div className="w-full h-[33px] justify-between items-center flex pr-2">
                    <button
                      onClick={() => setMenu(true)}
                      className="size-6 justify-items-center flex items-center bg-white"
                    >
                      <Image
                        src="/closeIcon.svg"
                        alt="icon"
                        width={10}
                        height={10}
                        className="w-[14.14px] h-[14.14px] cursor-pointer"
                      />
                    </button>
                  </div>
                  <Profile />
                </div>
              </section>
            </div>
          )}
        </div>
      }
    </>
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
        <div className="grid grid-cols-2 fixed bg-white left-0 bottom-0 z-50 h-[60vh] w-full py-[21px]">
          {Headers.map(({ label, route, image }, index) => {
            const isActive = pathname === route;
            return (
              <Link
                key={index}
                href={route}
                onClick={() => setPopUp(false)}
                className={`h-[55px] relative px-6 items-center group hover:text-black hover:bg-black/5 justify-center rounded-md w-full flex`}
              >
                <div className="transition-width delay-200 ease-linear duration-500 flex relative gap-3">
                  <div className={`flex flex-col items-center justify-center gap-3 ${!isActive ? "saturate-0" : "text-[#F26869]"
                    }`}>
                    <div className="w-[18px] h-[20px]">
                      <Image src={image} alt="" width={20} height={20} />
                    </div>
                    <p className={`duration-300 delay-200 ease-linear font-bold text-neutral-400 text-[18px] leading-[22px] ${!isActive ? "" : "text-[#F26869]"
                      }`}>
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

export const Profile = () => {
  return (
    <div>
      {/* Profile component implementation */}
    </div>
  );
};
