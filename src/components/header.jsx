import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";



const Header = () => {
  const [search]=useSearchParams()
  const text=search.get("search_query")
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const text=e.target[0].value
    navigate(`/results?search_query=${text}`)
    
  }

  return (
    <header className='px-2 py-4 sm:px-4 flex justify-between items-center'>
      <Link className='flex gap-[6px]' to={"/"}>
        <img className='w-10 sm:w-12' src="youtube.png" alt="youtube loge" />
        <h1 className='text-xl sm:text-2xl font-mono'>Youtube</h1>
      </Link>
      <form  onSubmit={handleSubmit} className='flex border border-gray-400 rounded-[20px] overflow-hidden'>
        <input defaultValue={text} className='bg-[#0F0F0F] px-3 sm:px-5 sm:py-2 border border-transparent focus:border-blue-500 rounded-l-[20px] ' type="text" />
        <button className='px-3 bg-zinc-800 sm:px-4 sm:text-2xl hover:bg-zinc-600 transition duration-300'><IoMdSearch /></button>
      </form>
      <div className='flex gap-3 text-xl cursor-pointer max-sm:hidden'>
      <FaBell className='hover:text-gray-400 transition' />
      <IoIosVideocam className='hover:text-gray-400 transition' />
      <MdVideoLibrary className='hover:text-gray-400 transition' />

      </div>
    </header>
  )
}

export default Header