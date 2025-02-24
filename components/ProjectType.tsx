import Image from 'next/image';
import { offers } from '../data';
import { useFormContext } from "../lib/hooks";
// import { Big_Shoulders_Display } from 'next/font/google';

// const bigShoulder_init = Big_Shoulders_Display({
//     subsets: ["latin"],
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//     variable: "--big-shoulder-display",
//   });


export default function ProjectType() {
    const {
        offer,
        setOffer,
        nextClicked,
    } = useFormContext();

    return (
        <div className="w-full flex flex-col items-center gap-10 justify-center lg:h-fit  lg:py-5 ">
            <div className="flex w-full  flex-col h-full  gap-10  rounded-lg  px-5 lg:px-20 py-5   justify-center items-center">
                <div className='lg:h-[102px] flex flex-col lg:gap-[12px]' >
                    <h2 className={`big-shoulder uppercase lg:text-[48px] text-[40px] leading-[40px] lg:leading-[48px] text-black text-center`}>What can we do for you?</h2>
                    <p className='text-[16px] lg:text-[18px] text-center'>Select the kind of product you want to build</p>
                </div>

                <div className=" lg:flex-row flex flex-col  w-full  gap-[27px] cursor-pointer">
                    {offers.map((value, index) => {
                        const active = value.title === offer?.title;

                        return (
                            <div
                                onClick={() => {
                                    if (active) {

                                        setOffer(undefined)
                                    } else {

                                        setOffer(value)
                                    }

                                }}
                                key={index}
                                // style={{ borderColor: offer.color }}
                                className={`relative   hover:border-gray-300 rounded-2xl border-2  bg-white    p-8    ${active ? "border-[#188268] border-3" : "border-black/0"} `}
                            >
                                <div className="flex lg:flex-col flex-row justify-center items-center h-full  lg:gap-1 gap-6">
                                    <div className='lg:w-[138px] w-[86px] mb-6  h-[86px] relative lg:h-[138px] overflow-hidden rounded-[600px]' ><Image src={value.image} width={100} height={100} alt='' className='w-full h-full' />
                                        <div className={` ${active ? "block absolute top-0" : "hidden"} w-full h-full overflow-hidden rounded-[600px]`} ><Image src={'/protypecheck.png'} width={100} height={100} alt='' className='w-full h-full' />
                                        </div>
                                    </div>
                                    <div className='w-[234px] flex flex-col gap-3 lg:items-center justify-center items-start' >
                                        <h4 className='text-[18px] leading-[20px] text-center'>{value.title}</h4>
                                        <p className="text-[16px] text-wrap font-normal leading-[20px] lg:text-center">{value.description}</p>
                                    </div>

                                </div>


                            </div>

                        )
                    })}



                </div>
                <div className=' w-full justify-center flex items-center py-2'>
                    <button
                        disabled={offer === undefined}
                        onClick={() => {

                            nextClicked({
                                onSelected: () => {
                                    ;
                                },
                            })
                        }
                        } className='border bg-[#188268] disabled:bg-red-600 rounded-full px-[32px] py-[8px]  text-white hover:bg-green-500 '>
                        {offer ? "Continue" : "Select an option to continue"}

                    </button>
                </div>


            </div>
            {/* <div className="bg-white justify-center  w-full items-center flex pr-2 py-2">
                <div className="items-center flex flex-row">
                    <p>Looking for more options?</p>
                    <a href="#" className="font-bold text-green-900 ml-2">
                        Click here
                    </a>
                </div>
            </div> */}
        </div>
    )
}
