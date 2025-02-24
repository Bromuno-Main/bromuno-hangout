"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const WhyUs = () => {
  // Separate animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Image and section content data
  const sections = [
    {
      image: '/green-bg.png',
      title: 'We are Sincere',
      body: 'We wont waste your time. We proritize delivery over initiation. Hence if your work is something we cannot handle for any good reason, we wont take it at all.',
    },
    {
      image: '/red-bg.png',
      title: 'We are product owners',
      body: 'Unlike a lot of other product design firms, we design, code and manage our own products which is great indicator that we understand the dynamics of business so you can trust us with yours.',
    },
    {
      image: '/yellow-bg.png',
      title: 'We are Wholistic',
      body: 'Our production  line covers all the stages of product building. We will stay with you from design to lunch phase. This means at no point will we hand you off to another company unless decide on at initiation.',
    },
  ];

  // State to keep track of the current section
  const [currentSection, setCurrentSection] = useState(0);

  // Intersection observers for scroll sections
  const [ref1, inView1] = useInView({ threshold: 0.6 });
  const [ref2, inView2] = useInView({ threshold: 0.8 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });

    useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [inView1, inView2, inView3, controls1, controls2, controls3]);
  // Effect to update current section based on inView status
  useEffect(() => {
    if (inView1) setCurrentSection(0);
    if (inView2) setCurrentSection(1);
    if (inView3) setCurrentSection(2);
  }, [inView1, inView2, inView3]);

  const variants = {
    visible: {
      opacity: 1,
      x: 0, y:0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hidden: {
      opacity: 0,
      x: 10, y:30, // Optional: Add a slight movement for a smoother transition
      transition: { duration: 0.1, ease: 'easeIn' },
    },
  };

 

  return (
    <section className=" relative  min-h-screen max-w-[1512px] mx-auto  py-40  px-10 w-full lg:flex lg:gap-[5rem] ">
      {/* Sticky Image */}
      <div className="lg:sticky top-4 h-screen  lg:w-1/2 max-w-screen-sm max-sm:max-h-60 flex items-center  py-10">
        <div className=' lg:rounded-[5rem] rounded-[32px] overflow-hidden max-sm:w-screen h-[400px] lg:h-full  lg:max-h-[70vh]'>
          <motion.img
            key={sections[currentSection].image}
            src={sections[currentSection].image}
            alt="Active Image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn', }}
          />
        </div>
      </div>

      {/* Sections with synchronized fade-in and fade-out effect */}
      <div className="scroll-sections my-40 lg:py-40  ">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn', }}
        className=' flex flex-col gap-[5px] lg:justify-end z-10 lg:min-h-[50vh] bg-gradient-to from-[#F9F9F9] from-80%  bg-gradient-to-b  to-white/0 lg:sticky top-0 lg:py-12  '> 
          <h4 className='font-bold lg:text-[18px] lg:leading-[20px]'> Why us?</h4>
          <h2 className=' display lg:!text-[72px] lg:!leading-[72px] !text-[54px] font-bold  !leading-[54px]'>We are a partner you can trust</h2>
        </motion.div>
        <motion.section
          ref={ref1}
          variants={variants}
          initial="visible"
          animate={controls1}
          className='content-change flex-col flex gap-[5px]'
        >
          <h4 className='!justify-start font-bold lg:text-[28px] lg:leading-[35px] text-[18px] leading-[22px]  '>{sections[0].title} </h4>
          <p className='font-medium lg:text-[18px] text-[16px] leading-[20px] lg:leading-[32px]'>{sections[0].body}</p>
        </motion.section>
        <motion.section
          ref={ref2}
          variants={variants}
          initial="hidden"
          animate={controls2}
          className='content-change flex-col flex gap-[5px]'

        >
          <h4 className='!justify-start lg:text-[28px] lg:leading-[35px] text-[18px] leading-[22px] font-bold ' >{sections[1].title}</h4>
          <p className='font-medium lg:text-[18px] text-[16px] leading-[20px] lg:leading-[32px]'>{sections[1].body}</p>
        </motion.section>
        <motion.section
            ref={ref3}
            variants={variants}
            initial="hidden"
            animate={controls3}
          className='content-change !justify-end pb-[9rem] flex-col flex gap-[5px]'

        >
          <h4 className='!justify-start font-bold lg:text-[28px] lg:leading-[35px] text-[18px] leading-[22px]'>{sections[2].title}</h4>
          <p className='font-medium text-[16px] lg:text-[18px] leading-[20px] lg:leading-[32px]'>{sections[2].body}</p>
        </motion.section>
      </div>
    </section>
  );
};

export default WhyUs;
