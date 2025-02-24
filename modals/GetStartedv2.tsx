// import React, { useEffect, useState } from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, SelectItem, Select, Textarea, Input, Selection } from "@nextui-org/react";
// import { businessSectors, Offer, offers, ProjectFor, servicesList, subscriptionList, users } from "../data";
// import FormBanner from "@/components/barners/form-banner";
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { Country } from 'country-state-city';
// import { motion } from "framer-motion";
// import { CheckedIcon, CheckIcon } from "../data/icons";
// import { Plus } from "lucide-react";
// import { useRouter } from "next/navigation";
//
//
// interface AppProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onOpen: () => void;
// }
//
//
//
// const page0Schema = yup.object().shape({
// });
//
// const page1Schema = yup.object().shape({
//   industry: yup.string().required('Industry is required'),
//   brief: yup.string().required('Brief description is required'),
// });
//
// const page2Schema = yup.object().shape({
//   businessInto: yup.string().required('Industry is required'),
//   yourWork: yup.string().required('Work is required'),
//   yourCountry: yup.string().required('Country is required'),
// });
//
// const page3Schema = yup.object().shape({
//   yourEmail: yup.string().required('Email is required'),
//   yourPhone: yup.string().required('Phone is required'),
// });
//
// const page4Schema = yup.object().shape({
// });
//
// const defaultSchema = yup.object().shape({
// });
//
//
// type FormValues = {
//   industry?: string;
//   brief?: string;
//   projectFor?: string;
//   car?: string;
//   businessInto?: string;
//   yourWork?: string;
//   yourCountry?: string;
//   yourPhone?: string;
//   yourEmail?: string;
//   your?: string;
//   // Add other fields as necessary
// };
//
// type SchemaType = yup.ObjectSchema<FormValues, yup.AnyObject, FormValues>;
//
// const returnCurrentSchema = (activeTab: number): SchemaType => {
//   switch (activeTab) {
//     case 0:
//       return page0Schema as SchemaType;
//     case 1:
//       return page1Schema as SchemaType;
//     case 2:
//       return page2Schema as SchemaType;
//     case 3:
//       return page3Schema as SchemaType;
//     case 4:
//       return page4Schema as SchemaType;
//     default:
//       return defaultSchema as SchemaType;
//   }
// };
//
// export default function GetStarted({ isOpen, onOpen, onClose }: AppProps) {
//   const [activeTab, setActiveTab] = useState<number>(0);
//   const services = [{ title: "Service Package", index: 0 }, { title: "Subscription", index: 1 }];
//   const [activeService, setActiveService] = useState<number>(0);
//   const [offer, setOffer] = useState<Offer>();
//   const [industry, setIndustry] = useState<Selection | any>(new Set([]));
//   const [country, setCountry] = useState<Selection | any>(new Set([]));
//   const [business, setBusiness] = useState<Selection | any>(new Set([]));
//   const [brief, setBrief] = useState<string>("");
//   const [work, setWork] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//
//   const [projectFor, SetProjectFor] = useState<string>("");
//   const route = useRouter();
//
//   useEffect(() => {
//     setActiveTab(0);
//     setBrief("");
//   }, [isOpen]);
//
//   const onSubmit = (data: any) => {
//     if (activeTab === 4) {
//       // onFinalSubmit(data);
//     } else {
//       nextClicked(data);
//     }
//   };
//
//
//
//
//   const onFinalSubmit = async () => {
//
//
//
//     const selectedIndustry = businessSectors.find(sector => sector.id.toString() === industry.anchorKey);
//     console.log(selectedIndustry?.sector);
//     const selectedBusiness = businessSectors.find(sector => sector.id.toString() === business.anchorKey);
//     console.log(selectedBusiness?.sector);
//     const selectedCountry = Country.getAllCountries().find(sector => sector.isoCode.toString() === country.anchorKey);
//     console.log(selectedCountry?.name);
//     // return;
//     setLoading(true);
//     try {
//       const payload = {
//         industry: selectedIndustry?.sector,
//         brief,
//         businessInto: selectedBusiness?.sector,
//         yourWork: work,
//         yourCountry: selectedCountry?.name,
//         yourPhone: phone,
//         businessType: offer?.title,
//         yourEmail: email,
//         projectFor,
//         // Add other fields as necessary
//       };
//
//       // Using fetch
//       const response = await fetch('/api/email/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
//
//       // If you prefer axios
//       /*
//       const response = await axios.post('https://your-api-endpoint.com/submit-form', payload);
//       */
//
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Form submitted successfully:', result);
//         // Handle success, maybe navigate to a success page or close the modal
//       } else {
//         console.error('Error submitting form:', response.statusText);
//         // Handle the error, show a notification or alert
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle the error, show a notification or alert
//     } finally {
//       setLoading(false);
//       setActiveTab(5);
//     }
//   };
//
//
//   const { register, handleSubmit, control, formState: { errors } } = useForm({
//     resolver: yupResolver(returnCurrentSchema(activeTab)),
//   });
//
//   const prevClicked = () => {
//     switch (activeTab) {
//       case 0:
//
//         return setActiveTab(0);
//       case 1:
//
//         return setActiveTab(0);
//
//       case 2:
//
//         return setActiveTab(1);
//
//       case 3:
//
//         return setActiveTab(2);
//       case 4:
//
//         return setActiveTab(3);
//
//       default:
//         return setActiveTab(0);
//
//     }
//   }
//
//   interface SelectedProp {
//     onSelected?: () => void;
//   }
//
//   const nextClicked = ({ onSelected }: SelectedProp = {}) => {
//     switch (activeTab) {
//       case 0:
//         if (onSelected) {
//           onSelected();
//         }
//
//         return setActiveTab(1);
//       case 1:
//         if (projectFor === "") {
//           return;
//         }
//
//         return setActiveTab(2);
//
//       case 2:
//         return setActiveTab(3);
//
//       case 3:
//         return setActiveTab(4);
//       case 4:
//
//         return setActiveTab(4);
//
//       default:
//         return setActiveTab(4);
//
//     }
//   }
//
//   const currentPage = (onClose: () => void): React.ReactNode => {
//
//     switch (activeTab) {
//       case 0:
//
//         return (
//           <div className="flex flex-col min-h-[80vh] overflow-scroll">
//             <div className="w-full flex items-center flex-col py-10 max-w-screen-2xl m-auto h-full justify-center   ">
//               <h2 className="font-normal text-gray-400 ">What can we do for you?</h2>
//               <p>Select the kind of product you want to build</p>
//               <div className={`p-4 m-4 flex lg:flex-row flex-col   gap-2 cursor-pointer`}>
//                 {offers.map((offer, index) => (
//                   <div
//                     onClick={() => nextClicked({
//                       onSelected: () => {
//                         setOffer(offer);
//                       }
//                     })} key={index}
//                     style={{ borderColor: offer.color }}
//                     className={`p-4 m-4 px-6 border-2 flex-1 justify-between py-8 lg:min-h-[350px] flex flex-col gap-6 rounded-3xl `} >
//
//                     <div className="lg:flex flex-col gap-10 ">
//                       <h4>{offer.title}</h4>
//                       <p className="text-gray-500">{offer.description}</p>
//                     </div>
//                     <p className="text-base text-gray-500">See Examples</p>
//                   </div>
//                 ))}
//               </div>
//               <p>Or if you want a specfic service like graphc and coding 👉 <a href="" className="font-bold ">Click here.</a> </p>
//             </div>
//
//           </div>
//         );
//       case 1:
//
//
//         return (
//           <div className={` flex flex-row  lg:px-20 lg:py-20 min-h-[80vh] justify-center gap-20 `}>
//
//             <Banner data={offer} />
//             <form onSubmit={handleSubmit(onSubmit)} className={`inline-flex flex-col w-1/2 lg:py-10 gap-4 max-w-[500px]`}>
//
//               <h4>More about the Product </h4>
//               <div className="flex flex-col gap-2 ">
//                 <p className="text-base text-green-800"> What industry does your product in?
//                 </p>
//                 <Controller
//                   name="industry"
//                   control={control}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       items={businessSectors}
//                       isRequired
//                       placeholder="Select Industry"
//                       selectedKeys={industry}
//                       onSelectionChange={setIndustry}
//                       labelPlacement="outside"
//                       className={`select px-0 `}
//                       variant="bordered"
//                     >
//
//                       {(user) => (
//                         <SelectItem key={user.id} textValue={user.sector}   >
//                           <div className="flex gap-2  items-center ">
//                             <div className="flex flex-col gap-2 ">
//                               <span className="text-small">{user.sector}</span>
//                             </div>
//                           </div>
//                         </SelectItem>
//                       )}
//                     </Select>
//                   )}
//                 />
//               </div>
//               {errors.industry && <span className="text-red-500">{errors.industry.message?.toString()}</span>}
//               <p className="text-base text-green-800">Give us a brief of what you want to do</p>
//               <textarea
//                 {...register('brief')}
//                 placeholder="I am into..."
//                 value={brief}
//                 onChange={(e) => setBrief(e.target.value)}
//                 className=" shadow-none "
//               />
//               {errors.brief && <span className="text-red-500">{errors.brief.message?.toString()}</span>}
//               <div className="flex flex-col gap-2">
//                 <p className="text-base text-green-800"> This project is for? </p>
//
//                 <div className="flex flex-row gap-4">
//                   {
//                     ProjectFor.map((item, index) => (
//                       <div onClick={() => SetProjectFor(item.title)} className={`border ${item.title == projectFor ? "bg-[#188268]" : ""} px-2 py-2 flex flex-row items-center rounded-md w-fit h-fit`} key={index} >
//                         <p className={`${item.title == projectFor ? "text-white" : ""}`}>{item.title}</p>
//                         <div className={`ml-16`}></div>
//                         <div className={` ${item.title == projectFor ? "" : "hidden"} `}>
//                           <CheckedIcon />
//                         </div>
//                       </div>
//                     ))
//                   }
//
//                 </div>
//
//
//
//               </div>
//               <div className={`flex gap-2 flex-row`}>
//                 <button onClick={() => prevClicked()} >Back</button>
//                 <Button type="submit" className="bg-green">Next</Button>
//               </div>
//
//             </form>
//
//           </div>
//         );
//
//       case 2:
//
//         return (
//
//           <div className={` flex flex-row  lg:px-20 lg:py-20 min-h-[80vh] justify-center gap-20 `}>
//
//             <Banner data={offer} />
//             <form onSubmit={handleSubmit(onSubmit)} className={`inline-flex flex-col w-1/2 lg:py-10 gap-4 max-w-[500px]`}>
//
//               <h4>Tell us about yourself</h4>
//               <div className="flex flex-col gap-2 ">
//                 <p className="text-base text-green-800"> What business are you into?
//                 </p>
//                 <Controller
//                   name="businessInto"
//                   control={control}
//                   render={({ field }) => (
//                     <Select
//                       {...field}
//                       isRequired
//                       items={businessSectors}
//                       placeholder="Select"
//                       selectedKeys={business}
//                       onSelectionChange={(keys) => setBusiness(keys as Selection)}
//                       labelPlacement="outside"
//                       className={`select px-0 `}
//                       variant="bordered"
//                     >
//
//                       {(user) => (
//                         <SelectItem key={user.id} textValue={user.sector}   >
//                           <div className="flex gap-2  items-center ">
//                             <div className="flex flex-col gap-2 ">
//                               <span className="text-small">{user.sector}</span>
//                             </div>
//                           </div>
//                         </SelectItem>
//                       )}
//                     </Select>
//                   )}
//                 />
//
//               </div>
//
//               <div className="flex flex-col gap-2">
//                 <p className="text-base text-green-800"> Where do you work? </p>
//
//                 <input
//                   {...register('yourWork')}
//                   value={work}
//                   onChange={(e) => setWork(e.target.value)}
//                   placeholder="Me"
//                   className="shadow-none "
//                 />
//                 {errors.yourWork && <span className="text-red-500">{errors.yourWork.message?.toString()}</span>}
//               </div>
//
//               <div className="flex flex-col gap-2 ">
//                 <p className="text-base text-green-800"> Your country
//                 </p>
//                 <Controller
//                   name="yourCountry"
//                   control={control}
//                   render={({ field }) => (
//
//                     <Select
//                       {...field}
//                       isRequired
//                       items={Country.getAllCountries()}
//                       placeholder="Select"
//                       labelPlacement="outside"
//                       selectedKeys={country}
//                       onSelectionChange={(keys) => setCountry(keys as Selection)}
//                       className={`select px-0 `}
//                       variant="bordered"
//                     >
//
//                       {(user) => (
//                         <SelectItem key={user!.isoCode?.toString()} textValue={user.name?.toString()}   >
//                           <div className="flex gap-2  items-center ">
//                             <div className="flex flex-col gap-2 ">
//                               <span className="text-small">{user.name}</span>
//                             </div>
//                           </div>
//                         </SelectItem>
//                       )}
//                     </Select>
//                   )}
//                 />
//                 {errors.yourCountry && <span className="text-red-500">{errors.yourCountry.message?.toString()}</span>}
//
//               </div>
//
//               <div className={`flex gap-2 flex-row`}>
//                 <button onClick={() => prevClicked()} >Back</button>
//                 <Button type="submit" className="bg-green">Next</Button>
//               </div>
//
//             </form>
//
//           </div>
//         );
//
//       case 3:
//
//         return (
//           <div className={` flex flex-row  lg:px-20 lg:py-20 min-h-[80vh] justify-center gap-20 `}>
//
//             <Banner data={offer} />
//             <form onSubmit={handleSubmit(onSubmit)} className={`inline-flex flex-col w-1/2 lg:py-10 gap-4 max-w-[500px]`}>
//
//               <h4>How can we reach you?</h4>
//               <div className="flex flex-col gap-2 ">
//                 <p className="text-base text-green-800"> Your phone number
//                 </p>
//                 <input
//                   placeholder="000 000 00 000"
//                   type='number'
//                   value={phone}
//                   {...register('yourPhone')}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="shadow-none "
//                 />
//                 {errors.yourPhone && <span className="text-red-500">{errors.yourPhone.message?.toString()}</span>}
//               </div>
//
//               <div className="flex flex-col gap-2">
//                 <p className="text-base text-green-800"> Your email address </p>
//
//                 <input
//                   placeholder="enter email"
//                   {...register('yourEmail')}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="shadow-none"
//                 />
//                 {errors.yourEmail && <span className="text-red-500">{errors.yourEmail.message?.toString()}</span>}
//               </div>
//
//
//               <div className={`flex gap-2 flex-row`}>
//                 <button onClick={() => prevClicked()} >Back</button>
//                 <Button type="submit" className="bg-green">Next</Button>
//               </div>
//
//             </form>
//
//           </div>
//         );
//       case 4:
//
//         // 394858345893489347459873495789437539875987438957839475894375374985734987593487
//         return (
//           <div className="flex flex-col items-center max-w-screen-2xl m-auto pt-14 min-h-[80vh] overflow-scroll">
//             <h3 className="font-normal text-gray-400  ">Payment</h3>
//
//             <div className={`p-4 flex lg:flex-row flex-col gap-6 cursor-pointer`}>
//               {services.map((service, index) =>
//                 <div onClick={() => setActiveService(index)} key={index} className={`cursor-pointer `} >
//                   <span className={`text-large font-bold  ${activeService == index ? "text-white bg-green  decoration-clone py-2 px-4 rounded-full " : "text-gray-500"}`} >{service.title}</span>
//                 </div>
//               )}
//             </div>
//             <p className="text-base font-normal max-w-[450px] text-center  text-gray-500">Pay for selected product or service. 60% at initiation and 40% at completion</p>
//             <div className="lg:px-20 mt-6  ">
//               {servicePage()}
//             </div>
//             <div className={`flex gap-2 flex-row py-10`}>
//               <button onClick={() => prevClicked()} >Back</button>
//               {/* <div>
//                 {
//                   loading ? (
//
//                     <Button isLoading={loading} disabled={loading} className="bg-green" onClick={() => onFinalSubmit()} >Submit</Button>
//
//                   ) : (<div></div>)
//                 }
//               </div> */}
//               <Button isLoading={loading} disabled={loading} className="bg-green" onClick={() => onFinalSubmit()} >Submit</Button>
//             </div>
//           </div>
//         );
//       case 5:
//
//         // 394858345893489347459873495789437539875987438957839475894375374985734987593487
//         return (
//           <div className="flex flex-col items-center max-w-screen-2xl m-auto pt-14 min-h-[80vh] justify-center">
//             <h3 className="font-normal text-gray-400  ">Final Page</h3>
//
//
//             <p className="text-base font-normal max-w-[450px] text-center  text-gray-500">Thank you for applying</p>
//
//             <Button disabled={loading} className="bg-green" onClick={() => onClose()} >Close</Button>
//
//
//           </div>
//         );
//
//       default:
//         return (
//           <div>
//
//           </div>
//         );
//
//     }
//   }
//
//
//   const servicePage = (): React.ReactNode => {
//     const variants = {
//       initial: { opacity: 0, x: -100 },
//       enter: { opacity: 1, x: 0 },
//       exit: { opacity: 0, x: 100 },
//     };
//
//     switch (activeService) {
//       case 0:
//         return (
//           <motion.div
//             className="flex flex-row overflow-y-scroll lg:px-20"
//             initial="initial"
//             animate="enter"
//             exit="exit"
//             variants={variants}
//           >
//
//             {servicesList.map((offer, index) => (
//               <div onClick={() => nextClicked()} key={index} className={`p-4 pb-3  m-2 border-gray-300 px-6 border-1 flex-1 justify-between py-8 lg:min-h-[350px] flex flex-col gap-3 rounded-3xl`} >
//                 <div className=" ">
//                   <h4 className="mb-3" style={
//                     { color: offer.textColor }
//                   } >{offer.title}</h4>
//
//                   <p className="pb-2 text-base text-gray-600 ">{offer.description}</p>
//                   {offer.package.map((data, index) => (
//                     <div onClick={() => nextClicked()} key={index} className={`mb-1`} >
//
//                       <span className="flex gap-3 items-center"> <Plus size={16} className="text-gray-400" /> {data}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <h4 className=" text-[1.4rem] ">{offer.price}</h4>
//               </div>
//             ))}
//           </motion.div>
//         )
//       case 1:
//         return (
//           <motion.div
//             className="flex flex-row  lg:px-20"
//             initial="initial"
//             animate="enter"
//             exit="exit"
//             variants={variants}
//           >
//
//             {subscriptionList.map((offer, index) => (
//               <div onClick={() => nextClicked()} key={index} className={`p-4 pb-3  m-2 border-gray-300 px-6 border-1 flex-1 justify-between py-8 lg:min-h-[350px] flex flex-col gap-3 rounded-3xl`} >
//                 <div>  <h4 style={
//                   { color: offer.textColor }
//                 }   >{offer.title}</h4>
//                   <p className="pb-2 text-base text-gray-600 ">{offer.description}</p>
//
//                   {offer.package.map((data, index) => (
//                     <div onClick={() => nextClicked()} key={index} className={`mb-1`} >
//                       <span className="flex gap-3 items-center"> <Plus size={16} className="text-gray-400" /> {data}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <h4 className=" text-[1.4rem] ">{offer.price}</h4>
//
//               </div>
//             ))}
//
//           </motion.div>
//         )
//       default:
//         return (
//           <div>
//
//           </div>
//         )
//     }
//   }
//
//
//
//
//
//   interface BannerProps {
//     data?: Offer; // data can be of type Offer or undefined
//   }
//
//   const Banner = ({ data }: BannerProps) => {
//     return (
//       <FormBanner
//         title={`${data?.title ?? "Static Web"}`}
//         client="Vivian"
//         desc={` ${data?.description ?? "For products that have a lot of users and functionalities"}`}
//         testimonial="The bromuno team did an amazing job for my website"
//       />
//     )
//   }
//
//
//
//
//   return (
//     <>
//
//       <Modal
//         size={'full'}
//         isOpen={isOpen}
//         onClose={onClose}
//         scrollBehavior="outside"
//         hideCloseButton={true}
//         backdrop={`opaque`}
//         placement="bottom"
//         className={`w-full h-full bg-black/80 z-30`}
//         motionProps={{
//           variants: {
//             enter: {
//               y: 0,
//               opacity: 1,
//               transition: {
//                 duration: 0.3,
//                 ease: "easeOut",
//               },
//             },
//             exit: {
//               y: 100,
//               opacity: 0.5,
//               transition: {
//                 duration: 0.2,
//                 ease: "easeIn",
//               },
//             },
//           }
//         }}
//       >
//         <ModalContent
//           className={`w-full h-full`}
//
//         >
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-row items-center justify-end gap-1 w-full">
//                 <button onClick={() => onClose()} className="bg-red-400 rounded-md max-w-[24px] ">
//                   X
//                 </button>
//
//               </ModalHeader>
//               <ModalBody className={`bg-white h-full `}>
//
//                 <div className="w-full  h-full">
//                   {currentPage(onClose)}
//                 </div>
//               </ModalBody>
//               <ModalFooter className={`bg-white justify-end w-full items-center border-t-2 border-gray-200 border `}>
//                 <p>Not sure about what to do?</p>
//                 <a href="" className="font-bold text-green-900">Get help</a>
//
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
