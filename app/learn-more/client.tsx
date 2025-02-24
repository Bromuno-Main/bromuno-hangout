"use client"
import { ModalBody, Accordion, AccordionItem, Image, useDisclosure, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { Metadata } from 'next'
import { generateMetadata } from './server'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import Banner from '../../components/barners/banner'
import CtaB from '../../components/barners/cta-b'
import { tabList, ProductType, ourServiceList, ReadMore, faqsList } from '../../data'
import GetStarted from '../../modals/GetStarted'
import FAQ from '../../components/faq/Faq'
import DesignShip from '../../components/DesignShip'
import Reads from '../../components/important/Reads'


export { generateMetadata };


export default function LearnMore() {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleWorkOpen = () => {
    router.push('/learn-more');
  };

  return (
    <>
      <GetStarted
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen} />

      <section className='flex-col overflow-hidden flex w-full  mx-auto  items-center justify-center gap-10'>
        {/* Intorduction */}
        <div className='lg:flex-row-reverse lg:px-40 px-5 flex-col lg:gap-20 gap-4  flex bg-[#188268] lg:h-screen w-full lg:py-0 pt-32 pb-10 items-center justify-center'>
          <div className=' lg:w-[554px] relative overflow-hidden rounded-[21px] w-full h-[300px]'>
            <div className={`absolute top-0 w-full h-full bg-[#F26869] z-10 bg-opacity-80 overflow-hidden`} >
            </div>    
            <Image src='/backdrop.png' alt='Learn more' sizes='lg' removeWrapper={true} className=' w-full h-full object-fill z-5'/>
          </div>
          <div className='w-full flex-col gap-[23px] flex text-white lg:w-[570px]'>
            <p className='font-bold lg:text-[24px] lg:leading-[30px] big-shoulder'>Our Services</p>
            <p className='font-bold big-shoulder xl:text-[56px] xl:leading-[56px]'>We craft impactful solutions with Design, Strategy, Business, and Code.</p>
            <p className='font-medium text-[18px] leading-[22px]'>We excel in visual design and business management, allowing us to build teams that deliver user-friendly digital products and boost client profits.</p>
          </div>
        </div>
        
        {/* Our services */}
        <div className='flex-col px-5 flex items-center mb-5 justify-center gap-10'>
          <div className='w-full'><p className='font-bold hidden lg:block text-[18px] leading-[23px]'>Our service include but not limited to the following:</p></div>
          {ourServiceList.map(( service, index) => (
            <div key={index} className='flex-col lg:flex-row flex gap-4 items-start justify-between w-full  py-4 '>
              <h4 className='md:text-[48px] md:leading-[48px] big-shoulder font-bold w-full max-w-[484px] text-[#188268]'>{index + 1}. {service.title}</h4>
              <div className='flex flex-col  max-w-[551px] w-full  gap-4'>
                <div className='relative rounded-[21px] overflow-hidden'>
                  <div className={`absolute top-0 w-full h-full bg-[#F26869] z-10 bg-opacity-80 overflow-hidden`} >
                  </div>
                  <Image src={service.image} alt={service.title}  className='z-5'/>
                  
                </div>
                
                <p className='w-full'>{service.subtitle}</p>
                <p className='font-bold'>{service.intro}</p>
                <div className='flex flex-col lg:grid lg:grid-cols-2  gap-4'>
                {service.list.map((item, index) => (
                  <div key={index} className=" flex text-wrap  gap-4 items-center">
                    <div className="">
                      <Check size={16} className=" text-white bg-black rounded-full" />
                    </div>
                    <p className=''>{item}</p>
                  </div>
                ))}
                </div>
              </div>  
            </div>
            
          ))}
          
        </div>
        
        
        {/* FAQs Section */}
        <div className="mb-20  px-5 w-full lg:w-[839px]">
          <FAQ />
        </div>

        <div className='w-full px-5'>
            <DesignShip/>
        </div>
      
        <Reads/>
        

        {/* <CtaB copy="Design and ship amazing products" /> */}
      </section>
      
    

    </>
  )
}

