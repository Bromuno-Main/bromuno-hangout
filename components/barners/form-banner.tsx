import './style.css'
const FormBanner = ({ title, desc, testimonial, client, link }: any) => {

    return (
        <div className="bg-[url('/backdrop1.png')] w-full flex justify-center items-center overflow-hidden bg-no-repeat bg-cover   rounded-3xl text-white  h-full ">
            <div className="  w-full  max-sm:flex-col flex-col flex gap-6 lg:py-10 bg-green-700 bg-opacity-50  px-8 lg:px-14 max-w-screen-2xl  justify-center items-center  h-full ">
                <div className='flex flex-col justify-center items-center gap-4  font-medium pt-4'>
                    <h4>{title}</h4>
                    {/* <p>{desc}</p> */}
                </div>
                {/* <div className='flex flex-col gap-4  font-medium '>
                <p>{testimonial}</p>
                    <p className='text-lime-400 mb-6 '> {client} </p>
                    <a href={link} className='text-base '> See Examples </a>
                </div> */}

            </div>
        </div>)
}

export default FormBanner;