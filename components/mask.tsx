
import Image from "next/image";

const Mask = () => {
  return (
    <div className=" cursor-pointer relative masked-div flex w-full h-full outline  ">
      
      <Image src={"/mockup.jpg"} alt={"project"} width={900} height={1800} className=" w-full !object-cover " />
      

      {/* <svg width="0" height="0">
        <defs>
          <mask id="custom-mask" maskUnits="objectBoundingBox">
            <div> <Image src={"/mockup.jpg"} alt={"project"} width={2000} height={1800} /> </div>
            <path d="M0 59.7056C0 13.7547 7.88067 0 53.8316 0H658.984C704.935 0 742.186 37.2506 742.186 83.2016V127.054C742.186 143.625 737.731 159.892 729.289 174.151L681.63 254.65C676.325 263.611 676.486 274.789 682.049 283.593L727.893 356.152C737.23 370.93 742.186 388.051 742.186 405.531V455.297C742.186 501.248 704.935 538.499 658.984 538.499H53.8317C7.8807 538.499 0 524.744 0 478.793V59.7056Z" fill="white" />
          </mask>
        </defs>
      </svg> */}

    </div>
  );
};

export default Mask;