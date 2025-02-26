// 7
import Image from 'next/image'
import Link from 'next/link'
import InstagramLogo from '../footerLogo/InstagramLogo'
import LinkedinLogo from '../footerLogo/LinkedinLogo'
import XLogo from '../footerLogo/XLogo'
import Logo from '../logo'
import WhatsAppLogo from '../footerLogo/WhatsAppLogo'
import FacebookLogo from '../footerLogo/FacebookLogo'

function RightBar() {
  return (
    <section className='sticky min-w-[90px] max-w-[90px]  h-screen flex flex-col top-0 bottom-0 right-0'>
      <div className='flex flex-col items-center justify-between w-full h-full lg:pt-[22px] lg:pb-[16px] lg:px-[15px]'>
        <div className=' w-full flex flex-col items-center justify-center gap-4'>
          <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center '>
            <Image src={"/profile.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[52px] lg:h-[52px]'/>
          </div>
          <div className='lg:w-[60px] lg:h-[64px] justify-items-center content-center'>
            <Image src={"/Ai.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[34px] lg:h-[34px]'/>
          </div>
          <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
            <Image src={"Ai.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[34px] lg:h-[34px]'/>
          </div>
          <div className='lg:w-[64px] lg:h-[64px] justify-items-center content-center'>
            <Image src={"/addIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]'/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/tabler.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[30px] lg:h-[30px]'/>
          </div>
          <div className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/calender.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[16px] lg:h-[18px]'/>
          </div>
          <div className='lg:w-[80px] lg:h-[64px] justify-items-center content-center'>
           <Image src={"/file.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[18px] lg:h-[18px]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RightBar
