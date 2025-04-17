import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from "../../utils/api"
import ReactPlayer from 'react-player'
import Comments from './Comments'
import Description from './Description'
import Channel from './Channel'
import Card from "../../components/Card"
import BasicLoader from "../../components/BasicLoader"


const Detail = () => {
  const [video,setVideo]=useState([])
  const[searchParams]=useSearchParams()
  const id=searchParams.get("v")
  
  
  useEffect(()=>{
    const params={
      id,extend:1,geo:"TR",lang:"tr"
    };
    api.get("/video/info",{params})
    .then((res)=>setVideo(res.data))
    
  },[id])
  return (
    <div className='detail-page  h-screen ml-7 mt-2'>
      <div className="page-content">
        {/* video içerigi*/}
        <div >
          <div className='h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden '>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls playing width="100%" height="100%" />
          </div>
          {!video ? <BasicLoader/> : <div>
            <h1 className='my-3 text-xl font-bold'>{video.title}</h1>
            <Channel video={video}/>
            <Description video={video}/>
            <Comments videoId={id}/>
            


          </div>  }
        </div>

        {/* önerilen videolar*/}
        <div className='flex flex-col gap-5 p-1 mr-5 ml-5
         ' >
          {video?.relatedVideos?.data?.map((item,key)=><Card key={key} item={item} isRow={true}/>)}
            
        </div>
      </div>
    </div>
  )
}

export default Detail