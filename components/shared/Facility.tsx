'use client'
import React,{useCallback} from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const Facility = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 7
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className='bg-primarycolor p-4 flex flex-col gap-4 py-[42px]'>
        <div className="flex items-center justify-center flex-col md:px-[80px]">
            <h1 className='text-white text-[32px] font-bold'>Our Facilities</h1>
            <p className='text-slate-100 text-md font-medium'>At Brewnique, we believe that great coffee deserves an equally great environment. Our facilities are designed to make every visit special:</p>
        </div>
        <div className="pt-[16px]">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    </div>
  )
}

export default Facility