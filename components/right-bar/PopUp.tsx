'use client';

import { SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Headers } from '../../data';

interface PopUpProps {
  popUp: boolean;
  setPopUp: React.Dispatch<SetStateAction<boolean>>;
}

export const PopUp = ({ popUp, setPopUp }: PopUpProps) => {
  const pathname = usePathname();
  return (
    <>
      {popUp && (
        <div className="grid grid-cols-2 fixed bg-white left-0 bottom-0 z-50 h-[60vh]  w-full py-[21px]">
          {Headers.map(({ label, route, image }, index) => {
            const isActive = pathname === route;
            return (
              <Link
                key={index}
                href={route}
                onClick={() => setPopUp(false)}
                className={`h-[55px] relative px-6 items-center group hover:text-black hover:bg-black/5 justify-center rounded-md w-full flex `}
              >
                <div
                  className={` transition-width delay-200 ease-linear duration-500 flex relative gap-3`}
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-3 ${
                      !isActive ? "saturate-0 " : " !text-[#F26869]"
                    }`}
                  >
                    <div className={`w-[18px] h-[20px]`}>
                      <Image src={image} alt="" width={20} height={20} />
                    </div>
                    <p
                      className={`duration-300 delay-200 ease-linear font-bold  text-neutral-400  text-[18px] leading-[22px] ${
                        !isActive ? " " : " !text-[#F26869] "
                      }`}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
