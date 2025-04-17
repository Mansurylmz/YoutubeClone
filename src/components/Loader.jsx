import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
    const arr=new Array(20).fill("selam")
    
  return (
   arr.map((i,key)=>
<div key={key} className='animate-pulse'>
     <div className='bg-gray-600 h-[220px] md:h-48 rounded mb-4'>
    </div>
   <div>
   <div className='flex gap-3 '>
        <FaUserCircle className='text-5xl text-gray-600 self-start'/>
        <div>
            <div className='w-[100%] h-2.5 bg-gray-600 mb-2 rounded-full'/>
            <div className='w-[40%] h-2.5 bg-gray-600 rounded-full'/>
            <div className='flex gap-2 items-center mt-1.5 '>
                <div className='w-16 h-2 bg-gray-600 mb-2 rounded-full'/>
                *
                <div className='w-16 h-2 bg-gray-600 rounded-full'/>
            </div>
        </div>
    </div>
   </div>
   </div>)
  )
}

export default Loader
