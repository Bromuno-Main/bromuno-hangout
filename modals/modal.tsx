
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from 'react-icons/io';
import { useFormContext } from "../lib/hooks";
import ProjectType from "../components/ProjectType";
import MoreProduct from "../components/MoreProduct";
import AboutYourself from "../components/AboutYourself";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import FinalPage from "./FinalPage";
import Logo from "../components/logo";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const {
        activeTab,
        setActiveTab,
        setBrief,
    } = useFormContext();

    useEffect(() => {
        setActiveTab(0);
        setBrief("");
    }, [isOpen]);

    // Disable scrolling when the modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        // Clean up the effect by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);


    const currentPage = (onClose: () => void): React.ReactNode => {

        switch (activeTab) {
            case 0:
                return (
                    <ProjectType />
                );
            case 1:
                return (
                    <MoreProduct />
                );
            case 2:

                return (
                    <AboutYourself />
                );
            case 3:

                return (
                    <ContactInfo />
                );
            case 4:
                return (
                    <PaymentMethod />
                );
            case 5:
                return (
                    <FinalPage onClose={onClose} />
                );

            default:
                return (
                    <div>

                    </div>
                );

        }
    }

    // Close the modal when clicking outside of the modal content
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-50  mx-auto w-full flex justify-center items-center z-50">
                    <motion.div
                        ref={modalRef}
                        className="flex flex-col w-full  h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="items-center h-[49px] lg:px-20 px-5 border-b-3 border-dashed justify-between w-full flex flex-row">
                            <div><p className="font-bold text-[20px] leading-[25px]">Build with us</p></div>
                            <div
                                onClick={onClose}
                                className=" mx-4 p-1 rounded-md w-fit h-fit text-black hover:bg-green-300 hover:text-gray-500 cursor-pointer"
                            >
                                <IoMdClose size={32} />
                            </div>
                        </div>
                        <div className="h-full w-full max-w-[1512px] mx-auto items-center overflow-y-auto justify-center ">
                            {currentPage(onClose)}
                        </div>
                    </motion.div>
                </div>
            )}
        </>

    );
};

export default Modal;

