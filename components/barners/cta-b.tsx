"use client"
import { useRouter } from 'next/navigation';
import './style.css'
import { useDisclosure } from '@nextui-org/react';
import GetStarted from '../../modals/GetStarted';
import useModal from '../../hooks/useModal';
import Modal from '../../modals/modal';
const CtaB = ({ copy }: any) => {

    const router = useRouter();
    const { isOpen: me, openModal, closeModal } = useModal();

    const handleWorkOpen = () => {

        router.push('/learn-more');
    }

    return (<>
             <Modal isOpen={me} onClose={closeModal} />
        <div className="lg:hidden bg-[#188268] text-white m-auto p-5 xl:px-28 w-full  max-sm:flex-col  flex gap-6   justify-center items-center ">
            <div className="  w-full   max-sm:flex-col  flex gap-6  max-w-screen-2xl  md:justify-between items-center ">
                <h4>{copy}</h4>
                <div className=' gap-4 flex flex-wrap items-center justify-center font-medium '>
                    <button
                             onClick={openModal}
                        className='bg-white text-black'> Get Started</button>
                    <button
                        onClick={() => handleWorkOpen()}
                        className='border-amber-300 border bg-transparent text-white'> Learn more</button>
                </div></div>
        </div>
    </>
    )
}

export default CtaB;