"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {


    return (
        <>
            <div className="flex flex-row items-center gap-2">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={200}
                        height={32}
                        className="relative"
                    />
                </Link>

                <div className="p font-bold text-xl  mix-blend-difference   text-gray-50 ">
             
                </div>
            </div>



        </>
    );
};

export default Logo;