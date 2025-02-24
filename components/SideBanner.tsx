"use client"
import React from 'react'
import { Offer } from '../data';
import FormBanner from './barners/form-banner';


interface SideBannerProps {
    data?: Offer; // data can be of type Offer or undefined
}

export default function SideBanner({data}:SideBannerProps) {
  return (
    <FormBanner
    title={`${data?.title ?? "Static Web"}`}
    // client="Vivian"
    // desc={` ${data?.description ?? "For products that have a lot of users and functionalities"}`}
    // testimonial="The bromuno team did an amazing job for my website"
/>
  )
}
