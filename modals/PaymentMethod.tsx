import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import { Plus } from 'lucide-react';
import React from 'react';
import SideBanner from '../components/SideBanner';
import { servicesList, subscriptionList } from "../data";
import { useFormContext } from "../lib/hooks";


export default function PaymentMethod() {
    const {
        activeService,
        setActiveService,
        loading,
        prevClicked,
        offer,
        handleSubmit,
        subcriptionType,
        setSubcriptionType,

    } = useFormContext();

    const services:{ title: string; index: number }[] = [];

    const servicePage = (): React.ReactNode => {

        const variants = {
            initial: { opacity: 0, x: -100 },
            enter: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 },
        };

        switch (activeService) {
            case 0:
                return (
                    <motion.div
                        className="flex flex-col items-center justify-center px-5  lg:px-20"
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                    >

                        {servicesList.map((offer, index) => (
                            <div onClick={() => setSubcriptionType(offer)} key={index} className={`${subcriptionType == offer ? "border-green-800 border-2" : "border-gray-300 border-1"} relative cursor-pointer  p-4 pb-3  m-2  px-6 flex-1 justify-between py-8 lg:min-h-[350px] overflow-hidden flex flex-col gap-3 rounded-3xl`} >
                                <div className={`${subcriptionType == offer ? "bg-green-800" : "bg-transparent"} w-full p-2 absolute top-0 left-0 right-0 h-[70px]`}></div>
                                <div className="z-10 ">

                                    <div className='flex w-full justify-between'>
                                        <h4 className="mb-3" style={
                                            { color: offer.textColor }
                                        } >{offer.title}</h4>
                                        <h4 className={`${subcriptionType == offer ? "text-white" : "text-black"} text-[1.4rem]`}>{offer.price}</h4>
                                    </div>


                                    <p className="pb-2 text-base text-gray-600 mt-5 ">{offer.description}</p>
                                    {offer.package.map((data, index) => (
                                        <div key={index} className={`mb-1`} >

                                            <span className="flex gap-3 items-center"> <Plus size={16} className="text-gray-400" /> {data}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}

                    </motion.div>
                )
            case 1:
                return (
                    <motion.div
                        className="flex flex-col justify-center items-center  p-5 lg:px-20"
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                    >

                        {subscriptionList.map((offer, index) => (
                            <div onClick={() => setSubcriptionType(offer)} key={index} className={`${subcriptionType == offer ? "border-green-800 border-2" : "border-gray-300 border-1"} overflow-hidden relative cursor-pointer p-4 pb-3  m-2 px-6  flex-1 justify-between py-8 lg:min-h-[350px] flex flex-col gap-3 rounded-3xl`} >
                                <div className={`${subcriptionType == offer ? "bg-green-800" : "bg-transparent"} w-full p-2 absolute top-0 left-0 right-0 h-[70px]`}></div>
                                <div className='z-10'>
                                    <div className='flex w-full justify-between mb-5'>
                                        <h4 className="mb-3" style={
                                            { color: offer.textColor }
                                        } >{offer.title}</h4>
                                        <h4 className={`${subcriptionType == offer ? "text-white" : "text-black"} text-[1.4rem]`}>{offer.price}</h4>
                                    </div>

                                    {offer.package.map((data, index) => (
                                        <div key={index} className={`mb-1`} >
                                            <span className="flex gap-3 items-center"> <Plus size={16} className="text-gray-400" /> {data}</span>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        ))}


                    </motion.div>
                )
            default:
                return (
                    <div>

                    </div>
                )
        }
    }



    return (
        <div className="flex flex-col items-center justify-center gap-5 max-w-full w-full m-auto px-4 pt-14 min-h-[80vh]">
            <div className='flex lg:flex-row flex-col px-5 lg:h-[152px] lg:w-[895px] gap-[27px]'>
                <div className='h-[152px] lg:w-[247px] rounded-[16px]'><SideBanner data={offer} /> </div>
                <div>
                    <h3 className="font-bold lg:text-[48px]">Payment plan</h3>
                    <p className='text-[16px] leading-[20px] font-normal'>Please select the most convenient payment plan. No worries you&apos;re not paying yet, and you can change your decision later.
                    </p>
                    <a href="#" className='text-[#1FA886] text-[16px] leading-[20px]'>Learn more about payment</a>
                </div>
            </div>

            <div className={`p-4  w-full flex flex-row justify-center gap-2 lg:gap-6 border-b-2`}>
                {services.map((service, index) =>
                    <div onClick={() => setActiveService(index)} key={index} className={`cursor-pointer  `} >
                        <span className={`text-large font-bold  ${activeService == index ? " text-[#188268] border-b-3 border-[#188268]  decoration-clone py-2 px-4  " : "text-gray-500"}`} >{service.title}</span>
                    </div>
                )}
            </div>
            <p className="text-base font-normal w-full text-center  text-gray-500">Pay for selected product or service. 60% at initiation and 40% at completion</p>
            <div className="lg:px-20 mt-6  ">
                {servicePage()}
            </div>
            <div className={`flex gap-2 lg:w-[500px] w-full justify-between px-6 flex-row py-10`}>
                <button onClick={() => prevClicked()} >Back</button>
                <Button isLoading={loading} disabled={loading || subcriptionType == null} className="bg-green" onClick={() => handleSubmit()} >Submit</Button>
            </div>
        </div>
    )
}
