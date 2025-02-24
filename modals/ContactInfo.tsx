import React from 'react'
import { businessSectors, ProjectFor } from '../data'
import { CheckedIcon } from '../data/icons'
import { useFormContext } from "../lib/hooks";
import { Controller } from 'react-hook-form';
import { Button, Select, SelectItem } from '@nextui-org/react';
import SideBanner from '../components/SideBanner';



export default function ContactInfo() {
    const { 
        activeTab, 
        setActiveTab, 
        activeService, 
        setActiveService, 
        offer, 
        setOffer,
        industry, 
        setIndustry,
        country, 
        setCountry,
        business, 
        setBusiness,
        brief, 
        setBrief,
        work, 
        setWork,
        phone, 
        setPhone,
        email, 
        setEmail,
        loading, 
        setLoading,
        projectFor,
        setProjectFor,
        onSubmit,
        prevClicked,
        handleSubmit,
        control,
        errors,
        register

     } = useFormContext();
  return (
    <div className={` flex flex-col p-4 lg:flex-row lg:px-20 lg:py-20 min-h-[80vh] justify-center gap-20 `}>

    
    <form onSubmit={handleSubmit(onSubmit)} className={`inline-flex flex-col w-full  lg:py-10 gap-4 max-w-[500px]`}>
        <div className='h-[144px] w-full  rounded-[16px]'><SideBanner data={offer} /> </div>
        <div className='w-full flex justify-center'><h4>How can we reach you?</h4></div>
        <div className="flex flex-col w-full  gap-2 ">
            <p className="text-base text-green-800"> Your phone number</p>
            <div className='w-full '>
            <input
                placeholder="000 000 00 000"
                type='number'
                value={phone}
                {...register('yourPhone')}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow-none w-full "
            />
            </div>
            {errors.yourPhone && <span className="text-red-500">{errors.yourPhone.message?.toString()}</span>}
        </div>

        <div className="flex w-full flex-col gap-2">
            <p className="text-base text-green-800"> Your email address </p>
            <div className='w-full '>
                <input
                    placeholder="enter email"
                    {...register('yourEmail')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-none w-full"
                />
            </div>
           
            {errors.yourEmail && <span className="text-red-500">{errors.yourEmail.message?.toString()}</span>}
        </div>


        <div className={`flex gap-2 w-full lg:w-[500px] justify-between flex-row`}>
            <button onClick={() => prevClicked()} >Back</button>
            <Button type="submit" className="bg-green">Next</Button>
        </div>

    </form>


    
</div>
  )
}
