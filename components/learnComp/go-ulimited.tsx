import Image from "next/image";
import React from "react";

interface UnlimitedBannerProps {
  className?: string;
}

export const UnlimitedBanner: React.FC<UnlimitedBannerProps> = ({ className }) => {
  return (
    <div
      className={`flex bg-base-green rounded-2xl flex-col gap-2 p-6 text-white [&>p]:capitalize [&>p]:text-lg [&>p]:text-yellow-200 [&>p]:font-medium ${className}`}
    >
      <span className="flex items-center text-2xl font-bold display gap-3">
        <Image src={"/loop.svg"} width={90} height={100} alt="loop" />{" "}
        Go Unlimited!{" "}
      </span>
      <p>Become someone new in 90 Days</p>
    </div>
  );
};

