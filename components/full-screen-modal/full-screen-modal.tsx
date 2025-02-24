// "use client"
// import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps, Radio, RadioGroup, Spacer, useDisclosure } from "@nextui-org/react";

// import React, { useState } from 'react';
// import { IoMdClose } from "react-icons/io";
// import Final from "../what-we-do/MoreInfo";
// import Intro from "../what-we-do/intro";
// import More from "../what-we-do/more";

// interface Params {
//     isOpen: boolean;
//     isWebsite: boolean;
//     selected: string;
//     handlePrevButton: () => void;
//     handleNextButton: () => void;
//     handleCloseButton: () => void;
//     onClose: () => void;
//     setSelected: React.Dispatch<React.SetStateAction<string>>;
// }

// const FullScreenModal: React.FC<Params> = ({ selected, setSelected, isOpen, onClose, handleCloseButton, handlePrevButton, handleNextButton, }) => {
//     const [scrollBehavior, setScrollBehavior] = React.useState<ModalProps["scrollBehavior"]>("inside");
//     const [isWebsite, setIsWebsite] = useState(true);
//     const [formData, setFormData] = useState({
//         type: 'Make inquiry',
//         email: '',
//         option: 'Mobile',
//         note: '',
//         name: '',
//         phone: '',
//         businessName: '',
//         businessType: '',
//         projectType: '',
//     });


//     const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
//         // Prevent the default behavior of the button
//         event.preventDefault();

//         console.log("here");

//         try {
//             const response = await fetch('/api/email', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
//                 setFormData((prevFormData) => ({
//                     ...prevFormData,
//                     email: '',
//                     note: '',
//                     name: '',
//                     phone: '',
//                     businessName: '',
//                     businessType: '',
//                     projectType: '',
//                 }));
//                 setSelected("3");
//             } else {
//                 console.error('Failed to submit form');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };
//     const handleEmailChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             email: newEmail
//         }));
//     };

//     const handleAboutBusinessChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             businessType: newEmail
//         }));
//     };
//     const handleAboutProjectChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             projectType: newEmail
//         }));
//     };
//     const handleBusinessNameChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             businessName: newEmail
//         }));
//     };
//     const handleNameChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             name: newEmail
//         }));
//     };
//     const handlePhoneChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             phone: newEmail
//         }));
//     };
//     const handleNoteChange = (e: { target: { value: any; }; }) => {
//         const newEmail = e.target.value;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             note: newEmail
//         }));
//     };
//     const handleClick = () => {
//         setIsWebsite(!isWebsite);
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             option: isWebsite ? 'Mobile' : 'Website'
//         }));
//     };
//     return (

//         <Modal
//             size="full"
//             className="h-screen"
//             isOpen={isOpen}
//             scrollBehavior={scrollBehavior}
//             onClose={onClose}
//             hideCloseButton={true}
//         >
//             <ModalContent className='bg-transparent'>
//                 {(onClose) => (
//                     <>
//                         <ModalHeader className="bg-transparent flex flex-row items-end justify-end gap-1">
//                             <Button onClick={onClose} isIconOnly color="danger" aria-label="Like">
//                                 <IoMdClose />
//                             </Button>
//                         </ModalHeader>
//                         <ModalBody className='bg-white items-center  overflow-scroll'>
//                             <Spacer y={32} />
//                             <div className='w-full px-60'>

//                                 {selected !== "3" ?

//                                     <RadioGroup
//                                         label=""
//                                         value={selected}
//                                         onValueChange={setSelected}
//                                         orientation="horizontal"

//                                     >
//                                         <Radio value="1">  Intro</Radio>
//                                         <Radio value="2">  More about you</Radio>
//                                     </RadioGroup>
//                                     :
//                                     <div></div>}
//                                 <div>
//                                     {selected === "1" ? (
//                                         <Intro isWebsite handleClick={handleClick} handleEmailChange={handleEmailChange} handleNoteChange={handleNoteChange} handleNextButton={handleNextButton} emailValue={formData.email} noteValue={formData.note} />
//                                     ) : selected === "2" ? (
//                                         <More handlePhoneChange={handlePhoneChange} handleNameChange={handleNameChange} handleBusinessNameChange={handleBusinessNameChange} handleAboutProjectChange={handleAboutProjectChange} handleAboutBusinessChange={handleAboutBusinessChange} handlePrevButton={handlePrevButton} isWebsite handleClick={handleClick} handleSubmit={handleSubmit} nameValue={formData.name} businessNameValue={formData.businessName} businessTypeValue={formData.businessType} phoneValue={formData.phone} projectValue={formData.projectType} />
//                                     ) : (
//                                         <Final  onClose={onClose} />
//                                     )}
//                                 </div>


//                             </div>


//                         </ModalBody>
//                         <ModalFooter className='bg-white'>

//                         </ModalFooter>
//                     </>
//                 )}
//             </ModalContent>
//         </Modal>

//     );
// };

// export default FullScreenModal;
