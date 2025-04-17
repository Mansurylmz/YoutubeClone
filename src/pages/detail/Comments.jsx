import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { TiArrowSortedDown } from "react-icons/ti";
const Comments = ({videoId}) => {
  const [comments,setComments]=useState([])
  useEffect(()=>{
    const params={
      geo:"TR",lang:"tr",id:videoId
    }
    api.get("/comments",{params})
    .then((res)=>setComments(res.data))
  },[videoId])
  return (
    <div>
      {!comments ? <p>Yorumlar yükleniyor...</p> : comments?.data?.length===0 ? <p>Herhangi bir yorum bulunmuyor</p> : (
        <>
        <h2 className='text-xl font-bold mt-3'>{comments.commentsCount} Yorum</h2>
        <input type="text" className='w-full bg-transparent border-b border-gray-700 outline-none p-2 mb-5 ' placeholder="Yorum Ekle" />
        {comments?.data?.map((comment)=><div key={comment.commentId} className='flex gap-2 sm:gap-3 items-start px-1 py-3 sm:py-4'>
          <img className='rounded-full size-8 sm:size-20' src={comment.authorThumbnail[0].url} alt="" />
          <div className='flex flex-col gap-2'>
            <h5 className='flex gap-2 items-center'>
              <span className='font-semibold'>{comment.authorText}</span>
              <span>{comment.publishedTimeText}</span>
            </h5>
            <p className='whitespace-pre-wrap'>{comment.textDisplay}</p>
            <div className='flex gap-5 items-center'>
              <div className='flex items-center gap-1 hover:bg-gray-500 py-1 px-2 cursor-pointer rounded transition duration-300'><AiOutlineLike/>
                <span>{comment.likesCount}</span>
              </div>
              <div className='hover:bg-gray-500 py-1 px-2 cursor-pointer rounded transition duration-300'><AiOutlineDislike/></div>
              
                
              
              
            </div>
            {comment.replyCount>0 && <div  className='flex w-fit items-center gap-1.5 p-1 text-blue-500 hover:bg-gray-700 cursor-pointer rounded transition duration-300'>
                  <TiArrowSortedDown className='fs-5'/>
                  {comment.replyCount} Yanıt</div>}
                  
          </div>
      </div>)}
        </>
      )}
    </div>
  )
}

export default Comments