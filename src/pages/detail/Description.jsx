import millify from 'millify'
import React, { useState } from 'react'

const Description = ({video}) => {
    const[click,setClick]=useState(false)
    const text=click ? video?.description : (video?.description)?.slice(0,100)+ "...daha fazla"
    
  return (
    <div onClick={()=>setClick(!click)} className='bg-gray-700 rounded p-3 mt-4 cursor-pointer hover:bg-opacity-50'>
        <div className='flex gap-4 mb-2 items-center'>
            <p>{millify(video.viewCount)} Gürüntülenme</p>
            <p>{new Date(video.publishDate).toLocaleDateString("tr",{day:"2-digit",month:"short",year:"numeric"})}</p>
        </div>
        
        <p className='whitespace-pre-wrap'>{text}</p>
        
    </div>
    
  )
}

export default Description