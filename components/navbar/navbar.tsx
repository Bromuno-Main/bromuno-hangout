"use client";
import Link from 'next/link';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Headers } from '../../data';
import { usePathname } from 'next/navigation';
import Modal from "../../modals/modal";
import useModal from "../../hooks/useModal";
import GetStarted from "../../modals/GetStarted";
import { useDisclosure } from "@nextui-org/react";

function NavBar() {
  const router = usePathname()
  const [width, setWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState(false);
  const { isOpen: me, openModal, closeModal } = useModal();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleNav = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const changeNavButton = useCallback(() => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  const handleClickOutside = useCallback((event: any) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", changeNavButton);
    document.addEventListener("mousedown", handleClickOutside);
    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", changeNavButton);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updateWidth, changeNavButton, handleClickOutside]);

  return (
  <>
    <Modal isOpen={me} onClose={closeModal} />
    <GetStarted isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    <nav className="w-full max-sm:bg-white  h-20 fixed items-center z-20 max-sm:shadow-xl max-sm:max-h-[70px] max-md:shadow-xl max-md:max-h-[70px]">
      <div className="container mx-auto pr-4 pl-8 z-200 h-full ">
        <div className="flex justify-between items-center w-full h-full">
          <Logo />
          
          <div className='flex flex-row gap-2 lg:w-[500px] justify-between  p-2 rounded-lg relative items-center'>
            <> 
            <div className='lg:flex md:flex flex-row gap-4 lg:justify-between md:w-full hidden p-2 rounded-lg  items-center'>
              <p onClick={toggleModal} className={``}>info</p> <p >Playground</p>
              <button onClick={openModal} className=" bg-[#1FA886]  text-[18px] text-white font-bold md:w-[176px] w-full h-[49px] rounded-full"
              >
                Get Started
              </button>
            </div>
            
               {modal &&
                
              <div className='lg:flex lg:flex-col md:flex md:flex-col py-[13px] px-[15px]  absolute z-50 rounded-[32px] bg-gray-200 top-14 lg:w-[620px] md:w-[620px] lg:h-[422px] md:h-[422px] -left-40 md:-left-72 overflow-hidden  gap-10 hidden'>
                <div className=' md:flex md:flex-row md:w-full md:h-fit  gap-4 '>
                {
                  Headers.map(({ label, route,image,description }, index) => {
                    const activeIndex = route === router;
                    return (
                      <Link key={index} href={route} onClick={toggleModal} className='h-full w-full'>
                        <div className='w-full h-[306px] py-[13px] px-[15px] gap-[13px] flex-col flex'>
                           <div className='lg:w-full h-full rounded-3xl overflow-hidden'>
                            <Image src={image} alt='' width={100} height={100} className='w-full h-full'/>
                          </div>
                          <div className='w-full h-[91px] gap-4 flex flex-col'>
                            <p
                            className={`font-bold text-[18px] leading-[22px]`}>
                            {label}
                            </p>
                            <p className='font-medium text-[16px] leading-[20px]'>{description}</p>
                          </div>
                        </div>
                        
                      </Link>
                      
                    );

                  })}
                  
                </div>
                <div className='flex w-[438px] px-4 h-[20px] text-nowrap gap-5 text-black' >
                  <p className='font-bold text-[16px] leading-[20px]'>Terms of Service</p>
                  <p className='font-bold text-[16px] leading-[20px]'>Payment Model</p>
                  <p className='font-bold text-[16px] leading-[20px]'>Mode of Operation</p>
                </div>
              </div>
              }
              <div onClick={handleNav} className=" cursor-pointer lg:hidden md:hidden">
                <Image className="cursor-pointer" src={"/menu.svg"} alt={"menu"} height={46} width={46} />
              </div>
            </>
          </div>

        </div>
      </div>
      <div ref={navRef} className={
        menuOpen
          ? "fixed right-0 top-0 rounded-lg w-[50%] sm:hidden md:hidden shadow-2xl h-[50%] bg-[#554E4E] p-10 ease-in duration-500 z-50"
          : "fixed right-[-100%] top-0 p-10 ease-in duration-500 h-full z-50"
      }>
        <div onClick={handleNav} className="flex w-full flex-grow items-center justify-between sm:hidden md:hidden cursor-pointer">
          <FaArrowLeftLong size={32} color='#FFFFFF' />
        </div>
        <div className=" h-full flex gap-2 p-10 flex-col ">
          {
            Headers.map(({ route, label }, index) => {
              const activeIndex = route === router;
              return (
                <Link key={index} onClick={handleClickOutside} href={route} className='flex flex-row items-center gap-2'>
                  <div className={`w-1.5 h-[24px] ${!activeIndex ? "bg-transparent" : "bg-zinc-300"}`}></div>
                  <p onClick={handleNav} className=" text-white text-[24px] font-semibold">{label}</p>
                </Link>
              )
            })
          }

        </div>
      </div>
    </nav>
  </>
  );
}

export default NavBar;
