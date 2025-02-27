"use client";
import Link from 'next/link';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { Headers } from '../../data';

function LeftBar() {
  const [navWidth, setNavWidth] = useState(false);

  const handleNavWidth = () => {
    setTimeout(() => {
      if (navWidth === false) {
        setNavWidth(true)
      } else {
        setNavWidth(false)
      }
    }, 100);
  }




  return (
    <>

      <nav onMouseEnter={handleNavWidth} onMouseLeave={handleNavWidth} className="top-0 bottom-0 delay-300 h-full z-20 sticky">
        <div className={` h-full ${navWidth ? "min-w-[156px]" : "min-w-[90px]"}  px-1 flex flex-col justify-between items-center  transition-width duration-500`}>
          <div className="w-full h-fit  justify-items-center content-center">
            <div className='flex flex-col w-full py-[21px]'>
              {
                Headers.map(({ label, route, image }, index) => {

                  return (

                    <Link key={index} href={route} className=' h-[55px] outline   w-full justify-center flex  '>
                      <div className='relative flex items-center hover:bg-black/5   justify-start w-full h-full overflow-hidden gap-4'>
                        <div className={`${navWidth ? "opacity-0 hidden   " : "  opacity-100"} transition-opacity px-10 duration-100`}>
                          <Image src={image} alt='' width={20} height={20} className='w-full h-full' />
                        </div>
                        <div className={`${navWidth ? "opacity-100 px-8  flex gap-6  " : "absolute  right-[-50px] opacity-0"} transition-opacity duration-200`}>
                          <div className={`${!navWidth?"hidden":""} overflow-hidden w-[18px] h-[20px]`}>
                            <Image src={image} alt='' width={20} height={20} className='w-full h-full' />
                          </div>
                          <p
                            className={`font-bold text-black text-[18px] leading-[22px]`}>
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
          <Logo />
        </div>
      </nav>
    </>
  );
}

export default LeftBar;

// const [width, setWidth] = useState(0);
// const [menuOpen, setMenuOpen] = useState(false);
// const [showButton, setShowButton] = useState(false);
// const navRef = useRef<HTMLDivElement | null>(null);
// const [modal, setModal] = useState(false);

// const leftbar = document.getElementById("left-bar");


// const toggleModal = () => {
//   setModal(!modal);
// };

// const handleNav = useCallback(() => {
//   setMenuOpen((prev) => !prev);
// }, []);

// const updateWidth = useCallback(() => {
//   setWidth(window.innerWidth);
// }, []);

// const changeNavButton = useCallback(() => {
//   if (window.scrollY >= 400 && window.innerWidth < 768) {
//     setShowButton(true);
//   } else {
//     setShowButton(false);
//   }
// }, []);

// const handleClickOutside = useCallback((event: any) => {
//   if (navRef.current && !navRef.current.contains(event.target)) {
//     setMenuOpen(false);
//   }
// }, []);

// useEffect(() => {
//   window.addEventListener("resize", updateWidth);
//   window.addEventListener("scroll", changeNavButton);
//   document.addEventListener("mousedown", handleClickOutside);
//   updateWidth();

//   return () => {
//     window.removeEventListener("resize", updateWidth);
//     window.removeEventListener("scroll", changeNavButton);
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [updateWidth, changeNavButton, handleClickOutside]);