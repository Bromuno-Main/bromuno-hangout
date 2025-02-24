"use client";
import { Image, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import useModal from "../../hooks/useModal";
import GetStarted from "../../modals/GetStarted";
import Modal from "../../modals/modal";
import { easeIn } from "framer-motion/dom";
import RiveAnimation from "../rive/Rive";
import "./styles.css";

function Hero() {
  const { isOpen: me, openModal, closeModal } = useModal();

  return (
    <>
      <Modal isOpen={me} onClose={closeModal} />
      <section
        id="hero"
        className="w-full  mx-auto  hero z-10 flex justify-center items-center lg:h-[90vh] h-fit min-h-screen px-5 lg:px-28 relative overflow-hidden"
      >


        <div className="w-full  h-fit  flex flex-col gap-20 z-20 max-w-screen-2xl items-center justify-center ">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 0, }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ duration: 0.8, ease: easeIn }}
          >
            <div className="flex lg:flex-row w-full   items-center  justify-center gap-[24px] text-black relative flex-col py-14">
              <RiveAnimation />
              <div className="flex-col  flex  gap-[24px] lg:w-[454px] xl:max-w-screen-sm ">
                <p className="font-medium lg:font-bold text-[18px] leading-[22px]">Welcome to the bromuno workshop!</p>
                <span className="text-black display font-bold xl:!leading-[4.4rem] xl:!text-[59px]  !text-[41px] !leading-[50px]"
                >We create the best
                  <div className="relative lg:inline-block hidden">
                    <Image src={"/vectorStroke.svg"} height={100} width={400} alt="stroke" className={"z-5  lg:block hidden"} /> <div className="absolute inline-block z-10 top-0 left-2" >digital experiences</div>
                  </div>
                  <div className="relative inline-block lg:hidden">
                    <Image src={"/vectorStroke.svg"} height={100} width={270} alt="stroke" className={"z-5  block lg:hidden"} /> <div className="absolute inline-block z-10 top-0  p-0 font-bold text-black left-2 display !text-[41px] !leading-[50px]" >digitalexperiences</div>
                  </div> for businesses and systems.</span>


                <div className="flex flex-col xl:flex-row lg:flex-col justify-between items-center gap-[24px]">
                  <button
                    onClick={openModal}
                    className=" bg-[#FFD553] text-[18px] font-bold xl:w-[176px] w-full h-[49px] rounded-full"
                  >
                    Get Started
                  </button>
                  <span className="font-500 text-[18px] leading-[22px]" >Get 50% descount on your first project 🤫 </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
