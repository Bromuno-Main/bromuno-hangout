import { image, Link } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
// import "./styles.css";

interface item {
  id: number;
  title: string;
  link: string;
  head: string;
  body: string;
  image: string;
}

const Content: React.FC = () => {

  const boxRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
            ".box",{opacity:0}, { opacity: 1, duration:1, stagger:0.5, ease:'power2.in' }
          );
    }
  }, [isInView]);
  

  const MoreInfo: item[] = [
    {
      id: 1,
      title: "Design & prototyping",
      body: "We help clients ship functional and scalable digital products efficiently and pocket friendly.",
      image: "/creator1.svg",
      head: "What we do",
      link: "",
    },
    {
      id: 2,
      title: "Business & Strategy",
      body: "We help businesses come up with the best approach in fusing tech into there system.",
      image: "/creator1.svg",
      head: "How we work",
      link: "",
    },
    {
      id: 3,
      title: "Coding & Deployment",
      body: "Using best & up to date software practices we turn concepts into ready to go digital products.",
      image: "/creator1.svg",
      head: "What we deliver",
      link: "",
    },
    {
      id: 4,
      title: "Graphics & Branding",
      body: "We help businesses come up with the best approach in fusing tech into there system.",
      image: "/creator1.svg",
      head: "What we deliver",
      link: "",
    },
    {
      id: 5,
      title: "Product Research & Analysis",
      body: "We help businesses come up with the best approach in fusing tech into there system.",
      image: "/creator1.svg",
      head: "What we deliver",
      link: "",
    },
    {
      id: 6,
      title: "Team Building",
      body: "We help businesses come up with the best approach in fusing tech into there system.",
      image: "/creator1.svg",
      head: "What we deliver",
      link: "",
    },
  ];

  return (
    <ul ref={boxRef}  className="grid lg:grid-cols-2 grid-cols-1 justify-center  items-center  lg:gap-y-12  flex-col">
      {MoreInfo.map((item,index) => (
        <div key={index}  className="flex items-start justify-center w-full h-full opacity-0 lg:gap-[36px] gap-4 box p-4 lg:pt-[27px] lg:px-[29px] lg:pb-[32px] border-b-1 border-[#E1E1E1]  ">
          <div className="lg:rounded-[29px] rounded-[16px] overflow-hidden lg:w-[99px] w-[67px] h-[64px]  lg:h-[95px] flex items">
            <Image src={item.image} alt="Hi" className=" w-full h-full object-cover " width={50} height={50} />
          </div>
          <li
            className="w-full gap-[5px] flex flex-col lg:w-[386px]  justify-center "
            key={item.id}
          >
          
            <h4 className="w-full pb-0 text-left  text-[24px] big-shoulder font-bold lg:text-[36px] lg:leading-[43px] leading-[28px] ">
              {item.title}
            </h4>
            <p className="w-full text-left text-[16px] font-medium lg:text-[18px] lg:leading-[22px]   leading-[20px]">
              {item.body}
            </p>
     
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Content;
