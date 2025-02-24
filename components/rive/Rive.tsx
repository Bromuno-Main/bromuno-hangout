"use client"
// import Rive from "@rive-app/react-canvas";


// export default function RiveAnimation() {
    
//     return (
//         <div className="h-full w-full relative ">
//             <Rive
//             className="w-full border-5 p-0 h-full absolute top-[20]"
//                 src="bromuno.riv"
//                 stateMachines={"Full Animation"}
//             />
//         </div>
//     );
//   }
import { useRive } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: "bromuno.riv",
    stateMachines: "Full Animation",
    autoplay: true,
    
    
    
  });

  return (
    <div className="max-sm:w-full w-[35vw] h-[65vh] relative max-sm:flex items-center justify-center ">
      <RiveComponent className=" w-full h-full max-sm:min-w-[130vw] mx-auto  " />
    </div>
  );
}




