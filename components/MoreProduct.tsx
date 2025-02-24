import { Button, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import { businessSectors, ProjectFor } from '../data';
import { CheckedIcon, ClipIcon, PdfDocIcon } from '../data/icons';
import { useFormContext } from "../lib/hooks";
import SideBanner from './SideBanner';

export default function MoreProduct() {
    const {
        offer,
        industry,
        setIndustry,
        brief,
        setBrief,
        projectFor,
        setProjectFor,
        onSubmit,
        prevClicked,
        handleSubmit,
        control,
        errors,
        register

    } = useFormContext();
    const [selectDoc, setSelectDoc] = useState(false);
    return (

        <div className={`w-full lg:flex p-5  h-fit md:w-full flex-col items-center justify-center gap-20 `}>



            <form onSubmit={handleSubmit(onSubmit)} className={`flex w-full  flex-col items-start gap-[39px] lg:my-5  lg:w-[500px] h-fit`}>
                <div className='h-[144px]  w-full rounded-[16px]'><SideBanner data={offer} /> </div>
                <div className='w-full  content-center'>
                    <h4 className='text-[32px] big-shoulder font-bold leading-[32px] text-center ' >Tell us about your product</h4>
                </div>

                <div className='w-full   flex-col justify-center items-center flex gap-4 lg:gap-[24px]'>
                    <div className="flex flex-col  gap-[10px] w-full justify-center items-start ">
                        <p className="text-[16px] leading-[20px] font-semibold  text-green-800"> What industry is your product in?
                        </p>
                        <Controller
                            name="industry"
                            control={control}
                            render={({ field }) => (

                                <Select
                                    {...field}
                                    items={businessSectors}
                                    isRequired
                                    placeholder="Select Industry"
                                    selectedKeys={industry}
                                    onSelectionChange={setIndustry}
                                    labelPlacement="outside"
                                    className={`select border-none w-full`}
                                    variant="bordered"
                                >

                                    {(user) => (
                                        <SelectItem key={user.id} textValue={user.sector} className='border-none'  >
                                            <div className=" ">
                                                <div className="">
                                                    <span className="text-small">{user.sector}</span>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    )}

                                </Select>

                            )}
                        />

                        {errors.industry && <span className="text-red-500">{errors.industry.message?.toString()}</span>}
                    </div>
                    <div className='flex flex-col  items-start gap-[10px] w-full'>
                        <p className="text-[16px] font-semibold leading-[20px] text-green-800">Give us a brief of what you want to do</p>
                        <div className='w-full rounded-lg border-2'>
                            <textarea
                                {...register('brief')}
                                placeholder="I am into..."
                                value={brief}
                                onChange={(e) => setBrief(e.target.value)}
                                className=" shadow-none w-full h-[97px] border-0 py-3 px-[21px] "
                            />
                        </div>

                        {errors.brief && <span className="text-red-500">{errors.brief.message?.toString()}</span>}
                    </div>
                    {
                        selectDoc ? (
                            <div className=" w-full  h-[52px] flex justify-between items-center">
                                <div className='h-full lg:w-[123px] flex items-center justify-center lg:gap-[10px]'>
                                    <div className='h-[52px] w-[57px] bg-[#1FA886] rounded-[8px] flex justify-center items-center'>
                                        <PdfDocIcon />
                                    </div>
                                    <span className='w-[56px] leading-[20px] text-[16px] font-semibold text-[#188268]'>doc.pdf</span>
                                </div>
                                <div className='w-[42px] h-[41px] flex items-center justify-center' >
                                    <IoMdClose size={20} color='#7F8394' onClick={() => { setSelectDoc(false) }} />
                                </div>
                            </div>) : (<div className='flex justify-between   items-center w-full'>
                                <p className='font-semibold text-[16px] leading-[20px]'>Do you have a document?</p>
                                <button onClick={() => { setSelectDoc(true) }} type='button' className='border-2 flex items-center gap-2 rounded-[24px] py-3 pl-3 pr-[21px]'><ClipIcon />Attach document</button>

                            </div>)
                    }

                    <div className="flex flex-col w-full  gap-[10px]">
                        <p className="text-base text-green-800"> This project is for? </p>

                        <div className="flex flex-row  w-full gap-[10px] justify-between">
                            {
                                ProjectFor.map((item, index) => (
                                    <div onClick={() => setProjectFor(item.title)} className={`border-2 ${item.title == projectFor ? "bg-[#188268]" : ""} flex flex-row items-center justify-center cursor-pointer py-3 px-[21px] rounded-3xl w-full`} key={index} >
                                        <p className={`${item.title == projectFor ? "text-white" : ""}`}>{item.title}</p>

                                        <div className={` ${item.title == projectFor ? "" : "hidden"} `}>
                                            <CheckedIcon />
                                        </div>
                                    </div>
                                ))
                            }

                        </div>



                    </div>

                </div>


                <div className="flex  justify-between w-full  items-center">
                    <button className='border-2 py-3 px-[21px] rounded-3xl' onClick={() => prevClicked()} >Back</button>
                    <Button type="submit" className="bg-[#188268] py-2 px-8 rounded-[32px] text-white">Next</Button>

                </div>

            </form>






            <div className=" justify-center lg:justify-end md:justify-end w-full items-center  flex">
                <div className="items-center justify-center  lg:py-0 py-4  flex flex-row">

                    <p>Not sure about what to do?</p>
                    <a href="mailto:support@bromuno.com" className="font-bold text-green-900 ml-2">
                        Get help
                    </a>
                </div>
            </div>
        </div>

    )
}
