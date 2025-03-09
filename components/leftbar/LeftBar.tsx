"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { Headers } from '../../data';

function LeftBar() {
  const [navWidth, setNavWidth] = useState(false);

  const handleMouseEnter = () => {
    setNavWidth(true);
  };

  const handleMouseLeave = () => {
    setNavWidth(false);
  };

  return (
    <>
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="top-0 hover:w-[10rem]  w-[5rem]  duration-400 bottom-0  overflow-hidden delay-75 h-full z-20 sticky">
        <div className={`h-full px-1 flex flex-col ease-linear justify-between items-center transition-width duration-500`}>
          <div className="w-full h-fit justify-items-center content-center">
            <div className='flex flex-col w-full py-[21px]'>
              {
                Headers.map(({ label, route, image }, index) => {
                  return (
                    <Link key={index} href={route} className={`h-[55px] relative px-6 items-center hover:bg-black/5 justify-center rounded-md w-full flex`}>
                      <div className={`${navWidth ? "w-[5rem]" : "w-5"} transition-width delay-200 ease-linear duration-500 flex relative gap-3`}>
                        <div className='flex gap-3'>
                          <div className={`w-[18px] h-[20px]`}>
                            <Image src={image} alt='' width={20} height={20} className='' />
                          </div>
                          <p className={`${navWidth ? "opacity-100" : "opacity-0"} duration-300 delay-200 ease-linear font-bold text-black text-[18px] leading-[22px]`}>
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
    </>
  );
}

export default LeftBar;