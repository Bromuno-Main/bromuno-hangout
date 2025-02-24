"use client";
import { useRouter } from "next/navigation";
import useModal from "../hooks/useModal";
import Modal from "../modals/modal";
import {useRef, useEffect, useState} from "react";
import gsap from "gsap";

export default function DesignShip() {
  const router = useRouter();
  const { isOpen: me, openModal, closeModal } = useModal();

  const handleWorkOpen = () => {
    router.push("/learn-more");
  };

  const designRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the element is in view
    );

    if (designRef.current) {
      observer.observe(designRef.current);
    }

    return () => {
      if (designRef.current) {
        observer.unobserve(designRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline()
          tl.fromTo(
            '.design',{opacity:0, x:500}, { opacity: 1, x:0, duration:0.5, stagger:0.1, ease:'power2.in' }
          )
          .fromTo( '.body',{opacity:0}, { opacity: 1, duration:5, });
    }
  }, [isInView]);

  return (
    <>
      <Modal isOpen={me} onClose={closeModal} />

      <section ref={designRef} className="mt-[50px]  relative h-[365px] max-w-[1512px] mx-auto flex items-center justify-center">
        {/* Background Containers */}
        <div className="w-full h-full absolute top-0 rounded-3xl flex">
          <div  className="w-full lg:h-[366px] h-full flex">
            {/* Background Rows */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`design grow shrink basis-0 opacity-0 self-stretch bg-[#FEB344] rounded-[42px] ${index >= 4 ? "max-sm:hidden" : ""
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute body opacity-0 top-0 lg:px-[100px] w-full h-full flex flex-col gap-[20px]  items-center  justify-center">
          <div className=" text-center lg:text-left">
            <div className="w-full h-full flex flex-col gap-4 items-center  justify-center" >
               <p className="text-black big-shoulder text-[32px] leading-[33px] px-2 lg:px-0 lg:text-[64px] lg:w-[722px] lg:leading-[77px] text-center font-bold  ">Let’s help you Design and ship fire products 🚀</p> 
            </div>
          </div>

          <div className="h-fit flex gap-[26px] mt-4 lg:mt-0">
            <Button onClick={openModal} color="white" textColor="#221f1f">
              Get Started
            </Button>
            {/* <Button onClick={handleWorkOpen} color="transparent" textColor="white" border="#c0eaa6">
              Learn more
            </Button> */}
          </div>
        </div>
      </section>
    </>
  );
}

interface ButtonProps {
  onClick: () => void;
  color: string;
  textColor: string;
  border?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, color, textColor, border = "none", children }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`p-4 ${border !== "none" ? `border ${border}` : ""} bg-${color} rounded-lg justify-center items-center flex`}
  >
    <p className={`text-center text-${textColor} text-lg font-bold`}>{children}</p>
  </button>
);
