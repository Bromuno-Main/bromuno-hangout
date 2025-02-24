// import React from "react";
// import Image from "next/image";
// import { Link } from "lucide-react";
// import "./styles.css";

// interface item {
//     id: number,
//     title: string,
//     link: string,
//     head: string,
//     body: string,
//     image: string
// }

// const Content: React.FC = () => {
//     const MoreInfo: item[] = [
//         {
//             id: 1,
//             title: "Design, Strategy, Business and Code",
//             body: "We have a long experience in visual design and business management. This enables us to build teams targeted to create and ship digital products that are usable and maximize profit for our clients.",
//             image: '/omo.jpg',
//             head: "What we do",
//             link: ''
//         },
//         {
//             id: 2,
//             title: "Design, Strategy, Business and Code",
//             body: "We have a long experience in visual design and business management. This enables us to build teams targeted to create and ship digital products that are usable and maximize profit for our clients.",
//             image: '/omo.jpg',
//             head: "How we work",
//             link: ''
//         },
//         {
//             id: 3,
//             title: "Design, Strategy, Business and Code",
//             body: "We have a long experience in visual design and business management. This enables us to build teams targeted to create and ship digital products that are usable and maximize profit for our clients.",
//             image: '/grv.jpg',
//             head: "Whate we deliver",
//             link: ''
//         },
//     ];

//     return (
//         <div>  <ul className="flex justify-between gap-10 max-w-screen-2xl w-full item-center m-auto lg:px-10 pl-5 pb-10 md:flex-row flex-col">
//             {MoreInfo.map((item) => (
//                 <li key={item.id} >
//                     <div  className="image-container flex flex-col gap-8 py-8 max-w-sm">
//                         <h5 className="font-medium text-[#188268] ">{item.head}</h5>
//                         <div className="h-[120px] w-[130px] overflow-hidden rounded-lg">
//                             <Image src={item.image} alt={item.head} width={300} height={300} className="image object-cover " ></Image></div>
//                         <h4>{item.title}</h4>
//                         <p>{item.body}</p>
//                     </div>


//                 </li>
//             ))}
//         </ul>
//         </div>
//     )
// }

// export default Content;