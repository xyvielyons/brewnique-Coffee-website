import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-primarybasecolor py-[48px] flex flex-col gap-4'>
        <div className="flex flex-row w-full justify-center items-center cursor-pointer">
            <Link href="https://www.linkedin.com/in/xyvie-lyons-a8873820a"><FaLinkedin className="w-[24px] h-[24px] text-slate-200 m-2 hover:text-slate-600 active:text-slate-600"></FaLinkedin></Link>
            <Link href="https://www.facebook.com/profile.php?id=61559700346584"><FaSquareFacebook className="w-[24px] h-[24px] text-slate-200 m-2 hover:text-slate-600 active:text-slate-600"></FaSquareFacebook></Link>
            <Link href="https://www.instagram.com/xaviertechnologies/"><FaSquareInstagram className="w-[24px] h-[24px] text-slate-200 m-2 hover:text-slate-600 active:text-slate-600"></FaSquareInstagram></Link>
        </div>
        <div className="flex flex-row w-full justify-center items-center cursor-pointer">
            <h1 className='text-white text-md font-medium'>brewnique©<span>{currentYear}</span>. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer