// 7
import Image from 'next/image'
import Link from 'next/link'
import InstagramLogo from '../footerLogo/InstagramLogo'
import LinkedinLogo from '../footerLogo/LinkedinLogo'
import XLogo from '../footerLogo/XLogo'
import Logo from '../logo'
import WhatsAppLogo from '../footerLogo/WhatsAppLogo'
import FacebookLogo from '../footerLogo/FacebookLogo'

function footer() {
  return (
    <section className='max-w-[1512px] mx-auto flex flex-col items-center gap-8 justify-center h-fit w-full py-7 lg:py-14 px-5 lg:px-10  '>

      <div className='flex flex-col lg:p-20 md:p-10 md:shadow-sm md:border md:rounded-[64px] lg:flex-row lg:gap-20 gap-5 lg:justify-between md:items-start w-full lg:items-center'>
        <div className='flex w-full max-w-[633px] lg:gap-20 gap-5 flex-col'>
          {/* logo */}
          <div><Logo/></div>
          <div className='lg:flex justify-between grid grid-cols-2 xl:gap-[57px] lg:gap-5 gap-4 w-full'>
            {/* getting started */}
            <div className='flex flex-col gap-[17px]'>
              <h4 className='text-[18px] leading-[22px] text-nowrap text-[#188268]'>Getting started</h4>
              <div className='flex-col flex gap-[9px]'>
              <p className='text-[18px] leading-[22px]'>Product design guide</p>
              <p className='text-[18px] leading-[22px]'>Services</p>
              <p className='text-[18px] leading-[22px]'>Pricing</p>
              </div>
            </div>
            {/* legal */}
            <div className='flex flex-col gap-[17px]'>
              <h4 className='text-[18px] leading-[22px] text-[#188268]'>Legal</h4>
              <p className='text-nowrap text-[18px] leading-[22px]'>Terms of service</p>
            </div>
            {/* socials */}
            <div className='flex-col flex gap-[17px]'>
              <h4 className='text-[18px] leading-[22px] text-[#188268] text-nowrap'>Social media</h4>
              <div className='flex gap-2'>
              <Link href=""><WhatsAppLogo /></Link>
              <Link href=""><LinkedinLogo /></Link>
              <Link href=""><InstagramLogo /></Link>
              <Link href=""><XLogo /></Link>
              <Link href=""><FacebookLogo /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* banner */}
        <div className='max-w-[415px] flex-col flex gap-2 w-full'>
          <div className='w-full h-[190px] rounded-[43px] overflow-hidden'><Image src={'/footer1.svg'} width={100} height={100} alt='' className='w-full h-full object-cover'/></div>
          {/* join us */}
          <div className='flex-col flex gap-[6px]'>
            <h4 className=' text-[#188268] text-[18px] leading-[22px]'>Join us!</h4>
            <p className='text-[18px] leading-[22px]'>Entry level positions are available.</p>
            <p className='text-[18px] leading-[22px] text-[#188268]'>Learn more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default footer
