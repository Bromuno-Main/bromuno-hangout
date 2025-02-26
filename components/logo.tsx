"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {


    return (
        <>
            <div className="flex flex-row justify-center items-center gap-2 w-full h-[68px] ">
                <Link href="/" className="">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={25}
                        height={32}
                        className="relative"
                    />
                </Link>
            </div>



        </>
    );
};

export default Logo;