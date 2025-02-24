import { Spacer } from '@nextui-org/react';
import React from 'react';
interface Params {
  isWebsite: boolean;
  handleClick: () => void;
  handlePrevButton: () => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAboutBusinessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAboutProjectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  nameValue: string;
  phoneValue: string;
  businessNameValue: string;
  businessTypeValue: string;
  projectValue: string;
}
const More: React.FC<Params> = ({ handleNameChange, handlePhoneChange,handleBusinessNameChange,handleAboutBusinessChange,handleAboutProjectChange, handleSubmit, handlePrevButton, nameValue, phoneValue, businessNameValue, businessTypeValue, projectValue }) => {
  return (
    <div className=''>


      <div className='w-full mt-12'>
        <div className="text-teal-700 text-base font-bold font-['Inter']">Name</div>
        <input value={nameValue} onChange={handleNameChange}  className='w-full pr-3 pt-3 pb-2 min-h-[77px] bg-transparent text-[2rem] placeholder:text-[#D2D6DB] border-b-2 border-t-0 border-l-0 border-x-0 border- ' title='First Name' placeholder='First name' type='text'></input>
      </div>
      <Spacer y={8} />



      <div className='w-full'>
        <div className='flex flex-row justify-between'>
          <div className="text-teal-700 text-base font-bold font-['Inter']">Phone</div>
          <div className="w-[109px] h-[19px] justify-start items-start gap-2.5 inline-flex">
            <div className="text-teal-700 text-base font-bold font-['Inter']">Country</div>
            <div className="text-red-400 text-base font-bold font-['Inter']">USA</div>
          </div>
        </div>


        <input value={phoneValue} onChange={handlePhoneChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] placeholder:text-[#D2D6DB] border border-b-2 border-x-0  border-t-0 focus:outline-red-600 focus:outline-0  bg-transparent text-[2rem]  ' title='Phone number' placeholder='+1233354546' type='tel'></input>
      </div>
      <Spacer y={8} />
      <div className='w-full mt-12'>
        <div className="text-teal-700 text-base font-bold font-['Inter']">Business Name</div>
        <input value={businessNameValue} onChange={handleBusinessNameChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] bg-transparent text-[2rem] placeholder:text-[#D2D6DB] border-b-2 border-t-0 border-l-0 border-x-0 border- ' title='Business name' placeholder='Business name' type='text'></input>
      </div>
      <Spacer y={8} />
      <div className='w-full mt-12'>
        <div className="text-teal-700 text-base font-bold font-['Inter']">What is your business about</div>
        <input value={businessTypeValue} onChange={handleAboutBusinessChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] bg-transparent text-[2rem] placeholder:text-[#D2D6DB] border-b-2 border-t-0 border-l-0 border-x-0 border- ' title='what is your business' placeholder='Business info' type='text'></input>
      </div>
      <Spacer y={8} />
      <div className='w-full mt-12'>
        <div className="text-teal-700 text-base font-bold font-['Inter']">Why do you need this project</div>
        <input value={projectValue}  onChange={handleAboutProjectChange} className='w-full pr-3 pt-3 pb-2 min-h-[77px] bg-transparent text-[2rem] placeholder:text-[#D2D6DB] border-b-2 border-t-0 border-l-0 border-x-0 border- ' title='why do you need this project' placeholder='Reason for project' type='text'></input>
      </div>
      <Spacer y={8} />
      <div className='flex flex-row items-end justify-end'>
        <div className="w-full flex justify-end my-5 ">
          <button onClick={handlePrevButton} className="text-center text-black text-2xl font-semibold max-w-[150px] bg-transparent border ">Back</button>
          <Spacer x={4} />
          <button onClick={handleSubmit} className="text-center text-white text-2xl font-semibold max-w-[150px] bg-neutral-800 ">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default More