'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import ShinyButton from '../ui/shiny-button'
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:py-[40px]'>
        <div className="p-6 w-full flex flex-col gap-4 md:mt-[42px] lg:mt-[80px]  lg:w-full">
            <div className="">
                <h1 className='headertext text-[40px] text-primarycolor md:text-[48px] lg:text-[52px]'>Brewed to Perfection, Just for You.</h1>
                <p className='font-medium text-[16px] text-gray-700'>At Brewnique, we craft coffee with passion, using sustainably sourced beans for rich flavor and bold aroma. Experience the quality and care in every cup.</p>
            </div>
            <div className="flex gap-4">
                <ShinyButton className='bg-primarybasecolor text-white'>Make a reservation</ShinyButton>
                <Button className='text-gray-600 hover:text-primarycolor'startContent={<FiArrowUpRight className='w-[24px] h-[24px]'/>} radius='none'>See our Menu</Button>
            </div>
        </div>
        <div className="hidden md:block md:w-full lg:w-full">

        </div>
        <div className="w-full flex items-center justify-center md:absolute md:w-fit md:top-[180px] lg:right-[24px] md:right-[16px]">
            <div className="md:max-w-[380] md:max-h-[380] md:relative lg:max-w-[500] lg:max-h-[500]">
                 <Image src="/Hero.png" alt='hero image' width={800} height={800}></Image>
            </div>
            
        </div>
    </div>
  )
}

export default Home