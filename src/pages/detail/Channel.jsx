import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import millify from 'millify';

const Channel = ({video}) => {
  return (
    <div className='flex justify-between mx-sm:flex-col'>
      <div className='flex items-center gap-2 sm:gap-4 max-sm:justify-between'>
        <div className='flex gap-2 sm:gap-4 items-center'>
            <img className='rounded-full size-10 sm:size-12' src="" alt="" />
            <div>
                <h4 className='font-bol'>{video.channelTitle}</h4>
                <p className='text-gray-400'>{video.subscriberCountText}</p>
            </div>
        </div>
        <button className='bg-white text-black px-3 py-1 sm:py-2 hover:bg-gray-400 transition rounded-full my-auto'>Abone Ol</button>
      </div>
      <div className='flex items-center bg-secondary rounded-full cursor-pointer max-sm:mt-3 max-sm:w-fit bg-gray-700 p-1.5 hover:bg-gray-400 transition duration-500'>
        <div className='flex items-center gap-2 font-bold border-r border-gray-500 py-1 px-3 sm:px-4'><AiFillLike />
        <span>{millify(video.likeCount)}</span>
        </div>
        <div className='ml-2'><AiFillDislike /></div>
      </div>
    </div>
  )
}

export default Channel