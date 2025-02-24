
"use client"
import CaseStudy from './Casestudy';
import React from 'react'

function OurWorks() {



  return (
    <>
    <section id='our-works' className='w-full h-max m-auto   xl:flex xl:flex-col md:p-11 px-3 mt-[100px] lg:mt-0'>
      <h3 className='whitespace-nowrap '>
        Our works
      </h3>
      <div className='xl:grid xl:grid-cols-3 xl:w-full  mt-11  xl:gap-10'>
        <div className='col-span-3 mb-10'>
          <CaseStudy
            title={'Voice of the east Admin Dashboard'} image={'/case-1.jpg'} description={'Web application Design and Development'} link={'string'} />
        </div>
        <CaseStudy
          title={'Grooveup'} image={'/grv.jpg'} description={'Interface and Development for a music streaming app and crypto community'} link={'string'} />
        <CaseStudy
          title={'Tasty Tradition'} image={'/tsty.jpg'} description={'Brand Identity and Mobile app Design for Food Service Brand'} link={'string'} />
        <CaseStudy
          title={'Omonie Mobile'} image={'/omo.jpg'} description={'investment and gaming platform for omonie Inc'} link={'string'} />
     
      </div>
      <div className='w-full items-center justify-center flex flex-row mt-14'>
        <div className="w-[198px] h-[59px] px-[15px] py-2 rounded-[5px]  justify-center items-center gap-[25px] inline-flex cursor-pointer hover:bg-[#fcfcfc] hover:rounded-[5px] mb-10">
          <button className="font-bold">view more</button>
        </div>

        </div>

      </section>
    </>
  )
}

export default OurWorks




