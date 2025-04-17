import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../../utils/api'
import BasicLoader from '../../components/BasicLoader'
import Card from '../../components/Card'

const Results = () => {
  
  const [search]=useSearchParams()
  const query=(search.get("search_query"))
  const [data,setData]=useState([])
  const [token,setToken]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [page,setPage]=useState(1)
  
  useEffect(()=>{
    setIsLoading(true)
    const params={
      query,
      token:page>1 ? token : undefined
    }
    api.get("/search",{params})
    .then((res)=>{
      setData((prev)=>[...prev,...res.data.data])
      setToken(res.data.continuation)
    })
    .finally(()=>setIsLoading(false))
  },[query,page])

  useEffect(()=>{
    setData([])
    setToken(null)
    setPage(1)
  },[query])
  return (
    <div className='p-4 sm:p-6 md:p-10  overflow-y-auto'>
      <h2 className='text-xl mb-5'>
        <span className='font-bold me-2'>{query}</span> 
        <span>için sonuçlar</span>
      </h2>
      {isLoading && <BasicLoader/>}

      <div className='wrapper flex flex-col gap-5 justify-center'>
        {data?.map((item,key)=><Card item={item} isRow={true} key={key}/>)}
      </div>
      {isLoading && <BasicLoader/>}
     {!isLoading &&( <div className='flex justify-center my-10'>
        <button onClick={()=>setPage(page+1)} className='bg-zinc-600 py-2 px-5 rounded-md hover:bg-zinc-800 transition duration-300'>Daha Fazla</button>
      </div>)}
      

    </div>
  )
}

export default Results