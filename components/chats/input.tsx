import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { BiSend } from 'react-icons/bi';
import Image from 'next/image';

interface InputProps {
    className?: string;
    placeholder?: string;
    onSend?: () => void;
}

export const InputField: React.FC<InputProps> = ({ className, placeholder, onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSend = () => {
        if (onSend) {
            onSend();
        }
        setInputValue('');
    };

    return (
        <div className='flex items-center w-full gap-3 '>
            <div>
                <Image src={"/addIcon.svg"} height={10} width={10} alt="image" className='object-fit lg:w-[24px] lg:h-[24px]' />
            </div>

            <div className='focus:ring-blue-500 flex items-center h-fit min-h-11 border border-gray-300 flex-1 overflow-hidden  focus:ring-2  rounded-full  '>

                <input
                    className={`border-0 w-full  px-3 py-2  ${className}`}
                    placeholder={placeholder} value={inputValue} onChange={handleInputChange}
                />

                {inputValue && <Button onClick={handleSend} className='mx-2  flex items-center justify-center bg-green-700  size-6 p-3' color='#fffff' size={"sm"}><BiSend size={20} /></Button>}

            </div>
            <Image src={"/voiceIcon.svg"} height={10} width={10} alt="image" className='object-fit size-6' />

        </div >

    );
};
