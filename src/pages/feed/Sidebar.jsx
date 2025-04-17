import React from 'react'
import {categories} from "../../utils/constans"

import {Link, useSearchParams} from 'react-router-dom'
const Sidebar = () => {
    const[searchParams]=useSearchParams()
    const selected=(searchParams.get("/category"))
    
  return (
    <aside  className='p-1 md:p-4 side'>
        {categories.map((i,key)=>(
            <Link to={i.path== "/" ? "/" : `/?/category=${i.path}`} key={key}>
                <div className='flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition'
                style={{background: (selected==i.path || (i.name==="Anasayfa" && !selected)) && "#242424"}}>
                <span  className='max-md:text-2xl'>{i.icon}</span>
                <span className='max-md:hidden'>{i.name}</span>
                
                </div>
                {i.divider && <hr className='bg-red-900'/>}
                
                
                
            </Link>
        ))}
    </aside>
  )
}

export default Sidebar