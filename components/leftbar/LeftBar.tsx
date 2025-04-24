"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { Headers } from '../../data';
import { usePathname } from 'next/navigation';
import { DotIcon, Menu } from 'lucide-react';
import { FaHamburger } from 'react-icons/fa';

function LeftBar() {
  const [navWidth, setNavWidth] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    setNavWidth(true);
  };

  const handleMouseLeave = () => {
    setNavWidth(false);
  };

  return (
    <>
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="top-0 hover:w-[10rem]  w-[5rem]  duration-400 bottom-0  overflow-hidden delay-75 h-full z-20 sticky lg:block hidden">
        <div className={`h-full px-1 flex flex-col ease-linear justify-between items-center transition-width duration-500`}>
          <div className="w-full h-fit justify-items-center content-center">
            <div className='flex flex-col w-full py-[21px]'>
              {
                Headers.map(({ label, route, image }, index) => {
                  const isActive = pathname === route;
                  return (
                    <Link key={index} href={route} className={`h-[55px] relative px-6 items-center group hover:text-black hover:bg-black/5 justify-center rounded-md w-full flex `}>
                      <div className={`${navWidth ? "w-[5rem]" : "w-5"} transition-width delay-200 ease-linear duration-500 flex relative gap-3`}>
                        <div className={`flex gap-3 ${!isActive ? 'saturate-0 ' : ' !text-[#F26869]'}`}>
                          <div className={`w-[18px] h-[20px]`}>
                            <Image src={image} alt='' width={20} height={20} />
                          </div>
                          <p className={`${navWidth ? "opacity-100" : "opacity-0"} duration-300 delay-200 ease-linear font-bold  text-neutral-400  text-[18px] leading-[22px] ${!isActive ? ' ' : ' !text-[#F26869] '}`}>
                            {label}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              }
            </div>
          </div>
          <div className={`${navWidth ? "w-24" : ""} gap-2 relative bottom-4 items-center text-black flex duration-300 justify-start size-7`}>
            <span className='gap-2 relative bottom-4 items-center text-black flex'>
              <Logo />
              <h5 className={`${navWidth ? "opacity-100" : "opacity-0"} duration-300`}>Hangout</h5>
            </span>
          </div>
        </div>
      </nav>
      {/* mobile bottom nav */}
      <nav className=" w-full  bottom-0  left-0 right-0 overflow-hidden z-20 absolute lg:hidden">
        <div className={` px-1 flex ease-linear justify-between items-center transition-width duration-500 bg-white`}>
          <div className="w-full h-fit justify-items-center content-center">
            <div className='flex items-center justify-between w-full'>
              {
                Headers.map(({ route, image }, index) => {
                  const isActive = pathname === route;
                  return (
                    <Link key={index} href={route} className={`h-[55px] relative px-6 items-center hover:text-black hover:bg-black/5 justify-center rounded-md flex ${index > 3? "hidden":""} `}>
                      <div className={`w-full h-full flex items-center justify-center relative gap-3`}>
                        <div className={`w-full h-full flex gap-3 justify-between ${!isActive ? 'saturate-0 ' : ' !text-[#F26869]'}`}>
                          <div className={` w-full h-full flex items-center justify-center `}>
                            <Image src={image} alt='' width={20} height={20} className={`size-5`}/>
                          </div>
                           
                        </div>
                      </div>
                     
                    </Link>
                  );
                })
              }
              <div className='flex items-center justify-center size-[55px] '>
               <Menu />
              </div> 
            </div>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default LeftBar;
