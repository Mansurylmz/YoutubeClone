import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify';

const Card = ({item,isRow}) => {
    if (item.type !== "video") return null;
    
    
    const[ishover,setisHover]=useState(false)
    
    
    const thumbnail=item.thumbnail[item.thumbnail.length -1].url
    const channelThumbnail=item.channelThumbnail && item.channelThumbnail[0].url
    const gif=item.richThumbnail && item.richThumbnail[0].url
    
  return (
    <div  onMouseEnter={()=>
        setisHover(true)
    } onMouseLeave={()=>setisHover(false)} className='mt-5'>
        <Link className={isRow ? "row" : "col"} to={`/watch?v=${item.videoId}`} >
            <div>
                <img className='rounded-lg w-full h-full' src={ishover  && gif ? gif : thumbnail} alt="" />
            </div>
            <div className='flex gap-4 mt-5'>
                <img className='size-14 rounded-full pp' src={channelThumbnail} alt="" />
                <div >
                    <h4 className='font-bold line-clamp-2'>{item?.title}</h4>
                    <p>{item.channelTitle}</p>
                    <div className='flex gap-3 items-center'>
                        <p className='flex items-center gap-2.5'>
                            <span >{millify(item?.viewCount)}</span>
                            <span className='text-sm views'>Görüntülenme</span>
                        </p>
                        *
                        {item.isLive ? (<span className='bg-red-600 py-0.5 px-2 rounded-lg'>Canlı</span>) : <p>{item.publishedTimeText}</p>}
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card