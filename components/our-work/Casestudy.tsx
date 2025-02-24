
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import "./styles.css";






const CaseStudy = ({ image, title, description, link }: any) => {


    return (
        <Link href={link} className='flex flex-col gap-4 rounded-2xl image-container mb-10'>
            <div className='max-h-[700px] min-h-[300px]  lg:min-h-[430px] rounded-2xl overflow-hidden '>
                <Image
                    src={image}
                    width={1900}
                    alt={title}
                    height={800}
                    className="image object-cover"
                />
            </div>
            <h3 className='text-[#188268]'>{title}</h3>
            <p >{description}</p>
        </Link>
    );
};
CaseStudy.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};


export default CaseStudy
