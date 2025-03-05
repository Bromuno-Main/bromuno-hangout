"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {


    return (
        <>
            <div className="size-6 ">
                <Link href="/" className="">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="relative"
                    />
                </Link>
            </div>



        </>
    );
};

export default Logo;