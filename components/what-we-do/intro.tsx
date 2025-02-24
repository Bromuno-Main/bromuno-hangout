import React from 'react'
interface Params {
    isWebsite: boolean;
    handleClick: () => void;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNoteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNextButton: () => void;
    emailValue:string
    noteValue:string;
}
const Intro: React.FC<Params> = ({ handleClick, isWebsite, handleEmailChange, handleNoteChange,  handleNextButton,emailValue,noteValue }) => {
    return (
        <div className=''>

            <div className='flex flex-row py-5 gap-3 mt-3 '>
                <div
                    className={`w-[135px] h-[49px] px-[18px] py-[15px] bg-red-400 rounded-[65px] border border-gray-300} justify-center items-center gap-2.5 inline-flex whitespace-nowrap`}

                >
                    <div className={` text-white text-base font-medium`}>Work with us</div>
                </div>

            </div>

            <div className='w-full'>
                <input value={emailValue}  onChange={handleEmailChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] bg-transparent text-[2rem] placeholder:text-[#D2D6DB] border-b-2 border-t-0 border-l-0 border-x-0 border- ' title='Email address' placeholder='Email address' type='email'></input>
            </div>

            <div>

                <div className="md:w-[586px] min-h-[59px] justify-between md:items-center flex md:py-10 md:flex-row flex-col gap-2 py-5 max-w-[300px] md:max-w-none ">
                    <div className="justify-start items-center gap-3 flex   ">
                        <div className="text-neutral-700 text-sm font-light ">Select product categories</div>
                        <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden md:block '>
                            <path d="M32.7071 8.70711C33.0976 8.31659 33.0976 7.68342 32.7071 7.2929L26.3431 0.928934C25.9526 0.53841 25.3195 0.53841 24.9289 0.928934C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-8.74228e-08 9L32 9L32 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#404040" />
                        </svg>

                    </div>

                    <div className="h-[59px]   rounded-[65px] overflow-hidden border-gray-300 justify-between items-center flex cursor-pointer border-2">
                        <div onClick={handleClick} className={`text-stone-300 text-2xl font-normal px-5 h-full items-center flex ${isWebsite ? 'bg-green-700 hover:bg-green-600' : ''}`}>Website</div>
                        <div onClick={handleClick} className={`text-stone-300 text-2xl font-normal px-5 h-full items-center flex  ${!isWebsite ? 'bg-green-700  hover:bg-green-600' : ''}`}>Mobile app</div>
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <input value={noteValue}  onChange={handleNoteChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] placeholder:text-[#D2D6DB] border border-b-2 border-x-0  border-t-0 focus:outline-red-600 focus:outline-0  bg-transparent text-[2rem]  ' title='Note' placeholder='Note' type='email'></input>
            </div>

            <div className='flex flex-row items-end justify-end'>
                <div className="w-full flex justify-end my-5 ">
                    <button onClick={handleNextButton} className="text-center text-white text-2xl font-semibold max-w-[150px] bg-neutral-800 ">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Intro