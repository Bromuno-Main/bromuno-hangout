// // 6
// "use client"
// import { whyUsConfig } from '@/config/why-us'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';

// function MoreReads() {
//   return (
//     <section id='more-reads' className='md:w-[90vw]   lg:px-24 px-5 py-36 m-auto'>
//       <h2 className="black  font-medium mb-10">More Reads </h2>
//       <div className='flex lg:flex-row gap-5 flex-col '>
//         {(
//           whyUsConfig.moreReadItems.map((data, index) => (
//             <MoreReadsItem key={index} data={data} />
//           )
//           ))}
//       </div>
//       <div className='py-40'>
//         <h2 className='text-center black font-medium mb-5'> A word from our happy clients</h2>
//         < AdsSwiper /></div>


//     </section>
//   )
// }

// export default MoreReads


// interface data {
//   data: {
//     title: String,
//     subtitle: String
//   }
// }

// function MoreReadsItem({ data }: data) {
//   return (
//     <div>
//       <div className="w-full lg:max-h-[200px] p-[15px] bg-white rounded-[15px] max-w-[500px]  border border-white justify-start items-start gap-4 inline-flex h-fit  ">
//         <div className="w-[91px] h-[95px] bg-indigo-500 rounded-[10px]"></div>
//         <div className=" py-2.5 flex-col justify-start items-start gap-2 flex    ">
//           <div className=" text-neutral-800 text-[28px] font-semibold">{data.title}</div>
//           <div className=" text-neutral-800 text-base font-medium ">{data.subtitle}</div>
//         </div>
//       </div>
//     </div>
//   )
// }


// function AdsSwiper() {
//   return (
//     <div>
//       <Swiper className='w-full' modules={[Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: true,
//           pauseOnMouseEnter: true,

//         }}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {[1, 2, 3].map((i, el) => {
//           return <SwiperSlide key={el} >
//             <div className='w-full flex flex-row items-center justify-center'>
//               <div className="w-[729px] h-[349px] py-[49px] rounded-[15px] flex-col justify-start items-center gap-[30px] inline-flex">
//                 <div className="text-red-400 text-2xl font-medium font-['Inter']">Omonie investment and games.</div>
//                 <div className="self-stretch h-[173px] text-center text-neutral-800 text-[26px] font-normal font-['Inter']"> Bromuno’s team is really great. They are very easy to work with. It was as if they understood our product well more than us. We were able to build and launch our product successfully and in a short amount of time, thanks to the hard work and brilliance at Bromuno.</div>
//                 <div className="justify-center items-center gap-[30px] inline-flex"> </div>
//               </div>
//             </div>

//           </SwiperSlide>;
//         })}
//       </Swiper>

//     </div>
//   )
// }