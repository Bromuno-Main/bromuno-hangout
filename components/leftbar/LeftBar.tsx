"use client";
import Link from 'next/link';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { Headers } from '../../data';

function LeftBar() {
  const [navWidth, setNavWidth] = useState(false);
  const [navExit, setNavExit] = useState(false);

  const handleNavWidth = () => {
    setTimeout(() => {
      if (navWidth === false) {
        setNavWidth(true)
      } else {
        setNavWidth(false)
      }
    }, 100);
  }
  const handleNavExit = () => {
    setTimeout(() => {
      if (navExit === false) {
        setNavWidth(true)
      } else {
        setNavWidth(false)
      }
    }, 100);
  }




  return (
    <>

      <nav onMouseEnter={handleNavWidth} onMouseLeave={handleNavWidth} className="top-0 hover:w-[10rem]  w-[5rem]  duration-400 bottom-0 delay-300 h-full z-20 sticky">
        <div className={` h-full   px-1 flex flex-col  ease-linear justify-between items-center  transition-width duration-500`}>
          <div className="w-full h-fit  justify-items-center content-center">
            <div className='flex flex-col w-full py-[21px]'>
              {
                Headers.map(({ label, route, image }, index) => {

                  return (

                    <Link key={index} href={route} className={ ` h-[55px] relative px-6 items-center hover:bg-black/5  justify-center rounded-md  w-full  flex  `}>
                        
                        <div className={`${navWidth? "w-[5rem]" :"w-5"} ${navExit? "w-24":""} transition-width duration-500   flex   relative  gap-3`}>
                          <div className='flex gap-3 '> 
                          <div className={`w-[18px] h-[20px]`}>
                            <Image src={image} alt='' width={20} height={20} className='' />
                          </div>
                          <p
                            className={`${navWidth? "opacity-100":"opacity-0"} ${navExit? "opacity-100":""} duration-300   font-bold text-black text-[18px] leading-[22px]`}>
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
          <div className={`${navWidth? "w-24":""} gap-2   relative bottom-4 items-center text-black flex duration-300 justify-start size-7`}> 
          <span className=' gap-2   relative bottom-4 items-center   text-black flex  '> <Logo /> <h5 className={`${navWidth? "opacity-100":"opacity-0"} duration-300  `}>Hangout</h5></span>
          </div>
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