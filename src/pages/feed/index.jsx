import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import api from "./../../utils/api"
import { useSearchParams } from 'react-router-dom'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

const Feed = () => {
  const [videos,setVideos]=useState([])
  const [error,setError]=useState([])
  const [params]=useSearchParams()
  const selected=(params.get("/category"))
  useEffect(()=>{
    setVideos(null)
    const url=!selected ? "/home" : selected=== "trending" ? "/trending" : `/search?query=${selected}`
    
    

    
    api.get(url,{params:{geo:"TR",lang:"tr"}})
    .then((res)=>setVideos(res.data.data))
    .catch((err)=>setError(err.message))
    
  },[selected])
  return (
    <div className='flex gap-10'>
      <Sidebar/>
      <div className='videos'>
        {!videos ? (<Loader/>) : (videos.map((i,key)=><Card item={i} key={key}/>))}
      </div>


    </div>
  )
}



export default Feed

