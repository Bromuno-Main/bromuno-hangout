import React from 'react';
import Image from 'next/image';


export const Profile: React.FC = () => {
    return (
        <div className='flex flex-col py-3 h-full w-full justify-start items-center gap-4 ' >
            <div className=" flex flex-col w-full ">
                <div className=" w-full justify-center  flex flex-col  items-center pb-20 relative">
                    <div className="rounded-2xl w-full h-[120px]   overflow-hidden">
                        <Image
                            src="/Negative_Large.png" // Replace with your background image path
                            alt="Profile Background"
                            width={500}
                            height={500}
                            className="object-cover lg:w-[500px] w-full object-center" />
                    </div>

                    <Image src="/profile.svg" width="400" height="400" alt="profile" className='bg-gray-200 size-32 rounded-full mx-auto  top-[25%] absolute    ' />
                </div>
                <div className="flex items-center flex-col">
                    <p className='font-bold text-lg '>Martni Papi</p>

                    <p className='text-gray-500'>@Papno1</p></div>
            </div>

            <div className="rounded-full flex items-center justify-center gap-4 pl-2 pr-1 font-semibold py-1 my-2 bg-gray-100 ">
                <Image src={"/spark.svg"} width='24' height='24' alt='spark' /> 23

                <Image src={"/addFill.svg"} width='24' height='24' alt='add' className='size-6 cursor-pointer p-1 ' />

            </div>

            <div className="rounded-2xl w-full  flex flex-col bg-green-100 px-6 py-4 gap-2 font-semibold">
               
                <div className="flex justify-between w-full items-center"> Level 7
                    <div className="rounded-full flex items-center justify-center gap-4 px-2  font-semibold py-1 my-2 bg-lime-300 ">
                        Rookie
                    </div>
                </div>
                <div className="h-4 w-full bg-green-200">
                    <div className="h-4 w-1/4 bg-white">
                    </div>
                </div>
            
            </div>

        </div>
    );
};
