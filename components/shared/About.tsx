import React from 'react'
import { FaStar } from "react-icons/fa";
import SparklesText from '../ui/sparkles-text';
import Image from 'next/image';
import TypingAnimation from '../ui/typing-animation'

const About = () => {
  return (
    <div className='bg-primarybasecolor w-full'>
        <div className="p-2 flex flex-row items-center w-full justify-around md:w-fit md:gap-8 lg:gap-12 md:ml-[48px] lg:ml-[80px]">
            <div className="">
                <h1 className='text-white font-bold text-[20px]'>Ingredients</h1>
                <p className='font-bold text-white text-[24px]'>100% Organic</p>
            </div>
            <div className="border-2 border-white h-[100px] w-1"></div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row text-white gap-[4px]">
                    <div className=""><FaStar width={24} height={24}></FaStar></div>
                    <div className=""><FaStar width={24} height={24}></FaStar></div>
                    <div className=""><FaStar width={24} height={24}></FaStar></div>
                    <div className=""><FaStar width={24} height={24}></FaStar></div>
                    <div className=""><FaStar width={24} height={24}></FaStar></div>
                </div>
                <div className="flex flex-col items-center justify-center text-white">
                    <h1 className='font-bold text-white text-[24px]'><SparklesText text="Over 3245" className='text-[24px]' colors={{first: '#EFE5DC', second: '#FFFFFF'}} /></h1>
                    <p className='text-white font-medium text-[14px]'>Five Star Reviews</p>
                </div>
            </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center md:justify-start md:ml-[48px] lg:ml-[80px]">
            <Image src="/sponsers.png" alt="sponsers" width={400} height={200}></Image>
        </div>



        <div className="w-full flex justify-center items-center mt-[48px] flex-col md:flex-row md:px-[80px]">
            <div className="md:max-w-[500px] md:max-h-[500px] px-12 md:px-2 w-full relative">
                <Image src="/vector.svg" alt='coffee-blob' width={800} height={800}></Image>
                <div className="bg-white w-fit p-[4px] absolute top-[200px] right-[10px] md:right-0 lg:top-[300px]">
                    <TypingAnimation
                    className="text-md font-bold text-black"
                    text="I Love Coffee"
                    duration={800}
                    />
                </div>
            </div>
            <div className="p-8 w-full md:p-10 lg:p-12">
                <h1 className='text-white font-bold text-[28px]'>Crafted with passion, brewed with purpose.</h1>
                <p className='text-slate-100 font-medium text-[14px]'>At Brewnique, our journey began with a love for great coffee and a mission to make a positive impact. Our team of passionate experts is dedicated to sourcing the finest, sustainable beans and crafting each cup with care. We value quality, eco-friendly practices, and giving back to our communities. Enjoy coffee that’s made with heart and purpose.</p>
            </div>
        </div>
    </div>
  )
}

export default About