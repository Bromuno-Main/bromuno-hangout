"use client";
import { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

// @ts-ignore
export default function DiscoverMoreModal(x: Props) {
  const [selected, setSelected] = useState<string>("services");

  const tabs = [
    { name: 'Our Services', path: 'services' },
    { name: 'Payment', path: 'payment' },
    { name: 'Communication', path: 'communication' },
  ];

  const toggleTab = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    if (x.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [x.isOpen]);

  return (
    <section className={`${x.isOpen ? '' : 'hidden'} fixed top-0 bottom-0 left-0 right-0 z-50 bg-transparent h-full w-full flex flex-col`}>
      <div className="h-14 flex flex-row items-center w-full justify-end">
        <FaWindowClose onClick={x.onClose} color="#188268" className="cursor-pointer" size={35} />
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="flex flex-row gap-2">
          {tabs.map((tab, index) => (
            <div onClick={() => toggleTab(tab.path)} key={index} className="flex flex-col h-fit w-fit cursor-pointer">
              <div>{tab.name}</div>
              <div className={`h-2 w-full ${selected === tab.path ? 'bg-gray-300' : 'bg-transparent'}`} />
            </div>
          ))}
        </div>
        <div className="h-20 border-b border-gray-300" />
        <div className="flex-1 overflow-y-auto p-4 transition-opacity duration-500">
          {selected === 'services' && (
            <div className="transition-opacity duration-500 ease-in-out">
              <div className="flex flex-row">
                <div className="flex-1 flex flex-col">
                  <p className="text-red-400 text-base font-bold">Optimized Product Design</p>
                  <p className="w-96 text-neutral-800 text-3xl font-medium">Product design services from start to product launch</p>
                  <p className="w-96 text-neutral-700 text-base font-normal leading-snug">
                    We are committed to helping our clients design and build amazing products from start to finish. We are able to achieve this by making use of proper product design methodology and workflows that guarantee success.
                  </p>
                  <p className="text-center text-teal-700 text-base font-medium">Project Planning Process</p>
                  <p className="w-96">
                    <span className="text-neutral-700 text-base font-normal leading-snug">
                      This is where our service begins. Where we take our client through planning the project. This includes going through all information already provided with us and identify what is missing. From there we create a timeline that includes user/market research to know how viable the product could be, design, development(coding)
                    </span>
                    <span className="text-red-400 text-base font-normal leading-snug">the different stages of testing</span>
                    <span className="text-neutral-700 text-base font-normal leading-snug">
                      and launch. We also establish the technologies.
                    </span>
                  </p>
                  <p className="text-center text-teal-700 text-base font-medium">The Design Process</p>
                  <p className="w-96 text-neutral-700 text-base font-normal leading-snug">
                    The design stage starts with user research, and a lot of User experience analysis to determine the most formidable design approach for the product. It then continues to the UI design/graphics stage and ends in the prototyping stage. At the end of the design process
                  </p>
                  <p className="text-center text-teal-700 text-base font-medium">Development Process</p>
                  <p className="w-96 text-neutral-700 text-base font-normal leading-snug">
                    Using industry standard product building practices we build the product using the design and prototype we created. Part of the industry standard practice.
                  </p>
                </div>
                <div>
                  <div className="px-5 py-7 bg-teal-700 rounded-2xl shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-white text-3xl font-medium">How to get started</div>
                    <div className="w-96 grow shrink basis-0 px-4 py-3.5 rounded-lg border-2 border-lime-200 flex-col justify-start items-start gap-2.5 flex">
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div className="text-white text-base font-bold">Fill project form</div>
                        <div className="px-2.5 py-0.5 bg-lime-200 rounded-2xl justify-start items-center gap-2.5 flex">
                          <div className="text-neutral-800 text-xs font-medium">here</div>
                        </div>
                      </div>
                      <div className="text-white text-base font-medium">a. Select the platform and industry of your product</div>
                      <div className="self-stretch text-white text-base font-medium">b. Provide a few more details. You can upload a document if you have one.</div>
                      <div className="text-white text-base font-medium">C. We will reach out to you with feedback and cost.</div>
                      <div className="self-stretch text-white text-base font-medium">d. On accepting and receiving your payment we will assign a project manager to your project</div>
                    </div>
                    <div className="self-stretch h-14 px-6 py-2 bg-lime-200 rounded justify-center items-center gap-6 inline-flex">
                      <div className="text-center text-teal-700 text-2xl font-semibold">Begin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selected === 'payment' && (
            <div className="transition-opacity duration-500 ease-in-out">
              <p>Payment Content</p>
              <p>Details about payment process, methods, etc.</p>
            </div>
          )}
          {selected === 'communication' && (
            <div className="transition-opacity duration-500 ease-in-out">
              <p>Communication Content</p>
              <p>Details about communication channels, methods, etc.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
