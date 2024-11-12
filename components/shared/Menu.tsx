import React from 'react'
import { MenuDetails } from '@/constants/Menu'
import Image from 'next/image'
const Menu = () => {
  return (
    <div className='p-4 flex flex-col gap-4' id='Menu'>
        <div className="flex items-center justify-center flex-col">
            <h1 className='text-primarycolor font-bold text-[32px]'>Explore Our Menu</h1>
            <p className='font-medium text-md text-gray-600 text-center'>Experience the World of Coffee: From Classic Brews to Modern Favorites</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 w-[350px] mx-auto md:w-full md:px-[40px]">
            {MenuDetails.map((item:any,i:any)=>(
                
                <div key={i} className="border-gray-300 border-[1.5px] p-2 relative flex flex-col h-[430px] rounded-sm">
                    <div className="">
                        <Image src={item.picture} alt={item.name} className='w-full h-auto max-h-[300px]' width={1024} height={768}></Image>
                    </div>
                    <div className="bg-slate-50 absolute p-8 mx-[20px] top-[180px] rounded-sm md:top-[180px] lg:top-[190px]">
                        <h1 className='text-[24px] font-bold text-primarycolor'>{item.name}</h1>
                        <p className='text-sm font-medium text-gray-600'>{item.description}</p>
                    </div>
                </div>

            ))}
            
           
        </div>
    </div>
  )
}

export default Menu