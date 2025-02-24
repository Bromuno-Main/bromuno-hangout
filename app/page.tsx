import About from "../components/about/about";
import { AutoScrollContent } from "../components/AutoScrollContent";
import DesignShip from "../components/DesignShip";
import Hero from "../components/hero/hero";
import Reads from "../components/important/Reads";
import OurWorks from "../components/our-work/our-works";
import PlayGround from "../components/play ground/playGround";
import WhatWeCreate from "../components/what-we-create/WhatWeCreate";
import WhatWeDo from "../components/what-we-do/what-we-do";
import Testimony from "../components/why-us/testimonial";
import WhyUs from "../components/why-us/why-us";

export default function Home() {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Hero />
        <WhatWeCreate/>
        <PlayGround/>
        <About /> 
        {/* <AutoScrollContent /> */}
        {/* <WhatWeDo /> */}
        <WhyUs />
        <Testimony/>
        <Reads/>
        <DesignShip />
      </div>
    </>
  );
}
