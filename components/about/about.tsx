"use client";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useModal from "../../hooks/useModal";
import GetStarted from "../../modals/GetStarted";
import Image from "next/image";
import Content from "../what-we-do/MoreInfo";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const handleOpen = () => {
    openModal();
  };

  const handleWorkOpen = () => {
    router.push("/learn-more");
  };

  return (
    <section
      className="flex fade-in flex-col max-w-[1512px] lg:mt-40 mt-20 lg:min-h-screen  text-center items-center justify-center mx-auto section-margin w-full   lg:px-[80px] "
      id="about"
    >
      <div className="flex relative my-5 items-center  max-w-screen-md gap-4 duration-250   py-4">
        <Image src="/man-4.png" alt="Hi" className="lg:h-[14rem] w-[100px] lg:w-full object-fit" width={500} height={300} />
        <Image src="/man-2.png" alt="Hi" className="lg:h-[16rem] w-[100px] lg:w-full object-fit" width={500} height={300} />
        <Image src="/man-3.png" alt="Hi" className="lg:h-[14rem] w-[100px] lg:w-full object-fit" width={500} height={300} />
        <Image src="/notification.svg" alt="Hi" className=" bottom-9 -left-3 lg:w-[50px] w-[30px] absolute object-cover" width={30} height={30} />
        <Image src="/kitle.svg" alt="Hi" className=" top-14 -right-4 absolute lg:w-[80px] w-[40px] object-cover" width={30} height={30} />
        <Image src="/bulb.svg" alt="Hi" className=" top-0 rotate-12 right-36 absolute lg:w-[70px] w-[30px] object-cover" width={30} height={30} />
        <Image src="/cup.svg" alt="Hi" className=" bottom-6 right-40 absolute lg:w-[50px] w-[30px] object-cover" width={50} height={80} />
      </div>
      <div className="flex flex-col mt-5 mb-10 gap-4 items-center justify-center max-w-screen-lg">
        <p className="font-bold text-[16px] leading-[20px] ">
          We are creators
        </p>
        <h2 className="!font-bold  lg:!text-[56px] text-center !text-[32px] display !leading-[32px] lg:!leading-[56px] ">
        At Bromuno, we harness top talent and smart strategies to deliver exceptional results in the following:
        </h2>
      </div>
      <Content/>
      <Link href={"/learn-more"} className="mx-auto  my-10 text-[18px] leading-[22px]  items-center gap-1 flex font-bold ">
        learn more about out services
      </Link>
      <GetStarted isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </section>
  );
};

export default About;
