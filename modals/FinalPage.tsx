import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'


interface ModalProps {
    onClose: () => void;
}

export default function FinalPage({onClose}:ModalProps) {
  return (
    <div className="flex flex-col items-center max-w-full h-full m-auto py-10 px-4 sm:px-6 lg:px-8  justify-center bg-white  rounded-lg">
    <div className="text-center flex flex-col items-center space-y-4  sm:space-y-6">
        <div className='lg:w-[372px] flex justify-center items-center lg:h-[279px]'>
            <Image src={'/thumbsUp1.svg'} alt='' height={100} width={100} className='w-full h-full'/>
        </div>
        <p className="text-lg sm:text-xl lg:text-[48px] font-bold text-gray-800">
            Thanks for Choosing Bromuno!
        </p>
        <p className="text-base text-[16px] font-normal  text-gray-500">
            We will review your request and get back to you via email shortly
        </p>
        <div className='p-10'>
            <Button
            className="bg-[#188268] text-white py-4 px-8 sm:px-6 rounded-[32px] shadow hover:bg-green-500 transition-all duration-300"
            onClick={() => onClose()}
            >
                Close
            </Button>
        </div>
        
    </div>
</div>
  )
}
